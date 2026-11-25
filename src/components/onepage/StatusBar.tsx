import { useEffect, useState } from "react"
import { sections } from "@/data/content"

// Navegação fixa no rodapé, inspirada na barra de status do tmux.
// Cada seção é uma "janela"; a ativa ganha o asterisco, como no tmux.
export function StatusBar() {
  const [active, setActive] = useState<string>(sections[0].id)
  const [time, setTime] = useState("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id))
      },
      { rootMargin: "-45% 0px -50% 0px" },
    )
    sections.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const fmt = () =>
      setTime(
        new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit", timeZone: "America/Sao_Paulo" }),
      )
    fmt()
    const t = setInterval(fmt, 30_000)
    return () => clearInterval(t)
  }, [])

  return (
    <nav
      aria-label="Seções"
      className="fixed inset-x-0 bottom-0 z-50 flex h-9 items-stretch border-t border-line bg-ink/95 font-mono text-[13px] backdrop-blur"
    >
      <a href="#inicio" className="flex shrink-0 items-center bg-signal px-3 font-bold text-ink">
        [caua]
      </a>
      <ul className="flex min-w-0 flex-1 items-stretch overflow-x-auto [scrollbar-width:none]">
        {sections.map((s, i) => {
          const on = active === s.id
          return (
            <li key={s.id} className="flex">
              <a
                href={`#${s.id}`}
                aria-current={on ? "location" : undefined}
                className={`flex items-center whitespace-nowrap px-3 transition-colors ${
                  on ? "bg-line text-signal" : "text-dim hover:text-text"
                }`}
              >
                {i}:{s.label}
                <span className="w-2">{on ? "*" : ""}</span>
              </a>
            </li>
          )
        })}
      </ul>
      <div className="hidden shrink-0 items-center gap-3 px-3 text-dim md:flex">
        <span>"são paulo"</span>
        <span className="text-text">{time}</span>
      </div>
    </nav>
  )
}
