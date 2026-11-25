import { Github, Linkedin, Download, ArrowUpRight } from "lucide-react"
import { Terminal } from "./Terminal"
import { about, nokia, promocao, freelance, arsenal, projects, education, reading, links, type Project } from "@/data/content"
import cvUrl from "@/assets/pdf/Caua_Raphael_Curriculo_DevOps_Seguranca.pdf"

function Head({ path, cmd, title }: { path: string; cmd: string; title: string }) {
  return (
    <header className="mb-8 md:mb-10">
      <p className="prompt">
        <b>caua@kali</b>:{path}$ {cmd}
      </p>
      <h2 className="h2">{title}</h2>
    </header>
  )
}

/* ───────────── início ───────────── */
export function Hero() {
  return (
    <section id="inicio" className="mx-auto flex min-h-[100svh] max-w-6xl items-center px-5 pb-20 pt-16 md:px-10">
      <div className="grid w-full items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <h1 className="font-mono text-[clamp(3.2rem,9vw,6.5rem)] font-extrabold leading-[0.95] tracking-[-0.04em] text-text">
            Cauã
            <br />
            Raphael
            <span className="cursor" aria-hidden />
          </h1>
          <p className="mt-8 max-w-md text-lg text-dim md:text-xl">{about.role}</p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#projetos" className="btn-primary">
              Ver projetos
            </a>
            <a href={cvUrl} download="Caua-Raphael-Curriculo.pdf" className="btn-ghost">
              <Download className="h-4 w-4" /> Baixar currículo
            </a>
          </div>

          <div className="mt-10 flex gap-5 text-dim">
            <a href={links.github} target="_blank" rel="noopener noreferrer" className="hover:text-signal" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-signal" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>

        <Terminal />
      </div>
    </section>
  )
}

