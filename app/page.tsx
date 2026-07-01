import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Reveal, RevealStagger, RevealItem } from "@/components/Reveal";
import { clinic, specializations, procedures, testimonials } from "@/lib/data";
import { ReviewCard } from "@/components/ReviewCard";

export const metadata: Metadata = {
  title: `${clinic.doctorName} — Experiência Odontológica Premium em Sorocaba`,
  description: clinic.about,
};

export default function HomePage() {
  return (
    <>
      {/* Hero Premium */}
      <section className="relative min-h-screen overflow-hidden bg-ink pt-20">
        <div className="absolute inset-0 z-0 opacity-50">
          <Image
            src="/images/hero-luxury.jpg"
            alt="Clínica Odontológica de Luxo"
            fill
            className="object-cover scale-105 animate-pulse-slow"
            priority
          />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-ink via-ink/70 to-transparent" />

        <div className="container-edit relative z-20 flex min-h-[calc(100vh-80px)] flex-col justify-center py-12 lg:py-24">
          <Reveal>
            <div className="mb-8 flex items-center gap-4">
              <span className="h-px w-12 bg-champagne" />
              <span className="font-mono text-xs uppercase tracking-widest2 text-champagne">
                {clinic.city} · {clinic.state} — Experiência de Elite
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="font-display text-display-xl text-paper leading-[0.9]">
              A Arte do <br />
              <span className="italic text-champagne">Sorriso</span> <br />
              Perfeito.
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-10 max-w-xl font-body text-lg leading-relaxed text-paper/80 lg:text-xl">
              Onde a alta tecnologia encontra o cuidado artesanal. Descubra uma nova era em tratamentos odontológicos personalizados.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-12 flex flex-wrap gap-6">
              <a 
                href={clinic.contact.whatsappHref} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary !bg-champagne !text-ink !px-10 !py-4 text-sm hover:!bg-white transition-all duration-500 shadow-xl shadow-champagne/10"
              >
                Agendar Experiência
              </a>
              <Link 
                href="/especialidades/" 
                className="btn-outline !border-white/20 !text-white !px-10 !py-4 text-sm hover:!border-white transition-all duration-500"
              >
                Ver Especialidades
              </Link>
            </div>
          </Reveal>
          
          <Reveal delay={0.5} className="mt-20">
             <div className="flex items-center gap-3 font-mono text-[0.65rem] uppercase tracking-widest text-paper/40">
                <span>Role para explorar</span>
                <span className="h-10 w-px bg-gradient-to-b from-champagne to-transparent" />
             </div>
          </Reveal>
        </div>
      </section>

      {/* Seção de Destaque - Interior */}
      <section className="bg-paper py-32 dark:bg-ink">
        <div className="container-edit grid items-center gap-20 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
              <Image
                src="/images/clinic-interior.jpg"
                alt="Interior da Clínica"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>
          
          <div>
            <Reveal>
              <p className="eyebrow mb-6 text-champagne-deep">O Ambiente</p>
              <h2 className="font-display text-display-md text-graphite dark:text-paper leading-tight">
                Um refúgio de sofisticação no centro de Sorocaba.
              </h2>
              <p className="mt-8 text-lg leading-relaxed text-graphite-soft dark:text-paper/60">
                Projetamos cada detalhe para oferecer não apenas um tratamento, mas uma experiência sensorial completa. Conforto absoluto, privacidade e tecnologia de ponta em cada sala.
              </p>
              <div className="mt-10 h-px w-full bg-line dark:bg-line-dark" />
              <div className="mt-10 grid grid-cols-2 gap-8">
                <div>
                  <p className="font-display text-2xl text-graphite dark:text-paper">Privacidade</p>
                  <p className="mt-2 text-sm text-graphite-soft dark:text-paper/50">Atendimento individualizado e discreto.</p>
                </div>
                <div>
                  <p className="font-display text-2xl text-graphite dark:text-paper">Conforto</p>
                  <p className="mt-2 text-sm text-graphite-soft dark:text-paper/50">Ambientes climatizados e ergonômicos.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Especialidades Premium */}
      <section className="bg-paper-dim py-32 dark:bg-ink-soft">
        <div className="container-edit">
          <div className="flex flex-col items-center text-center mb-20">
            <Reveal>
              <p className="eyebrow mb-6 text-champagne-deep">Especialidades</p>
              <h2 className="max-w-3xl font-display text-display-md text-graphite dark:text-paper">
                Excelência técnica em cada detalhe.
              </h2>
            </Reveal>
          </div>

          <RevealStagger className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {specializations.map((spec) => (
              <RevealItem key={spec.title} className="group relative overflow-hidden bg-paper p-10 shadow-sm transition-all duration-500 hover:shadow-2xl dark:bg-ink">
                <div className="absolute top-0 left-0 h-1 w-0 bg-champagne transition-all duration-500 group-hover:w-full" />
                <h3 className="font-display text-2xl text-graphite dark:text-paper group-hover:text-champagne-deep transition-colors duration-500">
                  {spec.title}
                </h3>
                <p className="mt-6 text-sm leading-relaxed text-graphite-soft dark:text-paper/60">
                  {spec.description}
                </p>
                <div className="mt-8 flex items-center gap-2 font-mono text-[0.6rem] uppercase tracking-widest text-champagne-deep opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <span>Saber mais</span>
                  <span>→</span>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* Procedimentos Listagem Luxo */}
      <section className="bg-paper py-32 dark:bg-ink">
        <div className="container-edit">
          <div className="grid gap-20 lg:grid-cols-[1fr_2fr]">
            <Reveal>
              <p className="eyebrow mb-6 text-champagne-deep">Catálogo</p>
              <h2 className="font-display text-display-md text-graphite dark:text-paper leading-tight">
                Procedimentos de Alta Performance.
              </h2>
              <p className="mt-8 text-graphite-soft dark:text-paper/60">
                Soluções precisas para quem não abre mão da saúde e da estética impecável.
              </p>
              <Link href="/especialidades/" className="btn-outline mt-12 inline-block">
                Ver Catálogo Completo
              </Link>
            </Reveal>

            <RevealStagger className="divide-y divide-line dark:divide-line-dark">
              {procedures.slice(0, 5).map((proc, index) => (
                <RevealItem key={proc.slug}>
                  <Link
                    href="/especialidades/"
                    className="group flex items-center justify-between gap-6 py-10"
                  >
                    <div className="flex items-baseline gap-8">
                      <span className="font-mono text-[0.65rem] text-champagne-deep">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-2xl text-graphite transition-all duration-500 group-hover:translate-x-2 group-hover:text-champagne-deep dark:text-paper dark:group-hover:text-champagne sm:text-3xl">
                        {proc.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                       <span className="hidden max-w-xs text-right text-xs uppercase tracking-widest text-graphite-soft/60 sm:block dark:text-paper/40">
                        {proc.short}
                      </span>
                      <span className="text-2xl text-line group-hover:text-champagne-deep transition-colors duration-500">→</span>
                    </div>
                  </Link>
                </RevealItem>
              ))}
            </RevealStagger>
          </div>
        </div>
      </section>

      {/* Depoimentos Elite */}
      <section className="bg-ink py-32 text-paper">
        <div className="container-edit">
          <div className="flex flex-col items-center text-center mb-20">
            <Reveal>
              <p className="eyebrow mb-6 text-champagne">Testemunhos</p>
              <h2 className="max-w-3xl font-display text-display-md">
                A voz da satisfação.
              </h2>
            </Reveal>
          </div>

          <RevealStagger className="grid gap-10 sm:grid-cols-2">
            {testimonials.slice(0, 2).map((t) => (
              <RevealItem key={t.name} className="relative bg-white/5 p-12 backdrop-blur-sm">
                <span className="absolute top-8 left-8 text-6xl font-display text-champagne/20">"</span>
                <p className="relative z-10 font-body text-xl italic leading-relaxed text-paper/90">
                  {t.text}
                </p>
                <div className="mt-10 flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-champagne/20 flex items-center justify-center font-display text-champagne">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-display text-lg">{t.name}</p>
                    <p className="text-xs uppercase tracking-widest text-champagne">Paciente Verificado</p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* CTA final Luxo */}
      <section className="relative py-40 overflow-hidden bg-ink">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src="/images/treatment-room.webp"
            alt="Sala de Atendimento"
            fill
            className="object-cover"
          />
        </div>
        <div className="container-edit relative z-10 text-center">
          <Reveal>
            <p className="eyebrow mb-8 text-champagne">O Próximo Passo</p>
            <h2 className="mx-auto max-w-3xl font-display text-display-md text-paper leading-tight">
              Pronto para elevar o padrão do seu sorriso?
            </h2>
            <p className="mt-8 mx-auto max-w-xl text-paper/60 text-lg">
              Agende uma consulta de avaliação e descubra o que a odontologia moderna pode fazer por você.
            </p>
            <div className="mt-16 flex flex-wrap justify-center gap-6">
              <a 
                href={clinic.contact.whatsappHref} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary !bg-champagne !text-ink !px-12 !py-5 text-sm hover:!bg-white transition-all duration-500 shadow-2xl shadow-champagne/20"
              >
                Iniciar Atendimento
              </a>
              <Link 
                href="/contato/" 
                className="btn-outline !border-white/20 !text-white !px-12 !py-5 text-sm hover:!border-white transition-all duration-500"
              >
                Localização
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
