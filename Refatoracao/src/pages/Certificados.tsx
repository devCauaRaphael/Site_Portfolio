import { Award, Calendar, ExternalLink, CheckCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const Certificados = () => {
  const certificates = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      level: "Associate",
      description: "Certificação que valida habilidades para projetar sistemas distribuídos escaláveis na AWS.",
      skills: ["AWS", "Cloud Computing", "Arquitetura", "Segurança"],
      credentialId: "AWS-ASA-123456",
      verified: true,
      link: "https://aws.amazon.com/certification/"
    },
    {
      title: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      date: "2023",
      level: "Associate",
      description: "Certificação em desenvolvimento com MongoDB, incluindo modelagem de dados e otimização.",
      skills: ["MongoDB", "NoSQL", "Database Design", "Performance"],
      credentialId: "MDB-DEV-789012",
      verified: true,
      link: "https://university.mongodb.com/"
    },
    {
      title: "Docker Certified Associate",
      issuer: "Docker Inc.",
      date: "2022",
      level: "Associate",
      description: "Certificação em containerização com Docker, orquestração e melhores práticas.",
      skills: ["Docker", "Containers", "DevOps", "Orchestration"],
      credentialId: "DCA-345678",
      verified: true,
      link: "https://docker.com/certification/"
    },
    {
      title: "Kubernetes Application Developer",
      issuer: "Cloud Native Computing Foundation",
      date: "2022",
      level: "Professional",
      description: "Certificação CKAD para desenvolvimento de aplicações cloud-native com Kubernetes.",
      skills: ["Kubernetes", "Cloud Native", "Microservices", "DevOps"],
      credentialId: "CKAD-901234",
      verified: true,
      link: "https://cncf.io/certification/"
    },
    {
      title: "Google Cloud Professional Cloud Architect",
      issuer: "Google Cloud",
      date: "2021",
      level: "Professional",
      description: "Certificação avançada em arquitetura de soluções na Google Cloud Platform.",
      skills: ["GCP", "Cloud Architecture", "BigQuery", "Compute Engine"],
      credentialId: "GCP-PCA-567890",
      verified: true,
      link: "https://cloud.google.com/certification/"
    },
    {
      title: "Oracle Certified Professional Java SE",
      issuer: "Oracle",
      date: "2021",
      level: "Professional",
      description: "Certificação profissional em Java SE, demonstrando expertise em desenvolvimento Java.",
      skills: ["Java", "OOP", "Spring Framework", "JVM"],
      credentialId: "OCP-JAVA-123789",
      verified: true,
      link: "https://education.oracle.com/certification/"
    }
  ]

  const coursesInProgress = [
    {
      title: "Advanced Microservices Patterns",
      platform: "Udemy",
      progress: 75,
      expectedCompletion: "2024"
    },
    {
      title: "System Design Interview Prep",
      platform: "Coursera",
      progress: 60,
      expectedCompletion: "2024"
    },
    {
      title: "Apache Kafka for Developers",
      platform: "Confluent",
      progress: 45,
      expectedCompletion: "2024"
    }
  ]

  const getLevelColor = (level: string) => {
    const colors: { [key: string]: string } = {
      "Associate": "bg-blue-500/10 text-blue-400 border-blue-500/30",
      "Professional": "bg-purple-500/10 text-purple-400 border-purple-500/30",
      "Expert": "bg-orange-500/10 text-orange-400 border-orange-500/30"
    }
    return colors[level] || "bg-gray-500/10 text-gray-400 border-gray-500/30"
  }

  return (
    <div className="container mx-auto px-6 py-8 max-w-6xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Certificados
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Certificações profissionais e cursos que demonstram meu comprometimento com 
          o aprendizado contínuo e expertise técnica.
        </p>
      </div>

      {/* Certificates */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-foreground">
          Certificações Obtidas
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border hover:shadow-card transition-all duration-300"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                      <Award className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-foreground text-lg">{cert.title}</CardTitle>
                      <CardDescription className="text-primary font-medium">
                        {cert.issuer}
                      </CardDescription>
                    </div>
                  </div>
                  {cert.verified && (
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{cert.date}</span>
                  </div>
                  <Badge 
                    variant="outline" 
                    className={getLevelColor(cert.level)}
                  >
                    {cert.level}
                  </Badge>
                </div>

                <CardDescription className="text-muted-foreground leading-relaxed">
                  {cert.description}
                </CardDescription>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary"
                      className="bg-secondary/50 text-secondary-foreground"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>

                {/* Credential */}
                <div className="text-sm text-muted-foreground">
                  <span className="font-medium">ID:</span> {cert.credentialId}
                </div>

                {/* Verify Button */}
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary/30 text-primary hover:bg-primary/10"
                  asChild
                >
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Verificar
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Courses in Progress */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-foreground">
          Cursos em Andamento
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {coursesInProgress.map((course, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border"
            >
              <CardHeader>
                <CardTitle className="text-foreground text-lg">{course.title}</CardTitle>
                <CardDescription className="text-primary font-medium">
                  {course.platform}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Progresso</span>
                    <span className="text-foreground font-medium">{course.progress}%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div 
                      className="bg-gradient-primary h-2 rounded-full transition-all duration-300"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                </div>
                
                <div className="text-sm text-muted-foreground">
                  <span className="font-medium">Conclusão prevista:</span> {course.expectedCompletion}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Stats */}
      <Card className="bg-gradient-primary border-0 text-primary-foreground">
        <CardContent className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">6</div>
              <div className="text-lg opacity-90">Certificações</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">3</div>
              <div className="text-lg opacity-90">Cursos Ativos</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-lg opacity-90">Verificadas</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Certificados