import { About, Companies, Contact, Experience, Footer, Header, Hero, Projects, Skills } from './sections'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Header />
      <main>
        <Hero />
        <About />
        <Companies />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
