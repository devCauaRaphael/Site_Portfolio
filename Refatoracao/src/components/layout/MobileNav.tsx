import { Home, User, FolderOpen, Award, BookOpen, Mail, MessageCircle, Music } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { NavLink } from "react-router-dom"

const MobileNav = () => {
  const navItems = [
    { title: "Home", url: "/", icon: Home },
    { title: "Sobre", url: "/sobre", icon: User },
    { title: "Projetos", url: "/projetos", icon: FolderOpen },
    { title: "Certificados", url: "/certificados", icon: Award },
    { title: "Leituras", url: "/leituras", icon: BookOpen },
    { title: "Contato", url: "/contato", icon: Mail },
  ]

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
      <Card className="bg-gradient-card/95 backdrop-blur border-border shadow-card">
        <CardContent className="p-3">
          <div className="flex justify-around items-center">
            {navItems.map((item) => (
              <NavLink
                key={item.title}
                to={item.url}
                className={({ isActive }) =>
                  `flex flex-col items-center p-2 rounded-lg transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-primary text-primary-foreground shadow-glow animate-scale-in"
                      : "text-muted-foreground hover:text-primary hover:bg-secondary/30"
                  }`
                }
              >
                <item.icon className="h-4 w-4" />
                <span className="text-xs mt-1 font-medium">{item.title}</span>
              </NavLink>
            ))}
          </div>
          
          {/* Social Quick Actions */}
          <div className="flex justify-center gap-2 mt-3 pt-3 border-t border-border/50">
            <Button
              size="sm"
              variant="ghost"
              className="h-8 w-8 rounded-full hover:bg-primary/10"
              asChild
            >
              <a href="https://wa.link/q3n4uz" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4 text-green-500" />
              </a>
            </Button>
            <Button
              size="sm"
              variant="ghost"
              className="h-8 w-8 rounded-full hover:bg-primary/10"
              asChild
            >
              <a href="https://www.tiktok.com/@dev.caua?_t=ZM-8yeZHtil9C4&_r=1" target="_blank" rel="noopener noreferrer">
                <Music className="h-4 w-4 text-pink-500" />
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default MobileNav