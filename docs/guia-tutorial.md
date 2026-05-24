# Guia Tutorial — Desenvolvimento Mobile com Ionic e Angular

**Público-alvo:** Desenvolvedores iniciantes com conhecimento básico de HTML, CSS e JavaScript  
**Objetivo:** Construir e publicar um miniaplicativo mobile do zero usando as ferramentas do projeto

---

## Sumário

1. [O que são Ionic e Angular?](#1-o-que-são-ionic-e-angular)
2. [Preparando o Ambiente](#2-preparando-o-ambiente)
3. [Criando o Primeiro Projeto Ionic](#3-criando-o-primeiro-projeto-ionic)
4. [Entendendo a Estrutura de Arquivos](#4-entendendo-a-estrutura-de-arquivos)
5. [Componentes Ionic Essenciais](#5-componentes-ionic-essenciais)
6. [Angular Básico: Data Binding](#6-angular-básico-data-binding)
7. [Navegação entre Páginas](#7-navegação-entre-páginas)
8. [Git e GitHub: Salvando seu Trabalho](#8-git-e-github-salvando-seu-trabalho)
9. [Executando no Celular (Android)](#9-executando-no-celular-android)
10. [Próximos Passos](#10-próximos-passos)

---

## 1. O que são Ionic e Angular?

### Angular
Angular é um **framework JavaScript** criado pelo Google para construir interfaces web interativas. Ao invés de manipular o HTML diretamente com JavaScript puro, o Angular organiza o código em **componentes** — blocos reutilizáveis que combinam lógica, estrutura e estilo.

**Analogia:** Pense em componentes como peças de LEGO. Cada peça tem uma função e você as encaixa para formar o aplicativo completo.

### Ionic
Ionic é uma **biblioteca de componentes visuais** que transforma uma aplicação Angular em um app mobile. Ele fornece botões, inputs, toolbars e outros elementos que já parecem com apps nativos de Android e iOS.

**Analogia:** Se Angular é a estrutura do edifício, Ionic é o acabamento — o que o usuário vê e toca.

### TypeScript
Tanto Angular quanto Ionic usam **TypeScript**, que é JavaScript com tipagem. Isso significa que você declara o tipo das variáveis (`string`, `number`, `boolean`), o que ajuda a evitar erros antes mesmo de executar o código.

```typescript
// JavaScript comum — sem tipo
let nome = "Ana";

// TypeScript — com tipo declarado
let nome: string = "Ana";
let idade: number = 25;
```

---

## 2. Preparando o Ambiente

### Passo 1 — Instalar Node.js

Node.js é o ambiente que executa JavaScript fora do navegador. Baixe em: https://nodejs.org/ (escolha a versão LTS).

Verifique a instalação:
```bash
node --version   # deve exibir v18.x.x ou superior
npm --version    # deve exibir 9.x.x ou superior
```

### Passo 2 — Instalar Ionic CLI e Angular CLI

O **CLI** (Command Line Interface) é uma ferramenta que você usa no terminal para criar projetos, gerar arquivos e executar o servidor.

```bash
npm install -g @ionic/cli
npm install -g @angular/cli
```

Verifique:
```bash
ionic --version   # 7.x.x
ng version        # Angular CLI 21.x.x
```

### Passo 3 — Instalar VSCode

Baixe o Visual Studio Code em: https://code.visualstudio.com/

**Extensões recomendadas para instalar no VSCode:**
- **Angular Language Service** — autocomplete para Angular
- **Ionic Snippets** — atalhos para componentes Ionic
- **Prettier** — formatação automática de código
- **GitLens** — visualização avançada do histórico Git

---

## 3. Criando o Primeiro Projeto Ionic

Abra o terminal (no VSCode: **View → Terminal**) e execute:

```bash
# Cria um projeto com o template "blank" (página em branco)
ionic start meu-app blank --type=angular --capacitor

# Entra na pasta do projeto
cd meu-app

# Inicia o servidor de desenvolvimento
ionic serve
```

O browser abrirá automaticamente em `http://localhost:8100` mostrando seu app.

> **Dica:** Mantenha o servidor rodando enquanto edita os arquivos. As alterações aparecem automaticamente no browser (live reload).

---

## 4. Entendendo a Estrutura de Arquivos

```
meu-app/
├── src/                     <- Todo o código do app fica aqui
│   ├── app/
│   │   ├── home/            <- Pasta de uma "página" do app
│   │   │   ├── home.page.ts     <- Lógica (o que o app faz)
│   │   │   ├── home.page.html   <- Interface (o que o usuário vê)
│   │   │   └── home.page.scss   <- Estilos (como fica visualmente)
│   │   └── app-routing.module.ts  <- Define as rotas/URLs do app
│   ├── index.html           <- Ponto de entrada HTML
│   └── global.scss          <- Estilos globais
├── capacitor.config.ts      <- Configuração para build nativo
└── package.json             <- Lista de dependências do projeto
```

**Regra de ouro:** Cada página do app tem 3 arquivos — `.ts` (lógica), `.html` (visual), `.scss` (estilos).

---

## 5. Componentes Ionic Essenciais

### IonHeader e IonToolbar
Criam a barra de título no topo do app.

```html
<ion-header>
  <ion-toolbar color="primary">
    <ion-title>Meu App</ion-title>
  </ion-toolbar>
</ion-header>
```

### IonContent
É o corpo da página — todo conteúdo fica dentro dele.

```html
<ion-content class="ion-padding">
  <!-- Conteúdo aqui -->
</ion-content>
```

### IonButton
Botões interativos com variações de cor e estilo.

```html
<!-- Botão que ocupa a largura total -->
<ion-button expand="block" color="primary" (click)="minhaFuncao()">
  Clique Aqui
</ion-button>

<!-- Cores disponíveis: primary, secondary, success, warning, danger, medium -->
```

### IonInput
Campo de entrada de texto ou números.

```html
<ion-item>
  <ion-label position="stacked">Nome</ion-label>
  <ion-input type="text" [(ngModel)]="nome"></ion-input>
</ion-item>
```

### IonSegment
Seletor de opções (equivalente a um grupo de botões de rádio).

```html
<ion-segment [(ngModel)]="opcaoSelecionada">
  <ion-segment-button value="opcao1">Opção 1</ion-segment-button>
  <ion-segment-button value="opcao2">Opção 2</ion-segment-button>
</ion-segment>
```

---

## 6. Angular Básico: Data Binding

**Data Binding** é a conexão entre a lógica TypeScript (`.ts`) e a interface HTML (`.html`).

### 6.1 Interpolação — exibir dados `{{ }}`

No TypeScript:
```typescript
export class HomePage {
  titulo: string = 'Olá, Mundo!';
  contador: number = 42;
}
```

No HTML:
```html
<p>{{ titulo }}</p>     <!-- Exibe: Olá, Mundo! -->
<p>{{ contador }}</p>   <!-- Exibe: 42 -->
```

### 6.2 Event Binding — reagir a eventos `(evento)`

No TypeScript:
```typescript
export class HomePage {
  mensagem: string = '';

  mostrarMensagem() {
    this.mensagem = 'Botão pressionado!';
  }
}
```

No HTML:
```html
<ion-button (click)="mostrarMensagem()">Clique</ion-button>
<p>{{ mensagem }}</p>
```

### 6.3 Two-Way Binding — sincronizar input e variável `[(ngModel)]`

No TypeScript:
```typescript
export class HomePage {
  nome: string = '';
}
```

No HTML:
```html
<!-- Quando o usuário digita, "nome" atualiza automaticamente -->
<ion-input [(ngModel)]="nome"></ion-input>
<p>Você digitou: {{ nome }}</p>
```

---

## 7. Navegação entre Páginas

### Criar uma nova página

```bash
ionic generate page sobre
```

Isso cria a pasta `src/app/sobre/` com todos os arquivos necessários e **atualiza automaticamente** o arquivo de rotas.

### Navegar programaticamente

No TypeScript:
```typescript
import { Router } from '@angular/router';

export class HomePage {
  constructor(private router: Router) {}

  irParaSobre() {
    this.router.navigate(['/sobre']);
  }
}
```

No HTML:
```html
<ion-button (click)="irParaSobre()">Sobre o App</ion-button>
```

### Entendendo as Rotas

O arquivo `app-routing.module.ts` define quais URLs carregam quais páginas:

```typescript
const routes: Routes = [
  { path: 'home',   loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  { path: 'sobre',  loadChildren: () => import('./sobre/sobre.module').then(m => m.SobrePageModule) },
  { path: '',       redirectTo: 'home', pathMatch: 'full' }, // Rota padrão
];
```

---

## 8. Git e GitHub: Salvando seu Trabalho

### Por que usar Git?

Git registra cada versão do seu código. Se você fizer algo errado, pode voltar para uma versão anterior. GitHub é o serviço online onde você armazena esse histórico.

### Fluxo básico de trabalho

```bash
# Ver o estado atual dos arquivos
git status

# Adicionar arquivos ao "pacote" de mudanças
git add .            # Todos os arquivos modificados
git add home.page.ts # Apenas um arquivo específico

# Salvar o pacote com uma mensagem descritiva
git commit -m "feat: adiciona calculadora básica"

# Enviar para o GitHub
git push origin main
```

### Conectar ao GitHub

```bash
# Inicializar repositório (apenas na primeira vez)
git init
git branch -M main

# Conectar ao repositório remoto (crie o repositório no GitHub antes)
git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git

# Primeiro envio
git push -u origin main
```

### Boas práticas para mensagens de commit

Use prefixos para indicar o tipo de mudança:
- `feat:` — nova funcionalidade
- `fix:` — correção de bug
- `style:` — mudança visual/CSS
- `docs:` — documentação
- `refactor:` — reorganização de código sem mudar funcionalidade

**Exemplos:**
```
feat: adiciona conversor de temperatura
fix: corrige divisão por zero na calculadora
style: melhora layout do visor
docs: atualiza README com instruções de instalação
```

---

## 9. Executando no Celular (Android)

### Pré-requisitos
- Android Studio instalado
- Dispositivo Android com **modo desenvolvedor** e **depuração USB** ativados

### Passos

```bash
# 1. Compilar a versão web do app
ionic build

# 2. Adicionar a plataforma Android
ionic capacitor add android

# 3. Sincronizar os arquivos
ionic capacitor sync android

# 4. Abrir no Android Studio
ionic capacitor open android
```

No Android Studio, clique no botão **Run** (triângulo verde) para instalar no dispositivo.

---

## 10. Próximos Passos

Depois de dominar o básico, explore:

- **Serviços Angular** — lógica compartilhada entre páginas com `@Injectable`
- **HttpClient** — consumir APIs externas (ex: previsão do tempo, cotações)
- **Ionic Storage** — salvar dados no dispositivo (preferências, histórico)
- **Capacitor Plugins** — acesso à câmera, GPS, notificações push
- **Deploy na Play Store** — publicar o app no Google Play

### Recursos para continuar aprendendo

| Recurso | Link |
|---------|------|
| Documentação Ionic | https://ionicframework.com/docs |
| Tour of Heroes (Angular) | https://angular.io/tutorial |
| Documentação Capacitor | https://capacitorjs.com/docs |
| Git — guia prático | https://rogerdudler.github.io/git-guide/index.pt_BR.html |

---

*Material educativo produzido como parte do Projeto de Extensão — Desenvolvimento Mobile com Ionic e Angular.*
