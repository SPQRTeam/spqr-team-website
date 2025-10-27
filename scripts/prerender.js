import { createRouter, createMemoryHistory } from 'vue-router'
import { createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { promises as fs } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Routes to pre-render
const routes = [
  { path: '/', name: 'Home' },
  { path: '/team', name: 'Team' },
  { path: '/publications', name: 'Publications' },
  { path: '/events', name: 'Events' },
  { path: '/press', name: 'Press' },
  { path: '/codebase', name: 'Codebase' },
  { path: '/media', name: 'Media' },
  { path: '/sponsors', name: 'Sponsors' },
  { path: '/students', name: 'Students' },
  { path: '/contacts', name: 'Contacts' }
]

async function prerender() {
  const distPath = path.resolve(__dirname, '../dist')
  const indexPath = path.join(distPath, 'index.html')
  
  try {
    // Read the built index.html
    const template = await fs.readFile(indexPath, 'utf-8')
    
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
        
        await fs.writeFile(outputPath, html)
        console.log(`    ✓ Created: ${outputPath}`)
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
