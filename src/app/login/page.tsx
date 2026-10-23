import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  return (
    <main
      className="grid min-h-[820px] h-screen grid-cols-[560px_minmax(0,1fr)]"
      data-screen-label="01 Login"
    >
      <section
        className="flex flex-col justify-between bg-[linear-gradient(160deg,#001449_0%,#00102F_60%,#080C1A_100%)] p-14"
        aria-labelledby="hero-title"
      >
        <div className="flex w-fit items-center gap-[11px] text-base font-semibold tracking-[0.02em] text-text">
          <span
            className="grid size-10 place-items-center rounded-xl border border-accent-700 bg-[#13266380] text-[22px] text-accent-300"
            aria-hidden="true"
          >
            <i className="ph ph-package" />
          </span>
          <span>EmpresTI</span>
        </div>

        <div className="my-auto flex flex-col gap-[22px] py-12">
          <h1
            className="m-0 max-w-[20ch] text-[34px] font-semibold leading-[1.15] tracking-[-0.01em] text-text [text-wrap:pretty]"
            id="hero-title"
          >
            Equipamentos sob controle.
          </h1>
          <p className="m-0 max-w-[38ch] text-[14px] leading-[1.65] text-[#93A0C6]">
            Empréstimos e devoluções de equipamentos, em um só lugar.
          </p>
          <div
            className="mt-[6px] h-px w-[132px] bg-[linear-gradient(to_right,#3C5DBE,rgba(60,93,190,0))]"
            aria-hidden="true"
          />
          <div
            className="flex gap-10 pt-2"
            role="group"
            aria-label="Regras de empréstimo"
          >
            <div className="flex flex-col gap-[5px]">
              <span className="text-2xl font-semibold leading-[1.2] text-text">
                3
              </span>
              <span className="text-xs text-[#93A0C6]">itens por pessoa</span>
            </div>
            <div className="flex flex-col gap-[5px]">
              <span className="text-2xl font-semibold leading-[1.2] text-text">
                14 dias
              </span>
              <span className="text-xs text-[#93A0C6]">prazo padrão</span>
            </div>
          </div>
        </div>

        <div className="text-[11px] text-[#7C86A2]">Operações · v1</div>
      </section>

      <section
        className="grid place-items-center bg-app p-14"
        aria-labelledby="login-heading"
      >
        <div className="flex w-full max-w-[372px] flex-col">
          <h2
            className="m-0 text-[22px] font-semibold leading-[1.35] text-text"
            id="login-heading"
          >
            Entrar
          </h2>
          <p className="mb-[30px] mt-[7px] text-[13px] leading-[1.6] text-muted">
            Use seu e-mail e sua senha para acessar.
          </p>

          <div className="flex flex-col gap-[18px]">
            <div className="flex flex-col gap-2">
              <label className="text-xs text-[#9AA3BC]" htmlFor="email">
                E-mail
              </label>
              <Input
                autoComplete="username"
                className="h-[42px] w-full rounded-lg border border-strong bg-sunken px-3 text-[13px] text-text transition-colors duration-150 placeholder:text-faint hover:border-frame focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-400"
                id="email"
                name="email"
                placeholder="nome@empresa.com"
                type="email"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs text-[#9AA3BC]" htmlFor="password">
                Senha
              </label>
              <Input
                autoComplete="current-password"
                className="h-[42px] w-full rounded-lg border border-strong bg-sunken px-3 text-[13px] text-text transition-colors duration-150 placeholder:text-faint hover:border-frame focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-400"
                id="password"
                name="password"
                placeholder="Digite sua senha"
                type="password"
              />
            </div>
          </div>

          <Button className="mt-6 flex h-11 items-center justify-center gap-2.5 rounded-lg border border-accent-500 bg-transparent text-[13px] font-semibold text-accent-300 transition-colors duration-150 hover:border-accent-400 hover:bg-[#5B7FE014] hover:text-[#EEF2FE] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-400" type="button">
            Entrar
            <i className="ph ph-arrow-right text-base" aria-hidden="true" />
          </Button>
          <div
            className="my-5 h-px bg-[linear-gradient(to_right,rgba(230,234,246,0),#222C4A_48px,#222C4A_calc(100%_-_48px),rgba(230,234,246,0))]"
            aria-hidden="true"
          />
          <p className="m-0 text-center text-xs leading-[1.6] text-faint">
            Acesso restrito a pessoas convidadas. Em caso de dúvida, procure
            Operações.
          </p>
        </div>
      </section>
    </main>
  );
}
