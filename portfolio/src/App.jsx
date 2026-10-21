import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Learnings from './components/Learnings'
import Achievements from './components/Achievements'
import { Contact, Footer } from './components/Contact'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Learnings />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
