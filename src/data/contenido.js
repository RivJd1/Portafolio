import fotoPerfil from "../assets/perfil.jpeg";
import carro from "../assets/carro.jpeg";
import casa from "../assets/casa.jpeg";
import desarrollo from "../assets/desarrollo.jpeg";
import redes from "../assets/redes.jpeg";

export const perfil = {
  foto: fotoPerfil,
  nombre: "Josué David Rivera Ortega",
  bio: "Una persona de hábitos fuertes, enfocada en la mejora continua tanto en la universidad como en mi vida personal. Me apasiona resolver problemas técnicos con orden, pero también valoro muchísimo mantener un estilo de vida activo y saludable..",
};


export const contacto = {
  gmail: "jdriv2005@gmail.com",
  instagram: "@riv_j05",
  github: "github.com/RivJd1",
  telefono: "+504 9875-5520",
};

export const flashCards = [
  {
    id: "habilidades",
    titulo: "HABILIDADES",
    bg: "bg-amber-300",
    texto:
      "Tengo experiencia en el desarrollo he implementación de programas como de lenguajes (C++, PHP, Python). Tambien excelentes habiliades sociales como trabajar en equipo, empatia y solidaridad.",
  },
  {
    id: "filosofia",
    titulo: "FILOSOFÍA DE TRABAJO",
    bg: "bg-red-400",
    texto:
      "Mejora continua: busco pequeños cambios positivos constantes para optimizar procesos y calidad de manera gradual.",
  },
  {
    id: "enfoque",
    titulo: "ENFOQUE ACTUAL",
    bg: "bg-lime-400",
    texto:
      "Actualmente mi foco de atención esta en adquirir nuevos conocimientos para desarrollar mejor mi trabajo y convertirme en un buen ingeniero.",
  },
];

export const historial = [
  { titulo: "ESCUELA", texto: "Escuela Parroquial San Isidro. \n2012-2017" },
  { titulo: "COLEGIO", texto: "Centro Insitucional Guadalupe de Quezada. \n2018-2020" },
  { titulo: "BACHILLERATO", texto: "Instituto San Isidro. \nBTP: Informatica. \n2021-2023." },
  { titulo: "UNIVERSIDAD", texto: "UNICAH. \nIngienería en Ciencias de la Computación. \nCursando" },
];

export const proyectos = [
  { titulo: "Proyecto 1", texto: "Robot de pelea.", imagen: carro},
  { titulo: "Proyecto 2", texto: "Casa inteligente.", imagen: casa},
  { titulo: "Proyecto 3", texto: "Prueba de equipos en Cisco Packet Tracer.", imagen: desarrollo},
  { titulo: "Proyecto 4", texto: "Desarrollo de software en windows forms.", imagen: redes},
];

export const navItems = [
  { path: "/contacto", label: "Contacto" },
  { path: "/historial-academico", label: "Historial Académico" },
  { path: "/portafolio-proyectos", label: "Portafolio de proyectos" },
];
