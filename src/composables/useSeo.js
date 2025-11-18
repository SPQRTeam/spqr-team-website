import { onMounted, onUnmounted } from 'vue'

export function useSeo(config) {
  const baseUrl = 'https://spqr.diag.uniroma1.it'
  
  const updateMetaTags = () => {
    // Update title
    if (config.title) {
      document.title = config.title
    }
    
    // Update or create canonical link
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', config.canonical || `${baseUrl}${config.path || '/'}`)
    
    // Update description meta tag
    if (config.description) {
      let metaDescription = document.querySelector('meta[name="description"]')
      if (!metaDescription) {
        metaDescription = document.createElement('meta')
        metaDescription.setAttribute('name', 'description')
        document.head.appendChild(metaDescription)
      }
      metaDescription.setAttribute('content', config.description)
    }
    
    // Update Open Graph tags
    if (config.ogTitle) {
      updateOgTag('og:title', config.ogTitle)
    }
    if (config.ogDescription) {
      updateOgTag('og:description', config.ogDescription)
    }
    if (config.ogUrl) {
      updateOgTag('og:url', config.ogUrl || `${baseUrl}${config.path || '/'}`)
    }
    if (config.ogImage) {
      updateOgTag('og:image', config.ogImage)
    }
    
    // Update Twitter tags
    if (config.twitterTitle) {
      updateTwitterTag('twitter:title', config.twitterTitle)
    }
    if (config.twitterDescription) {
      updateTwitterTag('twitter:description', config.twitterDescription)
    }
    if (config.twitterUrl) {
      updateTwitterTag('twitter:url', config.twitterUrl || `${baseUrl}${config.path || '/'}`)
    }
    if (config.twitterImage) {
      updateTwitterTag('twitter:image', config.twitterImage)
    }
  }
  
  const updateOgTag = (property, content) => {
    let tag = document.querySelector(`meta[property="${property}"]`)
    if (!tag) {
      tag = document.createElement('meta')
      tag.setAttribute('property', property)
      document.head.appendChild(tag)
    }
    tag.setAttribute('content', content)
  }
  
  const updateTwitterTag = (name, content) => {
    let tag = document.querySelector(`meta[property="${name}"]`)
    if (!tag) {
      tag = document.createElement('meta')
      tag.setAttribute('property', name)
      document.head.appendChild(tag)
    }
    tag.setAttribute('content', content)
  }
  
  onMounted(() => {
    updateMetaTags()
  })
  
  onUnmounted(() => {
    // Optional: Reset to default values when component unmounts
  })
  
  return {
    updateMetaTags
  }
}
