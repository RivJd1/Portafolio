import PageHeader from "../components/PageHeader.jsx";
import TimelineStep from "../components/TimelineStep.jsx";
import { historial } from "../data/contenido.js";

export default function HistorialAcademico() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <PageHeader>
        HISTORIAL
        <br />
        ACADEMICO
      </PageHeader>
      <div className="flex flex-col sm:flex-row gap-8 sm:gap-0 mt-10">
        {historial.map((step, i) => (
          <TimelineStep
            key={step.titulo}
            {...step}
            isLast={i === historial.length - 1}
          />
        ))}
      </div>
    </div>
  );
}
