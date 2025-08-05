import { ExternalLink, Github, Database, Server, Zap } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const Projetos = () => {
  const projects = [
    {
      title: "E-commerce API",
      description: "API completa para e-commerce com gestão de produtos, pedidos, pagamentos e usuários. Implementada com microserviços e alta disponibilidade.",
      technologies: ["Node.js", "PostgreSQL", "Redis", "Docker", "AWS"],
      category: "Backend",
      icon: Server,
      github: "https://github.com",
      demo: "https://demo.com",
      highlights: ["99.9% uptime", "1000+ req/s", "Microserviços"]
    },
    {
      title: "Sistema de Analytics",
      description: "Plataforma de analytics em tempo real para processamento de grandes volumes de dados com dashboards interativos.",
      technologies: ["Python", "Apache Kafka", "ClickHouse", "FastAPI"],
      category: "Data Processing",
      icon: Database,
      github: "https://github.com",
      demo: "https://demo.com",
      highlights: ["Real-time", "Big Data", "Machine Learning"]
    },
    {
      title: "Chat Application Backend",
      description: "Backend para aplicação de chat em tempo real com suporte a múltiplas salas, autenticação JWT e notificações push.",
      technologies: ["Go", "WebSocket", "MongoDB", "RabbitMQ"],
      category: "Real-time",
      icon: Zap,
      github: "https://github.com",
      demo: "https://demo.com",
      highlights: ["WebSocket", "Real-time", "Escalável"]
    },
    {
      title: "Banking API",
      description: "API bancária com alto nível de segurança, transações ACID e integração com sistemas de pagamento externos.",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "Kubernetes"],
      category: "Financial",
      icon: Server,
      github: "https://github.com",
      demo: null,
      highlights: ["PCI Compliant", "ACID", "Segurança"]
    },
    {
      title: "IoT Data Collector",
      description: "Sistema para coleta e processamento de dados de dispositivos IoT com análise em tempo real e alertas automáticos.",
      technologies: ["Python", "MQTT", "InfluxDB", "Grafana"],
      category: "IoT",
      icon: Database,
      github: "https://github.com",
      demo: "https://demo.com",
      highlights: ["IoT", "Time Series", "Monitoring"]
    },
    {
      title: "Content Management API",
      description: "API RESTful para gerenciamento de conteúdo com upload de arquivos, versionamento e sistema de aprovação.",
      technologies: ["Node.js", "Express", "MongoDB", "AWS S3"],
      category: "CMS",
      icon: Server,
      github: "https://github.com",
      demo: "https://demo.com",
      highlights: ["File Upload", "Versioning", "Workflow"]
    }
  ]

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Backend": "bg-blue-500/10 text-blue-400 border-blue-500/30",
      "Data Processing": "bg-purple-500/10 text-purple-400 border-purple-500/30",
      "Real-time": "bg-green-500/10 text-green-400 border-green-500/30",
      "Financial": "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
      "IoT": "bg-orange-500/10 text-orange-400 border-orange-500/30",
      "CMS": "bg-pink-500/10 text-pink-400 border-pink-500/30"
    }
    return colors[category] || "bg-gray-500/10 text-gray-400 border-gray-500/30"
  }

  return (
    <div className="container mx-auto px-6 py-8 max-w-6xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Projetos
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Uma seleção dos meus principais projetos backend, demonstrando expertise em diferentes 
          tecnologias e arquiteturas de sistemas distribuídos.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card 
            key={index} 
            className="bg-gradient-card border-border hover:shadow-card transition-all duration-300 hover:scale-[1.02]"
          >
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                    <project.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-foreground">{project.title}</CardTitle>
                    <Badge 
                      variant="outline" 
                      className={`mt-1 ${getCategoryColor(project.category)}`}
                    >
                      {project.category}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <CardDescription className="text-muted-foreground leading-relaxed">
                {project.description}
              </CardDescription>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2">
                {project.highlights.map((highlight, highlightIndex) => (
                  <Badge 
                    key={highlightIndex}
                    variant="secondary"
                    className="bg-primary/10 text-primary border-primary/20"
                  >
                    {highlight}
                  </Badge>
                ))}
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <Badge 
                    key={techIndex} 
                    variant="outline"
                    className="bg-secondary/30 text-secondary-foreground border-secondary"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary/30 text-primary hover:bg-primary/10"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Código
                  </a>
                </Button>
                
                {project.demo && (
                  <Button
                    size="sm"
                    className="bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-300"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* CTA Section */}
      <Card className="mt-12 bg-gradient-primary border-0 text-primary-foreground">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Interessado em um Projeto?</h3>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            Todos os projetos estão disponíveis no GitHub. Sinta-se à vontade para explorar, 
            fazer fork ou entrar em contato para discutir oportunidades de colaboração.
          </p>
          <div className="flex gap-4 justify-center">
            <Button
              variant="secondary"
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              asChild
            >
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                Ver no GitHub
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Projetos