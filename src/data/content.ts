// Todo o conteúdo do site fica aqui. Edite este arquivo para atualizar textos,
// projetos, formações e leituras sem mexer nos componentes.

export const links = {
  github: "https://github.com/devCauaRaphael",
  linkedin: "https://www.linkedin.com/in/devcauaraphael",
  whatsapp: "https://wa.link/q3n4uz",
  email: "dev.cauaraphael@gmail.com",
}

export const sections = [
  { id: "inicio", label: "inicio" },
  { id: "whoami", label: "whoami" },
  { id: "nokia", label: "nokia" },
  { id: "arsenal", label: "arsenal" },
  { id: "projetos", label: "projetos" },
  { id: "formacao", label: "formacao" },
  { id: "leituras", label: "leituras" },
  { id: "contato", label: "contato" },
] as const

export const about = {
  name: "Cauã Raphael",
  role: "Automação e DevOps na Nokia. Estudando segurança ofensiva rumo ao pentest.",
  bio: [
    "Tenho 19 anos e trabalho na Nokia desenvolvendo automações em Python para a operação de telecom de uma das maiores operadoras do Brasil, do script que audita a rede ao deploy em Kubernetes.",
    "Fora do expediente, estudo segurança ofensiva: já resolvi 54 laboratórios da PortSwigger Web Security Academy, publiquei uma avaliação de segurança da crAPI e estou cursando Hacking e Pentest na Solyd. Curso Ciência da Computação na Anhembi Morumbi.",
    "Gosto de filosofia, futebol, música e da cultura suburbana de São Paulo, que me ensinou a olhar os problemas com criatividade e senso crítico.",
  ],
  facts: [
    ["local", "Osasco, SP"],
    ["cargo", "Desenvolvimento de software @ Nokia"],
    ["curso", "Ciência da Computação · Anhembi Morumbi"],
    ["sistema", "Kali Linux"],
    ["foco", "DevOps, automação, pentest"],
  ] as [string, string][],
}

export const nokia = {
  title: "Jovem Aprendiz — Desenvolvimento de Software",
  period: "fev/2026 – presente",
  summary:
    "Desenvolvo automações (RPA) e APIs para a operação de telecomunicações de uma grande operadora, cliente da Nokia. O objetivo é tirar do caminho o trabalho repetitivo de conferir configurações, para que os engenheiros gastem tempo com decisões, não com planilhas.",
  work: [
    {
      head: "Auditoria automatizada de mais de 100 parâmetros",
      body: "Automação que valida cada parâmetro de configuração dos serviços de telecom contra as regras de negócio e gera relatórios em Excel mostrando o que está conforme e o que não está.",
    },
    {
      head: "Deploy em Kubernetes e AWS",
      body: "Deploy e manutenção de aplicações em clusters Kubernetes (Rancher integrado ao AWS EKS), com Ingress, Services, secrets e variáveis de ambiente sensíveis.",
    },
    {
      head: "APIs REST e pipelines",
      body: "APIs em Python (FastAPI) documentadas com OpenAPI e integradas ao AWS S3, com imagens publicadas no JFrog Artifactory e pipelines de GitLab CI/CD.",
    },
  ],
  stack: ["Python", "FastAPI", "Kubernetes", "Rancher", "AWS EKS", "AWS S3", "JFrog Artifactory", "GitLab CI/CD"],
}

// Promoção para Estagiário em DevOps (início em 1º/jan).
// Mude "mostrar" para true quando a carta proposta estiver assinada.
export const promocao = {
  mostrar: false,
  texto: "Promovido a Estagiário em DevOps na Nokia, a partir de janeiro de 2027.",
}

export const freelance = {
  title: "Desenvolvedor Full-Stack autônomo",
  period: "2025 – presente",
  summary: "Sistemas web sob demanda, de interfaces em React a APIs em Node.js e .NET, com deploy em nuvem.",
  stack: ["React", "TypeScript", "Node.js", "C#/.NET", "PostgreSQL", "MongoDB", "Docker", "AWS"],
}

export const arsenal = [
  {
    dir: "offsec/",
    title: "Segurança ofensiva",
    items: ["Burp Suite", "SQLMap", "Nmap", "Subfinder", "DNSenum", "OWASP Top 10", "OWASP API Top 10", "PortSwigger Academy", "TryHackMe", "Kali Linux"],
  },
  {
    dir: "devops/",
    title: "DevOps e infraestrutura",
    items: ["Kubernetes (Rancher)", "AWS EKS", "AWS S3", "Docker", "JFrog Artifactory", "GitLab CI/CD", "Git", "Linux", "TCP/IP, DNS, HTTP/S"],
  },
  {
    dir: "dev/",
    title: "Desenvolvimento",
    items: ["Python (FastAPI)", "C# (ASP.NET Core)", "Entity Framework", "JavaScript", "TypeScript", "Node.js", "React", "MySQL"],
  },
]

