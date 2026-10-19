# ADR-002: Layout e interface

## Decisões

| Item | Escolha |
|---|---|
| Especificação visual | `docs/layout.md` |
| Design system de referência | Nocturne, adaptado à primária `#001449` |
| Modo de cor | Somente escuro; sem modo claro e sem alternador de tema |
| Primária de marca | `#001449` — fundo profundo (logo, hero do login, avatares, chips ativos), não texto nem botão sólido |
| Cor de ação na UI | `#5B7FE0` e rampa `--accent-*` definidas em `docs/layout.md` §2.3 |
| Elevação | Borda + escurecimento ambiente; sombras leves conforme tokens em `docs/layout.md` §2.6; nunca sombra pesada empilhada |
| Botões de ação | Contorno 1px + fundo transparente (variantes em `docs/layout.md` §5.1); confirmação em diálogo pode usar fundo translúcido |
| Tokens de cor e superfície | Conjunto de CSS custom properties em `docs/layout.md` §2 (base, bordas, estados semânticos de equipamento) |
| Tipografia | Open Sans (`400`, `500`, `600`, `700` disponíveis; títulos e rótulos com **600**, corpo **400**; sem **700** em títulos) |
| Carregamento da fonte | Google Fonts (`family=Open+Sans:wght@400;500;600;700`) |
| Ícones | Phosphor Icons (`@phosphor-icons/web`), peso *regular* por padrão e *fill* só no item ativo da sidebar |
| Implementação de estilo | Tailwind CSS + componentes shadcn/ui (ADR-001), mapeados aos tokens de `docs/layout.md`; variáveis no `:root` / `@theme` |
| CSS global permitido | Import de fonte, variáveis de tema, `@keyframes`, reset mínimo de `body` e estilos de link base (`docs/layout.md` §2.9) |
| Layout de grupos | `flex` / `grid` + `gap`; escala de espaçamento e raios conforme `docs/layout.md` §4 |
| Shell autenticado | Grid `236px 1fr` (sidebar \| conteúdo); header do main com altura **64px** |
| Sidebar | Largura **236px**, grupos **Colaborador** e **Operações** no mesmo app; item ativo com barra inset e ícone *fill* (`docs/layout.md` §7) |
| Login | Split `560px \| 1fr`; hero com gradiente permitido em `docs/layout.md` §2.7; sem sidebar |
| Rotas de referência | `/login`, `/catalogo`, `/catalogo/:patrimonio`, `/meus-emprestimos`, `/operacoes/emprestimos`, `/operacoes/equipamentos/novo` |
| Navegação em profundidade | Breadcrumb no header nas telas de detalhe e cadastro (`docs/layout.md` §7) |
| Componentes de domínio | Pills de estado, chips de filtro, cards de catálogo, tabelas, diálogos e faixa de regras conforme `docs/layout.md` §5 |
| Estados de equipamento (UI) | Disponível, Emprestado, Manutenção, Atraso — cores em `docs/layout.md` §2.4 |
| Motion | Transições discretas, teto **240ms**, sem animar sombra de moldura; respeitar `prefers-reduced-motion` (`docs/layout.md` §8) |
| Divisores de assinatura | Réguas com esmaecimento nas pontas onde `docs/layout.md` §2.8 aplicável; divisores internos de tabela sólidos |
| Copy e locale | Português do Brasil; tom seco e operacional; datas `dd/mmm` (`docs/layout.md` §10) |
| Atributo de rastreio de tela | `data-screen-label` com rótulos `01 Login` … `06 Cadastrar equipamento` em desenvolvimento e QA |
| Regras visíveis na v1 | Máx. 3 itens por pessoa, prazo 14 dias, atraso bloqueia novo empréstimo, manutenção fora do catálogo (`docs/layout.md` §9) |
| Fora do layout v1 | Reserva com data futura, notificação por e-mail, importação de planilha (não desenhar) |

## Justificativas

