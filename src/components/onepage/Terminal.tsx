import { useEffect, useRef, useState, type KeyboardEvent } from "react"
import { links } from "@/data/content"
import cvUrl from "@/assets/pdf/Caua_Raphael_Curriculo_DevOps_Seguranca.pdf"

type Line = { kind: "in" | "out" | "ok" | "err"; text: string }

const PROMPT = "caua@kali:~$"

const goTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

const HELP = [
  "comandos disponíveis:",
  "  whoami      quem sou eu",
  "  nokia       meu trabalho atual",
  "  arsenal     ferramentas que uso",
  "  projetos    labs e projetos",
  "  formacao    cursos e graduação",
  "  leituras    o que estou lendo",
  "  contato     fale comigo",
  "  cv          baixar currículo",
  "  github | linkedin",
  "  clear",
]

function run(raw: string): Line[] | "clear" {
  const cmd = raw.trim().toLowerCase()
  const nav: Record<string, [string, string]> = {
    whoami: ["whoami", "Cauã Raphael, 19 anos. Automação e DevOps na Nokia, aspirante a pentester."],
    nokia: ["nokia", "Abrindo experiência na Nokia…"],
    arsenal: ["arsenal", "Listando ferramentas…"],
    skills: ["arsenal", "Listando ferramentas…"],
    projetos: ["projetos", "Abrindo projetos e labs…"],
    formacao: ["formacao", "Abrindo formação…"],
    leituras: ["leituras", "Abrindo estante…"],
    contato: ["contato", "Abrindo canal de contato…"],
  }

  if (!cmd) return []
  if (cmd === "clear") return "clear"
  if (cmd === "help" || cmd === "ajuda") return HELP.map((text) => ({ kind: "out", text }))
  if (nav[cmd]) {
    const [id, msg] = nav[cmd]
    setTimeout(() => goTo(id), 250)
    return [{ kind: "ok", text: msg }]
  }
  if (cmd === "ls") return [{ kind: "out", text: "whoami  nokia/  arsenal/  projetos/  formacao/  leituras/  contato  cv.pdf" }]
  if (cmd === "cv" || cmd === "cat cv.pdf") {
    const a = document.createElement("a")
    a.href = cvUrl
    a.download = "Caua-Raphael-Curriculo.pdf"
    a.click()
    return [{ kind: "ok", text: "Download do currículo iniciado." }]
  }
  if (cmd === "github" || cmd === "linkedin") {
    window.open(links[cmd], "_blank", "noopener")
    return [{ kind: "ok", text: `Abrindo ${cmd} em nova aba.` }]
  }
  if (cmd.startsWith("sudo")) return [{ kind: "err", text: "visitante não está no arquivo sudoers. Este incidente será reportado." }]
  if (cmd.startsWith("nmap")) {
    return [
      { kind: "out", text: "PORT     STATE  SERVICE" },
      { kind: "out", text: "22/tcp   open   curiosidade" },
      { kind: "out", text: "443/tcp  open   oportunidades" },
      { kind: "out", text: "8080/tcp open   contato  → digite 'contato'" },
    ]
  }
  if (cmd === "exit") return [{ kind: "err", text: "Não há saída. Role a página para continuar." }]
  return [{ kind: "err", text: `${cmd.split(" ")[0]}: comando não encontrado. Digite 'help'.` }]
}

const BOOT: Line[] = [
  { kind: "in", text: "whoami" },
  { kind: "out", text: "Cauã Raphael — automação e DevOps @ Nokia" },
  { kind: "in", text: "cat foco.txt" },
  { kind: "out", text: "DevOps · automação de infraestrutura · pentest" },
  { kind: "out", text: "" },
  { kind: "ok", text: "Digite 'help' para explorar." },
]

export function Terminal() {
  const reduce = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  const [lines, setLines] = useState<Line[]>(reduce ? BOOT : [])
  const [typing, setTyping] = useState("")
  const [booted, setBooted] = useState(reduce)
  const [value, setValue] = useState("")
  const [history, setHistory] = useState<string[]>([])
  const [hIndex, setHIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const bodyRef = useRef<HTMLDivElement>(null)

  // Sequência de boot: digita os comandos e revela as saídas, uma única vez.
  useEffect(() => {
    if (reduce) return
    let cancelled = false
    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))
    ;(async () => {
      await sleep(400)
      for (const line of BOOT) {
        if (cancelled) return
        if (line.kind === "in") {
          for (let i = 1; i <= line.text.length; i++) {
            if (cancelled) return
            setTyping(line.text.slice(0, i))
            await sleep(55)
          }
          await sleep(180)
          setTyping("")
        } else {
          await sleep(120)
        }
        setLines((prev) => [...prev, line])
      }
      setBooted(true)
    })()
    return () => {
      cancelled = true
    }
  }, [reduce])

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight })
  }, [lines, typing])

  const submit = () => {
    const result = run(value)
    if (result === "clear") setLines([])
    else setLines((prev) => [...prev, { kind: "in", text: value }, ...result])
    if (value.trim()) setHistory((h) => [value, ...h])
    setHIndex(-1)
    setValue("")
  }

  const onKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") submit()
    else if (e.key === "ArrowUp" && history.length) {
      e.preventDefault()
      const i = Math.min(hIndex + 1, history.length - 1)
      setHIndex(i)
      setValue(history[i])
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      const i = hIndex - 1
      setHIndex(i)
      setValue(i >= 0 ? history[i] : "")
    }
  }

  const color = { in: "text-text", out: "text-dim", ok: "text-signal", err: "text-amber" }

  return (
    <div
      className="w-full overflow-hidden rounded-md border border-line bg-surface shadow-[0_0_0_1px_rgba(0,255,156,0.04),0_30px_80px_-30px_rgba(0,255,156,0.25)]"
      onClick={() => booted && inputRef.current?.focus()}
    >
      <div className="flex items-center gap-2 border-b border-line px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
        <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
        <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
        <span className="ml-3 font-mono text-xs text-dim">caua@kali: ~</span>
      </div>

      <div
        ref={bodyRef}
        className="h-[300px] overflow-y-auto px-4 py-4 font-mono text-[13.5px] leading-relaxed md:h-[340px]"
        aria-live="polite"
      >
        {lines.map((l, i) => (
          <div key={i} className={`whitespace-pre-wrap ${color[l.kind]}`}>
            {l.kind === "in" && <span className="text-signal">{PROMPT} </span>}
            {l.text || " "}
          </div>
        ))}

        {!booted ? (
          <div>
            <span className="text-signal">{PROMPT} </span>
            {typing}
            <span className="cursor" />
          </div>
        ) : (
          <label className="flex items-center">
            <span className="shrink-0 text-signal">{PROMPT}&nbsp;</span>
            <span className="sr-only">Digite um comando</span>
            <input
              ref={inputRef}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={onKey}
              spellCheck={false}
              autoCapitalize="off"
              autoComplete="off"
              placeholder="help"
              className="w-full bg-transparent text-[16px] text-text md:text-[13.5px] caret-signal placeholder:text-dim/40 focus:outline-none"
            />
          </label>
        )}
      </div>
    </div>
  )
}
