# Spec 001 — Tela de login

## Objetivo

Apresentar a tela de entrada do EmpresTI conforme o layout aprovado, em uma
prévia visual de desktop. Esta entrega não autentica usuários.

## Contexto

- O PRD prevê login para colaboradores e Operações.
- O ADR-001 define Supabase Auth com e-mail e senha e cadastro fechado, mas a
  autenticação real não faz parte desta entrega.
- O ADR-002 e `docs/layout.md` definem a identidade visual e o layout de login.

## Escopo

- Uma tela visual de login, sem integração com Supabase ou outro serviço.
- Divisão desktop de `560px | 1fr`, conforme o ADR-002.
- Hero com a marca, título, subtítulo, régua de assinatura e os indicadores
  “3 itens por pessoa” e “14 dias de prazo”.
- Formulário visual centralizado, com campos de e-mail e senha, botão “Entrar”,
  régua esmaecida e nota de suporte.
- Idioma pt-BR, tema escuro, cores, tipografia e ícones conforme o ADR-002 e
  `docs/layout.md`.
- A prévia será avaliada no artboard de referência 1440×820.

## Fora de escopo

- Autenticação, cadastro, recuperação de senha, sessão ou chamadas de rede.
- Validação funcional ou feedback que sugira que o login ocorreu.
- Layout para celular, breakpoints ou adaptação responsiva.
- Outras telas, navegação autenticada ou alterações em serviços externos.

## Comportamento dos controles

- Os campos representam e-mail e senha e podem receber texto.
- O botão “Entrar” é apenas visual: não envia o formulário, não autentica e
  não simula sucesso.
- Não há links funcionais de cadastro ou recuperação de senha.

## Requisitos visuais

1. Usar somente o tema escuro e os tokens definidos em `docs/layout.md`.
2. Usar o gradiente de hero aprovado, sem introduzir outros gradientes.
3. Manter primária `#001449` como fundo profundo; ações usam a rampa aprovada
   e botões contornados.
4. Usar Open Sans e Phosphor Icons conforme as decisões existentes, sem
   adicionar dependências não aprovadas.
5. Incluir `data-screen-label="01 Login"` para desenvolvimento e QA.

## Critérios de aceite

- Em 1440×820, a tela apresenta o split `560px | 1fr` e a composição descrita
  na seção “01 · Login” de `docs/layout.md`.
- O formulário exibe e-mail, senha e o botão “Entrar”, mas nenhuma ação realiza
  autenticação, envio ou simulação de sucesso.
- A aparência segue a paleta, tipografia, espaçamentos, assinatura e estilo de
  ação aprovados nos ADRs e no layout.
- Não são criados layout ou breakpoint mobile.
- A prévia é mostrada localmente e aguarda aceite do usuário antes de qualquer
  publicação.

## Referências

- `docs/PRD.md`
- `docs/adr/001-stack.md`
- `docs/adr/002-layout-ui.md`
- `docs/layout.md`
- `rules/restrictions.md`
