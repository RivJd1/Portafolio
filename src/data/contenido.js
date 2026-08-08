import fotoPerfil from "../assets/perfil.jpeg";
import carro from "../assets/carro.jpeg";
import casa from "../assets/casa.jpeg";
import desarrollo from "../assets/desarrollo.jpeg";
import portales from "../assets/portales.jpeg";

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
  {
    titulo: "Robot de Pelea",
    texto: "Robot con placa de desarrollo arduino.",
    imagen: carro,
    integrantes: ["Josué David Rivera Ortega", "Laura Fabiola Berganza", "Juan Carlos Godoy Espinoza",],
    descripcion:
      "Este proyecto se llevo acabo en la clase de sistemas automatizados, fue desarrollado en un" +
      "placa arduino, con dos motores y un sensor IR, el prototipo de la imagen fue el primero pero, mas." + 
      "el final se llevo acabo dentro de una carcasa impresa en 3D y una rampa sumamnete EPICA"
  },
  {
    titulo: "Casa Inteligente",
    texto: "Casa automatizada.",
    imagen: casa,
    integrantes: ["Josué David Rivera Ortega"],
    descripcion: "Este proyecto se llevo acabo con una placa de desarrollo arduino MEGA, al ser pues una casa automatizada" +
    "que contaba con sistemas como una alarma para puertas, una bomba de agua, un sisetma de garaje automatizado y etc."
  },
  {
    titulo: "Proyecto en Windows Forms",
    texto: "Sistema de negocio para joyería.",
    imagen: desarrollo,
    integrantes: ["Josué David Rivera Ortega"],
    descripcion: "En este apartado mi trabaje en un proyecto que tenía el objetivo principal de controlar un sistema facturación" +
    "fue para una joyería ficticia de una clase de Desarrollo de Software. El proyecto se desarrollo con windows forms con mysql"
  },
  {
    titulo: "Sistema de asignación de Aulas UNICAH",
    texto: "Desarrollo de API para frontend.",
    imagen: portales,
    integrantes: ["Josué David Rivera Ortega"],
    descripcion: "En esta ocasión tuve la oportunidad de desarrollar una API en laravel donde configure distintas rutas que" +
    "luego enviaba a un servidor remoto para hacer su respectivas pruebas en el programa BRUNO"
  },
];

export const navItems = [
  { path: "/contacto", label: "Contacto" },
  { path: "/historial-academico", label: "Historial Académico" },
  { path: "/portafolio-proyectos", label: "Portafolio de proyectos" },
];
