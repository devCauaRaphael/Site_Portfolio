import { useState } from "react"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useToast } from "@/hooks/use-toast"
import emailjs from "@emailjs/browser"

const publicKey = import.meta.env.VITE_PUBLIC_KEY
const serviceId = import.meta.env.VITE_SERVICE_ID
const templateId = import.meta.env.VITE_TEMPLATE_ID

export function Navbar() {
  const [isContactOpen, setIsContactOpen] = useState(false)
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

    // Validação
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      })
      return
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      toast({
        title: "Erro",
        description: "Por favor, insira um email válido.",
        variant: "destructive",
      })
      return
    }

    emailjs.send(
      serviceId,
      templateId,
      {
        name: formData.name,
        email: formData.email,
        title: formData.subject,
        message: formData.message,
        time: new Date().toLocaleString("pt-BR")
      },
      publicKey
    )
    .then(() => {
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Obrigado pelo contato. Retornarei em breve!",
      })
      setFormData({ name: "", email: "", subject: "", message: "" })
      setIsContactOpen(false)
    })
    .catch(() => {
      toast({
        title: "Erro ao enviar mensagem",
        description: "Tente novamente mais tarde.",
        variant: "destructive",
      })
    })
  }

  return (
    <nav className="sticky top-0 z-40 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container flex h-14 items-center justify-between px-4">
        {/* Brand */}
        <div className="flex items-center">
          <h1 className="font-bold text-lg bg-gradient-primary bg-clip-text text-transparent">
            Cauã Raphael
          </h1>
        </div>

        {/* Right side - Contact button */}
        <div className="flex items-center gap-3">
          <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
            <DialogTrigger asChild>
              <Button 
                variant="outline" 
                size="sm"
                className="bg-gradient-primary text-primary-foreground border-0 hover:shadow-glow transition-all duration-300"
              >
                <Send className="mr-2 h-4 w-4" />
                Contato
              </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px] bg-gradient-card border-border">
              <DialogHeader>
                <DialogTitle className="text-foreground">Entre em Contato</DialogTitle>
                <DialogDescription className="text-muted-foreground">
                  Envie uma mensagem e entrarei em contato o mais breve possível.
                </DialogDescription>
              </DialogHeader>

              <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Nome
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Seu nome completo"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="seu.email@exemplo.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground">
                    Assunto
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Sobre o que você gostaria de conversar?"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Mensagem
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Descreva como posso ajudá-lo..."
                    required
                  />
                </div>

                <div className="flex justify-end gap-3 pt-4">
                  <Button type="button" variant="outline" onClick={() => setIsContactOpen(false)}>
                    Cancelar
                  </Button>
                  <Button type="submit" className="bg-gradient-primary text-primary-foreground">
                    <Send className="mr-2 h-4 w-4" /> Enviar
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </nav>
  )
}
