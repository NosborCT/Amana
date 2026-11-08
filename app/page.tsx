const clinic = {
  name: "Dra. Amanda Teixeira - Cirurgiã-Dentista ",
  dentist: "Dra. Amanda Teixeira - CRO-GO 26479 ",
  phone: "(62) 9 9933-0405",
  whatsappText: "Agendar pelo WhatsApp",
  whatsappHref:
    "https://wa.me/5562999330405?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta.",
  address:
    "Avenida C 182, QD 407 LT 16, Nº 910 - Jardim América, Goiânia - GO, 74275-020",
  mapsHref: "https://maps.app.goo.gl/ccdcoXihAFQi3er46",
  email: "draamandateixeira.cro@gmail.com",
};

const services = [
  {
    title: "Consulta odontológica",
    description: "Avaliação completa e planejamento individualizado.",
  },
  {
    title: "Odontologia infantil",
    description:
      "Atendimento acolhedor, preventivo e adaptado às necessidades de cada criança.",
  },
  {
    title: "Prevenção e profilaxia",
    description:
      "Limpeza profissional e cuidados para manter a saúde bucal em dia.",
  },
  {
    title: "Restaurações",
    description: "Recuperação da saúde, função e estética dos dentes.",
  },
  {
    title: "Saúde da gengiva",
    description:
      "Avaliação, prevenção e tratamento dos problemas gengivais.",
  },
  {
    title: "Urgências odontológicas",
    description:
      "Avaliação para dor, trauma ou outras necessidades que exigem atenção.",
  },
];

const gallery = [
  {
    title: "Consultório",
    caption: "Um espaço preparado para cuidar de você.",
    image: "/consultorio-cadeira.png",
    position: "center 58%",
  },
  {
    title: "Ambiente acolhedor",
    caption: "Um espaço pensado para proporcionar conforto desde a chegada.",
    image: "/consultorio-espera.png",
    position: "center 48%",
  },
  {
    title: "Atendimento infantil",
    caption:
      "Detalhes que ajudam a tornar a experiência das crianças mais tranquila.",
    image: "/consultorio-atendimento-infantil.png",
    position: "center 48%",
  },
  {
    title: "Atendimento Adulto",
    caption:
      "Estrutura para oferecer um atendimento cuidadoso e responsável também para adultos.",
    image: "/consultorio-atendimento.png",
    position: "center 48%",
  },
  {
    title: "Cada detalhe pensado para você",
    caption: "Porque uma boa experiência começa antes mesmo da consulta.",
    image: "/consultorio-recepcao.png",
    position: "center 47%",
  },
];

const testimonials = [
  "Atendimento muito cuidadoso, especialmente com meu filho na primeira consulta.",
  "Ambiente limpo, bonito e a doutora explicou tudo com muita calma.",
  "Foi uma consulta tranquila e pontual. Me senti segura durante todo o atendimento.",
  "Melhor experiência! Muito profissional e excelente atendimento.",
  "Fiquei muito feliz e tranquila durante o procedimento. Muito obrigada pelo cuidado!",
  "Atendimento com excelência! Minha filha ficou bem tranquila com o carinho recebido.",
  "Excelente profissional! Consultório lindo, organizado e super limpo. Voltaremos sempre que precisarmos!",
  "Um atendimento acolhedor, com muita atenção e carinho. A doutora transmite confiança e deixa tudo mais tranquilo.",
  "Gostei muito da experiência. Fui atendida com paciência, atenção e muito respeito.",
  "Desde a chegada até o fim da consulta, fui recebida com muito carinho. Um ambiente agradável e um atendimento atencioso.",
];

