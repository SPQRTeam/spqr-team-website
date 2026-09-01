import { createRouter, createMemoryHistory } from 'vue-router'
import { createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { promises as fs } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Routes to pre-render
const routes = [
  { path: '/', name: 'Home', hero: '/assets/home/cover.webp' },
  { path: '/team', name: 'Team', hero: '/assets/team/cover.webp' },
  { path: '/publications', name: 'Publications', hero: '/assets/publications/cover.webp' },
  { path: '/events', name: 'Events', hero: '/assets/events/cover.webp' },
  { path: '/press', name: 'Press', hero: '/assets/press/cover.webp' },
  { path: '/codebase', name: 'Codebase', hero: '/assets/codebase/cover.webp' },
  { path: '/media', name: 'Media', hero: '/assets/media/cover.webp' },
  { path: '/sponsors', name: 'Sponsors', hero: '/assets/home/cover.webp' },
  { path: '/students', name: 'Students', hero: '/assets/students/cover.webp' },
  { path: '/contacts', name: 'Contacts', hero: '/assets/contacts/cover.webp' }
]

// The pages are single page app shells: nothing references an image until the
// bundle has booted, so the browser has no way to discover the header image on
// its own and it ends up queued behind everything else. Preloading it makes it
// start with the rest of the page instead of seconds later.
function preloadTags (route) {
  const images = [route.hero]
  if (route.path === '/team') images.push(firstTeamPhoto)
  return images
    .filter(Boolean)
    .map(href => `    <link rel="preload" as="image" fetchpriority="high" href="${href}">`)
    .join('\n')
}

let firstTeamPhoto = null

async function prerender() {
  const distPath = path.resolve(__dirname, '../dist')
  const indexPath = path.join(distPath, 'index.html')
  
  try {
    // Read the built index.html
    const template = await fs.readFile(indexPath, 'utf-8')

    // The team carousel starts on the first photo of this list
    const teamPhotos = JSON.parse(
      await fs.readFile(path.resolve(__dirname, '../public/assets/team/team_photos.json'), 'utf-8')
    )
    firstTeamPhoto = teamPhotos[0] && `/assets/team/${teamPhotos[0].image}`
    
    console.log('Pre-rendering routes...')
    
    for (const route of routes) {
      console.log(`  Rendering: ${route.path}`)
      
      // For non-root routes, create directory and index.html
      if (route.path !== '/') {
        const routePath = path.join(distPath, route.path.slice(1))
        await fs.mkdir(routePath, { recursive: true })
        
        const outputPath = path.join(routePath, 'index.html')
        
        // Update meta tags for each route
        let html = template
          .replace(/<title>.*?<\/title>/, `<title>SPQR Team - ${route.name}</title>`)
          .replace(/(<meta name="description" content=").*?(">)/, 
                   `$1SPQR Team ${route.name} - RoboCup Research at Sapienza University$2`)
          .replace('</head>', `${preloadTags(route)}\n  </head>`)
        
        await fs.writeFile(outputPath, html)
        console.log(`    ✓ Created: ${outputPath}`)
      } else {
        // The root index.html is the file the build produced: only add the preloads
        await fs.writeFile(indexPath, template.replace('</head>', `${preloadTags(route)}\n  </head>`))
        console.log(`    ✓ Updated: ${indexPath}`)
      }
    }
    
    console.log('\n✅ Pre-rendering complete!')
    console.log('\nGenerated files:')
    console.log('  /dist/index.html')
    routes.forEach(route => {
      if (route.path !== '/') {
        console.log(`  /dist${route.path}/index.html`)
      }
    })
    
  } catch (error) {
    console.error('❌ Error during pre-rendering:', error)
    process.exit(1)
  }
}

prerender()
