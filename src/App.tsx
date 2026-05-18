import { Sparkles, Heart, Compass, BookOpen, Eclipse, Sun, MessageCircle, ArrowRight, Check } from 'lucide-react'

import { Mandala, ExtLink, SunBurst } from '@/components/'

import ebookCover from '@/assets/ebook-cover.png'
import portrait from '@/assets/tayna-portrait.png'

const THERAPY_URL =
  'https://docs.google.com/forms/d/1yxwtzIFmJ6n7BRhayGQCi7XNV3u3XuCWAdewdHNxsXg/viewform?edit_requested=true'
const ASTRO_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSeK4CRF3-O4e_ZE7jEZuz2VL7tjtRgpu78DQqesSKzC_lurpA/viewform'
const EBOOK_URL = 'https://p.eduzz.com/2967514'
const WHATSAPP_URL = 'https://wa.me/5521982815144'

export const App = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border/50">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-2">
            <Eclipse className="w-5 h-5 text-accent" />
            <span className="font-display text-xl tracking-wide text-primary">Tayná Farria</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#sobre" className="hover:text-accent transition">
              Sobre
            </a>
            <a href="#ebook" className="hover:text-accent transition">
              E-book
            </a>
            <a href="#servicos" className="hover:text-accent transition">
              Serviços
            </a>
            <a href="#pilares" className="hover:text-accent transition">
              Pilares
            </a>
            <a href="#contato" className="hover:text-accent transition">
              Contato
            </a>
          </nav>
          <ExtLink
            href={WHATSAPP_URL}
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2 text-sm hover:bg-accent transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </ExtLink>
        </div>
      </header>

      {/* HERO */}
      <section id="inicio" className="relative">
        <div className="absolute inset-0 bg-gradient-warm" />
        <Mandala className="absolute -right-32 top-10 w-150 text-copper/20 animate-spin-slow pointer-events-none" />
        <Mandala className="absolute -left-40 bottom-0 w-100 text-forest/10 animate-spin-slow pointer-events-none" />
        <SunBurst className="absolute left-1/2 top-12 w-16 text-copper/40 -translate-x-1/2" />

        <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-24 lg:pt-24 lg:pb-32 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-copper/40 bg-cream/60 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-copper">
              <Sparkles className="w-3 h-3" />9 dias de potência
            </div>
            <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-primary text-balance w-[90%] sm:w-auto">
              Cocrie sua realidade com <em className="not-italic text-accent">clareza</em>, equilíbrio e{' '}
              <em className="text-copper italic">intenção</em>.
            </h1>
            <p className="mt-7 text-lg text-muted-foreground max-w-xl leading-relaxed w-[90%] sm:w-auto">
              Um caminho prático para alinhar energia, propósito e realização através da cocriação consciente, da roda
              da vida e de técnicas terapêuticas.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <ExtLink
                href={EBOOK_URL}
                className="group inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-7 py-4 text-sm font-medium tracking-wide shadow-warm hover:bg-primary transition-all hover:-translate-y-0.5"
              >
                Quero começar agora
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </ExtLink>
              <ExtLink
                href={WHATSAPP_URL}
                className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-cream/60 px-7 py-4 text-sm font-medium text-primary hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                Falar pelo WhatsApp
              </ExtLink>
            </div>
            <div className="mt-10 flex items-center justify-center sm:justify-start flex-wrap gap-6 text-xs uppercase tracking-[0.3em] text-copper/80">
              <span>Alinhe</span>
              <span className="w-1 h-1 rounded-full bg-copper/60" />
              <span>Sinta</span>
              <span className="w-1 h-1 rounded-full bg-copper/60" />
              <span>Crie</span>
              <span className="w-1 h-1 rounded-full bg-copper/60" />
              <span>Realize</span>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="absolute -inset-6 rounded-3xl bg-copper/10 blur-2xl" />
            <div className="relative rounded-3xl overflow-hidden shadow-warm border border-copper/20 bg-cream rotate-1 hover:rotate-0 transition-transform duration-700">
              <img src={ebookCover} alt="E-book Guia Prático de Cocriação" className="w-full h-auto" />
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-primary text-primary-foreground px-5 py-4 shadow-soft hidden sm:block">
              <div className="text-xs uppercase tracking-widest opacity-80">E-book</div>
              <div className="font-display text-xl">Cocriação Simplificada</div>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-4 rounded-4xl bg-forest/5" />
            <img
              src={portrait}
              alt="Tayná Farria"
              className="relative rounded-4xl w-full object-cover shadow-soft border border-copper/20"
            />
          </div>
          <div className="lg:col-span-7">
            <div className="text-xs uppercase tracking-[0.3em] text-copper">Sobre</div>
            <h2 className="mt-4 font-display text-4xl lg:text-5xl text-primary">Conheça sua mentora</h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Tayná Farria une ferramentas ancestrais e modernas para auxiliar mulheres e buscadores no processo de
              autoconhecimento, autorresponsabilidade e criação consciente da própria realidade.
            </p>
            <div className="mt-10 grid sm:grid-cols-2 gap-3">
              {[
                'Astróloga',
                'Terapeuta Reikiana',
                'Consteladora Familiar',
                'Praticante de PNL',
                'Pós-graduanda em Arteterapia',
              ].map(s => (
                <div
                  key={s}
                  className="flex items-center gap-3 rounded-2xl bg-card border border-border/60 px-5 py-4 shadow-soft hover:border-copper/50 transition"
                >
                  <span className="flex w-8 h-8 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Sparkles className="w-4 h-4" />
                  </span>
                  <span className="text-sm font-medium text-primary">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EBOOK */}
      <section id="ebook" className="relative py-24 lg:py-32 bg-gradient-warm overflow-hidden">
        <Mandala className="absolute -left-32 top-1/2 -translate-y-1/2 w-125 text-forest/10" />
        <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-copper">E-book</div>
            <h2 className="mt-4 font-display text-4xl lg:text-5xl text-primary text-balance">Cocriação Simplificada</h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Um guia prático para transformar intenção em movimento, com exercícios de clareza, gratidão, visualização,
              escrita magnética e entrega.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                'Pilares do equilíbrio',
                'Roda da vida',
                '9 dias de potência',
                'Técnicas de realização',
                'Exercícios práticos',
              ].map(item => (
                <li key={item} className="flex items-center gap-3">
                  <span className="mt-1 flex w-6 h-6 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-primary">{item}</span>
                </li>
              ))}
            </ul>
            <ExtLink
              href={EBOOK_URL}
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-4 text-sm font-medium shadow-soft hover:bg-accent transition-all hover:-translate-y-0.5"
            >
              <BookOpen className="w-4 h-4" />
              Acessar o e-book
            </ExtLink>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-copper/15 blur-3xl rounded-full" />
            <img
              src={ebookCover}
              alt="E-book Cocriação Simplificada"
              className="relative mx-auto max-w-sm w-full rounded-2xl shadow-warm border border-copper/30 -rotate-2 hover:rotate-0 transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs uppercase tracking-[0.3em] text-copper">Serviços</div>
            <h2 className="mt-4 font-display text-4xl lg:text-5xl text-primary">Caminhos para sua jornada</h2>
            <p className="mt-5 text-muted-foreground">Escolha o ponto de partida que mais ressoa com seu momento.</p>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-7">
            {[
              {
                icon: BookOpen,
                title: 'Cocriação Simplificada',
                desc: 'Um caminho prático para manifestar sua realidade com clareza, consciência e intenção.',
                cta: 'Ver e-book',
                href: EBOOK_URL,
              },
              {
                icon: Heart,
                title: 'Processo Terapêutico',
                desc: 'Um acompanhamento para olhar padrões, emoções, escolhas e movimentos internos com acolhimento e profundidade.',
                cta: 'Quero iniciar',
                href: THERAPY_URL,
              },
              {
                icon: Compass,
                title: 'Análise Astrológica',
                desc: 'Uma leitura simbólica para compreender potenciais, ciclos, desafios e caminhos de expansão pessoal.',
                cta: 'Solicitar análise',
                href: ASTRO_URL,
              },
            ].map(s => (
              <div
                key={s.title}
                className="group relative flex flex-col rounded-3xl bg-card border border-border/60 p-8 shadow-soft hover:shadow-warm hover:border-copper/50 hover:-translate-y-1 transition-all duration-500"
              >
                <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-40 transition">
                  <SunBurst className="w-10 text-copper" />
                </div>
                <span className="flex w-14 h-14 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                  <s.icon className="w-6 h-6" />
                </span>
                <h3 className="mt-6 font-display text-2xl text-primary">{s.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed flex-1">{s.desc}</p>
                <ExtLink
                  href={s.href}
                  className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-primary transition group/btn"
                >
                  {s.cta}
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </ExtLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PILARES */}
      <section id="pilares" className="relative py-24 lg:py-32 bg-cream/60 overflow-hidden">
        <SunBurst className="absolute top-12 left-1/2 -translate-x-1/2 w-14 text-copper" />
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs uppercase tracking-[0.3em] text-copper">Pilares da jornada</div>
            <h2 className="mt-4 font-display text-4xl lg:text-5xl text-primary">Quatro movimentos sagrados</h2>
          </div>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { n: '01', t: 'Alinhe', d: 'Reconheça onde sua energia está hoje.' },
              { n: '02', t: 'Sinta', d: 'Acesse a verdade das suas emoções e intenções.' },
              { n: '03', t: 'Crie', d: 'Transforme clareza em ação e realização.' },
              { n: '04', t: 'Realize', d: 'Permita que sua nova realidade se manifeste com presença.' },
            ].map(p => (
              <div
                key={p.t}
                className="relative rounded-3xl bg-background border border-border/60 p-7 shadow-soft hover:border-copper/50 transition"
              >
                <div className="font-display text-copper/60 text-sm tracking-widest">{p.n}</div>
                <div className="mt-2 flex items-center gap-2">
                  <Sun className="w-5 h-5 text-accent" />
                  <h3 className="font-display text-3xl text-primary">{p.t}</h3>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section
        id="contato"
        className="relative py-24 lg:py-32 bg-gradient-forest text-primary-foreground overflow-hidden"
      >
        <Mandala className="absolute -right-32 -top-20 w-125 text-copper/30 animate-spin-slow" />
        <Mandala className="absolute -left-40 -bottom-32 w-112.5 text-copper/20" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <SunBurst className="w-12 mx-auto text-gold mb-6" />
          <h2 className="font-display text-5xl lg:text-6xl text-balance">Vamos manifestar?</h2>
          <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
            Tem dúvidas, quer compartilhar seu momento ou entender qual caminho combina mais com você? Fale diretamente
            pelo WhatsApp.
          </p>
          <ExtLink
            href={WHATSAPP_URL}
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-accent text-accent-foreground px-9 py-5 text-base font-medium shadow-warm hover:bg-cream hover:text-primary transition-all hover:-translate-y-0.5"
          >
            <MessageCircle className="w-5 h-5" />
            Falar com Tayná no WhatsApp
          </ExtLink>
          <div className="mt-8 text-xs uppercase tracking-[0.4em] text-gold/80">Alinhe • Sinta • Crie • Realize</div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-background border-t border-border/60 py-14">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2">
              <Eclipse className="w-5 h-5 text-accent" />
              <span className="font-display text-2xl text-primary">Tayná Farria</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">Cocriação Consciente • Terapias • Astrologia</p>
            <ExtLink
              href="https://instagram.com/taynafarria"
              className="mt-5 inline-flex items-center gap-2 text-sm text-primary hover:text-accent transition"
            >
              <svg
                aria-label="Instagram"
                fill="currentColor"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
                className="w-4 h-4"
              >
                <title>Instagram</title>
                <path d="M12 2.982c2.937 0 3.285.011 4.445.064a6.087 6.087 0 0 1 2.042.379 3.408 3.408 0 0 1 1.265.823 3.408 3.408 0 0 1 .823 1.265 6.087 6.087 0 0 1 .379 2.042c.053 1.16.064 1.508.064 4.445s-.011 3.285-.064 4.445a6.087 6.087 0 0 1-.379 2.042 3.643 3.643 0 0 1-2.088 2.088 6.087 6.087 0 0 1-2.042.379c-1.16.053-1.508.064-4.445.064s-3.285-.011-4.445-.064a6.087 6.087 0 0 1-2.043-.379 3.408 3.408 0 0 1-1.264-.823 3.408 3.408 0 0 1-.823-1.265 6.087 6.087 0 0 1-.379-2.042c-.053-1.16-.064-1.508-.064-4.445s.011-3.285.064-4.445a6.087 6.087 0 0 1 .379-2.042 3.408 3.408 0 0 1 .823-1.265 3.408 3.408 0 0 1 1.265-.823 6.087 6.087 0 0 1 2.042-.379c1.16-.053 1.508-.064 4.445-.064M12 1c-2.987 0-3.362.013-4.535.066a8.074 8.074 0 0 0-2.67.511 5.392 5.392 0 0 0-1.949 1.27 5.392 5.392 0 0 0-1.269 1.948 8.074 8.074 0 0 0-.51 2.67C1.012 8.638 1 9.013 1 12s.013 3.362.066 4.535a8.074 8.074 0 0 0 .511 2.67 5.392 5.392 0 0 0 1.27 1.949 5.392 5.392 0 0 0 1.948 1.269 8.074 8.074 0 0 0 2.67.51C8.638 22.988 9.013 23 12 23s3.362-.013 4.535-.066a8.074 8.074 0 0 0 2.67-.511 5.625 5.625 0 0 0 3.218-3.218 8.074 8.074 0 0 0 .51-2.67C22.988 15.362 23 14.987 23 12s-.013-3.362-.066-4.535a8.074 8.074 0 0 0-.511-2.67 5.392 5.392 0 0 0-1.27-1.949 5.392 5.392 0 0 0-1.948-1.269 8.074 8.074 0 0 0-2.67-.51C15.362 1.012 14.987 1 12 1Zm0 5.351A5.649 5.649 0 1 0 17.649 12 5.649 5.649 0 0 0 12 6.351Zm0 9.316A3.667 3.667 0 1 1 15.667 12 3.667 3.667 0 0 1 12 15.667Zm5.872-10.859a1.32 1.32 0 1 0 1.32 1.32 1.32 1.32 0 0 0-1.32-1.32Z"></path>
              </svg>
              @taynafarria
            </ExtLink>
          </div>
          <div>
            <h4 className="font-display text-lg text-primary">Links rápidos</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <ExtLink href={EBOOK_URL} className="hover:text-accent transition">
                  E-book Cocriação Simplificada
                </ExtLink>
              </li>
              <li>
                <ExtLink href={THERAPY_URL} className="hover:text-accent transition">
                  Processo Terapêutico
                </ExtLink>
              </li>
              <li>
                <ExtLink href={ASTRO_URL} className="hover:text-accent transition">
                  Análise Astrológica
                </ExtLink>
              </li>
              <li>
                <ExtLink href={WHATSAPP_URL} className="hover:text-accent transition">
                  WhatsApp
                </ExtLink>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-lg text-primary">Navegação</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#sobre" className="hover:text-accent transition">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#ebook" className="hover:text-accent transition">
                  E-book
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-accent transition">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#pilares" className="hover:text-accent transition">
                  Pilares
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-6 mt-10 pt-6 border-t border-border/60 text-xs text-muted-foreground text-center">
          © {new Date().getFullYear()} Tayná Farria. Todos os direitos reservados.
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <ExtLink
        href={WHATSAPP_URL}
        className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent text-accent-foreground shadow-warm hover:bg-primary hover:scale-110 transition-all"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="sr-only">Falar no WhatsApp</span>
      </ExtLink>
    </div>
  )
}
