import { useState } from 'react'
import { FAQPage } from './FAQPage'
import { LandingPage } from './LandingPage'
import './index.css'

function App() {
  const [page, setPage] = useState<'landing' | 'docs'>('landing')

  return (
    <div className="dark min-h-screen bg-background text-foreground selection:bg-primary/30">
      {page === 'landing' ? (
        <LandingPage onEnterDocs={() => setPage('docs')} />
      ) : (
        <FAQPage onGoHome={() => setPage('landing')} />
      )}
    </div>
  )
}

export default App

