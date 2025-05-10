# 🏍 MotoStore

Projeto fictício de uma loja virtual especializada na venda de motos, desenvolvido com o objetivo de praticar e aprimorar minhas habilidades em desenvolvimento web, tanto no front-end quanto no back-end.

> ⚠️ Este projeto ainda está em desenvolvimento.

---

## 🚀 Link do Projeto  
[👉 Acesse o site publicado aqui](https://seudominio.onrender.com/) <!-- Substitua pela URL real quando publicar -->

---

## 🛠 Tecnologias utilizadas

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=fff)  
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=fff)  
![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=fff)  
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000)  
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)  
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=fff)  

---

## 🎯 Objetivo

Este projeto foi criado como parte do meu processo de aprendizado. A **MotoStore** é uma loja virtual fictícia de motos que simula um e-commerce completo. A ideia é oferecer uma interface moderna, intuitiva e responsiva, onde os usuários possam:

- Navegar pela lista de motos disponíveis para compra  
- Visualizar os detalhes de cada modelo  
- Favoritar motos, criando uma lista personalizada  

Além disso, haverá uma área exclusiva para o **administrador (dono da loja)**, que permitirá:

- Cadastro, edição e exclusão de motos  
- Gerenciamento de informações exibidas no site  

---

## 📁 Estrutura do Projeto

```plaintext
CONCESSIONARIA/
├── public/
├── src/
│   ├── assets/                     # Imagens e recursos visuais
│   ├── components/                # Componentes reutilizáveis React
│   │   ├── About.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   └── Offers.jsx
│   ├── pages/
│   │   └── Main.jsx               # Página principal
│   ├── styles/
│   │   ├── CSS/
│   │   │   └── index.css          # CSS global
│   │   └── SASS/
│   │       ├── abstracts/         # Variáveis e configurações gerais
│   │       │   ├── _topograph.scss
│   │       │   └── _variables.scss
│   │       ├── base/              # Estilos base (reset, titles)
│   │       │   ├── _reset.scss
│   │       │   └── _title.scss
│   │       ├── components/        # Estilos dos componentes
│   │       │   ├── _about.scss
│   │       │   ├── _header.scss
│   │       │   ├── _hero.scss
│   │       │   └── _offers.scss
│   │       └── index.scss         # Importa todos os arquivos Sass
│   ├── App.jsx
│   └── main.jsx                   # Ponto de entrada React
├── index.html
├── vite.config.js
├── package.json
└── .gitignore
