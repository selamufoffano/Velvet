const Error = () => {
  return (
    <div className="h-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white px-6">
      <div className="text-center max-w-2xl">
        <h1 className="text-8xl md:text-9xl font-extrabold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          404
        </h1>

        <h2 className="mt-6 text-2xl md:text-3xl font-semibold">
          Pagina non trovata
        </h2>

        <p className="mt-4 text-slate-300 text-base md:text-lg leading-relaxed">
          Oops! La pagina che stai cercando non esiste oppure è stata spostata.
          Controlla l'URL oppure torna alla homepage.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            className="rounded-2xl px-6 py-3 text-base bg-indigo-500 hover:bg-indigo-600 transition-colors"
            onClick={() => (window.location.href = "/")}
          >
            Torna alla Home
          </button>

          <button
            className="rounded-2xl px-6 py-3 text-base border border-slate-500 hover:bg-slate-800 transition-colors"
            onClick={() => window.history.back()}
          >
            Torna Indietro
          </button>
        </div>
      </div>
    </div>
  );
};
export default Error;
