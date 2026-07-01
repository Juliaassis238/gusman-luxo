import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Reveal, RevealStagger, RevealItem } from "@/components/Reveal";
import { clinic, specializations, procedures, testimonials } from "@/lib/data";
import { ReviewCard } from "@/components/ReviewCard";

export const metadata: Metadata = {
  title: `${clinic.doctorName} — Especialista em Estética Dental Premium em Sorocaba`,
  description: clinic.about,
};

export default function HomePage() {
  return (
    <>
      {/* Hero Premium - Foco no Sorriso */}
      <section className="relative min-h-screen overflow-hidden bg-ink pt-20">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="/images/hero-smile.jpg"
            alt="Sorriso Perfeito e Natural"
            fill
            className="object-cover scale-105"
            priority
          />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-ink via-ink/60 to-transparent" />

        <div className="container-edit relative z-20 flex min-h-[calc(100vh-80px)] flex-col justify-center py-12 lg:py-24">
          <Reveal>
            <div className="mb-8 flex items-center gap-4">
              <span className="h-px w-12 bg-champagne" />
              <span className="font-mono text-xs uppercase tracking-widest2 text-champagne">
                Excelência em Estética Dental
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="font-display text-display-xl text-paper leading-[0.9]">
              A Perfeição <br />
              em cada <br />
              <span className="italic text-champagne">Detalhe.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-10 max-w-xl font-body text-lg leading-relaxed text-paper/80 lg:text-xl">
              Especialista em transformações de alto impacto. Unimos ciência e arte para criar o sorriso que você sempre desejou.
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
                Agendar Avaliação Estética
              </a>
              <Link 
                href="/especialidades/" 
                className="btn-outline !border-white/20 !text-white !px-10 !py-4 text-sm hover:!border-white transition-all duration-500"
              >
                Ver Procedimentos
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Seção de Procedimento - Estética Dental */}
      <section className="bg-paper py-32 dark:bg-ink">
        <div className="container-edit grid items-center gap-20 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
              <Image
                src="/images/aesthetic-dentistry.webp"
                alt="Planejamento de Estética Dental"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-ink/80 p-4 backdrop-blur-md">
                <p className="font-mono text-[0.65rem] uppercase tracking-widest text-champagne">
                  Legenda: Planejamento Digital ↑
                </p>
                <p className="mt-1 text-xs text-paper/60">
                  Simulação precisa de cor e forma para resultados naturais.
                </p>
              </div>
            </div>
          </Reveal>
          
          <div>
            <Reveal>
              <p className="eyebrow mb-6 text-champagne-deep">Alta Performance</p>
              <h2 className="font-display text-display-md text-graphite dark:text-paper leading-tight">
                Tecnologia que <br /> transforma.
              </h2>
              <p className="mt-8 text-lg leading-relaxed text-graphite-soft dark:text-paper/60">
                Utilizamos os materiais mais nobres da odontologia mundial para garantir durabilidade e uma estética que se integra perfeitamente à sua face.
              </p>
              <div className="mt-10 h-px w-full bg-line dark:bg-line-dark" />
              <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-champagne-deep">→</span>
                    <p className="font-display text-2xl text-graphite dark:text-paper">Lentes de Contato</p>
                  </div>
                  <p className="text-sm text-graphite-soft dark:text-paper/50">Lâminas ultra-finas para correção de forma e cor.</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-champagne-deep">→</span>
                    <p className="font-display text-2xl text-graphite dark:text-paper">Implantes</p>
                  </div>
                  <p className="text-sm text-graphite-soft dark:text-paper/50">Reabilitação funcional com máxima estética.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Procedimento - Clareamento */}
      <section className="bg-paper-dim py-32 dark:bg-ink-soft">
        <div className="container-edit grid items-center gap-20 lg:grid-cols-2 lg:direction-rtl">
          <div className="lg:order-2">
            <Reveal>
              <div className="relative aspect-[16/9] overflow-hidden rounded-sm shadow-2xl">
                <Image
                  src="/images/procedure-whitening.jpg"
                  alt="Procedimento de Clareamento Profissional"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-champagne px-3 py-1">
                   <p className="font-mono text-[0.6rem] uppercase tracking-widest text-ink font-bold">
                    Procedimento Ativo
                  </p>
                </div>
              </div>
              <p className="mt-4 font-mono text-[0.6rem] uppercase tracking-widest text-graphite-soft/60 dark:text-paper/40">
                Legenda: Clareamento a laser monitorado para sensibilidade zero.
              </p>
            </Reveal>
          </div>
          
          <div className="lg:order-1">
            <Reveal>
              <p className="eyebrow mb-6 text-champagne-deep">Clareamento Premium</p>
              <h2 className="font-display text-display-md text-graphite dark:text-paper leading-tight">
                Brilho Natural.
              </h2>
              <p className="mt-8 text-lg leading-relaxed text-graphite-soft dark:text-paper/60">
                Protocolos exclusivos que removem manchas profundas sem comprometer a integridade do esmalte dental. Resultados visíveis desde a primeira sessão.
              </p>
              <a href={clinic.contact.whatsappHref} className="btn-outline mt-10 inline-block">
                Saber mais sobre clareamento
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Especialidades Premium */}
      <section className="bg-paper py-32 dark:bg-ink">
        <div className="container-edit">
          <div className="flex flex-col items-center text-center mb-20">
            <Reveal>
              <p className="eyebrow mb-6 text-champagne-deep">Especialidades</p>
              <h2 className="max-w-3xl font-display text-display-md text-graphite dark:text-paper">
                Soluções Completas.
              </h2>
            </Reveal>
          </div>

          <RevealStagger className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {specializations.map((spec) => (
              <RevealItem key={spec.title} className="group relative overflow-hidden bg-paper-dim p-10 transition-all duration-500 hover:bg-white hover:shadow-2xl dark:bg-ink-soft dark:hover:bg-ink">
                <div className="absolute top-0 left-0 h-1 w-0 bg-champagne transition-all duration-500 group-hover:w-full" />
                <h3 className="font-display text-2xl text-graphite dark:text-paper group-hover:text-champagne-deep transition-colors duration-500">
                  {spec.title}
                </h3>
                <p className="mt-6 text-sm leading-relaxed text-graphite-soft dark:text-paper/60">
                  {spec.description}
                </p>
                <div className="mt-8 flex items-center gap-2 font-mono text-[0.6rem] uppercase tracking-widest text-champagne-deep">
                  <span>Explorar especialidade</span>
                  <span className="group-hover:translate-x-2 transition-transform duration-500">→</span>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* Catálogo com Legendas */}
      <section className="bg-paper-dim py-32 dark:bg-ink-soft">
        <div className="container-edit">
          <div className="grid gap-20 lg:grid-cols-[1fr_2fr]">
            <Reveal>
              <p className="eyebrow mb-6 text-champagne-deep">Procedimentos</p>
              <h2 className="font-display text-display-md text-graphite dark:text-paper leading-tight">
                Guia de Tratamentos.
              </h2>
              <p className="mt-8 text-graphite-soft dark:text-paper/60">
                Clique em um procedimento para entender como podemos ajudar você ↓
              </p>
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
                      <div className="flex flex-col">
                        <span className="font-display text-2xl text-graphite transition-all duration-500 group-hover:text-champagne-deep dark:text-paper dark:group-hover:text-champagne sm:text-3xl">
                          {proc.name}
                        </span>
                        <span className="mt-2 text-[0.65rem] uppercase tracking-widest text-graphite-soft/40 dark:text-paper/30">
                          Legenda: {proc.short}
                        </span>
                      </div>
                    </div>
                    <span className="text-2xl text-line group-hover:text-champagne-deep transition-all duration-500 group-hover:translate-x-2">→</span>
                  </Link>
                </RevealItem>
              ))}
            </RevealStagger>
          </div>
        </div>
      </section>

      {/* CTA final Luxo */}
      <section className="relative py-40 overflow-hidden bg-ink">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/images/hero-smile.jpg"
            alt="Fundo Sorriso"
            fill
            className="object-cover"
          />
        </div>
        <div className="container-edit relative z-10 text-center">
          <Reveal>
            <p className="eyebrow mb-8 text-champagne">Inicie sua Transformação</p>
            <h2 className="mx-auto max-w-3xl font-display text-display-md text-paper leading-tight">
              O sorriso dos seus sonhos está a um clique de distância.
            </h2>
            <div className="mt-16 flex flex-wrap justify-center gap-6">
              <a 
                href={clinic.contact.whatsappHref} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary !bg-champagne !text-ink !px-12 !py-5 text-sm hover:!bg-white transition-all duration-500 shadow-2xl shadow-champagne/20"
              >
                Agendar Consultoria via WhatsApp
              </a>
            </div>
            <p className="mt-8 font-mono text-[0.6rem] uppercase tracking-widest text-paper/40">
              Atendimento exclusivo em Sorocaba · SP
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
