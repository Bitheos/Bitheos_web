"use client";

import React from 'react';
import dynamic from 'next/dynamic';

// Carga dinámica de componentes con SSR deshabilitado
const Header = dynamic(() => import('@/components/Header'), { ssr: false });
const Iridescence = dynamic(() => import('@/components/Iridescence'), { ssr: false });
const ScrollFloat = dynamic(() => import('@/components/ScrollFloat'), { ssr: false });
const SpotlightCard = dynamic(() => import('@/components/SpotlightCard'), { ssr: false });
const ClickSpark = dynamic(() => import('@/components/ClickSpark'), { ssr: false });
const GlassSurface = dynamic(() => import('@/components/GlassSurface'), { ssr: false });
const Particles = dynamic(() => import('@/components/Particles'), { ssr: false });

// Iconos SVG de Lucide para las habilidades
const IconCode = (props: React.SVGProps<SVGSVGElement>) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>);
const IconServer = (props: React.SVGProps<SVGSVGElement>) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><path d="M6 6h.01"/><path d="M6 18h.01"/></svg>);
const IconCloud = (props: React.SVGProps<SVGSVGElement>) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 21.5 21.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14.5c0-1.8 1.1-3.3 2.7-3.9 0 0 .1 0 .1-.1.4-2.2 2.3-4 4.5-4 2.7 0 5 1.8 5.6 4.3 1.9-.3 3.6 1.2 3.6 3.1 0 1.9-1.7 3.4-3.6 3.1H7.7c-2.1.3-3.7-1.4-3.7-3.4Z"/></svg>);
const IconDatabase = (props: React.SVGProps<SVGSVGElement>) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"/></svg>);
const IconUsers = (props: React.SVGProps<SVGSVGElement>) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>);

type GlowColor = `rgba(${number}, ${number}, ${number}, ${number})`;

// 📝 CONTENIDO EDITABLE ------------------------------------------------------
// Todo el texto del portafolio vive aquí para que puedas presentarte sin tocar
// el diseño. Reemplaza los valores marcados con "TODO" por tu información real.
const PROFILE = {
  name: "Bryan García",
  handle: "Bitheos",
  availability: "Available for freelance & new opportunities",
  // TODO: reemplaza los tres valores de abajo con tus datos reales antes de publicar
  email: "bryangarciad@gmail.com", // TODO: tu correo real
  github: "https://github.com/Bitheos",
  linkedin: "https://www.linkedin.com/in/bryangarciad/", // TODO: tu LinkedIn real
  cv: "/cv-link", // TODO: ruta real de tu CV
};

const highlights = [
  {
    title: "Tools, not one-offs",
    description: "Most of what I ship started as a script to kill a repetitive task — then became a real app.",
  },
  {
    title: "Performance is a feature",
    description: "Core Web Vitals, instant loads and accessible components belong in the definition of done.",
  },
  {
    title: "From repo to live URL",
    description: "Interface, data model and deployment — a project from empty repo to production on my own.",
  },
];

const projectsData: {
  tag: string;
  title: string;
  description: string;
  stack: string[];
  glow: GlowColor;
  link: string;
  demo?: string;
}[] = [
  {
    tag: "Tool · Live",
    title: "Hipogeo",
    description:
      "Word randomizer that lays up to 12 words or phrases into a 3×4 / 4×3 grid — for draws, rosters and group dynamics.",
    stack: ["Next.js", "TypeScript", "Vercel"],
    glow: "rgba(34, 211, 238, 0.7)",
    link: "https://github.com/Bitheos/Hipogeo",
    demo: "https://hipogeo.vercel.app",
  },
  {
    tag: "Native tool",
    title: "AutoClicker for macOS",
    description:
      "Menu-bar utility that automates clicks and key presses: custom hotkeys and a standalone .app built by one script.",
    stack: ["Python", "PyObjC", "pynput"],
    glow: "rgba(251, 191, 36, 0.6)",
    link: "https://github.com/Bitheos/autoclicker",
  },
  {
    tag: "Security",
    title: "KeyForge Vault",
    description:
      "Password manager that encrypts every entry locally with AES-256 before anything touches disk.",
    stack: ["Python", "AES-256"],
    glow: "rgba(99, 102, 241, 0.75)",
    link: "https://github.com/Bitheos/keyforge-vault",
  },
];

