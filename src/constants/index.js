import {
  mobile,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  shopify,
  convert_money,
  costs,
  dashboard,
  fitnessApp,
  LojaPlaystation,
  mercadoCel,
  moviesLib,
  secretWord
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Sobre",
  },
  {
    id: "work",
    title: "Trabalho",
  },
  {
    id: "contact",
    title: "Contato",
  },
];

const services = [
  {
    title: "DesenvolvedorWeb",
    icon: web,
  },
  {
    title: "Desenvolvedor React Native ",
    icon: mobile,
  },
  {
    title: "Desenvolvedor Front End",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },

];

const experiences = [
  
  {
    title: "Desenvolvedor Front end",
    company_name: "Freelancer",
    icon: shopify,
    iconBg: "#383E56",
    date: "set 2022 - atual ",
    points: [
      "Mais de 50 projetos concluidos de diversos níveis de complexidade",
      "Responsável por desenvolver soluções desde a parte de levantamento de requisitos até a revisão final dos projetos.",
      "Desenvolvi sistemas e landing-pages atuando como ux/ui e desenvolvedor front end",
      " Desenvolvi e entreguei soluções de alta qualidade com tecnologias modernas",
      "Atuei constatemente nos processos a fim de identificar e resolver possiveis bugs e propor melhorias com foco em melhorar o desempenho e a performancer do sofware.",
      "Desenvolvi aspectos comportamentais ao adotar uma postura mais proativa, comunicativa, assertiva e responsável."
    ],
  },
 
];

const testimonials = [
  {
    testimonial:
      "Eu pensei que era impossível fazer um site tão bonito quanto os nossos produtos, mas Eric provou que eu estava errado.",
    name: "Sara Lee",
    designation: "Cliente",
    company: "Freelancer.com",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Nunca conheci um desenvolvedor web que realmente se preocupasse com o sucesso de seus clientes como o Eric.",
    name: "Chris Brown",
    designation: "Cliente",
    company: "Freelancer.com",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Depois que o Eric otimizou nosso site, nosso tráfego aumentou 50%.",
    name: "Lisa Wang",
    designation: "Cliente",
    company: "Freeelancer.com",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Fitness App",
    description:
      "FitnessApp é uma aplicação que conta com mais de 3 mil tipos de exercícios, gifs e vídeos de demonstração",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Material ui",
        color: "green-text-gradient",
      },
      {
        name: "React Hooks",
        color: "pink-text-gradient",
      },
    ],
    image:fitnessApp ,
    source_code_link: "https://lnkd.in/dk3QNckT",
  },
  {
    name: "Dashboard",
    description:
      "DashBoard admin é uma projeto feito em React, Contém 7 tipos de gráficos, calendário, kanban e editor de texto.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Material ui",
        color: "green-text-gradient",
      },
      {
        name: "React Hooks",
        color: "pink-text-gradient",
      },
    ],
    image:dashboard ,
    source_code_link: "https://syncfusion-dashboard.netlify.app/",
  },
  {
    name: "Costs",
    description:
      "projeto de gerenciamentos de projetos. nele utizei React, styled components, react hooks e uma api json-server hospedada na versel.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Styled Components",
        color: "green-text-gradient",
      },
      {
        name: "React Hooks",
        color: "pink-text-gradient",
      },
    ],
    image:costs ,
    source_code_link: "https://costs-full.netlify.app",
  },
  {
    name: "Secret Word",
    description:
      'Secret-word, É um jogo inspirado no jogo "Acerte a palavra" do Programa silvio santos, Nele utilizei algumas das funcionabilidades do react como os hooks, componentes,css modules e etc, Espero que goste!!',
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Css Modules",
        color: "green-text-gradient",
      },
      {
        name: "React Hooks",
        color: "pink-text-gradient",
      },
    ],
    image:secretWord ,
    source_code_link: "https://secret-word-reactjs.netlify.app/",
  },
  {
    name: "convert money",
    description:
      "O Convert money é um conversor de moedas feito em JavaScript, Nele é possivel fazer conversão entre 3 moedas, Real, Dolar e Euro.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "Html",
        color: "green-text-gradient",
      },
      {
        name: "Css",
        color: "pink-text-gradient",
      },
    ],
    image:convert_money ,
    source_code_link: "https://devclub-convert-money.netlify.app/",
  },
 
  {
    name: "Loja Playstation",
    description:
      "Loja Playstation é uma landing page do controle dualshock 4 compativel com o Playstation 4 feita em Html, Css e js.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image:LojaPlaystation ,
    source_code_link: "https://loja-playstation.netlify.app/",
  },
  {
    name: "Mercado Cel",
    description:
      "Mercado cel é um site onde você encontra as informações de qualquer celular, utilizei algumas das funcionabilidades do react, hooks,react router, Styled components.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Styled Components",
        color: "green-text-gradient",
      },
      {
        name: "React Hooks",
        color: "pink-text-gradient",
      },
    ],
    image:mercadoCel ,
    source_code_link: "https://mercado-cel.netlify.app/",
  },
  {
    name: "Movies Lib",
    description:
      "Mercado cel é um site conde você encontra as informações de qualquer celular, Nele utilizei algumas das funcionabilidades do react como os hooks, componentes,react router, Styled components e etc",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Css Modules",
        color: "green-text-gradient",
      },
      {
        name: "React Hooks",
        color: "pink-text-gradient",
      },
    ],
    image:moviesLib ,
    source_code_link: "https://movies-lib-reactjs.netlify.app/",
  },

];

export { services, technologies, experiences, testimonials, projects };
