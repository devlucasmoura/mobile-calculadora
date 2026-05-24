# Projeto Extensão — Miniaplicativo Mobile com Ionic + Angular

> **Objetivo:** Desenvolver um miniaplicativo mobile com Ionic e Angular, utilizando VSCode e Git/GitHub, ao mesmo tempo em que se produz material educativo para orientar iniciantes nessa jornada técnica.

---

## Sobre o Aplicativo

O **calculadora-app** é um miniaplicativo mobile com duas funcionalidades:

| Tela | Descrição |
|------|-----------|
| **Calculadora** | Operações matemáticas básicas: soma, subtração, multiplicação e divisão |
| **Conversor de Temperatura** | Converte entre Celsius, Fahrenheit e Kelvin em tempo real |

A navegação entre as duas telas demonstra o sistema de rotas do Angular integrado ao Ionic.

---

## Pré-requisitos

Antes de executar o projeto, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) — versão 18 ou superior
- [Ionic CLI](https://ionicframework.com/docs/cli): `npm install -g @ionic/cli`
- [Angular CLI](https://angular.io/cli): `npm install -g @angular/cli`
- [Git](https://git-scm.com/)
- [VSCode](https://code.visualstudio.com/)

---

## Como Executar

```bash
# 1. Clone o repositório
git clone https://github.com/SEU_USUARIO/Projeto-Extensao.git
cd Projeto-Extensao/calculadora-app

# 2. Instale as dependências
npm install

# 3. Execute no navegador
ionic serve
```

O app abrirá automaticamente em `http://localhost:8100`.

---

## Estrutura do Projeto

```
calculadora-app/
├── src/
│   └── app/
│       ├── home/                  # Página da Calculadora
│       │   ├── home.page.ts       # Lógica (TypeScript)
│       │   ├── home.page.html     # Interface (HTML + componentes Ionic)
│       │   └── home.page.scss     # Estilos
│       ├── conversor/             # Página do Conversor de Temperatura
│       │   ├── conversor.page.ts
│       │   ├── conversor.page.html
│       │   └── conversor.page.scss
│       └── app-routing.module.ts  # Definição das rotas
└── capacitor.config.ts            # Configuração para build nativo (Android/iOS)
```

---

## Conceitos Demonstrados

- **Componentes Ionic:** `IonButton`, `IonInput`, `IonSegment`, `IonHeader`, `IonToolbar`
- **Data Binding Angular:** interpolação `{{ }}`, two-way binding `[(ngModel)]`, event binding `(click)`
- **Roteamento:** navegação entre páginas com `Router.navigate()`
- **TypeScript:** tipos customizados (`type Unidade`), métodos privados, lógica de estado

---

## Material Educativo

Consulte o guia completo em [`docs/guia-tutorial.md`](docs/guia-tutorial.md).

---

## Versionamento

Este projeto utiliza **Git** com fluxo de trabalho básico:

```bash
git add .
git commit -m "descrição clara do que foi feito"
git push origin main
```

---
## Autor

**Lucas da Silva de Moura**  
Estudante de Análise e Desenvolvimento de Sistemas

---

**Última atualização:** 24 de Maio de 2026

## Tecnologias

![Ionic](https://img.shields.io/badge/Ionic-7-blue?logo=ionic)
![Angular](https://img.shields.io/badge/Angular-21-red?logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Capacitor](https://img.shields.io/badge/Capacitor-7-blue?logo=capacitor)
