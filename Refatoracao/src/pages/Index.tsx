import { Code, Database, Server, Zap, Monitor, Smartphone, Globe, Layers } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const Index = () => {
  const skills = [
    {
      icon: Monitor,
      title: "Frontend Moderno",
      description: "React, TypeScript, Next.js, Tailwind CSS",
    },
    {
      icon: Server,
      title: "Backend & APIs",
      description: "JavaScript, Java, C#, Rest, GraphQL, .NET",
    },
    {
      icon: Smartphone,
      title: "Mobile & Responsivo",
      description: "React Native, Progressive Web Apps",
    },
    {
      icon: Globe,
      title: "DevOps & Cloud",
      description: "Docker, AWS, CI/CD, Kubernetes",
    },
    {
      icon: Database,
      title: "Banco de Dados",
      description: "PostgreSQL, MongoDB, Redis, Prisma, MySQL, SQL Server",
    },
    {
      icon: Layers,
      title: "Arquitetura",
      description: "Microserviços, Clean Code, Design Patterns",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-background">
        <div className="text-center max-w-4xl mx-auto px-6">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Desenvolvedor Full-Stack
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Criando experiências digitais completas, do frontend ao backend. 
            Especialista em React, Node.js e arquiteturas modernas escaláveis.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              size="lg" 
              className="bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-300 px-6"
              asChild
            >
              <a href="/projetos">Ver Projetos</a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary/10 px-6"
              asChild
            >
              <a href="/contato">Entrar em Contato</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Especialidades
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stack completo de tecnologias para desenvolvimento de aplicações web modernas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <Card 
                key={index} 
                className="bg-gradient-card border-border hover:shadow-card transition-all duration-300 hover:scale-105"
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                    <skill.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg text-foreground">{skill.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-muted-foreground">
                    {skill.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-card">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            Vamos Trabalhar Juntos?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Estou sempre aberto a novos desafios e oportunidades interessantes. 
            Vamos conversar sobre seu próximo projeto!
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-300 px-6"
            asChild
          >
            <a href="/contato">Entrar em Contato</a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
