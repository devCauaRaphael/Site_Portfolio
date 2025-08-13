import { BookOpen, Star, Calendar, ExternalLink, User } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const Leituras = () => {
  const currentReading = {
    title: "Entendendo Algoritmos",
    author: "Aditya Bhargava",
    progress: 65,
    category: "Arquitetura",
    description: "Entendendo Algoritmos é um guia visual e acessível que explica conceitos de algoritmos e estruturas de dados de forma clara, prática e ilustrada.",
    startDate: "Junho/2025"
  }

  const completedBooks = [
    {
      title: "Código Limpo",
      author: "Robert C. Martin",
      rating: 5,
      category: "Desenvolvimento",
      completedDate: "Novembro 2024",
      review: "Princípios sólidos e boas práticas de codificação. Essencial para escrever código limpo, legível e sustentável.",
      tags: ["Programação", "Boas Práticas", "Clean Code"],
      link: "https://www.amazon.com.br/C%C3%B3digo-limpo-Robert-C-Martin/dp/8576082675/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=4OM7PKWWDGM8&dib=eyJ2IjoiMSJ9.sBTjfwPCutWkDIRKC6d8WKlsWsI810ml2xB8vhI0eCz6mLPY6FLdVMPOSkOC05ACywSMRBpOlOeV6bagszJS0w3GBV55qWbHErNUAso7Nzt8Stx2GsodaFbPqzb9oPhIVKQEOrIv_BQc89znqzgrSrzHQ0GgIrc0pvahDNOcSsg7rcpvmDvIsnsVrT6hr4VBY1JcH8NHTmESS9XdUQRkW5GP3VjM9WAUGaLpEw8-LIe8ylMsLp-9ky9k0QMKjrr_q7rleazLJJ52Ek0p1q9BdfhzATITfiz0FlrcBONNCN8.GkysB16M17wV6R9zPrpEK-JHiA_72E9dn0qllvF5gC0&dib_tag=se&keywords=c%C3%B3digo+limpo&qid=1754585459&sprefix=c%C3%B3digo+limp%2Caps%2C362&sr=8-1&ufe=app_do%3Aamzn1.fos.6d798eae-cadf-45de-946a-f477d47705b9"
    },
    {
      title: "Programador Pragmático",
      author: "David Thomas & Andrew Hunt",
      rating: 5,
      category: "Desenvolvimento",
      completedDate: "Outubro 2024",
      review: "Conselhos práticos e atemporais para desenvolvedores. Ótimo para melhorar práticas de desenvolvimento.",
      tags: ["Boas práticas", "Programação", "Carreiras"],
      link: "https://www.amazon.com.br/Programador-Pragm%C3%A1tico-Aprendiz-Mestre/dp/8577807002/ref=sr_1_1?crid=2S412J45ZE5AO&dib=eyJ2IjoiMSJ9.tWuQHI2wtDG34UNjg2w9QcP8VluTD1yGv_kOOi0BvTdmI2Oo0oP_g-3fg_DJucUr6yKhAuZowPVFsD-8oE-STViybJau8OaHq9eEK-HFjG389J1whJYTg_371cqIED3lGPun-AB8nfyl09m60hVvk_oRdFTCsD6T6glclAz38U8RQRSE8c4XFfgkI7movkiid1d9FQJcyg3QMvUpqJZzNKC5vCJgFd5dv9lM89vB6Mt7uQ-NLYR_sqYLOtlwyLDg_ilebinCI1bKUgxhZSV-J-gt-OTif6tlg4kwB7ovNQM.f4TCAS7SrXdHNGeEqZG8BM1OVA1xtp_YpbvNsHZ0W3w&dib_tag=se&keywords=programador+pragmatico&qid=1754585398&sprefix=programador+pr%2Caps%2C285&sr=8-1&ufe=app_do%3Aamzn1.fos.db68964d-7c0e-4bb2-a95c-e5cb9e32eb12"
    }
  ]

  const wishlist = [
    {
      title: "Estruturas de Dados e Seus Algoritmos ",
      author: " MARKENZON",
      category: "Estrutura de Dados",
      reason: "Interessado por otimizar algoritmos e entender melhor estruturas de dados fundamentais."
    },
    {
      title: "Fundamentos de Engenharia de Dados: Projete e Construa Sistemas de Dados Robustos",
      author: " Matt Housley",
      category: "Engenharia de Dados",
      reason: "Aprofundar conhecimentos em engenharia de dados e aprender a construir sistemas robustos."
    },
    {
      title: "Algoritmos e Estruturas de Dados em Linguagem C",
      author: "André Ricardo Backes",
      category: "Estrutura de Dados",
      reason: "Aplicar conceitos de algoritmos e estruturas de dados em C para melhorar habilidades de programação."
    },
    {
      title: "Redes de Computadores",
      author: " Andrew Tanenbaum",
      category: "Redes",
      reason: "Ampliar conhecimentos sobre redes de computadores e protocolos de comunicação."
    },
    {
      title: "Comunicação de Dados e Redes de Computadores ",
      author: "Behrouz A. Forouzan",
      category: "Redes",
      reason: "Compreender os fundamentos de comunicação de dados e redes de computadores para aprimorar habilidades em infraestrutura."
    },
    {
      title: "Arquitetura Limpa: o Guia do Artesão Para Estrutura e Design de Software",
      author: " Robert C. Martin",
      category: "Arquitetura de Software",
      reason: "Evoluir e compreender as variações de arquitetura de software e como aplicá-las em projetos reais."
    }
  ]

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Redes": "bg-blue-500/10 text-blue-400 border-blue-500/30",
      "Estrutura de Dados": "bg-purple-500/10 text-purple-400 border-purple-500/30",
      "Desenvolvimento": "bg-green-500/10 text-green-400 border-green-500/30",
      "Engenharia de Dados": "bg-orange-500/10 text-orange-400 border-orange-500/30",
      "Arquitetura de Software": "bg-pink-500/10 text-pink-400 border-pink-500/30"
    }
    return colors[category] || "bg-gray-500/10 text-gray-400 border-gray-500/30"
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-600"
        }`}
      />
    ))
  }

  return (
    <div className="container mx-auto px-6 py-8 max-w-6xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Leituras
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Livros técnicos que moldam minha visão sobre desenvolvimento de software, 
          arquitetura de sistemas e melhores práticas da indústria.
        </p>
      </div>

      {/* Currently Reading */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-foreground">
          Lendo Atualmente
        </h2>
        
        <Card className="bg-gradient-primary border-0 text-primary-foreground">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary-foreground/20 flex items-center justify-center">
                <BookOpen className="h-5 w-5" />
              </div>
              <div>
                <CardTitle className="text-xl">{currentReading.title}</CardTitle>
                <CardDescription className="text-primary-foreground/80">
                  por {currentReading.author}
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <p className="text-primary-foreground/90 leading-relaxed">
              {currentReading.description}
            </p>
            
            <div className="flex items-center gap-4">
              <Badge 
                variant="secondary" 
                className="bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30"
              >
                {currentReading.category}
              </Badge>
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="h-4 w-4" />
                <span>Iniciado em {currentReading.startDate}</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Progresso</span>
                <span className="font-medium">{currentReading.progress}%</span>
              </div>
              <div className="w-full bg-primary-foreground/20 rounded-full h-2">
                <div 
                  className="bg-primary-foreground h-2 rounded-full transition-all duration-300"
                  style={{ width: `${currentReading.progress}%` }}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Completed Books */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-foreground">
          Livros Concluídos
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {completedBooks.map((book, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border hover:shadow-card transition-all duration-300"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-foreground text-lg">{book.title}</CardTitle>
                    <CardDescription className="text-primary font-medium">
                      por {book.author}
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-1">
                    {renderStars(book.rating)}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge 
                    variant="outline" 
                    className={getCategoryColor(book.category)}
                  >
                    {book.category}
                  </Badge>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{book.completedDate}</span>
                  </div>
                </div>

                <CardDescription className="text-muted-foreground leading-relaxed">
                  {book.review}
                </CardDescription>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {book.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="secondary"
                      className="bg-secondary/50 text-secondary-foreground"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary/30 text-primary hover:bg-primary/10"
                  asChild
                >
                  <a href={book.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Ver Livro
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Wishlist */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-foreground">
          Lista de Desejos
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {wishlist.map((book, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border border-dashed"
            >
              <CardHeader>
                <CardTitle className="text-foreground text-lg">{book.title}</CardTitle>
                <CardDescription className="text-primary font-medium">
                  por {book.author}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-3">
                <Badge 
                  variant="outline" 
                  className={getCategoryColor(book.category)}
                >
                  {book.category}
                </Badge>
                
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {book.reason}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Reading Stats */}
      <Card className="bg-gradient-card border-border">
        <CardContent className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2 text-primary">2</div>
              <div className="text-muted-foreground">Livros Lidos</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2 text-primary">1</div>
              <div className="text-muted-foreground">Lendo Agora</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2 text-primary">5</div>
              <div className="text-muted-foreground">Avaliação Média</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2 text-primary">6</div>
              <div className="text-muted-foreground">Na Lista de Desejos</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Leituras