# 🗳️ Urna Eletrônica — IBRC

Sistema de votação eletrônica para eleições internas da **Igreja Batista Regular do Calvário do Distrito Federal**. Disponível em duas versões: uma clássica em HTML/CSS/JS puro e uma versão web moderna em Next.js.

---

## 📁 Versões Disponíveis

| Versão | Localização | Tecnologia |
|---|---|---|
| Clássica | `Urna.html` | HTML + CSS + JavaScript |
| Web Moderna | `urna-web/` | Next.js + TypeScript + Tailwind CSS |

---

## 🖥️ Versão Clássica (`Urna.html`)

Interface simples e direta para uso em eventos presenciais. Basta abrir o arquivo `Urna.html` em qualquer navegador moderno — sem necessidade de instalação.

### Arquivos

```
Urna/
├── CSS/
│   └── Urna.css          # Estilos da urna
├── JS/
│   └── script.js         # Lógica de votação
├── ico/
│   └── ibrc.ico          # Ícone da IBRC
├── Urna.html             # Página principal da urna
└── Resultado.html        # Página de exibição dos resultados
```


## 🚀 Versão Web Moderna (`urna-web/`)

Versão reimplementada com **Next.js 16**, **TypeScript** e **Tailwind CSS 4**. Suporta múltiplas etapas de votação, acumulação de votos via `localStorage`, navegação por teclado e exportação de resultados em PDF.

### 🛠️ Tecnologias

| Tecnologia | Versão | Uso |
|---|---|---|
| **Next.js** | 16.1 | Framework React fullstack |
| **React** | 19 | Interface de usuário |
| **TypeScript** | 5 | Tipagem estática |
| **Tailwind CSS** | 4 | Estilização |
| **jsPDF** | 4 | Exportação de resultados em PDF |
| **Lucide React** | — | Ícones |

---

### ⚙️ Etapas de Votação

As etapas são configuradas em `src/constants/etapas.ts`:

| Cargo | Candidatos | Mín. Votos | Máx. Votos |
|---|---|---|---|
| Diácono | 5 candidatos | 1 | 5 |
| Tesoureiro | 1 candidato | 1 | 1 |
| Secretário de Finanças | 1 candidato | 1 | 1 |
| Secretaria | 2 candidatos | 1 | 1 |
| Superintendente | 1 candidato | 1 | 1 |
| Secretário da EBD | 1 candidato | 1 | 1 |
| Comissão de Exames de Contas | 4 candidatos | 1 | 4 |


---

### 🗂️ Estrutura do Projeto (`urna-web/`)

```
urna-web/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Página principal da urna
│   │   ├── layout.tsx        # Layout base da aplicação
│   │   ├── globals.css       # Estilos globais
│   │   └── resultado/
│   │       └── page.tsx      # Página de resultados
│   ├── components/
│   │   ├── Header.tsx        # Cabeçalho com nome da etapa
│   │   └── Modal.tsx         # Modal de confirmação/alertas
│   └── constants/
│       └── etapas.ts         # Configuração das etapas de votação
├── public/                   # Recursos estáticos
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 👨‍💻 Desenvolvedores

Projeto desenvolvido por **Davi** e **Gustavo**.

---

## 📄 Licença

Este projeto está sob a licença **MIT**.
