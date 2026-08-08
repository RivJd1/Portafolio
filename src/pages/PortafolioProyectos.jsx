import { useState } from "react";
import PageHeader from "../components/PageHeader.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import Modal from "../components/Modal.jsx";
import { proyectos } from "../data/contenido.js";

export default function PortafolioProyectos() {
  const [proyectoActivo, setProyectoActivo] = useState(null);

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <PageHeader>
        PORTAFOLIO DE
        <br />
        PROYECTOS
      </PageHeader>
      <h2 className="text-xl font-extrabold text-center">PROYECTOS FAVORITOS</h2>
      <p className="text-center text-sm text-gray-600 max-w-xl mx-auto mt-2 mb-10">
        En este apartado me gustaría compartir algunos de los proyectos en los
        que me he visto envuelto a lo largo de mi trayectoria como estudiante.
      </p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {proyectos.map((p) => (
          <ProjectCard
            key={p.titulo}
            titulo={p.titulo}
            texto={p.texto}
            imagen={p.imagen}
            onClick={() => setProyectoActivo(p)}
          />
        ))}
      </div>

      <Modal open={!!proyectoActivo} onClose={() => setProyectoActivo(null)}>
        {proyectoActivo && (
          <div className="flex flex-col gap-4">
            <img
              src={proyectoActivo.imagen}
              alt={proyectoActivo.titulo}
              className="w-full aspect-video rounded-lg object-cover"
            />
            <h3 className="text-2xl font-extrabold">{proyectoActivo.titulo}</h3>

            {proyectoActivo.integrantes?.length > 0 && (
              <div>
                <h4 className="font-bold text-xs tracking-wide text-gray-500 mb-1">
                  INTEGRANTES
                </h4>
                <ul className="text-sm text-gray-700 list-disc list-inside">
                  {proyectoActivo.integrantes.map((nombre) => (
                    <li key={nombre}>{nombre}</li>
                  ))}
                </ul>
              </div>
            )}

            <div>
              <h4 className="font-bold text-xs tracking-wide text-gray-500 mb-1">
                DESCRIPCIÓN
              </h4>
              <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                {proyectoActivo.descripcion}
              </p>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}