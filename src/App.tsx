import { useState } from 'react'
import { FAQPage } from './FAQPage'
import { LandingPage } from './LandingPage'
import './index.css'

function App() {
  // Simple route detection
  const path = window.location.pathname
  const isDocs = path.includes('/docs')
  const isBlue = path.includes('/blue')
  
  const [page, setPage] = useState<'landing' | 'docs'>(isDocs ? 'docs' : 'landing')
  const variant = isBlue ? 'blue' : 'emerald'

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const isDocsNow = window.location.pathname.includes('/docs')
      setPage(isDocsNow ? 'docs' : 'landing')
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const navigateToDocs = () => {
    window.history.pushState({}, '', '/docs')
    setPage('docs')
  }

  const navigateToHome = () => {
    window.history.pushState({}, '', '/')
    setPage('landing')
  }

  return (
    <div className="dark min-h-screen bg-background text-foreground selection:bg-primary/30">
      {page === 'landing' ? (
        <LandingPage 
          onEnterDocs={navigateToDocs} 
          variant={variant}
        />
      ) : (
        <FAQPage onGoHome={navigateToHome} />
      )}
    </div>
  )
}

export default App