/* ───────────── whoami ───────────── */
export function About() {
  return (
    <section id="whoami" className="section">
      <Head path="~" cmd="whoami" title="Sobre mim" />
      <div className="grid gap-10 md:grid-cols-[1fr_320px] md:gap-16">
        <div className="md:order-2">
          <dl className="space-y-1.5 rounded-sm border border-line bg-surface p-5 font-mono text-[13px]">
            {about.facts.map(([k, v]) => (
              <div key={k} className="grid grid-cols-[64px_1fr] gap-2">
                <dt className="text-dim">{k}</dt>
                <dd className="text-text">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="max-w-[62ch] space-y-5 text-lg leading-relaxed md:order-1">
          {about.bio.map((p, i) => (
            <p key={i} className={i === 0 ? "text-text" : "text-dim"}>
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───────────── nokia ───────────── */
function Pipeline() {
  const box = "rounded-sm border border-line bg-ink px-3 py-2 text-center"
  return (
    <figure className="self-start rounded-sm border border-line bg-surface p-5 font-mono text-[12.5px]" aria-label="Fluxo da automação">
      <div className="grid grid-cols-2 gap-3 text-text">
        <div className={box}>APIs de serviço</div>
        <div className={box}>AWS S3</div>
      </div>
      <div className="my-2 text-center text-dim">└────┬────┘</div>
      <div className={`${box} border-signal text-signal`}>Python · FastAPI</div>
      <div className="my-2 text-center text-dim">│</div>
      <div className={`${box} text-text`}>relatório em Excel</div>
      <div className="my-2 text-center text-dim">│ deploy</div>
      <div className={`${box} text-text`}>Kubernetes · Rancher · EKS</div>
      <figcaption className="mt-4 text-dim">fluxo simplificado da auditoria</figcaption>
    </figure>
  )
}

export function Nokia() {
  return (
    <section id="nokia" className="section">
      <Head path="~/nokia" cmd="cat experiencia.md" title="Nokia" />

      {promocao.mostrar && (
        <p className="mb-8 inline-block rounded-sm border border-signal/40 px-3 py-1.5 font-mono text-sm text-signal">
          {promocao.texto}
        </p>
      )}

      <div className="grid gap-12 lg:grid-cols-[1fr_320px] lg:gap-16">
        <div>
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
            <h3 className="text-xl font-semibold text-text md:text-2xl">{nokia.title}</h3>
            <span className="font-mono text-sm text-signal">{nokia.period}</span>
          </div>
          <p className="mt-5 max-w-[62ch] text-lg text-dim">{nokia.summary}</p>

          <ul className="mt-8 space-y-6">
            {nokia.work.map((w) => (
              <li key={w.head} className="grid grid-cols-[1.5rem_1fr]">
                <span className="font-mono text-signal" aria-hidden>
                  +
                </span>
                <div>
                  <p className="font-medium text-text">{w.head}</p>
                  <p className="mt-1 max-w-[60ch] text-dim">{w.body}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-2">
            {nokia.stack.map((s) => (
              <span key={s} className="chip">
                {s}
              </span>
            ))}
          </div>
        </div>

        <Pipeline />
      </div>

      <div className="mt-12 border-t border-line pt-8">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
          <h3 className="text-lg font-semibold text-text">{freelance.title}</h3>
          <span className="font-mono text-sm text-dim">{freelance.period}</span>
        </div>
        <p className="mt-3 max-w-[62ch] text-dim">{freelance.summary}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {freelance.stack.map((s) => (
            <span key={s} className="chip">
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───────────── arsenal ───────────── */
export function Arsenal() {
  return (
    <section id="arsenal" className="section">
      <Head path="~" cmd="tree arsenal/" title="Ferramentas do dia a dia" />
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {arsenal.map((g) => (
          <div key={g.dir}>
            <p className="font-mono text-lg font-bold text-signal">{g.dir}</p>
            <p className="mb-4 text-sm text-dim">{g.title}</p>
            <ul className="font-mono text-[15px] leading-8 text-text">
              {g.items.map((item, i) => (
                <li key={item}>
                  <span className="text-dim" aria-hidden>
                    {i === g.items.length - 1 ? "└── " : "├── "}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ───────────── projetos ───────────── */
function ProjectRow({ p }: { p: Project }) {
  const status =
    p.status === "ativo" ? <span className="text-amber">[ em andamento ]</span> : <span className="text-signal">[ concluído ]</span>
  return (
    <li className="grid gap-3 border-t border-line py-6 md:grid-cols-[180px_1fr_auto] md:gap-8">
      <span className="font-mono text-xs leading-7">{status}</span>
      <div>
        <h3 className="text-lg font-semibold text-text">{p.name}</h3>
        <p className="mt-1 max-w-[62ch] text-dim">{p.desc}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </div>
      </div>
      {p.href ? (
        <a
          href={p.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 self-start font-mono text-sm text-text underline decoration-line underline-offset-4 hover:text-signal hover:decoration-signal"
        >
          {p.linkLabel ?? "Ver código"} <ArrowUpRight className="h-4 w-4" />
        </a>
      ) : (
        <span />
      )}
    </li>
  )
}

export function Projects() {
  const labs = projects.filter((p) => p.kind === "lab")
  const dev = projects.filter((p) => p.kind === "dev")
  return (
    <section id="projetos" className="section">
      <Head path="~" cmd="ls projetos/" title="Labs e projetos" />

      <p className="mb-2 font-mono text-signal">labs/</p>
      <ul className="mb-10">{labs.map((p) => <ProjectRow key={p.name} p={p} />)}</ul>

      <p className="mb-2 font-mono text-signal">dev/</p>
      <ul>{dev.map((p) => <ProjectRow key={p.name} p={p} />)}</ul>

      <a
        href={links.github}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-ghost mt-8"
      >
        <Github className="h-4 w-4" /> Todos os repositórios no GitHub
      </a>
    </section>
  )
}

/* ───────────── formação ───────────── */
export function Education() {
  return (
    <section id="formacao" className="section">
      <Head path="~" cmd="git log --oneline formacao" title="Formação" />
      <ol className="relative ml-1.5 border-l border-line">
        {education.map((c) => (
          <li key={c.title} className="relative pb-7 pl-8 last:pb-0">
            <span
              className={`absolute -left-[5px] top-2 h-[9px] w-[9px] rounded-full ${
                c.status === "andamento" ? "bg-amber" : "bg-signal"
              }`}
              aria-hidden
            />
            <div className="grid gap-1 md:grid-cols-[150px_1fr] md:gap-8">
              <span className="font-mono text-sm leading-7 text-dim">{c.period}</span>
              <div>
                <h3 className="font-semibold text-text">
                  {c.title} <span className="font-normal text-dim">· {c.issuer}</span>
                </h3>
                <p className="mt-1 max-w-[62ch] text-dim">{c.note}</p>
                {c.status === "andamento" && <p className="mt-1 font-mono text-xs text-amber">em andamento</p>}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

/* ───────────── leituras ───────────── */
export function Reading() {
  const Book = ({ b }: { b: { title: string; author: string } }) => (
    <li className="border-t border-line py-4">
      <p className="text-text">{b.title}</p>
      <p className="text-sm text-dim">{b.author}</p>
    </li>
  )
  return (
    <section id="leituras" className="section">
      <Head path="~" cmd="ls estante/" title="Leituras" />
      <div className="grid gap-10 md:grid-cols-3">
        <div>
          <p className="mb-3 font-mono text-sm text-amber">lendo agora</p>
          <ul>
            <Book b={reading.current} />
          </ul>
        </div>
        <div>
          <p className="mb-3 font-mono text-sm text-signal">lidos</p>
          <ul>{reading.done.map((b) => <Book key={b.title} b={b} />)}</ul>
        </div>
        <div>
          <p className="mb-3 font-mono text-sm text-dim">próximas</p>
          <ul>{reading.next.map((b) => <Book key={b.title} b={b} />)}</ul>
        </div>
      </div>
    </section>
  )
}