const skillsData = [
  { name: "Frontend", icon: IconCode, description: "React, Next.js, TypeScript and Tailwind CSS — responsive, accessible interfaces." },
  { name: "Backend", icon: IconServer, description: "Node.js, Express and REST APIs with validation, error handling and rate limits." },
  { name: "Databases", icon: IconDatabase, description: "PostgreSQL, MongoDB, Firestore and Redis — schemas picked for how the data is read." },
  { name: "Cloud & DevOps", icon: IconCloud, description: "Vercel, AWS, Docker and GitHub Actions — preview deploys and CI before main." },
  { name: "Ways of working", icon: IconUsers, description: "Git workflows, automated tests and small, reviewable increments — docs people read." },
];

// Fondo de sección: orbes de color estáticos + partículas tipo estrellas.
// El Iridescence en movimiento queda reservado para la home; aquí el
// movimiento lo aportan las partículas, así cada sección respira distinto.
const SectionGlow: React.FC<{
  from: string;
  to: string;
  variant?: "default" | "alt";
  particles?: string[];
  particleCount?: number;
}> = ({ from, to, variant = "default", particles = ["#a5b4fc", "#67e8f9"], particleCount = 110 }) => (
  <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
    {/* Color de acento de la sección, sutil y difuminado */}
    <span
      className={`aurora-blob ${variant === "alt" ? "aurora-blob-alt" : ""}`}
      style={{
        width: variant === "alt" ? "32rem" : "36rem",
        height: variant === "alt" ? "32rem" : "36rem",
        top: variant === "alt" ? "-10rem" : "-12rem",
        left: variant === "alt" ? "-8rem" : "-10rem",
        background: `radial-gradient(circle at center, ${from}, transparent 72%)`,
        opacity: 0.9,
      }}
    />
    <span
      className="aurora-blob aurora-blob-alt"
      style={{
        width: variant === "alt" ? "26rem" : "28rem",
        height: variant === "alt" ? "26rem" : "28rem",
        bottom: "-12rem",
        right: "-6rem",
        background: `radial-gradient(circle at center, ${to}, transparent 74%)`,
        opacity: 0.8,
      }}
    />

    {/* Estrellas: el mismo componente del home, a menor densidad para no
        competir con el contenido ni castigar el rendimiento. */}
    <div className="absolute inset-0">
      <Particles
        particleColors={particles}
        particleCount={particleCount}
        particleSpread={10}
        speed={0.07}
        particleBaseSize={90}
        moveParticlesOnHover={false}
        alphaParticles={true}
        disableRotation={false}
      />
    </div>
  </div>
);

