<div align="center">

# Raul Adriano Jardim
### Backend Python Developer (in training)

[![Portfolio](https://img.shields.io/badge/Portfolio-rauladrixdev.github.io-0B0D12?style=flat-square)](https://rauladrixdev.github.io/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-rauladriano-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/raul-adriano/)
[![GitHub](https://img.shields.io/badge/GitHub-rauladrixdev-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/rauladrixdev)

Building REST APIs with FastAPI, layered backends, and accessibility-focused projects — from database design to delivery.

**🇧🇷 [Leia em Português](#-português) · 🇪🇸 [Leer en Español](#-español)**

</div>

---

## About

I'm a Systems Analysis and Development (ADS) student at UNICID, São Paulo — Brazil, currently in my 4th semester, expected to graduate in December 2026. Most of my study time goes into Python backend development.

In practice, that means building REST APIs with FastAPI, handling authentication with JWT and bcrypt, validating data with Pydantic v2, and modeling persistence with SQLAlchemy on PostgreSQL — organizing code into layers (Models, Schemas, Services, Routers) to keep projects readable and easy to evolve. I also work with automated testing (pytest), containerization (Docker), and — in parallel — keep hands-on contact with Java/Spring Boot and data analysis in SQL and Power BI.

I'm currently looking for my first internship or junior position in Python Backend Development — on-site, hybrid, or remote.

This repository hosts the source code of my personal portfolio site, live at **[rauladrixdev.github.io](https://rauladrixdev.github.io/)**.

## Live demo

🔗 **https://rauladrixdev.github.io/**

## Features

- **Trilingual (PT / EN / ES)** — full UI translation via a lightweight custom i18n layer in vanilla JavaScript (`translations` object in `script.js`), no external library.
- **Dark / light theme** with persistence via `localStorage` (silent fallback if the browser blocks storage).
- **Embedded résumé viewer** — the CV PDF renders inline on the page, with an "open in new tab" fallback for in-app browsers (e.g. LinkedIn/Instagram) that don't support inline PDFs.
- **Accessible by design** — skip-to-content link, keyboard navigation on the project tabs (arrow keys), semantic landmarks, and `aria-*` attributes throughout.
- **Fully responsive**, manually tested across 10 breakpoints from 320px to 1920px.
- **SEO-ready** — canonical URL, `hreflang` alternates, Open Graph / Twitter Card metadata, JSON-LD (`schema.org/Person`), `sitemap.xml`, and `robots.txt`.
- **Zero build step** — static HTML/CSS/JS, deployable as-is to GitHub Pages.

## Tech stack

This site is intentionally framework-free — plain HTML, CSS, and JavaScript, no bundler, no dependencies.

| Layer | Stack |
|---|---|
| Markup | HTML5 (semantic, accessible) |
| Styling | CSS3 (custom properties for theming, no preprocessor) |
| Behavior | Vanilla JavaScript (i18n, theming, tabs, mobile nav, clipboard actions) |
| Fonts | Inter, IBM Plex Mono (Google Fonts) |
| Hosting | GitHub Pages |

## Project structure

```
.
├── index.html              # Single-page site (hero, about, skills, projects, case study, resume, contact)
├── styles.css               # Design system: CSS custom properties, layout, responsive rules
├── script.js                 # i18n (pt/en/es), theme toggle, tabs, mobile nav, copy-to-clipboard
├── manifest.json              # Web app manifest
├── robots.txt
├── sitemap.xml
└── assets/
    ├── favicon.svg
    └── Raul_Adriano_Jardim_CV.pdf
```

## Running locally

No build step, no dependencies — just serve the static files:

```bash
git clone https://github.com/rauladrixdev/rauladrixdev.github.io.git
cd rauladrixdev.github.io

# any static server works, e.g.:
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Other projects

Backend and data projects referenced on this site, each in its own repository:

| Project | Description | Stack | Status |
|---|---|---|---|
| [**TaskFlow API**](https://github.com/rauladrixdev/taskflow-api) | Task-management REST API, built incrementally with a focus on code quality and testability. | Python · FastAPI · SQLAlchemy 2.0 · PostgreSQL · Docker · pytest | In development |
| [**Auth Customer API**](https://github.com/rauladrixdev/auth-customer-api) | Authentication API with JWT issuance and password hashing, refactored from a flat structure into layers. | Python · FastAPI · SQLAlchemy · PostgreSQL · JWT · Pydantic v2 | Done |
| [**Employee Management API**](https://github.com/rauladrixdev/sistema-funcionarios-backend) | CRUD API for employee records with custom exception handling and bilingual (PT/EN) documentation. | Java · Spring Boot · Spring Data JPA · Hibernate · MySQL | Done |
| [**Olist E-commerce Logistics Analysis**](https://github.com/rauladrixdev/portfolio_olist_ecommerce) | End-to-end data pipeline auditing a real e-commerce dataset to map state-level logistics bottlenecks. | Python · Pandas · Seaborn · Matplotlib | Done |

Full list: [github.com/rauladrixdev](https://github.com/rauladrixdev)

## Accessibility & context

I'm Deaf. One of the featured projects on this site, **InterLibras AI**, is a personal project born from a difficulty I face myself: finding professionals who communicate in Libras (Brazilian Sign Language) in everyday situations. It's covered as a case study on the live site — problem, goal, and current scope, without invented numbers where I don't have real data to back them up.

## Contact

- GitHub: [github.com/rauladrixdev](https://github.com/rauladrixdev)
- LinkedIn: [linkedin.com/in/rauladriano](https://www.linkedin.com/in/raul-adriano/)
- Portfolio / contact form: [rauladrixdev.github.io/#contato](https://rauladrixdev.github.io/#contato)

---

## 🇧🇷 Português

<details>
<summary>Clique para expandir</summary>

### Sobre

Sou estudante de Análise e Desenvolvimento de Sistemas (ADS) na UNICID, São Paulo, cursando o 4º semestre, com conclusão prevista para dezembro de 2026. Dedico a maior parte do meu tempo de estudo ao desenvolvimento Backend em Python: APIs REST com FastAPI, autenticação com JWT e bcrypt, validação com Pydantic v2 e persistência com SQLAlchemy sobre PostgreSQL, organizando o código em camadas (Models, Schemas, Services, Routers). Também trabalho com testes automatizados (pytest), Docker e, em paralelo, com Java/Spring Boot e análise de dados em SQL e Power BI.

Estou em busca da minha primeira oportunidade de estágio ou posição júnior em Backend Python — presencial, híbrida ou remota.

Este repositório contém o código-fonte do meu portfólio pessoal, publicado em **[rauladrixdev.github.io](https://rauladrixdev.github.io/)**.

### Funcionalidades

Site trilíngue (PT/EN/ES) com i18n próprio em JavaScript puro, tema claro/escuro persistido via `localStorage`, currículo em PDF exibido inline com fallback para abrir em nova aba, navegação acessível por teclado, responsivo testado em 10 larguras (320px–1920px), e metadados de SEO (canonical, hreflang, Open Graph, JSON-LD, sitemap).

### Stack

HTML5, CSS3 (variáveis customizadas, sem pré-processador) e JavaScript puro — sem framework, sem build step, hospedado no GitHub Pages.

### Outros projetos

TaskFlow API, Auth Customer API e Employee Management API (backend); Análise de Performance Logística — E-commerce Olist (dados). Links no [github.com/rauladrixdev](https://github.com/rauladrixdev).

### Contexto de acessibilidade

Sou surdo. Um dos projetos em destaque no site, o **InterLibras AI**, nasceu de uma dificuldade que eu mesmo enfrento: encontrar profissionais que se comuniquem em Libras no dia a dia. O case study completo — problema, objetivo e escopo atual — está na página, sem números inventados onde não tenho dados reais para embasar.

</details>

## 🇪🇸 Español

<details>
<summary>Haz clic para expandir</summary>

### Sobre mí

Soy estudiante de Análisis y Desarrollo de Sistemas (ADS) en UNICID, São Paulo, cursando el 4º semestre, con graduación prevista para diciembre de 2026. Dedico la mayor parte de mi tiempo de estudio al desarrollo Backend en Python: APIs REST con FastAPI, autenticación con JWT y bcrypt, validación con Pydantic v2 y persistencia con SQLAlchemy sobre PostgreSQL, organizando el código en capas (Models, Schemas, Services, Routers). También trabajo con pruebas automatizadas (pytest), Docker y, en paralelo, con Java/Spring Boot y análisis de datos en SQL y Power BI.

Estoy buscando mi primera oportunidad de práctica profesional o posición junior en Backend Python — presencial, híbrida o remota.

Este repositorio contiene el código fuente de mi portafolio personal, publicado en **[rauladrixdev.github.io](https://rauladrixdev.github.io/)**.

### Funcionalidades

Sitio trilingüe (PT/EN/ES) con i18n propio en JavaScript puro, tema claro/oscuro persistido vía `localStorage`, currículum en PDF con visor incorporado y opción de abrir en pestaña nueva, navegación accesible por teclado, diseño responsivo probado en 10 anchos (320px–1920px), y metadatos SEO (canonical, hreflang, Open Graph, JSON-LD, sitemap).

### Stack

HTML5, CSS3 (variables personalizadas, sin preprocesador) y JavaScript puro — sin framework, sin paso de build, alojado en GitHub Pages.

### Otros proyectos

TaskFlow API, Auth Customer API y Employee Management API (backend); Análisis de Rendimiento Logístico — E-commerce Olist (datos). Enlaces en [github.com/rauladrixdev](https://github.com/rauladrixdev).

### Contexto de accesibilidad

Soy sordo. Uno de los proyectos destacados del sitio, **InterLibras AI**, nació de una dificultad que yo mismo enfrento: encontrar profesionales que se comuniquen en Libras (lengua de señas brasileña) en el día a día. El caso de estudio completo — problema, objetivo y alcance actual — está en la página, sin cifras inventadas donde no tengo datos reales que las respalden.

</details>

---

<div align="center">
<sub>Built with plain HTML, CSS and JavaScript — no framework, no build step.</sub>
</div>
