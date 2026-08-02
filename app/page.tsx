const clinic = {
  name: "Dra. Amanda Teixeira - Odontologia",
  dentist: "Dra. Amanda Teixeira",
  phone: "(00) 00000-0000",
  whatsappText: "Agendar pelo WhatsApp",
  whatsappHref:
    "https://wa.me/5500000000000?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta.",
  address: "Rua Nome da Clinica, 000 - Centro, Sua Cidade",
  mapsHref: "https://maps.google.com/?q=Rua%20Nome%20da%20Clinica%20000",
  email: "contato@draamanda.com.br",
};

const services = [
  {
    title: "Odontopediatria",
    description:
      "Acolhimento para criancas, primeira consulta, prevencao, acompanhamento do crescimento e orientacao para a familia.",
  },
  {
    title: "Clinica geral",
    description:
      "Consultas para adultos, avaliacao completa, profilaxia, restauracoes e planejamento de cuidado continuo.",
  },
  {
    title: "Prevencao",
    description:
      "Limpeza, aplicacao de fluor, orientacoes de higiene e acompanhamento para evitar problemas futuros.",
  },
];

const gallery = [
  {
    title: "Recepcao acolhedora",
    caption: "Um espaco calmo para receber familias e adultos.",
    position: "left center",
  },
  {
    title: "Consultorio moderno",
    caption: "Ambiente claro, organizado e preparado para o cuidado diario.",
    position: "right center",
  },
  {
    title: "Cuidado para criancas",
    caption: "Detalhes leves para tornar a consulta infantil mais tranquila.",
    position: "center center",
  },
  
];

const testimonials = [
  "Atendimento muito cuidadoso, especialmente com meu filho na primeira consulta.",
  "Ambiente limpo, bonito e a doutora explicou tudo com muita calma.",
  "Foi uma consulta tranquila e pontual. Me senti segura durante todo o atendimento.",
];

export default function Home() {
  return (
    <main>
      <header className="site-header" aria-label="Navegacao principal">
        <a className="brand" href="#top" aria-label="Ir para o inicio">
          <span className="brand-mark" aria-hidden="true">
            DA
          </span>
          <span>
            <strong>{clinic.name}</strong>
            <small>Odontopediatria e clinica geral</small>
          </span>
        </a>

        <nav className="header-links" aria-label="Links do site">
          <a href="#sobre">Sobre</a>
          <a href="#servicos">Tratamentos</a>
          <a href="#consultorio">Consultorio</a>
          <a href="#endereco">Endereco</a>
        </nav>

        <div className="header-actions" aria-label="Contatos">
          <a className="text-link" href={`tel:${clinic.phone.replace(/\D/g, "")}`}>
            {clinic.phone}
          </a>
          <a className="button button-small" href={clinic.whatsappHref}>
            WhatsApp
          </a>
        </div>
      </header>

      <section className="hero" id="top">
        <img
          className="hero-image"
          src="/clinic-interior.png"
          alt="Consultorio odontologico moderno, claro e acolhedor"
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">Sorrisos saudaveis desde a infancia</p>
          <h1>{clinic.name}</h1>
          <p className="hero-copy">
            Atendimento odontologico acolhedor para criancas e adultos, com
            foco em prevencao, conforto e explicacoes claras em cada etapa.
          </p>
          <div className="hero-actions">
            <a className="button" href={clinic.whatsappHref}>
              Agendar consulta
            </a>
            <a className="button button-secondary" href="#consultorio">
              Ver o consultorio
            </a>
          </div>
        </div>
      </section>

      <section className="intro-band" aria-label="Diferenciais do atendimento">
        <div className="metric">
          <span>01</span>
          <strong>Escuta cuidadosa</strong>
          <p>Tempo para entender queixas, medos e rotina de cada paciente.</p>
        </div>
        <div className="metric">
          <span>02</span>
          <strong>Atendimento familiar</strong>
          <p>Consultas para criancas, adolescentes e adultos no mesmo espaco.</p>
        </div>
        <div className="metric">
          <span>03</span>
          <strong>Prevencao primeiro</strong>
          <p>Planos simples para manter a saude bucal em dia.</p>
        </div>
      </section>

      <section className="section two-column" id="sobre">
        <div>
          <p className="eyebrow dark">Sobre a dentista</p>
          <h2>Um atendimento tranquilo, humano e bem explicado.</h2>
        </div>
        <div className="copy-stack">
          <p>
            A {clinic.dentist} atende criancas e adultos com uma abordagem
            cuidadosa, respeitando o tempo de cada paciente e explicando as
            opcoes de tratamento de forma simples.
          </p>
          <p>
            Na odontopediatria, o foco e criar uma experiencia positiva desde
            cedo. Para adultos, o atendimento combina avaliacao completa,
            prevencao e acompanhamento continuo.
          </p>
        </div>
      </section>

      <section className="section service-section" id="servicos">
        <div className="section-heading">
          <p className="eyebrow dark">Tratamentos</p>
          <h2>Cuidado odontologico para diferentes fases da vida.</h2>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <span aria-hidden="true" />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="gallery-section" id="consultorio">
        <div className="section-heading light">
          <p className="eyebrow">Consultorio</p>
          <h2>Um ambiente pensado para receber bem.</h2>
        </div>

        <div className="carousel" aria-label="Fotos do consultorio">
          <div className="carousel-track">
            {[...gallery, ...gallery].map((item, index) => (
              <article className="gallery-card" key={`${item.title}-${index}`}>
                <img
                  src="/clinic-interior.png"
                  alt={item.title}
                  style={{ objectPosition: item.position }}
                />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.caption}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section testimonials" aria-label="Depoimentos">
        <div className="section-heading">
          <p className="eyebrow dark">Pacientes</p>
          <h2>Experiencias que reforcam confianca.</h2>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((quote) => (
            <blockquote key={quote}>
              <p>{quote}</p>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="location-band" id="endereco">
        <div className="location-copy">
          <p className="eyebrow">Endereco</p>
          <h2>Facil de encontrar e pronto para receber voce.</h2>
          <p>{clinic.address}</p>
          <div className="location-actions">
            <a className="button" href={clinic.mapsHref}>
              Abrir no mapa
            </a>
            <a className="button button-secondary" href={clinic.whatsappHref}>
              Confirmar horario
            </a>
          </div>
        </div>
        <div className="map-panel" aria-label="Resumo do endereco">
          <span>Centro</span>
          <strong>{clinic.address}</strong>
          <small>Atendimento com hora marcada</small>
        </div>
      </section>

      <section className="cta-section" id="contato">
        <div>
          <p className="eyebrow dark">Contato</p>
          <h2>Agende sua avaliacao odontologica.</h2>
          <p>
            Fale pelo WhatsApp, ligue para o consultorio ou envie uma mensagem
            para tirar duvidas sobre horarios e tratamentos.
          </p>
        </div>
        <div className="cta-actions">
          <a className="button" href={clinic.whatsappHref}>
            {clinic.whatsappText}
          </a>
          <a className="text-link dark-link" href={`mailto:${clinic.email}`}>
            {clinic.email}
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <div>
          <strong>{clinic.name}</strong>
          <p>{clinic.address}</p>
        </div>
        <div>
          <a href={clinic.whatsappHref}>WhatsApp</a>
          <a href={`tel:${clinic.phone.replace(/\D/g, "")}`}>Telefone</a>
          <a href={`mailto:${clinic.email}`}>E-mail</a>
        </div>
        <p>
          © 2026 Robson L. P. F. Todos os direitos reservados. Site desenvolvido para
          divulgacao profissional.
        </p>
      </footer>
    </main>
  );
}