export default function HomePage() {
  const myGithubHandle = PROFILE.handle;

  return (
    // 🛠️ ENVOLVER TODA LA PÁGINA EN ClickSpark
    // He elegido un color cyan para las chispas que hace juego con el estilo moderno/neón.
      <div className="min-h-screen bg-[#05060b] font-sans text-white relative overflow-x-hidden"> 
        

        {/* 1. EL ENCABEZADO CON ANIMACIÓN */}
        <Header githubHandle={myGithubHandle} />

        <main className="pt-0 relative z-10">
        <ClickSpark sparkColor="#FFFF" duration={400} sparkCount={8} sparkSize={10} sparkRadius={15}>
          
          {/* 2. SECCIÓN HERO — mi carta de presentación */}
          <section id="home" className="section-theme-dark section-viewport hero-section relative flex items-center justify-center text-center p-8 border-b border-white/10 overflow-hidden">
            
            {/* Fondo animado con Iridescence */}
            <div className="absolute inset-0 z-0">
              <Iridescence
                color={[0.5, 0.6, 0.8]}
                mouseReact={false}
                amplitude={0.1}
                speed={0.8}
              />
            </div>

            {/* Difuminados SOLO en los bordes: el centro queda totalmente vivo para
                que el cristal de los botones muestre el color en movimiento.
                Arriba funde con el header y abajo con la sección siguiente. */}
            <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-28 bg-gradient-to-b from-[#05060b]/75 to-transparent" aria-hidden="true" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-32 bg-gradient-to-b from-transparent to-[#05060b]" aria-hidden="true" />

            {/* Contenido principal */}
            <div className="hero-content relative z-20 max-w-4xl mx-auto py-22 lg:py-0">
              <p className="hero-eyebrow text-sm sm:text-base text-white/95 mb-5 font-semibold uppercase tracking-[0.3em] drop-shadow-[0_2px_12px_rgba(0,0,0,0.75)]">
                Bryan García · Full-stack Developer
              </p>
              <h1 className="hero-title text-5xl sm:text-7xl lg:text-8xl font-extrabold text-white mb-6 leading-tight drop-shadow-[0_4px_28px_rgba(0,0,0,0.55)]">
                Building web products that feel <span className="text-indigo-300">fast</span> — from UI to <span className="text-yellow-200">cloud</span>.
              </h1>
              <p className="hero-subtitle text-lg sm:text-xl text-white/95 mb-4 font-light drop-shadow-[0_2px_14px_rgba(0,0,0,0.7)] max-w-2xl mx-auto">
                I design and ship production-ready products — from pixel-perfect interfaces to resilient APIs — with a focus on performance, accessibility and clean architecture.
              </p>
              <p className="hero-subtitle flex items-center justify-center gap-2 text-sm sm:text-base text-emerald-200 mb-10 font-medium tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
                {PROFILE.availability}
              </p>
              <div className="hero-actions flex flex-wrap justify-center items-center gap-4">
                <GlassSurface
                  borderRadius={50}
                  blur={10}
                  backgroundOpacity={0.1}
                  displace={1}
                  className="shadow-xl ring-2 ring-indigo-600 hover:scale-105 transition duration-300"
                  style={{ minWidth: '280px', minHeight: '80px' }}
                >
                  <a 
                    href="#projects"
                    className="inline-block px-8 py-4.5 text-lg font-bold text-white transition duration-300 transform w-full h-full whitespace-nowrap"
                  >
                    View recent projects →
                  </a>
                </GlassSurface>
                
                <GlassSurface
                  borderRadius={50} // Valor grande para asegurar la curva en el SVG
                  blur={10}
                  backgroundOpacity={0.1}
                  displace={1}
                  className="shadow-xl ring-2 ring-indigo-600 hover:scale-105 transition duration-300"
                  style={{ minWidth: '80px', minHeight: '80px' }}
                >
                  <a
                    href={PROFILE.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub profile"
                  >
                  <svg className="w-9 h-9" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </GlassSurface>
            </div>
            </div>
          </section>

          {/* 3. SECCIÓN SOBRE MÍ — quién soy y cómo trabajo */}
          <section id="about" className="section-theme-light section-viewport section-pad relative flex flex-col justify-center overflow-hidden border-b border-white/10 p-8">
            <SectionGlow
              from="rgba(99, 102, 241, 0.5)"
              to="rgba(56, 189, 248, 0.35)"
              particles={["#c7d2fe", "#a5f3fc"]}
              particleCount={140}
            />

            <div className="relative z-10 mx-auto max-w-5xl">
              <ScrollFloat
                containerClassName="section-heading-block text-center mb-10"
                textClassName="section-heading text-4xl font-extrabold text-white"
              >
                About Me
              </ScrollFloat>

              <div className="glass-panel rounded-3xl p-8 text-left sm:p-10">
                <p className="mb-6 text-lg leading-relaxed text-white/85 sm:text-xl">
                  I&apos;m Bryan, a full-stack developer who likes turning repetitive problems into small, sharp tools. Some started as scripts for my own workflow — an autoclicker, image converters, a word randomizer — and ended up shipped as full apps with proper interfaces.
                </p>
                <p className="text-base leading-relaxed text-white/70 sm:text-lg">
                  My comfort zone runs from React and TypeScript on the front to Node, Python and cloud deployment behind it. I care about the details users actually feel — fast loads, accessible components, predictable interactions — and about code that&apos;s still readable six months later.
                </p>

                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {highlights.map((item) => (
                    <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                      <h3 className="mb-2 text-base font-bold text-white">{item.title}</h3>
                      <p className="text-sm leading-relaxed text-white/60">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 4. SECCIÓN PROYECTOS — próximos casos de estudio */}
          <section id="projects" className="section-theme-dark section-viewport section-pad relative flex flex-col justify-center overflow-hidden border-b border-white/10 p-8">
            <SectionGlow
              from="rgba(56, 189, 248, 0.4)"
              to="rgba(129, 140, 248, 0.4)"
              variant="alt"
              particles={["#818cf8", "#38bdf8"]}
              particleCount={150}
            />

            <div className="relative z-10 mx-auto max-w-6xl">
              <ScrollFloat
                containerClassName="section-heading-block text-center mb-6"
                textClassName="section-heading text-4xl font-extrabold text-indigo-300"
              >
                Featured Projects
              </ScrollFloat>
              <p className="mx-auto mb-12 max-w-2xl text-center text-white/70">
                Three things I&apos;ve shipped — source code on GitHub, one of them running in production.
              </p>

              <div className="section-grid grid grid-cols-1 gap-8 md:grid-cols-3">
                {projectsData.map((project) => (
                  <SpotlightCard
                    key={project.title}
                    spotlightColor={project.glow}
                    className="project-card glass-panel h-full transition-transform duration-300 hover:-translate-y-1"
                  >
                    <div className="relative z-10 flex h-full flex-col">
                      <span className="chip mb-4 self-start">{project.tag}</span>
                      <h3 className="mb-3 text-2xl font-bold text-white">{project.title}</h3>
                      <p className="mb-6 flex-1 leading-relaxed text-white/65">{project.description}</p>
                      <div className="mb-6 flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                          <span key={tech} className="chip">{tech}</span>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-4">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium text-indigo-300/80 transition hover:text-indigo-200"
                        >
                          View on GitHub →
                        </a>
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-cyan-200/90 transition hover:text-cyan-100"
                          >
                            View live demo →
                          </a>
                        )}
                      </div>
                    </div>
                  </SpotlightCard>
                ))}
              </div>

              <div className="mt-12 flex justify-center">
                <GlassSurface
                  borderRadius={50}
                  blur={10}
                  backgroundOpacity={0.1}
                  displace={1}
                  className="shadow-xl ring-2 ring-indigo-600 hover:scale-105 transition duration-300"
                  style={{ minWidth: '240px', minHeight: '72px' }}
                >
                  <a
                    href={PROFILE.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-full w-full items-center justify-center whitespace-nowrap px-8 py-4 text-lg font-bold text-white transition duration-300"
                  >
                    See more on GitHub
                  </a>
                </GlassSurface>
              </div>
            </div>
          </section>

          {/* 4. SECCIÓN HABILIDADES */}
          <section 
            id="skills"
            className="section-theme-light section-viewport section-pad relative flex flex-col justify-center overflow-hidden border-b border-white/10 p-8"
          >
            <SectionGlow
              from="rgba(129, 140, 248, 0.35)"
              to="rgba(45, 212, 191, 0.28)"
              variant="alt"
              particles={["#a5b4fc", "#67e8f9"]}
              particleCount={170}
            />

            {/* El contenido de la sección debe estar por encima de las partículas (z-10 o superior) */}
            <div className="relative z-10 mx-auto max-w-6xl">
              <ScrollFloat
                containerClassName="section-heading-block text-center mb-6"
                textClassName="section-heading text-4xl font-extrabold text-white"
              >
                My Tech Stack
              </ScrollFloat>
              <p className="mx-auto mb-14 max-w-2xl text-center text-white/70">
                The tools I reach for to take a product from the first sketch to production — and the practices that keep it healthy afterwards.
              </p>
              
              <div className="section-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skillsData.map((skill) => (
                  <SpotlightCard 
                    key={skill.name}
                    spotlightColor="rgba(99, 102, 241, 0.7)"
                    className="skill-card glass-panel transition-transform duration-300 hover:-translate-y-1"
                  >
                    {/* Ya tiene z-10 por la estructura de SpotlightCard */}
                    <div className="relative z-10"> 
                      <div className="flex items-center space-x-4 mb-4">
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-500/15 ring-1 ring-indigo-400/30">
                          <skill.icon className="w-6 h-6 text-indigo-300" />
                        </span>
                        <h3 className="text-2xl font-bold text-white tracking-wide">{skill.name}</h3>
                      </div>
                      <p className="text-white/65 text-base leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  </SpotlightCard>
                ))}
              </div>
            </div>
          </section>

          {/* 7. SECCIÓN CONTACTO */}
          <section id="contact" className="section-theme-dark section-viewport section-pad relative flex flex-col justify-center overflow-hidden p-8">
            <SectionGlow
              from="rgba(168, 85, 247, 0.45)"
              to="rgba(236, 72, 153, 0.32)"
              particles={["#d8b4fe", "#f9a8d4"]}
              particleCount={140}
            />

            <div className="relative z-10 mx-auto max-w-3xl text-center">
              <ScrollFloat
                containerClassName="section-heading-block text-center mb-6"
                textClassName="section-heading text-4xl font-extrabold text-indigo-300"
              >
                Let&apos;s Talk
              </ScrollFloat>
              <p className="mx-auto mb-10 max-w-xl text-lg text-white/75">
                Have a project in mind, a role to fill, or just want to say hi? My inbox is always open — I&apos;ll get back to you as soon as I can.
              </p>

              <div className="glass-panel flex flex-col items-center gap-6 rounded-3xl p-8 sm:p-10">
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="break-all text-xl font-semibold text-white transition-colors hover:text-indigo-300 sm:text-2xl"
                >
                  {PROFILE.email}
                </a>

                <div className="flex flex-wrap justify-center gap-3">
                  <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="chip">GitHub</a>
                  <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="chip">LinkedIn</a>
                  <a href={PROFILE.cv} target="_blank" rel="noopener noreferrer" className="chip">Download CV</a>
                </div>

                <GlassSurface
                  borderRadius={50}
                  blur={10}
                  backgroundOpacity={0.1}
                  displace={1}
                  className="shadow-xl ring-2 ring-indigo-600 hover:scale-105 transition duration-300"
                  style={{ minWidth: '240px', minHeight: '72px' }}
                >
                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="flex h-full w-full items-center justify-center whitespace-nowrap px-8 py-4 text-lg font-bold text-white transition duration-300"
                  >
                    Send me a message
                  </a>
                </GlassSurface>
              </div>
            </div>
          </section>

          {/* 8. FOOTER */}
          <footer className="relative z-10 border-t border-white/10 bg-black/40 px-6 py-10 text-center text-sm text-white/50">
            <p className="mb-5">
              © {new Date().getFullYear()} {PROFILE.name} ({myGithubHandle}) — built with Next.js, Tailwind CSS and a lot of care for the details.
            </p>
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <a href="#home" className="transition hover:text-white">Home</a>
              <a href="#about" className="transition hover:text-white">About</a>
              <a href="#projects" className="transition hover:text-white">Projects</a>
              <a href="#skills" className="transition hover:text-white">Skills</a>
              <a href="#contact" className="transition hover:text-white">Contact</a>
            </nav>
          </footer>
    </ClickSpark>
        </main>
      </div>
  );
}