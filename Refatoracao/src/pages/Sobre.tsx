import { Calendar, MapPin, Code, Trophy } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import imagemProfile from "@/assets/image/imagemProfi.jpg"
import curriculo from "@/assets/pdf/CauaCurriculoDev.pdf"

const Sobre = () => {
  const experience = [
    {
      title: "Desenvolvedor Autônomo Full-Stack",
      period: "2024 - Presente",
      description: "Transformo ideias em soluções digitais completas, desde interfaces modernas até APIs robustas.",
      technologies: ["Node.js", "PostgreSQL", "Docker", "AWS", "GCP", "Azure", "React", "MongoDB", "MySQL", "C#", ".NET", "GraphQL", "Restful", "Github", "TypeScript"]
    }
  ]

  const skills = [
    "React", "TypeScript", "Node.js", "Next.js", "Tailwind CSS", "JavaScript",
    "PostgreSQL", "MongoDB", "Prisma", "GraphQL", "REST APIs",
    "Docker", "AWS", "Git", "MySQL", "Express.js", "NextJS", "Microserviços", "CI/CD", "Github",
    "Dart", "Flutter", "Kotlin", "Java", "C#", ".NET", "Scrum", "Kanban"
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
        <div className="w-48 h-48 rounded-full bg-gradient-card border-2 border-primary/20 justify-center overflow-hidden">
       <img
         src={imagemProfile}
          alt="Foto de perfil"
          className="w-full h-full rounded-full object-cover object-top"
      />
      </div>
    </div>
        
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
Tenho 18 anos e estou há cerca de um ano estudando programação fullstack. Atualmente curso Desenvolvimento de Sistemas na ETEC, com foco em web e backend. Sou apaixonado por tecnologia e adoro enfrentar desafios, sempre buscando aprender e crescer na área. Fora da programação, curto futebol, música e a cultura urbana que me inspiram no dia a dia.        </p>
        
        {/* Download CV Button */}
        <div className="mt-6">
          <Button 
            className="bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-300"
            onClick={() => {
              const link = document.createElement('a');
              link.href = curriculo; 
              link.download = 'Curriculo-FullStack-Developer.pdf';
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
              <span className="text-foreground">19/06/2007</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">Localização:</span>
              <span className="text-foreground">São Paulo, SP</span>
            </div>
            <div className="flex items-center gap-3">
              <Code className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">Experiência:</span>
              <span className="text-foreground">1+ ano</span>
            </div>
            <div className="flex items-center gap-3">
              <Trophy className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">Foco:</span>
              <span className="text-foreground">Full-Stack Development</span>
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
            "Criar experiências digitais completas que conectam usuários e tecnologia de forma 
            intuitiva. Do design responsivo às APIs robustas, acredito que cada linha de código 
            deve contribuir para soluções que realmente fazem a diferença na vida das pessoas."
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export default Sobre