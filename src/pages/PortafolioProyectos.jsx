import PageHeader from "../components/PageHeader.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import { proyectos } from "../data/contenido.js";

export default function PortafolioProyectos() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <PageHeader>
        PORTAFOLIO DE
        <br />
        PROYECTOS
      </PageHeader>
      <h2 className="text-xl font-extrabold text-center">PROYECTOS FAVORITOS</h2>
      <p className="text-center text-sm text-gray-600 max-w-xl mx-auto mt-2 mb-10">
        En este apartado me gustaría compartir algunos de los proyectos en los que me he visto envuelto a lo largo de mi trayectoria como estudiante.
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {proyectos.map((p) => (
          <ProjectCard
            key={p.titulo}
            titulo={p.titulo}
            texto={p.texto}
            imagen={p.imagen}
          />
        ))}
      </div>
    </div>
  );
}