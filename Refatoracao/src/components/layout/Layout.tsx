import { FloatingSidebar } from "./FloatingSidebar"
import { Navbar } from "./Navbar"
import MobileNav from "./MobileNav"

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <FloatingSidebar />
      
      <main className="flex flex-col">
        <Navbar />
        <div className="flex-1 pb-20 md:pb-0 md:pl-0">
          {children}
        </div>
      </main>
      
      <MobileNav />
    </div>
  )
}