- **Especificação visual** — `docs/layout.md` concentra tokens, componentes e fluxos de tela; a ADR fixa o que é decisão de produto/UI, não cada valor em pixel.
- **Somente escuro** — o Nocturne adaptado foi desenhado para contraste e marca em fundo escuro; modo claro duplicaria tokens e revisão visual sem demanda no PRD.
- **Primária vs cor de ação** — `#001449` no texto ou botão sólido falha contraste no fundo escuro; `#5B7FE0` concentra affordance clicável.
- **Tailwind + tokens** — o ADR-001 já escolhe Tailwind e shadcn; reproduzir o layout com utilitários e tema estendido mantém uma superfície de estilo e evita CSS inline em massa, alinhado à CSP restritiva do ADR-001.
- **shadcn/ui** — componentes no repositório permitem alinhar botão, input, diálogo e tabela às variantes do `docs/layout.md` sem lutar contra API fechada de biblioteca.
- **Open Sans + Phosphor** — família única e ícones mapeados no layout reduzem improviso por tela e mantêm densidade e hierarquia consistentes.
- **Shell 236px + header 64px** — estrutura repetida em todas as telas autenticadas; fixar dimensões evita drift entre catálogo, empréstimos e operações.
- **Operações no mesmo app** — sidebar com seção extra reflete o PRD (balcão TI no mesmo produto), não segundo front-end.
- **Rotas nomeadas** — substituem âncoras estáticas do protótipo (`#s1`…`#s6`) por navegação real do App Router.
- **Motion curta** — feedback de hover e diálogo sem animação decorativa; limite de 240ms e `prefers-reduced-motion` reduzem ruído e problemas de acessibilidade.
- **Copy pt-BR operacional** — empréstimo interno exige clareza factual; exclamações e emoji contradizem o tom do layout.

## Alternativas descartadas

- **Modo claro ou toggle de tema** — fora do escopo visual aprovado em `docs/layout.md`.
- **Botões primários preenchidos com `#001449`** — contraste insuficiente e conflito com princípio de contorno do layout.
- **Estilos inline como padrão de produção** — nota de protótipo em `docs/layout.md` §10; com Tailwind (ADR-001) tokens viram classes e variáveis, não objetos `style` por elemento.
- **Biblioteca de ícones genérica sem mapeamento** — o layout define ícones por contexto (equipamento, nav, ações); trocar quebraria consistência do protótipo.
- **App separado para Operações** — duplicaria auth, shell e deploy sem ganho para o volume de telas previsto.
- **Gradientes livres** — apenas os três listados em `docs/layout.md` §2.7; evita identidade visual diluída.
- **Espaçamento por margem em cada filho** — proibido explicitamente no layout; `gap` mantém densidade 0.7× previsível.

## Consequências

### Fica mais fácil

- Implementação alinhada a um documento único (`docs/layout.md`) para QA visual e para agentes humanos ou de IA.
- Tema escuro e tokens centralizados no `:root` / Tailwind theme propagam cor e borda para shadcn customizado.
- Rotas e shell fixos permitem layout compartilhado (`sidebar` + `header`) no App Router.
- Estados de equipamento e regras de negócio visíveis têm referência de componente (pill, faixa, contadores).

### Fica mais difícil

- Cada componente shadcn usado precisa ser ajustado às variantes contornadas e cores do Nocturne adaptado, não ao default shadcn.
- Manter paridade pixel-a-pixel exige consultar `docs/layout.md` nas seções §4–§6, não só tokens globais.
- CSP e Tailwind exigem evitar estilos inline e scripts de CDN não previstos; fontes e ícones devem entrar por pipeline compatível com ADR-001 (ex.: pacote npm ou self-host), não necessariamente URLs do protótipo.
- Somente escuro impede “respeitar preferência do sistema” com tema claro sem nova ADR.

### O que isso impede de fazer depois sem custo

- Introduzir modo claro sem duplicar tokens, revisar contraste e alterar esta ADR.
- Trocar família tipográfica ou biblioteca de ícones sem varrer todas as telas e o mapeamento §5.11.
- Usar visual Material/MUI padrão sem overrides extensos — conflita com botões contornados e paleta fixa.

## O que este ADR NÃO decide

- Modelagem de dados, procedimentos tRPC e permissões por papel (ADR-001 e specs de domínio).
- Conteúdo exato de seed ou nomes de colaboradores de exemplo (protótipo em `docs/layout.md` §10).
- Estratégia de teste visual ou screenshot por tela.
- Responsividade mobile: `docs/layout.md` referencia artboards 1440px; breakpoints menores ficam para spec ou ADR futura.
- Carregamento do bundle Nocturne (`_ds/nocturne-*`) do protótipo — produção usa tokens + Tailwind, não dependência obrigatória do bundle JS/CSS de demo.

## Relação com outros documentos

- **ADR-001** — mantém Next.js, Tailwind e shadcn; esta ADR especializa aparência e estrutura de shell, sem substituir stack.
- **`docs/layout.md`** — detalhe executável (hex, padding, grids por tela); se divergir desta ADR em *decisão* (ex.: modo claro), esta ADR prevalece até o time atualizar o documento; se divergir em *detalhe de pixel*, `docs/layout.md` prevalece para implementação visual.
