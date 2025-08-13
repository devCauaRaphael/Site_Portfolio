import { useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { 
  Home,
  User, 
  FolderOpen, 
  Award, 
  BookOpen, 
  Mail,
  Github,
  Linkedin,
  Instagram,
  MessageCircle,
  Music,
  Menu,
  X
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const navigationItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "Sobre", url: "/sobre", icon: User },
  { title: "Projetos", url: "/projetos", icon: FolderOpen },
  { title: "Formações", url: "/certificados", icon: Award },
  { title: "Leituras", url: "/leituras", icon: BookOpen },
  { title: "Contato", url: "/contato", icon: Mail },
]

const socialItems = [
  { title: "GitHub", url: "https://github.com/devCauaRaphael", icon: Github, external: true },
  { title: "LinkedIn", url: "https://www.linkedin.com/in/devcauaraphael", icon: Linkedin, external: true },
  { title: "Instagram", url: "https://www.instagram.com/cauawlrd?igsh=MWR2OG9tNDRwa2swYg==", icon: Instagram, external: true },
  { title: "WhatsApp", url: "https://wa.link/q3n4uz", icon: MessageCircle, external: true },
  { title: "TikTok", url: "https://www.tiktok.com/@dev.caua?_t=ZM-8yeZHtil9C4&_r=1", icon: Music, external: true },
]

export function FloatingSidebar() {
  const [isExpanded, setIsExpanded] = useState(false)
  const location = useLocation()
  const currentPath = location.pathname

  const isActive = (path: string) => currentPath === path

  const toggleSidebar = () => setIsExpanded(!isExpanded)

  return (
    <>
      {/* Main Floating Sidebar */}
      <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden md:block">
        <Card className={`bg-gradient-card/95 backdrop-blur border-border shadow-card transition-all duration-300 ${
          isExpanded ? 'w-64' : 'w-14'
        }`}>
          {/* Toggle Button */}
          <div className="p-3 border-b border-border/50">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleSidebar}
              className="w-full h-10 hover:bg-primary/10 transition-colors"
            >
              {isExpanded ? (
                <X className="h-5 w-5 text-primary" />
              ) : (
                <Menu className="h-5 w-5 text-primary animate-pulse-glow" />
              )}
            </Button>
          </div>

          {/* Navigation Items */}
          <div className="p-3 space-y-1">
            {navigationItems.map((item) => {
              const active = isActive(item.url)
              return (
                <NavLink
                  key={item.title}
                  to={item.url}
                  className={`group flex items-center gap-4 p-3 rounded-lg transition-all duration-200 ${
                    active
                      ? "bg-gradient-primary text-primary-foreground shadow-glow"
                      : "text-muted-foreground hover:text-primary hover:bg-secondary/30"
                  }`}
                >
                  <item.icon className={`h-5 w-5 flex-shrink-0 transition-transform ${
                    !isExpanded && active ? 'animate-float' : ''
                  } group-hover:scale-110`} />
                  {isExpanded && (
                    <span className="text-base font-medium animate-fade-in">
                      {item.title}
                    </span>
                  )}
                </NavLink>
              )
            })}
          </div>

          {isExpanded && (
            <>
              <Separator className="mx-2 bg-border/50" />
              
              {/* Social Links */}
              <div className="p-3 space-y-2">
                <div className="text-sm text-muted-foreground px-3 py-1 font-medium">
                  REDES SOCIAIS
                </div>
                {socialItems.map((item) => (
                  <a
                    key={item.title}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-3 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary/30 transition-all duration-200"
                  >
                    <item.icon className="h-5 w-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-sm animate-fade-in">{item.title}</span>
                  </a>
                ))}
              </div>
            </>
          )}
        </Card>
      </div>

      {/* Floating Quick Actions (when collapsed) */}
      {!isExpanded && (
        <div className="fixed left-4 bottom-4 z-40 hidden md:flex flex-col gap-3">
          {/* Quick Contact */}
          <Button
            size="sm"
            className="w-12 h-12 rounded-full bg-gradient-primary text-primary-foreground shadow-glow hover:shadow-card animate-float"
            asChild
          >
            <a href="/contato">
              <Mail className="h-4 w-4" />
            </a>
          </Button>
          
          {/* Quick WhatsApp */}
          <Button
            size="sm"
            variant="outline"
            className="w-12 h-12 rounded-full border-primary/30 text-primary hover:bg-primary/10"
            asChild
          >
            <a href="https://wa.link/q3n4uz" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4" />
            </a>
          </Button>
        </div>
      )}

      {/* Overlay for mobile when expanded */}
      {isExpanded && (
        <div 
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsExpanded(false)}
        />
      )}
    </>
  )
}