export type Project = {
  name: string
  desc: string
  tags: string[]
  status: "ativo" | "concluido"
  kind: "lab" | "dev"
  href?: string
  linkLabel?: string
}

export const projects: Project[] = [
  {
    name: "Avaliação de segurança de API — crAPI",
    desc: "Avaliação black-box da crAPI com 6 vulnerabilidades encontradas: 4 BOLA, que expunham localização de veículos, dados de clientes e chamados de outros usuários, exposição excessiva de dados e falta de proteção contra brute force no login, o que permitiu acessar uma conta administrativa. Cada achado tem metodologia, passos de reprodução e correção.",
    tags: ["OWASP API Top 10", "BOLA", "Brute force", "Write-up"],
    status: "concluido",
    kind: "lab",
    href: "https://github.com/devCauaRaphael/crAPI-security-assessment",
  },
  {
    name: "PortSwigger Web Security Academy",
    desc: "54 laboratórios resolvidos (29 Apprentice e 25 Practitioner), explorando XSS, SQL Injection, IDOR e falhas de autenticação e controle de acesso.",
    tags: ["Burp Suite", "SQLMap", "XSS", "SQLi", "IDOR"],
    status: "ativo",
    kind: "lab",
  },
  {
    name: "Web crawler para reconhecimento",
    desc: "Crawler em Python que mapeia a superfície de ataque de aplicações web, com descoberta recursiva de URLs e controle de fila e de páginas já visitadas.",
    tags: ["Python", "Requests", "BeautifulSoup", "Recon"],
    status: "concluido",
    kind: "dev",
    href: "https://github.com/devCauaRaphael/web-crawler-tool",
  },
  {
    name: "Selecta API — back-end de marketplace (TCC)",
    desc: "API REST em C# com autenticação JWT, hash de senhas com bcrypt e controle de acesso por permissão. Fui o principal responsável por code review, merges e deploy.",
    tags: ["C#", "ASP.NET Core", "Entity Framework", "MySQL", "AWS S3", "JWT"],
    status: "concluido",
    kind: "dev",
    href: "https://youtu.be/w0WsiXkFmgM",
    linkLabel: "Ver demonstração",
  },
]

export type Course = {
  title: string
  issuer: string
  period: string
  status: "concluido" | "andamento"
  note: string
}

// Ordem cronológica (mais recente primeiro).
export const education: Course[] = [
  {
    title: "Ciência da Computação",
    issuer: "Anhembi Morumbi",
    period: "em curso",
    status: "andamento",
    note: "Bacharelado EAD.",
  },
  {
    title: "Hacking e Pentest",
    issuer: "Solyd",
    period: "em curso",
    status: "andamento",
    note: "Formação prática em segurança ofensiva e testes de intrusão.",
  },
  {
    title: "Cybersecurity",
    issuer: "FIAP",
    period: "2025",
    status: "concluido",
    note: "Análise de vulnerabilidades, criptografia, gestão de chaves e monitoramento.",
  },
  {
    title: "DevOps e Agile Culture",
    issuer: "FIAP",
    period: "2025",
    status: "concluido",
    note: "Integração e entrega contínuas, automação de processos, Scrum e Kanban.",
  },
  {
    title: "Cloud Fundamentals, Administration and Solution Architect",
    issuer: "FIAP",
    period: "2025",
    status: "concluido",
    note: "IaaS, PaaS e SaaS em AWS, Azure e GCP, com Docker e Kubernetes.",
  },
  {
    title: "Técnico em Desenvolvimento de Sistemas",
    issuer: "ETEC Basilides de Godoy",
    period: "2024 – 2025",
    status: "concluido",
    note: "Full-stack com .NET, Flutter e bancos SQL e NoSQL.",
  },
  {
    title: "Programação Web Full-Stack",
    issuer: "OneBitCode",
    period: "2024 – 2025",
    status: "concluido",
    note: "React, Next.js, Node.js, TypeScript e PostgreSQL.",
  },
  {
    title: "Java — Orientação a Objetos",
    issuer: "Curso em Vídeo",
    period: "2024",
    status: "concluido",
    note: "Classes, herança, polimorfismo e encapsulamento.",
  },
]

export const reading = {
  current: { title: "Redes de Computadores", author: "Andrew Tanenbaum" },
  done: [
    { title: "Entendendo Algoritmos", author: "Aditya Bhargava" },
    { title: "Código Limpo", author: "Robert C. Martin" },
    { title: "O Programador Pragmático", author: "David Thomas e Andrew Hunt" },
  ],
  next: [
    { title: "Comunicação de Dados e Redes de Computadores", author: "Behrouz A. Forouzan" },
    { title: "Fundamentos de Engenharia de Dados", author: "Joe Reis e Matt Housley" },
    { title: "Arquitetura Limpa", author: "Robert C. Martin" },
  ],
}
