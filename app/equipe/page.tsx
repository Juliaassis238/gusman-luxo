import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { RevealStagger, RevealItem } from "@/components/Reveal";
import { team } from "@/lib/data";

export const metadata: Metadata = {
  title: "Equipe",
  description: "Conheça a equipe clínica responsável pelo atendimento.",
};

export default function EquipePage() {
  return (
    <>
      <PageHero
        eyebrow="Equipe"
        title="Um time dedicado a cada detalhe."
        description="Profissionais treinados sob o mesmo padrão de precisão e acolhimento, coordenados diretamente pelo Dr. André Gusman."
      />

      <section className="container-edit pb-28">
        <RevealStagger className="grid gap-px overflow-hidden rounded-sm bg-line sm:grid-cols-3 dark:bg-line-dark">
          {team.map((member, index) => (
            <RevealItem
              key={member.name}
              className="group flex flex-col justify-between bg-paper p-10 transition-colors duration-500 hover:bg-paper-dim dark:bg-ink dark:hover:bg-ink-soft"
            >
              <div>
                <span className="font-mono text-xs text-champagne-deep dark:text-champagne">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="mt-8 flex h-16 w-16 items-center justify-center rounded-full border border-graphite/15 dark:border-paper/15">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-champagne-deep dark:text-champagne">
                    <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.3" />
                    <path d="M4 20C4 16 7.6 13.5 12 13.5C16.4 13.5 20 16 20 20" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                  </svg>
                </div>
                <h2 className="mt-6 font-display text-2xl text-graphite dark:text-paper">
                  {member.name}
                </h2>
                <p className="mt-2 font-mono text-[0.65rem] uppercase tracking-widest2 text-graphite-soft dark:text-paper/50">
                  {member.role}
                </p>
              </div>
              <p className="mt-6 text-sm leading-relaxed text-graphite-soft dark:text-paper/60">
                {member.focus}
              </p>
            </RevealItem>
          ))}
        </RevealStagger>
      </section>
    </>
  );
}
