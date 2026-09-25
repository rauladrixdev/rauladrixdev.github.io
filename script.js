/* Portfolio — interações simples: idioma, tema, abas e ações de contato. */

const translations = {
  pt: {
    nav: {
      about: "Sobre",
      projects: "Projetos",
      skills: "Tecnologias",
      contact: "Contato"
    },
    hero: {
      status: "Buscando uma oportunidade em tecnologia",
      role: "Estudante de ADS · Desenvolvimento, Dados e TI",
      headline: "Gosto de aprender fazendo: desenvolvo projetos para praticar programação, dados e fundamentos de TI. Tenho curiosidade por diferentes áreas e quero continuar evoluindo com prática, feedback e novos desafios.",
      ctaProjects: "Ver projetos",
      metaCourse: "ADS · conclusão dez/2027",
    },
    about: {
      eyebrow: "Sobre",
      title: "Estou construindo minha base em tecnologia",
      p1: "Sou estudante de Análise e Desenvolvimento de Sistemas na UNICID e gosto de aprender colocando a mão no código. Meus projetos passam por desenvolvimento, bancos de dados, análise de dados e tecnologias que quero conhecer melhor.",
      p2: "Em desenvolvimento, venho praticando APIs REST com FastAPI e Spring Boot, além de SQL, bancos relacionais, autenticação, validação e organização de código. Também estudo HTML, CSS e JavaScript para entender melhor a parte de frontend e a integração entre as camadas de uma aplicação.",
      p3: "Também tenho interesse em dados e engenharia de dados, com prática em Python, Pandas, SQL e Power BI. Suporte em TI também é uma área que considero, porque quero entender problemas reais, ajudar usuários e ampliar minha visão sobre tecnologia.",
      p4: "Estou procurando uma primeira oportunidade em tecnologia, sem me limitar a uma única função. Tenho curiosidade, gosto de pesquisar quando encontro algo novo e procuro praticar constantemente para transformar estudo em experiência profissional.",
      factEduLabel: "Formação",
      factEdu: "Análise e Desenvolvimento de Sistemas — UNICID",
      factFocusLabel: "Áreas de interesse",
      factAlsoLabel: "Tecnologias em prática",
      factInterestLabel: "Áreas de interesse",
      factInterest: "Desenvolvimento · Dados · Suporte em TI",
      factAvailLabel: "Objetivo",
      factAvail: "Estágio ou posição júnior em tecnologia"
    },
    skills: {
      title: "Tecnologias que venho estudando",
      lede: "Uma visão das tecnologias que venho praticando e das áreas que quero continuar explorando.",
      backend: "Desenvolvimento",
      layered: "Arquitetura em camadas",
      database: "Banco de Dados",
      devops: "Ferramentas e testes",
      frontend: "Frontend",
      apiIntegration: "Consumo de APIs REST",
      data: "Dados",
      otherBackends: "Java"
    },
    projects: {
      eyebrow: "Projetos selecionados",
      title: "O que tenho praticado",
      lede: "Projetos que uso para aprender na prática, testar ideias e entender melhor como as diferentes partes da tecnologia se conectam.",
      tabBackend: "Desenvolvimento",
      tabData: "Dados",
      descBackend: "Projetos de desenvolvimento usados para praticar APIs, banco de dados e organização de código.",
      descData: "Projetos para praticar SQL, análise de dados e construção de visualizações."
    },
    status: {
      done: "Concluído"
    },
    label: {
      goal: "Objetivo:",
      practice: "O que pratiquei:",
      structure: "Estrutura:",
      insight: "O que observei:"
    },
    proj: {
      auth: {
        problem: "praticar um fluxo de autenticação de usuários com senha protegida e emissão de tokens.",
        solution: "FastAPI, JWT, bcrypt, Pydantic e SQLAlchemy para construir os endpoints e validar os dados.",
        arch: "organização em Models, Schemas, Services e Routers para separar responsabilidades."
      },
      emp: {
        problem: "praticar operações CRUD para gerenciamento de funcionários.",
        solution: "Java e Spring Boot, com tratamento de exceções e uma API REST organizada.",
        arch: "separação em Controller, Service, Repository e DTO."
      },
      abc: {
        title: "Segmentação de Clientes — Curva ABC",
        problem: "entender quais clientes concentram maior valor dentro do conjunto analisado.",
        solution: "SQL Server, CTEs e Window Functions para organizar os dados e aplicar a Curva ABC."
      },
      sales: {
        title: "Dashboard de Vendas",
        problem: "organizar indicadores comerciais em uma visualização mais fácil de acompanhar.",
        solution: "Power BI e DAX para montar um dashboard interativo a partir dos dados do projeto."
      },
      olist: {
        title: "Análise de Performance Logística — E-commerce Olist",
        problem: "analisar um dataset público de e-commerce para estudar atrasos, frete e desempenho logístico.",
        solution: "Python e Pandas para carregar, limpar, cruzar e agregar os dados, usando Matplotlib e Seaborn para visualizar os resultados.",
        insight: "diferenças nos atrasos, nos custos de frete e no desempenho logístico entre os estados analisados."
      }
    },
    timeline: {
      eyebrow: "Formação",
      title: "Onde estou hoje",
      lede: "Um resumo simples da minha formação e do momento atual de aprendizado.",
      d1: "Em andamento",
      t1: "Análise e Desenvolvimento de Sistemas — UNICID",
      x1: "Graduação em andamento, com conclusão prevista para dezembro de 2027. Em paralelo, venho desenvolvendo projetos para praticar backend, bancos de dados e análise de dados."
    },
    gh: {
      title: "Código e projetos",
      lede: "Alguns dos repositórios que uso para mostrar o que estou estudando e praticando.",
      auth: "API de autenticação com JWT, bcrypt e organização em camadas.",
      emp: "API REST de gerenciamento de funcionários em Java/Spring Boot.",
      site: "Código-fonte deste portfólio, feito com HTML, CSS e JavaScript.",
      olist: "Análise de dados do dataset público Olist usando Python e Pandas.",
      profileLink: "Ver todos os repositórios no GitHub ↗"
    },
    contact: {
      eyebrow: "Contato",
      title: "Vamos conversar",
      lede: "Estou aberto a oportunidades de estágio e posições júnior em tecnologia. Tenho interesse em desenvolvimento, dados, engenharia de dados e suporte em TI, e gosto de aprender novas áreas na prática.",
      emailLabel: "E-mail",
      phoneLabel: "Telefone",
      send: "Enviar",
      copy: "Copiar",
      open: "Abrir"
    },
    footer: {
      truth: "Portfólio baseado em projetos e estudos próprios.",
      top: "Voltar ao topo ↑"
    },
    copied: "Copiado!"
  },

  en: {
    nav: {
      about: "About",
      projects: "Projects",
      skills: "Technologies",
      contact: "Contact"
    },
    hero: {
      status: "Looking for an opportunity in technology",
      role: "ADS Student · Development, Data and IT",
      headline: "I like learning by building: I create projects to practice programming, data, and IT fundamentals. I am curious about different areas and want to keep improving through practice, feedback, and new challenges.",
      ctaProjects: "View projects",
      metaCourse: "ADS · graduating Dec/2027",
    },
    about: {
      eyebrow: "About",
      title: "Building my foundation in technology",
      p1: "I'm a Systems Analysis and Development student at UNICID, and I like learning by building. My projects cover development, databases, data analysis, and technologies I want to understand better.",
      p2: "In development, I've been practicing REST APIs with FastAPI and Spring Boot, along with SQL, relational databases, authentication, validation, and code organization. I also study HTML, CSS, and JavaScript to better understand frontend and how application layers connect.",
      p3: "I'm also interested in data and data engineering, with practice in Python, Pandas, SQL, and Power BI. IT support is another area I'm open to, because I want to understand real problems, help users, and broaden my view of technology.",
      p4: "I'm looking for my first opportunity in technology without limiting myself to one function. I'm curious, I like researching when I find something new, and I keep practicing to turn study into professional experience.",
      factEduLabel: "Education",
      factEdu: "Systems Analysis and Development — UNICID",
      factFocusLabel: "Areas of interest",
      factAlsoLabel: "Technologies in practice",
      factInterestLabel: "Areas of interest",
      factInterest: "Development · Data · IT Support",
      factAvailLabel: "Goal",
      factAvail: "Internship or junior technology role"
    },
    skills: {
      title: "Technologies I'm studying",
      lede: "A view of the technologies I've been practicing and the areas I want to keep exploring.",
      backend: "Desenvolvimento",
      layered: "Layered architecture",
      database: "Database",
      devops: "Tools and testing",
      frontend: "Frontend",
      apiIntegration: "REST API consumption",
      data: "Data",
      otherBackends: "Java"
    },
    projects: {
      eyebrow: "Selected projects",
      title: "What I've been practicing",
      lede: "Projects I use to learn by doing, test ideas, and better understand how different parts of technology connect.",
      tabBackend: "Desenvolvimento",
      tabData: "Data",
      descBackend: "Development projects used to practice APIs, databases, and code organization.",
      descData: "Projects for practicing SQL, data analysis, and visualization."
    },
    status: {
      done: "Completed"
    },
    label: {
      goal: "Goal:",
      practice: "What I practiced:",
      structure: "Structure:",
      insight: "What I observed:"
    },
    proj: {
      auth: {
        problem: "practice a user authentication flow with protected passwords and token issuance.",
        solution: "FastAPI, JWT, bcrypt, Pydantic, and SQLAlchemy to build endpoints and validate data.",
        arch: "Models, Schemas, Services, and Routers to separate responsibilities."
      },
      emp: {
        problem: "practice CRUD operations for employee management.",
        solution: "Java and Spring Boot, with exception handling and an organized REST API.",
        arch: "separation into Controller, Service, Repository, and DTO."
      },
      abc: {
        title: "Customer Segmentation — ABC Analysis",
        problem: "understand which customers concentrate the most value within the analyzed dataset.",
        solution: "SQL Server, CTEs, and Window Functions to organize the data and apply ABC analysis."
      },
      sales: {
        title: "Sales Dashboard",
        problem: "organize commercial indicators into an easier-to-follow visualization.",
        solution: "Power BI and DAX to build an interactive dashboard from the project data."
      },
      olist: {
        title: "Logistics Performance Analysis — Olist E-commerce",
        problem: "analyze a public e-commerce dataset to study delays, freight, and logistics performance.",
        solution: "Python and Pandas to load, clean, join, and aggregate the data, using Matplotlib and Seaborn to visualize the results.",
        insight: "differences in delays, freight costs, and logistics performance among the analyzed states."
      }
    },
    timeline: {
      eyebrow: "Education",
      title: "Where I am today",
      lede: "A simple summary of my education and current learning stage.",
      d1: "In progress",
      t1: "Systems Analysis and Development — UNICID",
      x1: "Degree in progress, with graduation expected in December 2027. Alongside my studies, I build projects to practice backend, databases, and data analysis."
    },
    gh: {
      title: "Code and projects",
      lede: "Some repositories I use to show what I'm studying and practicing.",
      auth: "Authentication API with JWT, bcrypt, and layered organization.",
      emp: "Employee management REST API in Java/Spring Boot.",
      site: "Source code for this portfolio, built with HTML, CSS, and JavaScript.",
      olist: "Analysis of the public Olist dataset using Python and Pandas.",
      profileLink: "See all repositories on GitHub ↗"
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's talk",
      lede: "I'm open to internship and junior technology opportunities. I'm interested in development, data, data engineering, and IT support, and I enjoy learning new areas through practice.",
      emailLabel: "Email",
      phoneLabel: "Phone",
      send: "Send",
      copy: "Copy",
      open: "Open"
    },
    footer: {
      truth: "Portfolio based on my own projects and studies.",
      top: "Back to top ↑"
    },
    copied: "Copied!"
  }
};

