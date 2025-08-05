import { BookOpen, Star, Calendar, ExternalLink, User } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const Leituras = () => {
  const currentReading = {
    title: "Building Microservices",
    author: "Sam Newman",
    progress: 65,
    category: "Arquitetura",
    description: "Guia abrangente sobre design, desenvolvimento e implementação de arquiteturas de microserviços.",
    startDate: "Janeiro 2024"
  }

  const completedBooks = [
    {
      title: "Clean Architecture",
      author: "Robert C. Martin",
      rating: 5,
      category: "Arquitetura",
      completedDate: "Dezembro 2023",
      review: "Excelente livro sobre princípios de arquitetura limpa. Essencial para desenvolver sistemas sustentáveis.",
      tags: ["SOLID", "Design Patterns", "Arquitetura"],
      link: "https://amazon.com"
    },
    {
      title: "Designing Data-Intensive Applications",
      author: "Martin Kleppmann",
      rating: 5,
      category: "Banco de Dados",
      completedDate: "Novembro 2023",
      review: "O melhor livro sobre sistemas distribuídos e bancos de dados. Leitura obrigatória para backend developers.",
      tags: ["Distributed Systems", "Databases", "Scalability"],
      link: "https://amazon.com"
    },
    {
      title: "The Pragmatic Programmer",
      author: "David Thomas & Andrew Hunt",
      rating: 4,
      category: "Desenvolvimento",
      completedDate: "Outubro 2023",
      review: "Conselhos práticos e atemporais para desenvolvedores. Ótimo para melhorar práticas de desenvolvimento.",
      tags: ["Best Practices", "Programming", "Career"],
      link: "https://amazon.com"
    },
    {
      title: "Site Reliability Engineering",
      author: "Google",
      rating: 4,
      category: "DevOps",
      completedDate: "Setembro 2023",
      review: "Insights valiosos sobre como o Google mantém seus sistemas. Essencial para quem trabalha com alta escala.",
      tags: ["SRE", "Monitoring", "Reliability"],
      link: "https://amazon.com"
    },
    {
      title: "Domain-Driven Design",
      author: "Eric Evans",
      rating: 4,
      category: "Arquitetura",
      completedDate: "Agosto 2023",
      review: "Fundamental para entender como modelar domínios complexos. Mudou minha forma de pensar sobre design de software.",
      tags: ["DDD", "Domain Modeling", "Architecture"],
      link: "https://amazon.com"
    },
    {
      title: "Kubernetes in Action",
      author: "Marko Lukša",
      rating: 5,
      category: "DevOps",
      completedDate: "Julho 2023",
      review: "Guia completo sobre Kubernetes. Excelente para quem quer dominar orquestração de containers.",
      tags: ["Kubernetes", "Containers", "Orchestration"],
      link: "https://amazon.com"
    }
  ]

  const wishlist = [
    {
      title: "Staff Engineer",
      author: "Will Larson",
      category: "Carreira",
      reason: "Interessado em aprender sobre crescimento técnico para roles de senior engineer."
    },
    {
      title: "Database Internals",
      author: "Alex Petrov",
      category: "Banco de Dados",
      reason: "Aprofundar conhecimento sobre funcionamento interno de sistemas de banco de dados."
    },
    {
      title: "The Phoenix Project",
      author: "Gene Kim",
      category: "DevOps",
      reason: "Aprender sobre transformação DevOps através de uma narrativa interessante."
    }
  ]

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Arquitetura": "bg-blue-500/10 text-blue-400 border-blue-500/30",
      "Banco de Dados": "bg-purple-500/10 text-purple-400 border-purple-500/30",
      "Desenvolvimento": "bg-green-500/10 text-green-400 border-green-500/30",
      "DevOps": "bg-orange-500/10 text-orange-400 border-orange-500/30",
      "Carreira": "bg-pink-500/10 text-pink-400 border-pink-500/30"
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
              <div className="text-3xl font-bold mb-2 text-primary">6</div>
              <div className="text-muted-foreground">Livros em 2023</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2 text-primary">1</div>
              <div className="text-muted-foreground">Lendo Agora</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2 text-primary">4.5</div>
              <div className="text-muted-foreground">Avaliação Média</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2 text-primary">3</div>
              <div className="text-muted-foreground">Na Lista de Desejos</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Leituras