const Index = () => {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center px-5">
      <div className="flex w-full max-w-sm flex-col items-center gap-8">
        <div className="h-px w-12 bg-primary/30" />
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">
          Acesso liberado.
        </h1>
        <div className="h-px w-12 bg-primary/30" />
        <a
          href="https://www.transformapro.site"
          className="btn-glow inline-flex w-full items-center justify-center rounded-xl bg-primary py-4 text-base font-semibold text-primary-foreground transition-all duration-200 active:scale-95"
        >
          Continuar
        </a>
      </div>
    </div>
  );
};

export default Index;
