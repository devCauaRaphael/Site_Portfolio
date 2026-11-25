import { Toaster } from "@/components/ui/toaster"
import { StatusBar } from "@/components/onepage/StatusBar"
import { Hero, About, Nokia, Arsenal, Projects, Education, Reading } from "@/components/onepage/Sections"
import { Contact, Footer } from "@/components/onepage/Contact"

// One page: todas as seções em sequência, navegadas pela barra de status fixa.
const App = () => (
  <>
    <a href="#whoami" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-signal focus:px-3 focus:py-2 focus:font-mono focus:text-ink">
      Pular para o conteúdo
    </a>
    <main className="pb-9">
      <Hero />
      <About />
      <Nokia />
      <Arsenal />
      <Projects />
      <Education />
      <Reading />
      <Contact />
      <Footer />
    </main>
    <StatusBar />
    <Toaster />
  </>
)

export default App
