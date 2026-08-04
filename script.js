/* ============================================================
   Raul Adriano Jardim — Portfolio
   Vanilla JS: i18n (pt/en/es), theme, tabs, mobile nav, copy actions
   ============================================================ */

const translations = {
  pt: {
    nav: { about:"Sobre", projects:"Projetos", skills:"Skills", github:"GitHub", resume:"Currículo", contact:"Contato" },
    hero: {
      status:"Disponível para estágio e posições júnior",
      role:"Desenvolvedor Backend Python",
      headline:"Construindo APIs REST com FastAPI, backends organizados em camadas e projetos com foco em acessibilidade — da modelagem do banco de dados à entrega.",
      ctaProjects:"Ver projetos", ctaResume:"Ver currículo",
      metaCity:"São Paulo, SP", metaCountry:"Brasil", metaCourse:"ADS · conclusão dez/2026",
      metaPcdLabel:"PCD — Surdez", metaPcd:"Elegível para vagas afirmativas", metaLangLabel:"Idiomas"
    },
    about: {
      eyebrow:"Sobre", title:"Foco em backend, com base sólida em dados",
      p1:"Sou estudante de Análise e Desenvolvimento de Sistemas na UNICID (São Paulo), cursando o 4º semestre, com conclusão prevista para dezembro de 2026. Dedico a maior parte do meu tempo de estudo ao desenvolvimento Backend em Python.",
      p2:"No dia a dia isso significa construir APIs REST com FastAPI, cuidar de autenticação com JWT e bcrypt, validar dados com Pydantic v2 e modelar a persistência com SQLAlchemy sobre PostgreSQL — organizando o código em camadas (Models, Schemas, Services, Routers) para manter os projetos legíveis e fáceis de evoluir.",
      p3:"Também trabalho com testes automatizados em pytest, containerização com Docker e, em paralelo, mantenho contato com Java/Spring Boot e com análise de dados em SQL e Power BI.",
      p4:"Estou em busca da minha primeira oportunidade de estágio ou posição júnior em Desenvolvimento Backend Python — presencial, híbrida ou remota.",
      factEduLabel:"Formação", factEdu:"Análise e Desenvolvimento de Sistemas — UNICID",
      factFocusLabel:"Foco atual", factAlsoLabel:"Também estuda",
      factLangLabel:"Idiomas", factLang:"Português (nativo) · Libras (fluente) · Inglês e Espanhol (intermediário) · ASL (intermediário)",
      factAvailLabel:"Disponibilidade", factAvail:"Estágio ou posição júnior — presencial, híbrido ou remoto"
    },
    skills: {
      title:"Stack técnica", lede:"Tecnologias que uso de forma prática em projetos reais, organizadas por área.",
      backend:"Backend", layered:"Arquitetura em camadas", database:"Banco de Dados", devops:"DevOps & Testes",
      tools:"Ferramentas", frontend:"Frontend", apiIntegration:"Integração com APIs REST", data:"Dados",
      otherBackends:"Outros Backends", languages:"Idiomas",
      langPt:"Português — nativo", langLibras:"Libras — fluente", langEn:"Inglês — intermediário",
      langEs:"Espanhol — intermediário", langAsl:"ASL — intermediário"
    },
    projects: {
      eyebrow:"Áreas de atuação", title:"Projetos por área", lede:"Projetos reais, organizados pela frente de trabalho principal de cada um.",
      tabBackend:"Backend", tabFrontend:"Frontend", tabFullstack:"Full Stack", tabData:"Data Analytics",
      descBackend:"APIs REST em Python (FastAPI) e Java (Spring Boot), com autenticação, testes e arquitetura em camadas.",
      descFrontend:"Interfaces em HTML, CSS e JavaScript, incluindo consumo de APIs REST.",
      descFullstack:"Projetos ponta a ponta: backend, banco de dados, regras de negócio e frontend integrados.",
      descData:"Modelagem, análise e visualização de dados com SQL, Python e Power BI.",
      seeDetails:"Ver case study ↓"
    },
    status: { dev:"Em desenvolvimento", done:"Concluído" },
    label: { problem:"Problema:", solution:"Solução:", architecture:"Arquitetura:", backend:"Backend:", database:"Banco de dados:", frontend:"Frontend:", quality:"Qualidade:", insight:"Principais insights:" },
    proj: {
      taskflow: { problem:"organizar tarefas com endpoints CRUD confiáveis e cobertos por testes.", solution:"API REST construída de forma incremental, com foco em qualidade de código e testabilidade; suíte de testes com pytest e containerização com Docker. Desenvolvido integralmente em inglês.", arch:"camadas (Models, Schemas, Services, Routers), versionamento com Conventional Commits.", fsback:"FastAPI com arquitetura em camadas.", fsquality:"testes automatizados com pytest e containerização com Docker." },
      auth: { problem:"login seguro de usuários, com hashing de senha e emissão de tokens.", solution:"API de autenticação em FastAPI com JWT, bcrypt e validação via Pydantic v2.", arch:"refatorada de uma estrutura plana para camadas (Models, Schemas, Services, Routers).", fsback:"FastAPI com autenticação JWT e bcrypt." },
      emp: { problem:"controlar dados de colaboradores com operações CRUD completas.", solution:"API REST em Java/Spring Boot com tratamento de exceções customizado e documentação bilíngue (PT/EN).", arch:"camadas (Controller, Service, Repository, DTO)." },
      signr: { problem:"tornar o aprendizado de Libras mais consistente ao longo do tempo.", solution:"aplicação web de aprendizado de Libras com gamificação — XP, sequência diária e repetição espaçada — construída sem frameworks, apenas HTML, CSS e JavaScript." },
      ilFront: { title:"Interface do InterLibras AI", problem:"apresentar perfis, agenda e chat de forma simples para usuários surdos e ouvintes.", solution:"camada de frontend em HTML, CSS e JavaScript integrada à API em FastAPI." },
      il: { back:"FastAPI, com autenticação JWT, agendamentos com regras de negócio e gerenciamento de disponibilidade." },
      abc: { title:"Segmentação de Clientes — Curva ABC", problem:"identificar quais clientes concentram maior valor para o negócio.", solution:"análise de dados em SQL Server usando CTEs e Window Functions para segmentar clientes pela metodologia Curva ABC." },
      sales: { title:"Dashboard de Vendas", problem:"acompanhar indicadores comerciais de forma visual e centralizada.", solution:"dashboard interativo em Power BI para análise de indicadores de vendas." },
      olist: { title:"Análise de Performance Logística — E-commerce Olist", problem:"auditar dados de uma operação real de e-commerce para mapear gargalos logísticos estaduais e medir o impacto financeiro dos atrasos de entrega.", solution:"pipeline de dados completo em Python — carga, limpeza de nulos e inconsistências, cruzamento de tabelas e agregações — com visualizações geradas em Seaborn e Matplotlib.", insight:"Alagoas lidera atrasos no país (20,8%); o Rio de Janeiro mostra ineficiência operacional mesmo com frete barato e proximidade; entregas com mais de 50 dias de atraso custaram, em média, 39,8% a mais de frete." }
    },
    il: {
      eyebrow:"Case study", sub:"Plataforma de acessibilidade em Libras — projeto pessoal, nascido de uma dificuldade que eu mesmo enfrento.",
      contextLabel:"Contexto", context:"Sou uma pessoa surda. O InterLibras AI nasceu da minha própria experiência: a dificuldade real de encontrar profissionais que se comuniquem em Libras no dia a dia.",
      problemsLabel:"Problemas observados", problemsIntro:"Pela minha vivência e pela de outras pessoas surdas, é comum enfrentar dificuldades para:",
      p1:"encontrar médicos, psicólogos, advogados ou professores que saibam Libras",
      p2:"encontrar intérpretes ou profissionais bilíngues disponíveis",
      p3:"depender constantemente de terceiros para intermediar a comunicação",
      p4:"procurar profissionais por grupos de redes sociais ou indicação, sem um canal centralizado",
      p5:"gastar tempo considerável nessa busca — o que, em alguns casos, leva a desistir do atendimento",
      problemsNote:"Isso reduz a autonomia em situações do cotidiano. Não tenho números para quantificar o quanto — é uma observação da minha vivência, não uma estatística.",
      goalLabel:"Objetivo", goal:"Promover mais autonomia para pessoas surdas, facilitando a busca por profissionais que se comuniquem em Libras — e, quando possível, reduzir a necessidade de um intérprete quando já existe um profissional apto a atender diretamente. Intérpretes continuam essenciais em muitos contextos; o objetivo é ampliar opções, não substituí-los.",
      solutionLabel:"Solução — em desenvolvimento", solutionIntro:"O projeto ainda não é um produto finalizado. Os módulos que já existem no backend:",
      mAuth:"Autenticação (JWT)", mProfiles:"Cadastro e perfis públicos", mSchedule:"Agenda e disponibilidade",
      mBusiness:"Agendamentos com regras de negócio", mChat:"Chat entre usuários", mReviews:"Avaliações",
      aiLabel:"Frente de Inteligência Artificial",
      aiText:"Existe uma frente de IA no projeto, mas ela ainda está em fase de pesquisa — não implementada. Estão sendo estudados recursos como avatar 3D em Libras e automações voltadas à acessibilidade e à comunicação.",
      aiWarning:"Esses recursos ainda estão em desenvolvimento e não fazem parte da versão atual.",
      archLabel:"Arquitetura", techLabel:"Tecnologias",
      impactLabel:"Impacto esperado", impactText:"Ampliar autonomia, facilitar o acesso à informação e a busca por profissionais, e melhorar a experiência da comunidade surda ao buscar atendimento. São objetivos do projeto — não resultados medidos, já que ainda está em desenvolvimento.",
      learnLabel:"Aprendizados", learnText:"Construir o InterLibras AI tem sido, até aqui, meu maior exercício de arquitetura de software: modelagem de banco de dados, organização de regras de negócio, design de APIs REST em camadas com FastAPI, e também pensar em experiência do usuário e acessibilidade desde a concepção — não como algo adicionado depois."
    },
    timeline: {
      eyebrow:"Trajetória", title:"Formação e marcos", lede:"Ordem cronológica de formação, certificações e evolução dos projetos.",
      d1:"Em andamento", t1:"Análise e Desenvolvimento de Sistemas — UNICID", x1:"Cursando o 4º semestre, com conclusão prevista para dezembro de 2026.",
      d2:"Março 2026", t2:'Palestra "Data Center: A Casa da Internet" — UNICID', x2:"Participação, carga horária de 3 horas.",
      d3:"Projetos em construção", x3:"Projetos pessoais em desenvolvimento contínuo, evoluindo em paralelo aos estudos.",
      d4:"Projetos concluídos", x4:"Entregues como projetos de portfólio, cobrindo backend, dados e visualização."
    },
    resume: {
      eyebrow:"Currículo", title:"Currículo completo", lede:"Mesmo conteúdo deste site, em formato de documento.",
      cardTitle:"Raul Adriano Jardim — CV", openTab:"Abrir em nova aba ↗",
      note:"No momento existe apenas a versão em português. Versões em inglês e espanhol serão adicionadas quando estiverem prontas."
    },
    gh: {
      title:"Repositórios", lede:"Código aberto dos projetos com repositório confirmado.",
      taskflow:"API REST de gerenciamento de tarefas com testes automatizados e Docker.",
      auth:"API de autenticação com JWT, bcrypt e arquitetura em camadas.",
      emp:"API REST de gerenciamento de funcionários em Java/Spring Boot.",
      site:"Código-fonte deste portfólio.",
      olist:"Análise de performance logística e impacto financeiro no e-commerce, com Python e Pandas.",
      profileLink:"Ver todos os repositórios no GitHub ↗"
    },
    contact: {
      eyebrow:"Contato", title:"Vamos conversar",
      lede:"Aberto a oportunidades de estágio e posições júnior em Desenvolvimento Backend Python. E-mail e LinkedIn são as formas de contato mais rápidas.",
      emailLabel:"E-mail", phoneLabel:"Telefone", send:"Enviar", copy:"Copiar", open:"Abrir"
    },
    footer: { truth:"Todos os projetos e informações são reais.", top:"Voltar ao topo ↑" },
    copied:"Copiado!"
  },

  en: {
    nav: { about:"About", projects:"Projects", skills:"Skills", github:"GitHub", resume:"Resume", contact:"Contact" },
    hero: {
      status:"Open to internships and junior roles",
      role:"Backend Python Developer",
      headline:"Building REST APIs with FastAPI, layered backends and accessibility-focused projects — from database design to delivery.",
      ctaProjects:"View projects", ctaResume:"View resume",
      metaCity:"São Paulo, Brazil", metaCountry:"Brazil", metaCourse:"CS-adjacent degree · graduating Dec/2026",
      metaPcdLabel:"Disabled — Deaf", metaPcd:"Eligible for disability-inclusion roles", metaLangLabel:"Languages"
    },
    about: {
      eyebrow:"About", title:"Backend-focused, with a solid data foundation",
      p1:"I'm a Systems Analysis and Development student at UNICID (São Paulo), currently in my 4th semester, graduating in December 2026. I spend most of my study time on Python Backend development.",
      p2:"Day to day, that means building REST APIs with FastAPI, handling authentication with JWT and bcrypt, validating data with Pydantic v2, and modeling persistence with SQLAlchemy on PostgreSQL — organizing code into layers (Models, Schemas, Services, Routers) to keep projects readable and easy to evolve.",
      p3:"I also work with automated tests in pytest, containerization with Docker, and in parallel keep up with Java/Spring Boot and data analysis in SQL and Power BI.",
      p4:"I'm looking for my first internship or junior opportunity in Python Backend Development — on-site, hybrid, or remote.",
      factEduLabel:"Education", factEdu:"Systems Analysis and Development — UNICID",
      factFocusLabel:"Current focus", factAlsoLabel:"Also studying",
      factLangLabel:"Languages", factLang:"Portuguese (native) · Libras/Brazilian Sign Language (fluent) · English and Spanish (intermediate) · ASL (intermediate)",
      factAvailLabel:"Availability", factAvail:"Internship or junior role — on-site, hybrid, or remote"
    },
    skills: {
      title:"Technical stack", lede:"Technologies I use hands-on in real projects, grouped by area.",
      backend:"Backend", layered:"Layered architecture", database:"Database", devops:"DevOps & Testing",
      tools:"Tools", frontend:"Frontend", apiIntegration:"REST API integration", data:"Data",
      otherBackends:"Other backends", languages:"Languages",
      langPt:"Portuguese — native", langLibras:"Libras — fluent", langEn:"English — intermediate",
      langEs:"Spanish — intermediate", langAsl:"ASL — intermediate"
    },
    projects: {
      eyebrow:"Areas of work", title:"Projects by area", lede:"Real projects, grouped by their main focus.",
      tabBackend:"Backend", tabFrontend:"Frontend", tabFullstack:"Full Stack", tabData:"Data Analytics",
      descBackend:"REST APIs in Python (FastAPI) and Java (Spring Boot), with authentication, tests, and layered architecture.",
      descFrontend:"Interfaces in HTML, CSS, and JavaScript, including REST API consumption.",
      descFullstack:"End-to-end projects: backend, database, business rules, and frontend integrated.",
      descData:"Data modeling, analysis, and visualization with SQL, Python, and Power BI.",
      seeDetails:"See case study ↓"
    },
    status: { dev:"In progress", done:"Completed" },
    label: { problem:"Problem:", solution:"Solution:", architecture:"Architecture:", backend:"Backend:", database:"Database:", frontend:"Frontend:", quality:"Quality:", insight:"Key insights:" },
    proj: {
      taskflow: { problem:"organizing tasks with reliable CRUD endpoints covered by tests.", solution:"REST API built incrementally, focused on code quality and testability; automated test suite with pytest and Docker containerization. Built entirely in English.", arch:"layers (Models, Schemas, Services, Routers), versioned with Conventional Commits.", fsback:"FastAPI with layered architecture.", fsquality:"automated tests with pytest and Docker containerization." },
      auth: { problem:"secure user login, with password hashing and token issuance.", solution:"Authentication API in FastAPI with JWT, bcrypt, and Pydantic v2 validation.", arch:"refactored from a flat structure into layers (Models, Schemas, Services, Routers).", fsback:"FastAPI with JWT authentication and bcrypt." },
      emp: { problem:"managing employee data with complete CRUD operations.", solution:"REST API in Java/Spring Boot with custom exception handling and bilingual documentation (PT/EN).", arch:"layers (Controller, Service, Repository, DTO)." },
      signr: { problem:"making Libras (Brazilian Sign Language) learning more consistent over time.", solution:"Libras learning web app with gamification — XP, daily streaks, and spaced repetition — built framework-free, with just HTML, CSS, and JavaScript." },
      ilFront: { title:"InterLibras AI interface", problem:"presenting profiles, scheduling, and chat simply for both deaf and hearing users.", solution:"frontend layer in HTML, CSS, and JavaScript integrated with the FastAPI backend." },
      il: { back:"FastAPI, with JWT authentication, rule-based scheduling, and availability management." },
      abc: { title:"Customer Segmentation — ABC Analysis", problem:"identifying which customers concentrate the most value for the business.", solution:"data analysis in SQL Server using CTEs and Window Functions to segment customers with the ABC analysis method." },
      sales: { title:"Sales Dashboard", problem:"tracking commercial indicators visually and in one place.", solution:"interactive Power BI dashboard for sales indicator analysis." },
      olist: { title:"Logistics Performance Analysis — Olist E-commerce", problem:"auditing data from a real e-commerce operation to map state-level logistics bottlenecks and measure the financial impact of delivery delays.", solution:"a complete data pipeline in Python — loading, cleaning nulls and type inconsistencies, merging tables, and aggregating data — with visualizations built in Seaborn and Matplotlib.", insight:"Alagoas leads the country in delays (20.8%); Rio de Janeiro shows operational inefficiency despite cheap freight and proximity; deliveries over 50 days late cost, on average, 39.8% more in freight." }
    },
    il: {
      eyebrow:"Case study", sub:"A Libras accessibility platform — a personal project born from a difficulty I face myself.",
      contextLabel:"Context", context:"I'm a deaf person. InterLibras AI came out of my own experience: the real difficulty of finding professionals who communicate in Libras in everyday life.",
      problemsLabel:"Observed problems", problemsIntro:"From my own experience and that of other deaf people, it's common to face difficulty:",
      p1:"finding doctors, psychologists, lawyers, or teachers who know Libras",
      p2:"finding available interpreters or bilingual professionals",
      p3:"constantly depending on a third party to mediate communication",
      p4:"searching for professionals through social media groups or word of mouth, with no central place to look",
      p5:"spending considerable time on that search — which, in some cases, leads people to give up on getting care",
      problemsNote:"This reduces autonomy in everyday situations. I don't have numbers to quantify how much — this is an observation from my own experience, not a statistic.",
      goalLabel:"Goal", goal:"To give deaf people more autonomy by making it easier to find professionals who communicate in Libras — and, where possible, reduce the need for an interpreter when a professional can already attend directly. Interpreters remain essential in many contexts; the goal is to add options, not replace them.",
      solutionLabel:"Solution — in progress", solutionIntro:"The project isn't a finished product yet. Modules that already exist in the backend:",
      mAuth:"Authentication (JWT)", mProfiles:"Sign-up and public profiles", mSchedule:"Scheduling and availability",
      mBusiness:"Rule-based booking", mChat:"Chat between users", mReviews:"Reviews",
      aiLabel:"AI track",
      aiText:"There's an AI track in the project, but it's still at the research stage — not implemented. Features being explored include a 3D Libras avatar and automations aimed at accessibility and communication.",
      aiWarning:"These features are still in development and are not part of the current version.",
      archLabel:"Architecture", techLabel:"Technologies",
      impactLabel:"Expected impact", impactText:"Increase autonomy, make it easier to access information and find professionals, and improve the experience of the deaf community when seeking care. These are project goals — not measured results, since it's still in development.",
      learnLabel:"What I've learned", learnText:"Building InterLibras AI has been, so far, my biggest exercise in software architecture: database modeling, organizing business rules, designing layered REST APIs with FastAPI, and also thinking about user experience and accessibility from the start — not as something added afterward."
    },
    timeline: {
      eyebrow:"Journey", title:"Education and milestones", lede:"Chronological order of education, certifications, and project progress.",
      d1:"In progress", t1:"Systems Analysis and Development — UNICID", x1:"Currently in the 4th semester, graduating in December 2026.",
      d2:"March 2026", t2:'"Data Center: The House of the Internet" talk — UNICID', x2:"Attended, 3-hour session.",
      d3:"Projects in progress", x3:"Personal projects in continuous development, evolving alongside my studies.",
      d4:"Completed projects", x4:"Delivered as portfolio projects, covering backend, data, and visualization."
    },
    resume: {
      eyebrow:"Resume", title:"Full resume", lede:"Same content as this site, in document form.",
      cardTitle:"Raul Adriano Jardim — CV", openTab:"Open in new tab ↗",
      note:"Right now only the Portuguese version exists. English and Spanish versions will be added once they're ready."
    },
    gh: {
      title:"Repositories", lede:"Open-source code for projects with a confirmed repository.",
      taskflow:"Task management REST API with automated tests and Docker.",
      auth:"Authentication API with JWT, bcrypt, and layered architecture.",
      emp:"Employee management REST API in Java/Spring Boot.",
      site:"Source code for this portfolio.",
      olist:"Logistics performance and financial impact analysis for e-commerce, with Python and Pandas.",
      profileLink:"See all repositories on GitHub ↗"
    },
    contact: {
      eyebrow:"Contact", title:"Let's talk",
      lede:"Open to internship and junior opportunities in Python Backend Development. Email and LinkedIn are the fastest ways to reach me.",
      emailLabel:"Email", phoneLabel:"Phone", send:"Send", copy:"Copy", open:"Open"
    },
    footer: { truth:"Every project and detail here is real.", top:"Back to top ↑" },
    copied:"Copied!"
  },

  es: {
    nav: { about:"Sobre mí", projects:"Proyectos", skills:"Habilidades", github:"GitHub", resume:"Currículum", contact:"Contacto" },
    hero: {
      status:"Disponible para prácticas y puestos junior",
      role:"Desarrollador Backend Python",
      headline:"Construyo APIs REST con FastAPI, backends organizados en capas y proyectos enfocados en accesibilidad — desde el modelado de la base de datos hasta la entrega.",
      ctaProjects:"Ver proyectos", ctaResume:"Ver currículum",
      metaCity:"São Paulo, Brasil", metaCountry:"Brasil", metaCourse:"ADS · finaliza dic/2026",
      metaPcdLabel:"Persona con discapacidad — Sordera", metaPcd:"Elegible para vacantes inclusivas", metaLangLabel:"Idiomas"
    },
    about: {
      eyebrow:"Sobre mí", title:"Enfoque en backend, con una base sólida en datos",
      p1:"Soy estudiante de Análisis y Desarrollo de Sistemas en la UNICID (São Paulo), cursando el 4º semestre, con finalización prevista para diciembre de 2026. Dedico la mayor parte de mi tiempo de estudio al desarrollo Backend en Python.",
      p2:"En el día a día eso significa construir APIs REST con FastAPI, gestionar la autenticación con JWT y bcrypt, validar datos con Pydantic v2 y modelar la persistencia con SQLAlchemy sobre PostgreSQL — organizando el código en capas (Models, Schemas, Services, Routers) para mantener los proyectos legibles y fáciles de evolucionar.",
      p3:"También trabajo con pruebas automatizadas en pytest, contenedores con Docker y, en paralelo, mantengo contacto con Java/Spring Boot y con análisis de datos en SQL y Power BI.",
      p4:"Estoy buscando mi primera oportunidad de prácticas o puesto junior en Desarrollo Backend Python — presencial, híbrido o remoto.",
      factEduLabel:"Formación", factEdu:"Análisis y Desarrollo de Sistemas — UNICID",
      factFocusLabel:"Enfoque actual", factAlsoLabel:"También estudia",
      factLangLabel:"Idiomas", factLang:"Portugués (nativo) · Libras/Lengua de señas brasileña (fluido) · Inglés y Español (intermedio) · ASL (intermedio)",
      factAvailLabel:"Disponibilidad", factAvail:"Prácticas o puesto junior — presencial, híbrido o remoto"
    },
    skills: {
      title:"Stack técnico", lede:"Tecnologías que uso de forma práctica en proyectos reales, organizadas por área.",
      backend:"Backend", layered:"Arquitectura en capas", database:"Base de Datos", devops:"DevOps y Pruebas",
      tools:"Herramientas", frontend:"Frontend", apiIntegration:"Integración con APIs REST", data:"Datos",
      otherBackends:"Otros backends", languages:"Idiomas",
      langPt:"Portugués — nativo", langLibras:"Libras — fluido", langEn:"Inglés — intermedio",
      langEs:"Español — intermedio", langAsl:"ASL — intermedio"
    },
    projects: {
      eyebrow:"Áreas de actuación", title:"Proyectos por área", lede:"Proyectos reales, organizados según su frente de trabajo principal.",
      tabBackend:"Backend", tabFrontend:"Frontend", tabFullstack:"Full Stack", tabData:"Data Analytics",
      descBackend:"APIs REST en Python (FastAPI) y Java (Spring Boot), con autenticación, pruebas y arquitectura en capas.",
      descFrontend:"Interfaces en HTML, CSS y JavaScript, incluyendo consumo de APIs REST.",
      descFullstack:"Proyectos de punta a punta: backend, base de datos, reglas de negocio y frontend integrados.",
      descData:"Modelado, análisis y visualización de datos con SQL, Python y Power BI.",
      seeDetails:"Ver caso de estudio ↓"
    },
    status: { dev:"En desarrollo", done:"Completado" },
    label: { problem:"Problema:", solution:"Solución:", architecture:"Arquitectura:", backend:"Backend:", database:"Base de datos:", frontend:"Frontend:", quality:"Calidad:", insight:"Principales hallazgos:" },
    proj: {
      taskflow: { problem:"organizar tareas con endpoints CRUD confiables y cubiertos por pruebas.", solution:"API REST construida de forma incremental, enfocada en calidad de código y capacidad de prueba; suite de pruebas con pytest y contenedores con Docker. Desarrollado íntegramente en inglés.", arch:"capas (Models, Schemas, Services, Routers), versionado con Conventional Commits.", fsback:"FastAPI con arquitectura en capas.", fsquality:"pruebas automatizadas con pytest y contenedores con Docker." },
      auth: { problem:"inicio de sesión seguro, con hash de contraseñas y emisión de tokens.", solution:"API de autenticación en FastAPI con JWT, bcrypt y validación con Pydantic v2.", arch:"refactorizada de una estructura plana a capas (Models, Schemas, Services, Routers).", fsback:"FastAPI con autenticación JWT y bcrypt." },
      emp: { problem:"controlar los datos de empleados con operaciones CRUD completas.", solution:"API REST en Java/Spring Boot con manejo de excepciones personalizado y documentación bilingüe (PT/EN).", arch:"capas (Controller, Service, Repository, DTO)." },
      signr: { problem:"hacer que el aprendizaje de Libras sea más constante a lo largo del tiempo.", solution:"aplicación web de aprendizaje de Libras con gamificación — XP, racha diaria y repetición espaciada — construida sin frameworks, solo con HTML, CSS y JavaScript." },
      ilFront: { title:"Interfaz de InterLibras AI", problem:"presentar perfiles, agenda y chat de forma simple para usuarios sordos y oyentes.", solution:"capa de frontend en HTML, CSS y JavaScript integrada con la API en FastAPI." },
      il: { back:"FastAPI, con autenticación JWT, reservas con reglas de negocio y gestión de disponibilidad." },
      abc: { title:"Segmentación de Clientes — Curva ABC", problem:"identificar qué clientes concentran mayor valor para el negocio.", solution:"análisis de datos en SQL Server usando CTEs y Window Functions para segmentar clientes con la metodología Curva ABC." },
      sales: { title:"Panel de Ventas", problem:"seguir indicadores comerciales de forma visual y centralizada.", solution:"panel interactivo en Power BI para el análisis de indicadores de ventas." },
      olist: { title:"Análisis de Rendimiento Logístico — E-commerce Olist", problem:"auditar datos de una operación real de e-commerce para mapear cuellos de botella logísticos por estado y medir el impacto financiero de los retrasos en la entrega.", solution:"pipeline de datos completo en Python — carga, limpieza de nulos e inconsistencias, cruce de tablas y agregaciones — con visualizaciones generadas en Seaborn y Matplotlib.", insight:"Alagoas lidera los retrasos en el país (20,8%); Río de Janeiro muestra ineficiencia operativa pese al flete barato y la cercanía; las entregas con más de 50 días de retraso costaron, en promedio, 39,8% más de flete." }
    },
    il: {
      eyebrow:"Caso de estudio", sub:"Plataforma de accesibilidad en Libras — proyecto personal, nacido de una dificultad que yo mismo enfrento.",
      contextLabel:"Contexto", context:"Soy una persona sorda. InterLibras AI nació de mi propia experiencia: la dificultad real de encontrar profesionales que se comuniquen en Libras en el día a día.",
      problemsLabel:"Problemas observados", problemsIntro:"Por mi propia vivencia y la de otras personas sordas, es común enfrentar dificultades para:",
      p1:"encontrar médicos, psicólogos, abogados o profesores que sepan Libras",
      p2:"encontrar intérpretes o profesionales bilingües disponibles",
      p3:"depender constantemente de terceros para mediar la comunicación",
      p4:"buscar profesionales en grupos de redes sociales o por recomendación, sin un canal centralizado",
      p5:"invertir tiempo considerable en esa búsqueda — lo que, en algunos casos, lleva a desistir de la atención",
      problemsNote:"Esto reduce la autonomía en situaciones cotidianas. No tengo cifras para cuantificarlo — es una observación de mi propia vivencia, no una estadística.",
      goalLabel:"Objetivo", goal:"Promover mayor autonomía para las personas sordas, facilitando la búsqueda de profesionales que se comuniquen en Libras — y, cuando sea posible, reducir la necesidad de un intérprete cuando ya existe un profesional capaz de atender directamente. Los intérpretes siguen siendo esenciales en muchos contextos; el objetivo es ampliar opciones, no sustituirlos.",
      solutionLabel:"Solución — en desarrollo", solutionIntro:"El proyecto todavía no es un producto terminado. Los módulos que ya existen en el backend:",
      mAuth:"Autenticación (JWT)", mProfiles:"Registro y perfiles públicos", mSchedule:"Agenda y disponibilidad",
      mBusiness:"Reservas con reglas de negocio", mChat:"Chat entre usuarios", mReviews:"Reseñas",
      aiLabel:"Frente de Inteligencia Artificial",
      aiText:"Existe un frente de IA en el proyecto, pero todavía está en fase de investigación — no implementado. Se están estudiando recursos como un avatar 3D en Libras y automatizaciones orientadas a la accesibilidad y la comunicación.",
      aiWarning:"Estos recursos todavía están en desarrollo y no forman parte de la versión actual.",
      archLabel:"Arquitectura", techLabel:"Tecnologías",
      impactLabel:"Impacto esperado", impactText:"Ampliar la autonomía, facilitar el acceso a la información y la búsqueda de profesionales, y mejorar la experiencia de la comunidad sorda al buscar atención. Son objetivos del proyecto — no resultados medidos, ya que todavía está en desarrollo.",
      learnLabel:"Aprendizajes", learnText:"Construir InterLibras AI ha sido, hasta ahora, mi mayor ejercicio de arquitectura de software: modelado de bases de datos, organización de reglas de negocio, diseño de APIs REST en capas con FastAPI, y también pensar en la experiencia del usuario y la accesibilidad desde la concepción — no como algo añadido después."
    },
    timeline: {
      eyebrow:"Trayectoria", title:"Formación e hitos", lede:"Orden cronológico de formación, certificaciones y evolución de los proyectos.",
      d1:"En curso", t1:"Análisis y Desarrollo de Sistemas — UNICID", x1:"Cursando el 4º semestre, con finalización prevista para diciembre de 2026.",
      d2:"Marzo 2026", t2:'Charla "Data Center: La Casa de Internet" — UNICID', x2:"Participación, carga horaria de 3 horas.",
      d3:"Proyectos en construcción", x3:"Proyectos personales en desarrollo continuo, evolucionando en paralelo a los estudios.",
      d4:"Proyectos completados", x4:"Entregados como proyectos de portafolio, cubriendo backend, datos y visualización."
    },
    resume: {
      eyebrow:"Currículum", title:"Currículum completo", lede:"El mismo contenido de este sitio, en formato de documento.",
      cardTitle:"Raul Adriano Jardim — CV", openTab:"Abrir en una pestaña nueva ↗",
      note:"Por ahora solo existe la versión en portugués. Las versiones en inglés y español se añadirán cuando estén listas."
    },
    gh: {
      title:"Repositorios", lede:"Código abierto de los proyectos con repositorio confirmado.",
      taskflow:"API REST de gestión de tareas con pruebas automatizadas y Docker.",
      auth:"API de autenticación con JWT, bcrypt y arquitectura en capas.",
      emp:"API REST de gestión de empleados en Java/Spring Boot.",
      site:"Código fuente de este portafolio.",
      olist:"Análisis de rendimiento logístico e impacto financiero en el e-commerce, con Python y Pandas.",
      profileLink:"Ver todos los repositorios en GitHub ↗"
    },
    contact: {
      eyebrow:"Contacto", title:"Hablemos",
      lede:"Disponible para prácticas y puestos junior en Desarrollo Backend Python. El correo y LinkedIn son las formas de contacto más rápidas.",
      emailLabel:"Correo", phoneLabel:"Teléfono", send:"Enviar", copy:"Copiar", open:"Abrir"
    },
    footer: { truth:"Todos los proyectos e información son reales.", top:"Volver arriba ↑" },
    copied:"¡Copiado!"
  }
};

