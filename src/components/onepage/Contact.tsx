import { useState, type ChangeEvent, type FormEvent } from "react"
import emailjs from "@emailjs/browser"
import { Send } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { links } from "@/data/content"

const publicKey = import.meta.env.VITE_PUBLIC_KEY
const serviceId = import.meta.env.VITE_SERVICE_ID
const templateId = import.meta.env.VITE_TEMPLATE_ID

const empty = { name: "", email: "", subject: "", message: "" }

export function Contact() {
  const [form, setForm] = useState(empty)
  const [sending, setSending] = useState(false)
  const { toast } = useToast()

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.subject || !form.message) {
      toast({ title: "Preencha todos os campos", description: "Nome, e-mail, assunto e mensagem são obrigatórios.", variant: "destructive" })
      return
    }
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      toast({ title: "E-mail inválido", description: "Confira o endereço e tente de novo.", variant: "destructive" })
      return
    }
    setSending(true)
    try {
      await emailjs.send(
        serviceId,
        templateId,
        { name: form.name, email: form.email, title: form.subject, message: form.message, time: new Date().toLocaleString("pt-BR") },
        publicKey,
      )
      toast({ title: "Mensagem enviada", description: "Obrigado pelo contato. Respondo em breve." })
      setForm(empty)
    } catch {
      toast({
        title: "A mensagem não foi enviada",
        description: `Tente de novo ou escreva direto para ${links.email}.`,
        variant: "destructive",
      })
    } finally {
      setSending(false)
    }
  }

  const channels = [
    { k: "email", v: links.email, href: `mailto:${links.email}` },
    { k: "linkedin", v: "in/devcauaraphael", href: links.linkedin },
    { k: "github", v: "devCauaRaphael", href: links.github },
    { k: "whatsapp", v: "abrir conversa", href: links.whatsapp },
  ]

  return (
    <section id="contato" className="section">
      <header className="mb-8 md:mb-10">
        <p className="prompt">
          <b>caua@kali</b>:~$ nc -lvp 443
        </p>
        <h2 className="h2">Vamos conversar</h2>
      </header>

      <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <div>
          <p className="max-w-[46ch] text-lg text-dim">
            Aberto a oportunidades em DevOps, automação de infraestrutura e segurança ofensiva. Também topo trocar ideia sobre labs e CTFs.
          </p>
          <dl className="mt-8 font-mono text-sm">
            {channels.map((c) => (
              <div key={c.k} className="grid grid-cols-[90px_1fr] gap-3 border-t border-line py-3.5">
                <dt className="text-dim">{c.k}</dt>
                <dd>
                  <a href={c.href} target={c.k === "email" ? undefined : "_blank"} rel="noopener noreferrer" className="text-text hover:text-signal">
                    {c.v}
                  </a>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <form onSubmit={onSubmit} className="space-y-5 rounded-sm border border-line bg-surface p-6 md:p-8" noValidate>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="mb-1.5 block font-mono text-xs text-dim">nome</span>
              <input name="name" value={form.name} onChange={onChange} className="field" autoComplete="name" required />
            </label>
            <label className="block">
              <span className="mb-1.5 block font-mono text-xs text-dim">e-mail</span>
              <input name="email" type="email" value={form.email} onChange={onChange} className="field" autoComplete="email" required />
            </label>
          </div>
          <label className="block">
            <span className="mb-1.5 block font-mono text-xs text-dim">assunto</span>
            <input name="subject" value={form.subject} onChange={onChange} className="field" required />
          </label>
          <label className="block">
            <span className="mb-1.5 block font-mono text-xs text-dim">mensagem</span>
            <textarea name="message" value={form.message} onChange={onChange} rows={5} className="field resize-y" required />
          </label>
          <button type="submit" disabled={sending} className="btn-primary disabled:opacity-60">
            <Send className="h-4 w-4" /> {sending ? "Enviando…" : "Enviar mensagem"}
          </button>
        </form>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-5 pb-16 pt-8 font-mono text-xs text-dim md:px-10">
      <p>
        <span className="text-signal">caua@kali</span>:~$ exit
      </p>
      <p className="mt-1">© {new Date().getFullYear()} Cauã Raphael. Feito com React, Vite e Tailwind.</p>
    </footer>
  )
}