let currentLang = "pt";

function getByPath(object, path) {
  return path.split(".").reduce((value, key) => value?.[key], object) ?? null;
}

function applyTranslations(lang) {
  const dictionary = translations[lang] || translations.pt;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = getByPath(dictionary, element.dataset.i18n);

    if (value !== null) {
      element.textContent = value;
    }
  });

  document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";

  document.querySelectorAll(".lang-btn").forEach((button) => {
    const active = button.dataset.lang === lang;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  currentLang = lang;
}

function setupLanguage() {
  document.querySelectorAll(".lang-btn").forEach((button) => {
    button.addEventListener("click", () => applyTranslations(button.dataset.lang));
  });
}

function setupTheme() {
  const toggle = document.getElementById("themeToggle");
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isDark = savedTheme ? savedTheme === "dark" : prefersDark;

  document.documentElement.classList.toggle("dark", isDark);
  toggle.setAttribute("aria-pressed", String(isDark));

  toggle.addEventListener("click", () => {
    const nextIsDark = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", nextIsDark);
    localStorage.setItem("theme", nextIsDark ? "dark" : "light");
    toggle.setAttribute("aria-pressed", String(nextIsDark));
  });
}

function setupNavigation() {
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("primaryNav");

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function setupTabs() {
  const tabs = document.querySelectorAll(".tab");
  const panels = document.querySelectorAll(".tab-panel");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((item) => item.setAttribute("aria-selected", String(item === tab)));

      panels.forEach((panel) => {
        const active = panel.id === tab.getAttribute("aria-controls");
        panel.classList.toggle("active", active);
        panel.hidden = !active;
      });
    });
  });
}

async function copyText(buttonId, valueId) {
  const button = document.getElementById(buttonId);
  const value = document.getElementById(valueId)?.textContent.trim();

  if (!value) return;

  try {
    await navigator.clipboard.writeText(value);
    const original = getByPath(translations[currentLang], "contact.copy") || "Copiar";
    button.textContent = getByPath(translations[currentLang], "copied") || "Copiado!";

    setTimeout(() => {
      button.textContent = original;
    }, 1600);
  } catch {
    button.textContent = "Selecione o texto";
  }
}

function setupCopyActions() {
  document.getElementById("copyEmail").addEventListener("click", () => copyText("copyEmail", "emailValue"));
  document.getElementById("copyPhone").addEventListener("click", () => copyText("copyPhone", "phoneValue"));
}

function setFooterYear() {
  const year = document.getElementById("footYear");
  year.textContent = new Date().getFullYear();
}

setupLanguage();
setupTheme();
setupNavigation();
setupTabs();
setupCopyActions();
setFooterYear();
applyTranslations("pt");
