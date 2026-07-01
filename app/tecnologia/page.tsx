import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { RevealStagger, RevealItem, Reveal } from "@/components/Reveal";
import { technology } from "@/lib/data";

export const metadata: Metadata = {
  title: "Tecnologia",
  description: "Estrutura, equipamentos e protocolos que sustentam cada procedimento.",
};

export default function TecnologiaPage() {
  return (
    <>
      <PageHero
        eyebrow="Tecnologia"
        title="Instrumentos de precisão a serviço do cuidado."
        description="Equipamentos e protocolos escolhidos para reduzir tempo de cadeira, aumentar previsibilidade e elevar o conforto do paciente."
      />

      <section className="container-edit pb-24">
        <RevealStagger className="grid gap-px overflow-hidden rounded-sm bg-line sm:grid-cols-2 dark:bg-line-dark">
          {technology.map((item, index) => (
            <RevealItem
              key={item.title}
              className="bg-paper p-10 transition-colors duration-500 hover:bg-paper-dim dark:bg-ink dark:hover:bg-ink-soft"
            >
              <span className="font-mono text-xs text-champagne-deep dark:text-champagne">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-6 font-display text-2xl text-graphite dark:text-paper">
                {item.title}
              </h2>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-graphite-soft dark:text-paper/60">
                {item.description}
              </p>
            </RevealItem>
          ))}
        </RevealStagger>
      </section>

      <section className="hairline bg-paper-dim py-24 dark:bg-ink-soft">
        <div className="container-edit grid gap-10 sm:grid-cols-3">
          <Reveal>
            <p className="font-display text-4xl text-graphite dark:text-paper">100%</p>
            <p className="mt-3 text-sm leading-relaxed text-graphite-soft dark:text-paper/60">
              Materiais esterilizados e rastreados por procedimento.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-display text-4xl text-graphite dark:text-paper">Digital</p>
            <p className="mt-3 text-sm leading-relaxed text-graphite-soft dark:text-paper/60">
              Fluxo de imagem e planejamento sem filme radiográfico.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="font-display text-4xl text-graphite dark:text-paper">24h</p>
            <p className="mt-3 text-sm leading-relaxed text-graphite-soft dark:text-paper/60">
              Estrutura de plantão pronta para qualquer urgência.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
