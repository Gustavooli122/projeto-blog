export default function Footer() {
  return (
    <footer className="bg-[#252525] text-gray-400 px-4 py-12">
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">

        {/* Marca */}
        <div>
          <h2 className="text-white font-bold text-xl mb-3">
            Evolução na <span className="text-[#079968]">Programação</span>
          </h2>
          <p className="text-sm">
            Conteúdos estratégicos para desenvolvedores que desejam evoluir
            além do básico, construir profundidade técnica e crescer de forma
            consistente na carreira.
          </p>
        </div>

        {/* Navegação */}
        <nav aria-label="Links do site">
          <h3 className="text-white font-semibold mb-3">Navegação</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-white transition-colors">
                Início
              </a>
            </li>

            <li>
              <a href="/" className="hover:text-white transition-colors">
                Artigos
              </a>
            </li>

            <li>
              <a href="/about" className="hover:text-white transition-colors">
                Sobre
              </a>
            </li>
          </ul>
        </nav>

        {/* Propósito */}
        <div>
          <h3 className="text-white font-semibold mb-3">Propósito</h3>
          <p className="text-sm">
            Este blog foi criado para ajudar programadores a desenvolver
            clareza, direção e mentalidade estratégica na jornada profissional,
            indo além de tutoriais e aprendizados superficiais.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm">
        © {new Date().getFullYear()} Evolução na Programação. Todos os direitos reservados.
      </div>
    </footer>
  );
}