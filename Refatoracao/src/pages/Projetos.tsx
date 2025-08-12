import { ExternalLink, Github, Database, Server, Zap, Calendar } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useEffect } from "react"

const githubLink = "https://github.com/devCauaRaphael";

const Projetos = () => {
  const projects = [
    {
      title: "Rest API + MongoDB e Docker",
      description: "API desenvolvida com Node.JS, MongoDB e Docker. Com foco no aprendizado de Docker e MongoDB",
      technologies: ["Node.js", "MongoDB", "Docker", "Git", "Github", "Postman"],
      category: "Backend",
      icon: Server,
      github: "https://github.com/devCauaRaphael/API_Node-MongoDB.git",
      demo: "https://demo.com",
      highlights: ["Restful", "Compose", "CRUD"]
    },
    {
      title: "Sistema ERP - Trabalho de conclusão de módulo",
      description: "Plataforma para gerenciamento e controles administrativos. Fui responsável pelo back-end, banco de dados e auxilio no front-end",
      technologies: ["C#", "ASP.NET", "MySQL", "Bootstrap", "Git", "Github"],
      category: "TCM",
      icon: Database,
      github: "https://github.com/orgs/TCC-ETEC-01/repositories",
      demo: "https://demo.com",
      highlights: ["MVC", "Leadership", "Modelo conceitual", "Documentação", "Organização"]
    },
    {
      title: "CRUD e Landing Page - Trabalho de conclusão de módulo",
      description: "Projeto de conclusão de módulo focado na lógica de programação, com CRUD completo em C# utilizando arquivos .txt como banco de dados simulado. O front-end foi desenvolvido apenas como base visual, sem integração, visando praticar a estruturação de sistemas e reforçar fundamentos.",
      technologies: ["C#", "HTML", "CSS", "JavaScript", "Windows Forms"],
      category: "TCM",
      icon: Zap,
      github: "https://github.com/devCauaRaphael/TCM",
      demo: "https://demo.com",
      highlights: ["Responsividade", "JQuery", "Orientação a Objetos"]
    }
  ]

  const inProgressProjects = [
    {
      title: "Commodities",
      description: "Consumo de uma API externa para o desenvolvimento de um projeto completo envolvendo vendas, trocas e buscas.",
      technologies: [".NET", "Ninjas API", "Docker", "Compose", "C#", "ASP.NET", "Postman"],
      category: "Pessoal",
      icon: Server,
      github: "https://github.com/devCauaRaphael/Commodities",
      demo: null,
      highlights: ["Consumo de API", "Rotas", "Segurança"]
    }
  ]

  const currentInProgress = inProgressProjects[0]

  const upcomingProjects = [
    {
      title: "E-commerce - Trabalho de conclusão de módulo",
      description: "Marketplace inspirado no Mercado Livre",
      technologies: ["Bootstrap", "C#", "ViaCep API", "ASP.NET", "MySQL", "Dart", "Flutter/React Native", "Trello"],
      category: "TCC",
      icon: Zap,
      github: "https://github.com/LoopstackTechSolutions",
      demo: null,
      highlights: ["Scrum", "Consumo de API", "Trabalho em Equipe", "Backend"]
    }
  ]

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Backend": "bg-blue-500/10 text-blue-400 border-blue-500/30",
      "TCM": "bg-purple-500/10 text-purple-400 border-purple-500/30",
      "Pessoal": "bg-green-500/10 text-green-400 border-green-500/30",
      "TCC": "bg-yellow-500/10 text-yellow-400 border-yellow-500/30"
    }
    return colors[category] || "bg-gray-500/10 text-gray-400 border-gray-500/30"
  }

  const ProjectCard = ({ project }: { project: typeof projects[number] }) => (
    <Card 
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

        <div className="flex flex-wrap gap-2">
          {project.highlights.map((highlight: string, idx: number) => (
            <Badge 
              key={idx}
              variant="secondary"
              className="bg-primary/10 text-primary border-primary/20"
            >
              {highlight}
            </Badge>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech: string, idx: number) => (
            <Badge 
              key={idx} 
              variant="outline"
              className="bg-secondary/30 text-secondary-foreground border-secondary"
            >
              {tech}
            </Badge>
          ))}
        </div>

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
  )

  useEffect(() => {
    document.title = "Projetos | Dev Full-Stack"
    const desc = "Portfólio de projetos full-stack: concluídos, em andamento e próximos."
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null
    if (!meta) {
      meta = document.createElement('meta')
      meta.name = 'description'
      document.head.appendChild(meta)
    }
    meta.content = desc

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = window.location.href
  }, [])

  return (
    <div className="container mx-auto px-6 py-8 max-w-6xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Projetos Full-Stack
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Uma seleção dos meus principais projetos backend, demonstrando expertise em diferentes 
          tecnologias e arquiteturas de sistemas distribuídos.
        </p>
      </div>

      {/* Concluídos */}
      <section aria-labelledby="concluidos" className="mb-10">
        <h2 id="concluidos" className="text-2xl font-semibold mb-4 text-foreground">Projetos Concluídos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>

      {/* Em andamento */}
      <section aria-labelledby="em-andamento" className="mb-10">
        <h2 id="em-andamento" className="text-2xl font-semibold mb-4 text-foreground">Projetos em Andamento</h2>
        {currentInProgress && (
          <Card className="bg-gradient-primary border-0 text-primary-foreground">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary-foreground/20 flex items-center justify-center">
                  <currentInProgress.icon className="h-5 w-5" />
                </div>
                <div>
                  <CardTitle className="text-xl">{currentInProgress.title}</CardTitle>
                  <CardDescription className="text-primary-foreground/80">
                    {currentInProgress.category}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-primary-foreground/90 leading-relaxed">
                {currentInProgress.description}
              </p>
              <div className="flex items-center gap-4">
                <Badge 
                  variant="secondary" 
                  className="bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30"
                >
                  {currentInProgress.category}
                </Badge>
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4" />
                  <span>Em construção</span>
                </div>
              </div>

              {/* Botão GitHub */}
              {currentInProgress.github && (
                <Button
                  variant="secondary"
                  size="sm"
                  className="mt-2 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                  asChild
                >
                  <a
                    href={currentInProgress.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                  Código
                  </a>
                </Button>
              )}
            </CardContent>
          </Card>
        )}
      </section>

      {/* Próximos */}
      <section aria-labelledby="proximos" className="mb-4">
        <h2 id="proximos" className="text-2xl font-semibold mb-4 text-foreground">Próximos Projetos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {upcomingProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>

      {/* CTA */}
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
              <a href= {githubLink} target="_blank" rel="noopener noreferrer">
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
