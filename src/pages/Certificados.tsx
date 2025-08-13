import { GraduationCap, Calendar, ExternalLink, CheckCircle, BookOpen } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useState } from "react"

const Formacoes = () => {
  const formacoes = [
    {
      title: "Pacote Office",
      issuer: "Senai",
      period: "2022 - 2023",
      level: "Curso Profissionalizante",
      resume: "Domínio das ferramentas Word, Excel e PowerPoint para criação de documentos, planilhas e apresentações profissionais.",
      hardSkills: ["Word", "PowerPoint", "Excel"],
      status: "Concluído",
      link: "https://sp.senai.br/cursos/cursos-livres/tecnologia-da-informacao-e-informatica?pag=1"
    },
    {
      title: "Programação Web",
      issuer: "OneBitCode",
      period: "2024 - 2025",
      level: "Especialização",
      resume: "Formação prática em desenvolvimento web com foco em React, Node.js, PostgreSQL, JavaScript/TypeScript e Next.js avançado. O curso ofereceu uma base sólida em tecnologias modernas de front-end e back-end.",
      hardSkills: ["Ruby", "NextJS", "React", "Tailwindcss", "TypeScript", "JavaScript", "Programação Orientada a Objetos", "NodeJS", "Git e Github"],
      status: "Concluído",
      link: "https://www.onebitcode.com/inscricao"
    },
    {
        title: "Rotinas Administrativas, Gestão de Pessoas e Pacote Office",
      issuer: "EasyTech",
      period: "2022 - 2023",
      level: "Curso Profissionalizante",
      resume: "Formação em Informática e Gestão Empresarial, com domínio de ferramentas como Word, Excel, PowerPoint, Photoshop e Illustrator, além de conhecimentos em contabilidade e rotinas administrativas.",
      hardSkills: ["Adobe Illustrator", "Adobe Photoshop", "Canva", "PowerPoint", "Excel", "Contabilidade"],
      status: "Concluído",
      link: "https://easytechprofissoes.com.br/"
    },
    {
        title: "Java - Orientação a Objetos",
      issuer: "CursoEmVideo",
      period: "2024-2024",
      level: "Curso Profissionalizante",
      resume: "Formação em Java com foco em Programação Orientada a Objetos, abordando conceitos como classes, herança, polimorfismo e encapsulamento, com aplicação prática no desenvolvimento de sistemas robustos e reutilizáveis.",
      hardSkills: ["Java", "Programação Orientada a Objetos"],
      status: "Concluído",
      link: "https://www.cursoemvideo.com/"
    },
    {
      title: "Cloud Fundamentals, Administration and Solution Architect",
      issuer: "FIAP",
      period: "2025 - 2025",
      level: "Curso Profissionalizante",
      resume: "Formação completa em computação em nuvem com foco em fundamentos, administração de ambientes e arquitetura de soluções. O curso abordou serviços como IaaS, PaaS e SaaS, além de práticas de automação, escalabilidade, segurança e design de soluções em ambientes multicloud.",
      hardSkills: ["AWS", "Kubernets", "Azure", "Google Cloud Plataform", "Docker", "DevOps"  ],
      status: "Concluído",
      link: "https://on.fiap.com.br/"
    }
  ]

  const cursosEmAndamento = [
    {
      title: "Técnico em Desenvolvimento de Sistemas",
      issuer: "ETEC. Basilides de Godoy",
      period: "Junho/2024 - Dezembro/2025",
      level: "Curso Técnico",
      resume: "Formação em desenvolvimento de sistemas com foco em desenvolvimento full-stack e práticas de DevOps",
      hardSkills: ["Kotlin", "Dart", "Flutter", "MySQL", "MongoDB", "SQL Server", ".NET", "AspNET", "JavaScript", "HTML", "CSS", "C#", "Kanban", "Scrum", "Git", "GitHub", "APIs"],
      progress: 70,
      previsaoConclusao: "2025"
    },
    {
      title: "DevOps e Agile Culture",
      issuer: "FIAP",
      period: "2025 - 2025",
      level: "Curso Profissionalizante",
      resume: "Formação em DevOps e Cultura Ágil, abordando integração contínua, entrega contínua, automação de processos e colaboração entre equipes. O curso explorou metodologias ágeis, ferramentas de gerenciamento e práticas para aumentar a eficiência e a qualidade no desenvolvimento de software.",
      hardSkills: ["CI", "CD", "Scrum", "Kanban", "Docker", "Git", "Github"],
      progress: 25,
      previsaoConclusao: "2025"
    },
    {
      title: "Cybersecurity",
      issuer: "FIAP",
      period: "2025 - 2025",
      level: "Curso Profissionalizante",
      resume: "Formação em Cybersecurity com foco na proteção de sistemas, redes e dados contra ameaças digitais. O curso abordou fundamentos de segurança da informação, análise de vulnerabilidades, gestão de riscos, criptografia e implementação de medidas preventivas e reativas para garantir a integridade, confidencialidade e disponibilidade das informações.",
      hardSkills: ["Pentest", "Criptografia", "Gestão de chaves", "Análise e Monitoramento"],
      progress: 10,
      previsaoConclusao: "2025"
    }
  ]

   const proximosPassos = [
    {
      title: "Engenharia de Software",
      issuer: "FIAP",
      period: "2026 - 2030",
      level: "Graduação",
      resume: "Bacharelado em Engenharia de Software da FIAP é um curso moderno e inovador, ideal para formar engenheiros digitais completos, com perfil Full Stack e foco em DevSecOps e pensamento orientado por dados (Data-Driven Thinking",
      hardSkills: ["IA generatova", "IaaS", "PaaS", "SaaS", "Python", "Java", "JavaScript", "C#", "Swift", "APIs", "TDD", "Quality Assunrance", "Scrum", "Kanban", "Git", "GitHub", "CI/CD", "Docker", "Kubernetes", "AWS", "Azure", "Google Cloud Plataform", "Arquitetura de Software", "Microserviços", "Serverless", "Big Data", "Automação"]
    },
    {
     title: "Foundational C# Certification",
      issuer: "Microsoft",
      period: "Planejado para 2026",
      level: "Certificação",
      resume: "A Foundational C# Certification valida conhecimentos básicos e essenciais da linguagem C#, incluindo programação orientada a objetos, estruturas de controle, manipulação de dados e tratamento de exceções. Ideal para quem deseja comprovar habilidades fundamentais para desenvolver aplicações com C# na plataforma .NET.",
      hardSkills: ["C#", ".NET", "Orientação a Objetos"]
    },
    {
      title: "Inteligência Artificial e Computacional",
      issuer: "FIAP",
      period: "Planejado para 2025",
      level: "Curso Profissionalizante",
      resume: "Formação em Inteligência Artificial e Computacional com foco no desenvolvimento de soluções baseadas em aprendizado de máquina, visão computacional, processamento de linguagem natural e tomada de decisão autônoma. O curso abordou conceitos fundamentais, técnicas de modelagem e uso de bibliotecas e frameworks para implementação de modelos inteligentes aplicados a diversos contextos.",
      hardSkills: ["NLP", "Redes Neurais Artificiais", "Machine Learning"]
    }
  ]


  const getNivelColor = (nivel: string) => {
    const colors: { [key: string]: string } = {
      "Certificação": "bg-blue-500/10 text-blue-400 border-blue-500/30",
      "Bacharelado": "bg-purple-500/10 text-purple-400 border-purple-500/30",
      "Curso Técnico": "bg-green-500/10 text-green-400 border-green-500/30",
      "Especialização": "bg-orange-500/10 text-orange-400 border-orange-500/30",
      "Curso Profissionalizante": "bg-cyan-500/10 text-cyan-400 border-cyan-500/30"
    }
    return colors[nivel] || "bg-gray-500/10 text-gray-400 border-gray-500/30"
  }

  const HardSkillsList = ({ skills }: { skills: string[] }) => {
    const [expanded, setExpanded] = useState(false)
    const total = skills.length
    const visible = expanded ? skills : skills.slice(0, 3)

    return (
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          {visible.map((skill, idx) => (
            <Badge
              key={idx}
              variant="secondary"
              className="bg-secondary/50 text-secondary-foreground text-xs"
            >
              {skill}
            </Badge>
          ))}
          {total > 3 && (
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7 rounded-full border border-input text-muted-foreground"
                  aria-label={expanded ? "Ocultar habilidades" : `Mostrar todas as ${total} habilidades`}
                  onClick={() => setExpanded((v) => !v)}
                >
                  <span className="text-[11px] font-medium">{expanded ? "–" : `+${total}`}</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{expanded ? "Ocultar habilidades" : `Mostrar todas as ${total} habilidades`}</p>
              </TooltipContent>
            </Tooltip>
          )}
        </div>
        {expanded && total > 3 && (
          <div className="flex flex-wrap gap-2">
            {skills.slice(3).map((skill, idx) => (
              <Badge
                key={`extra-${idx}`}
                variant="secondary"
                className="bg-secondary/50 text-secondary-foreground text-xs"
              >
                {skill}
              </Badge>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <TooltipProvider>
      <div className="container mx-auto px-6 py-8 max-w-6xl">
        {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Formações
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Minha jornada educacional e profissional, incluindo cursos, certificações e 
          especializações que moldaram minha expertise técnica.
        </p>
      </div>

      {/* Formações Concluídas */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-foreground">
          Formações Concluídas
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {formacoes.map((formacao, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border hover:shadow-card transition-all duration-300"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                      <GraduationCap className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-foreground text-lg">{formacao.title}</CardTitle>
                      <CardDescription className="text-primary font-medium">
                        {formacao.issuer}
                      </CardDescription>
                    </div>
                  </div>
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{formacao.period}</span>
                  </div>
                  <Badge 
                    variant="outline" 
                    className={getNivelColor(formacao.level)}
                  >
                    {formacao.level}
                  </Badge>
                </div>

                {/* Resumo */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-foreground">Resumo do Curso</h4>
                  <CardDescription className="text-muted-foreground leading-relaxed text-sm">
                    {formacao.resume}
                  </CardDescription>
                </div>

                {/* Hard Skills */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-foreground">Hard Skills Adquiridas</h4>
                    <HardSkillsList skills={formacao.hardSkills} />
                </div>

                {/* Link */}
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary/30 text-primary hover:bg-primary/10"
                  asChild
                >
                  <a href={formacao.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Ver Instituição
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Cursos em Andamento */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-foreground">
          Cursos em Andamento
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {cursosEmAndamento.map((curso, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border"
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                    <BookOpen className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <Badge 
                    variant="outline" 
                    className={getNivelColor(curso.level)}
                  >
                    {curso.level}
                  </Badge>
                </div>
                <CardTitle className="text-foreground text-lg">{curso.title}</CardTitle>
                <CardDescription className="text-primary font-medium">
                  {curso.issuer}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground text-sm">{curso.period}</span>
                </div>

                {/* Resumo */}
                <CardDescription className="text-muted-foreground leading-relaxed text-sm">
                  {curso.resume}
                </CardDescription>

                {/* Hard Skills */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-foreground">Hard Skills</h4>
                    <HardSkillsList skills={curso.hardSkills} />
                </div>

                {/* Progresso */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Progresso</span>
                    <span className="text-foreground font-medium">{curso.progress}%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div 
                      className="bg-gradient-primary h-2 rounded-full transition-all duration-300"
                      style={{ width: `${curso.progress}%` }}
                    />
                  </div>
                </div>
                
                <div className="text-sm text-muted-foreground">
                  <span className="font-medium">Conclusão prevista:</span> {curso.previsaoConclusao}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Próximos Passos */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-foreground">Próximos Passos</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {proximosPassos.map((item, index) => (
            <Card key={index} className="bg-gradient-card border-border">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                    <BookOpen className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <Badge variant="outline" className={getNivelColor(item.level)}>
                    {item.level}
                  </Badge>
                </div>
                <CardTitle className="text-foreground text-lg">{item.title}</CardTitle>
                <CardDescription className="text-primary font-medium">
                  {item.issuer}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground text-sm">{item.period}</span>
                </div>
                <CardDescription className="text-muted-foreground leading-relaxed text-sm">
                  {item.resume}
                </CardDescription>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-foreground">Foco de Hard Skills</h4>
                  <HardSkillsList skills={item.hardSkills} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Estatísticas */}
      <Card className="bg-gradient-primary border-0 text-primary-foreground">
        <CardContent className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">5</div>
              <div className="text-lg opacity-90">Formações Concluídas</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">3</div>
              <div className="text-lg opacity-90">Cursos em Andamento</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">32+</div>
              <div className="text-lg opacity-90">Hard Skills</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
   </TooltipProvider>
  )
}

export default Formacoes