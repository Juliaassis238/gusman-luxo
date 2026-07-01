import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { RevealStagger, RevealItem } from "@/components/Reveal";
import { specialties, procedures, clinic } from "@/lib/data";

export const metadata: Metadata = {
  title: "Especialidades",
  description: "Áreas de atuação clínica e catálogo completo de procedimentos.",
};

export default function EspecialidadesPage() {
  return (
    <>
      <PageHero
        eyebrow="Especialidades"
        title="Áreas de atuação clínica."
        description="Seis frentes de cuidado que cobrem da prevenção à cirurgia, sempre com o mesmo padrão de precisão."
      />

      <section className="container-edit pb-24">
        <RevealStagger className="grid gap-px overflow-hidden rounded-sm bg-line sm:grid-cols-2 dark:bg-line-dark">
          {specialties.map((spec, index) => (
            <RevealItem
              key={spec.title}
              className="group bg-paper p-10 transition-colors duration-500 hover:bg-paper-dim dark:bg-ink dark:hover:bg-ink-soft"
            >
              <span className="font-mono text-xs text-champagne-deep dark:text-champagne">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-6 font-display text-2xl text-graphite dark:text-paper sm:text-3xl">
                {spec.title}
              </h2>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-graphite-soft dark:text-paper/60">
                {spec.description}
              </p>
            </RevealItem>
          ))}
        </RevealStagger>
      </section>

      <section className="hairline bg-paper-dim py-24 dark:bg-ink-soft">
        <div className="container-edit">
          <p className="eyebrow mb-6">Catálogo</p>
          <h2 className="mb-14 max-w-2xl font-display text-display-md text-graphite dark:text-paper">
            Procedimentos.
          </h2>

          <RevealStagger className="divide-y divide-line dark:divide-line-dark">
            {procedures.map((proc, index) => (
              <RevealItem key={proc.slug}>
                <div className="grid gap-3 py-8 sm:grid-cols-[80px_1fr_1.2fr] sm:items-start sm:gap-8">
                  <span className="font-mono text-xs text-graphite-soft dark:text-paper/40">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-xl text-graphite dark:text-paper sm:text-2xl">
                      {proc.name}
                    </h3>
                    <p className="mt-2 font-mono text-[0.65rem] uppercase tracking-widest2 text-champagne-deep dark:text-champagne">
                      {proc.short}
                    </p>
                  </div>
                  <p className="text-sm leading-relaxed text-graphite-soft dark:text-paper/60">
                    {proc.description}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>

          <div className="mt-16 flex flex-col items-start gap-6 rounded-sm border border-line bg-paper p-10 sm:flex-row sm:items-center sm:justify-between dark:border-line-dark dark:bg-ink">
            <div>
              <p className="eyebrow mb-2">Não encontrou o que procura?</p>
              <p className="max-w-md text-sm text-graphite-soft dark:text-paper/60">
                Fale diretamente com a equipe para avaliar o procedimento indicado para o seu caso.
              </p>
            </div>
            <a href={clinic.contact.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-primary shrink-0">
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
