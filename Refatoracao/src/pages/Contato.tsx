import { useState } from "react"
import { Send, Mail, Phone, MapPin, Github, Linkedin, Instagram, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"

const Contato = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const { toast } = useToast()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      })
      return
    }

    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)
    
    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Obrigado pelo contato. Retornarei em breve!",
    })
    
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "dev.cauaraphael@gmail.com",
      href: "mailto:dev.cauaraphael@gmail.com"
    },
    {
      icon: Phone,
      label: "Telefone",
      value: "+55 (11) 969187486",
      href: "tel:+5511969187486"
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "São Paulo, SP - Brasil",
      href: null
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      username: "@devCauaRaphael",
      href: "https://github.com/devCauaRaphael",
      description: "Veja meus repositórios e contribuições open source"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      username: "/in/devcauaraphael",
      href: "https://www.linkedin.com/in/devcauaraphael",
      description: "Conecte-se comigo profissionalmente"
    },
    {
      icon: Instagram,
      label: "Instagram",
      username: "@cauawlrd",
      href: "https://www.instagram.com/cauawlrd?igsh=MWR2OG9tNDRwa2swYg%3D%3D",
      description: "Acompanhe minha jornada e projetos pessoais"
    }
  ]

  return (
    <div className="container mx-auto px-6 py-8 max-w-6xl">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Entre em Contato
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          Estou sempre aberto a discutir novos projetos, oportunidades interessantes 
          ou simplesmente trocar ideias sobre tecnologia. Vamos conversar!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          <Card className="bg-gradient-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <MessageCircle className="h-5 w-5 text-primary" />
                Envie uma Mensagem
              </CardTitle>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Nome *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Seu nome completo"
                      className="bg-secondary/50 border-border focus:border-primary"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="seu.email@exemplo.com"
                      className="bg-secondary/50 border-border focus:border-primary"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground">
                    Assunto *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Sobre o que você gostaria de conversar?"
                    className="bg-secondary/50 border-border focus:border-primary"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Mensagem *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Descreva como posso ajudá-lo ou sobre o que gostaria de conversar..."
                    className="bg-secondary/50 border-border focus:border-primary min-h-[120px] resize-none"
                    required
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-300"
                  size="lg"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Contact Info & Social */}
        <div className="space-y-8">
          {/* Contact Information */}
          <Card className="bg-gradient-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground">Informações de Contato</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                    <info.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{info.label}</div>
                    {info.href ? (
                      <a 
                        href={info.href}
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <div className="text-foreground">{info.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Social Links */}
          <Card className="bg-gradient-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground">Redes Sociais</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {socialLinks.map((social, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                    <social.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-foreground">{social.label}</span>
                      <a 
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 transition-colors"
                      >
                        {social.username}
                      </a>
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      {social.description}
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Response Note */}
          <Card className="bg-gradient-primary border-0 text-primary-foreground">
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Resposta Rápida</h3>
              <p className="text-primary-foreground/90">
                Normalmente respondo em até 24 horas. Para projetos urgentes, 
                entre em contato via telefone ou LinkedIn.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Contato