function getByPath(obj, path){
  return path.split(".").reduce((acc, key) => (acc && acc[key] !== undefined) ? acc[key] : null, obj);
}

let currentLang = "pt";

function applyTranslations(lang){
  const dict = translations[lang] || translations.pt;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const value = getByPath(dict, el.getAttribute("data-i18n"));
    if (value !== null) el.innerHTML = value;
  });
  document.documentElement.lang = lang === "pt" ? "pt-BR" : lang;
  document.querySelectorAll(".lang-btn").forEach(btn => {
    const active = btn.getAttribute("data-lang") === lang;
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-pressed", String(active));
  });
  currentLang = lang;
}

/* ---------------- Theme (persisted, with safe fallback) ---------------- */
(function initTheme(){
  let saved = null;
  try { saved = localStorage.getItem("theme"); } catch (e) { /* storage unavailable (e.g. sandboxed preview) */ }

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const shouldDark = saved ? saved === "dark" : prefersDark;
  if (shouldDark) document.documentElement.classList.add("dark");
})();

document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("themeToggle");
  themeToggle.setAttribute("aria-pressed", String(document.documentElement.classList.contains("dark")));

  themeToggle.addEventListener("click", () => {
    const isDark = document.documentElement.classList.toggle("dark");
    themeToggle.setAttribute("aria-pressed", String(isDark));
    try { localStorage.setItem("theme", isDark ? "dark" : "light"); } catch (e) { /* ignore */ }
  });

  /* ---------------- Language switch ---------------- */
  let savedLang = null;
  try { savedLang = localStorage.getItem("lang"); } catch (e) { /* ignore */ }
  applyTranslations(savedLang && translations[savedLang] ? savedLang : "pt");

  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      applyTranslations(lang);
      try { localStorage.setItem("lang", lang); } catch (e) { /* ignore */ }
    });
  });

  /* ---------------- Mobile nav ---------------- */
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("primaryNav");
  navToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(open));
  });
  navLinks.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  /* ---------------- Tabs ---------------- */
  const tabs = document.querySelectorAll(".tab");
  const panels = document.querySelectorAll(".tab-panel");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.setAttribute("aria-selected", "false"));
      panels.forEach(p => { p.classList.remove("active"); p.hidden = true; });
      tab.setAttribute("aria-selected", "true");
      const panel = document.getElementById(tab.getAttribute("aria-controls"));
      panel.classList.add("active");
      panel.hidden = false;
    });
    tab.addEventListener("keydown", (e) => {
      const list = Array.from(tabs);
      const i = list.indexOf(tab);
      if (e.key === "ArrowRight") { list[(i + 1) % list.length].focus(); list[(i + 1) % list.length].click(); }
      if (e.key === "ArrowLeft") { list[(i - 1 + list.length) % list.length].focus(); list[(i - 1 + list.length) % list.length].click(); }
    });
  });

  /* ---------------- Copy buttons ---------------- */
  function wireCopy(buttonId, valueId){
    const btn = document.getElementById(buttonId);
    const valueEl = document.getElementById(valueId);
    if (!btn || !valueEl) return;
    btn.addEventListener("click", async () => {
      const text = valueEl.textContent.trim();
      const original = btn.textContent;
      try {
        await navigator.clipboard.writeText(text);
        btn.textContent = translations[currentLang].copied;
      } catch (e) {
        btn.textContent = text;
      }
      setTimeout(() => { btn.textContent = original; }, 1800);
    });
  }
  wireCopy("copyEmail", "emailValue");
  wireCopy("copyPhone", "phoneValue");

  /* ---------------- Footer year ---------------- */
  document.getElementById("footYear").textContent = new Date().getFullYear();
});
