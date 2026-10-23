# Plano 001 — Tela de login

## Estado

Proposta para revisão. Nenhum código de aplicação foi criado.

## Requisitos definidos

- Prévia exclusivamente visual, sem autenticação real.
- Apenas desktop, no artboard de referência 1440×820; sem layout ou breakpoint
  para celular.
- O botão “Entrar” não envia dados nem simula sucesso.
- Seguir ADR-001, ADR-002 e `docs/layout.md`; não introduzir dependências.
- Exibir a prévia ao usuário antes de qualquer publicação.
- Não executar commit ou push; essa ação pertence ao usuário.
- Publicação na Vercel somente após o aceite da prévia e confirmação de que o
  projeto/ambiente necessário está disponível.

## Requisitos ambíguos identificados

Resolvidos com o usuário antes da implementação:

- **Autenticação:** não é necessária nesta entrega; a tela é apenas visual.
- **Comportamento de “Entrar”:** botão sem ação, sem envio ou sucesso simulado.
- **Mobile:** não incluir layout para celular nem responsividade para mobile.

## Etapas

1. **Documentar** — registrar esta spec, este plano e a lista de tarefas.
2. **Revisar** — aguardar a aprovação do usuário para os documentos antes de
   iniciar implementação.
3. **Propor arquivos de aplicação** — como o repositório ainda não tem código,
   apresentar os arquivos e pastas do scaffold e da tela para aprovação antes
   de criá-los; seguir a stack aprovada sem adicionar dependências não
   autorizadas.
4. **Implementar a tela** — executar somente a tarefa aprovada, conforme a
   spec, sem integrar autenticação.
5. **Verificar e apresentar** — rodar os checks disponíveis, iniciar a prévia
   local se a aplicação puder ser executada e parar para o usuário avaliar.
6. **Publicar, se aprovado** — depois do aceite explícito da prévia, avaliar a
   publicação na Vercel. Não fazer commit ou push.

## Arquivos desta etapa

- `docs/specs/001-login/spec.md`
- `docs/specs/001-login/plan.md`
- `docs/specs/001-login/tasks.md`

## Restrições e dependências

- Não criar código antes da revisão dos documentos e da aprovação da próxima
  etapa.
- Não fazer commit ou push.
- Não alterar recursos externos antes do aceite da prévia.
- Não criar autenticação, layout mobile ou decisões fora dos ADRs.
