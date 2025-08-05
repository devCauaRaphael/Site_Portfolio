import { Calendar, MapPin, Code, Trophy } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const Sobre = () => {
  const experience = [
    {
      title: "Senior Backend Developer",
      company: "TechCorp Solutions",
      period: "2022 - Presente",
      description: "Lidero equipe de desenvolvimento backend, implementando microserviços e otimizando performance de APIs.",
      technologies: ["Node.js", "PostgreSQL", "Docker", "AWS"]
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      period: "2020 - 2022",
      description: "Desenvolvimento de aplicações web completas, desde o backend até o frontend, com foco em escalabilidade.",
      technologies: ["Python", "Django", "React", "MongoDB"]
    },
    {
      title: "Backend Developer Jr",
      company: "WebDev Agency",
      period: "2019 - 2020",
      description: "Desenvolvimento de APIs REST e integração com sistemas terceiros para clientes diversos.",
      technologies: ["Java", "Spring Boot", "MySQL", "Redis"]
    }
  ]

  const skills = [
    "Node.js", "Python", "Java", "Go", "PostgreSQL", "MongoDB", 
    "Redis", "Docker", "Kubernetes", "AWS", "GraphQL", "REST APIs",
    "Microserviços", "CI/CD", "Git", "Linux"
  ]

  return (
    <div className="container mx-auto px-6 py-8 max-w-6xl">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
          Sobre Mim
        </h1>
        
        {/* Profile Photo Container */}
        <div className="mb-6 flex justify-center">
          <div className="w-48 h-48 rounded-full bg-gradient-card border-2 border-primary/20 flex items-center justify-center overflow-hidden">
            <div className="text-center text-muted-foreground">
              <span className="text-sm">Adicione sua foto aqui</span>
            </div>
          </div>
        </div>
        
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          Sou um desenvolvedor backend apaixonado por criar soluções robustas e escaláveis. 
          Com mais de 4 anos de experiência, tenho expertise em desenvolvimento de APIs, 
          arquitetura de microserviços e otimização de performance.
        </p>
        
        {/* Download CV Button */}
        <div className="mt-6">
          <Button 
            className="bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-300"
            onClick={() => {
              // Adicione aqui o link para o seu currículo
              const link = document.createElement('a');
              link.href = '/path-to-your-cv.pdf'; // Substitua pelo caminho real do seu CV
              link.download = 'Curriculo-Backend-Developer.pdf';
              link.click();
            }}
          >
            📄 Baixar Currículo
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Personal Info */}
        <Card className="bg-gradient-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <MapPin className="h-5 w-5 text-primary" />
              Informações Pessoais
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">Nascimento:</span>
              <span className="text-foreground">15/03/1995</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">Localização:</span>
              <span className="text-foreground">São Paulo, SP</span>
            </div>
            <div className="flex items-center gap-3">
              <Code className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">Experiência:</span>
              <span className="text-foreground">4+ anos</span>
            </div>
            <div className="flex items-center gap-3">
              <Trophy className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">Foco:</span>
              <span className="text-foreground">Backend Development</span>
            </div>
          </CardContent>
        </Card>

        {/* Skills */}
        <Card className="bg-gradient-card border-border">
          <CardHeader>
            <CardTitle className="text-foreground">Tecnologias</CardTitle>
            <CardDescription className="text-muted-foreground">
              Principais tecnologias que domino
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Experience */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-8 text-foreground">
          Experiência Profissional
        </h2>
        
        <div className="space-y-6">
          {experience.map((exp, index) => (
            <Card key={index} className="bg-gradient-card border-border hover:shadow-card transition-all duration-300">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <CardTitle className="text-foreground">{exp.title}</CardTitle>
                    <CardDescription className="text-primary font-medium">
                      {exp.company}
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="self-start border-primary/30 text-primary">
                    {exp.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary"
                      className="bg-secondary/50 text-secondary-foreground"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Mission Statement */}
      <Card className="mt-12 bg-gradient-primary border-0 text-primary-foreground">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Minha Missão</h3>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto opacity-90">
            "Desenvolver soluções backend que não apenas funcionam, mas que são eficientes, 
            escaláveis e fáceis de manter. Acredito que código bem escrito é a base de qualquer 
            aplicação de sucesso, e estou sempre buscando as melhores práticas e tecnologias 
            para entregar valor real aos usuários finais."
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export default Sobre