export default function Home() {
  return (
    <main>
      <header className="site-header" aria-label="Navegacao principal">
        <a className="brand" href="#top" aria-label="Ir para o inicio">
          <span className="brand-mark" aria-hidden="true">
            <img src="/amanda-teixeira-logo.png" alt="" />
          </span>
          <span>
            <strong>{clinic.dentist}</strong>
            <small>Especializando em odontopediatria e clinica geral | Farmacêutica</small>
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
          src="/hero-consultorio-amanda.png"
          alt="Consultório odontológico da Dra. Amanda Teixeira"
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">CUIDADO DESDE O INICIO, ACOMPANHANDO CADA FASE DA VIDA</p>
          <h1>{clinic.name}</h1>
          <p className="hero-copy">
            Atendimento odontológico para crianças,adolescentes e adultos, com carinho, tranquilidade e atenção individualizada em cada consulta.
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
          <strong>Atendimento acolhedor</strong>
          <p>Cada paciente é recebido com carinho, atenção e respeito ao seu tempo.</p>
        </div>
        <div className="metric">
          <span>02</span>
          <strong>Crianças a adultos</strong>
          <p>Cuidado odontológico pensado para acompanhar toda a família.</p>
        </div>
        <div className="metric">
          <span>03</span>
          <strong>Prevenção e acompanhamento</strong>
          <p>Cuidar hoje para manter sorrisos saudáveis por toda a vida.</p>
        </div>
      </section>

      <section className="section about-section" id="sobre">
        <div className="about-photo-wrap">
          <img
            className="about-photo"
            src="/dra-amanda-consultorio.png"
            alt="Dra. Amanda Teixeira em seu consultório odontológico"
          />
        </div>
        <div className="about-content">
          <p className="eyebrow dark">Conheça a Dra. Amanda</p>
          <h2>Odontologia com carinho, cuidado e propósito.</h2>
          <div className="copy-stack">
            <p>
              Desde criança, eu sonhava em ser dentista. Hoje, tenho a alegria
              de transformar esse sonho em cuidado para cada paciente que chega
              até mim.
            </p>
            <p>
              Meu objetivo é proporcionar uma experiência odontológica tranquila
              e acolhedora, respeitando as necessidades de crianças, adolescentes
              e adultos.
            </p>
            <p>
              Atualmente, também me especializo em Odontopediatria, uma área pela
              qual tenho um carinho especial e que reforça meu propósito de
              construir experiências positivas com a saúde bucal desde a infância.
            </p>
          </div>
          <a className="button about-button" href="#contato">
            Conheça minha história
          </a>
        </div>
      </section>

      <section className="section service-section" id="servicos">
        <div className="section-heading">
          <p className="eyebrow dark">Tratamentos</p>
          <h2>Cuidado personalizado para cada sorriso.</h2>
        </div>
        <div className="service-carousel" aria-label="Tratamentos oferecidos">
          <div className="service-track">
            {[...services, ...services].map((service, index) => (
              <article className="service-card" key={`${service.title}-${index}`}>
                <span aria-hidden="true" />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="gallery-section" id="consultorio">
        <div className="section-heading light">
          <p className="eyebrow">Consultorio</p>
          <h2>Um espaço preparado para cuidar de você.</h2>
        </div>

        <div className="carousel" aria-label="Fotos do consultorio">
          <div className="carousel-track">
            {[...gallery, ...gallery].map((item, index) => (
              <article className="gallery-card" key={`${item.title}-${index}`}>
                <img
                  src={item.image}
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
        <div className="testimonial-carousel" aria-label="Avaliações de pacientes">
          <div className="testimonial-track">
            {[...testimonials, ...testimonials].map((quote, index) => (
              <blockquote key={`${quote}-${index}`}>
                <p>{quote}</p>
              </blockquote>
            ))}
          </div>
        </div>
        <a
          className="button google-reviews-button"
          href="https://www.google.com/search?q=amanda+teixeira+dentista+goiania+&sxsrf=AKL5yDjm-GoE12kq6DKSAI51yrfTRKg0Fw%3A1794152722103#lrd=0x935ef1ccddc830bb:0x1e4a32c04c81e591,1,,,,"
          target="_blank"
          rel="noreferrer"
        >
          Ver avaliações no Google
        </a>
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
        <div className="map-panel">
          <iframe
            src="https://www.google.com/maps?q=Avenida%20C%20182%2C%20QD%20407%20LT%2016%2C%20N%C2%BA%20910%2C%20Jardim%20Am%C3%A9rica%2C%20Goi%C3%A2nia%20-%20GO%2C%2074275-020&output=embed"
            title="Mapa do consultório da Dra. Amanda Teixeira"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="map-details">
            <span>Jardim América</span>
            <strong>Goiânia — GO</strong>
            <small>Atendimento com hora marcada</small>
          </div>
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
