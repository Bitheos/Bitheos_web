"use client";

import React from 'react';
import Header from '@/components/Header';
import Iridescence from '@/components/Iridescence';
import ScrollFloat from '@/components/ScrollFloat';
import SpotlightCard from '@/components/SpotlightCard';
// 🛠️ NUEVA IMPORTACIÓN: ClickSpark
import ClickSpark from '@/components/ClickSpark';
import GlassSurface from '@/components/GlassSurface';

// Iconos SVG de Lucide para las habilidades
const IconCode = (props: React.SVGProps<SVGSVGElement>) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>);
const IconServer = (props: React.SVGProps<SVGSVGElement>) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><path d="M6 6h.01"/><path d="M6 18h.01"/></svg>);
const IconCloud = (props: React.SVGProps<SVGSVGElement>) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19H17a4 4 0 1 0 0-8h-.5c-.6 0-1.1-.3-1.4-.8-.4-.9-.8-2-2.1-2.1-1.2 0-2.3.9-2.3 2.1 0 .2 0 .4.1.6.4.8.8 1.4 1.5 1.7a4.9 4.9 0 0 0 5.4 0c.7-.3 1.1-.9 1.5-1.7.1-.2.1-.4.1-.6 0-1.2-1.1-2.1-2.3-2.1-1.3-.1-1.7-1.2-2.1-2.1-.3-.5-.8-.8-1.4-.8h-.5a4 4 0 1 0 0 8h-.5"/></svg>);
const IconDatabase = (props: React.SVGProps<SVGSVGElement>) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"/></svg>);
const IconUsers = (props: React.SVGProps<SVGSVGElement>) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>);

export default function HomePage() {
  const myGithubHandle = "Bitheos";

  const skillsData = [
    { name: "Frontend", icon: IconCode, description: "React, Next.js, Tailwind CSS, TypeScript" },
    { name: "Backend", icon: IconServer, description: "Node.js, Express, Python, Serverless Functions" },
    { name: "Databases", icon: IconDatabase, description: "PostgreSQL, MongoDB, Firestore, Redis" },
    { name: "Cloud & DevOps", icon: IconCloud, description: "AWS, Azure, Docker, CI/CD, Terraform" },
    { name: "Methodologies", icon: IconUsers, description: "Scrum, Agile, TDD, Clean Architecture" },
  ];

  return (
    // 🛠️ ENVOLVER TODA LA PÁGINA EN ClickSpark
    // He elegido un color cyan para las chispas que hace juego con el estilo moderno/neón.
      <div className="min-h-screen bg-gray-900 font-inter relative"> 
        

        {/* 1. EL ENCABEZADO CON ANIMACIÓN */}
        <Header githubHandle={myGithubHandle} />

        <main className="pt-0 relative z-10">
        <ClickSpark sparkColor="#FFFF" duration={400} sparkCount={8} sparkSize={10} sparkRadius={15}>
          
          {/* 2. SECCIÓN HERO CON EFECTO IRIDESCENCE */}
          <section id="home" className="relative min-h-[calc(100vh-64px)] flex items-center justify-center text-center p-8 border-b border-gray-800 overflow-hidden">
            
            {/* Fondo animado con Iridescence */}
            <div className="absolute inset-0 z-0">
              <Iridescence
                color={[0.5, 0.6, 0.8]}
                mouseReact={false}
                amplitude={0.1}
                speed={0.8}
              />
            </div>

            {/* Contenido principal */}
            <div className="relative z-20 max-w-4xl mx-auto py-20">
              <p className="text-xl sm:text-2xl text-white mb-4 font-medium uppercase tracking-widest drop-shadow-lg">
                  HELLO, I'M A DEVELOPER!
              </p>
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold text-white mb-6 leading-tight drop-shadow-xl">
                Creating web experiences with <span className="text-indigo-300">Next.js</span> and the <span className="text-yellow-200">Cloud</span>.
              </h1>
              <p className="text-lg sm:text-xl text-white/90 mb-10 font-light drop-shadow-lg">
                From scalable applications to pixel-perfect user interfaces, I specialize in high-performance solutions.
              </p>
              <div className="flex justify-center items-center space-x-4">
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
                    View Recent Projects
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
                    href="https://github.com/Bitheos"
                  >
                  <svg className="w-9 h-9" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </GlassSurface>
            </div>
            </div>
          </section>

          {/* 3. SECCIÓN PROYECTOS */}
          <section id="projects" className="min-h-screen bg-gray-800 p-8 pt-20 border-b border-gray-700">
            <ScrollFloat 
              containerClassName="text-center mb-12"
              textClassName="text-4xl font-extrabold text-indigo-400"
            >
              Featured Projects
            </ScrollFloat>
            <div className="text-center text-gray-400 py-10">
              Your project cards will go here.
            </div>
          </section>

          {/* 4. SECCIÓN HABILIDADES CON SPOTLIGHT CARDS */}
          <section id="skills" className="min-h-screen bg-gray-900 p-8 pt-20 border-b border-gray-800">
            <ScrollFloat 
              containerClassName="text-center mb-16"
              textClassName="text-4xl font-extrabold text-white"
            >
              My Tech Stack
            </ScrollFloat>
            
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skillsData.map((skill) => (
                <SpotlightCard 
                  key={skill.name}
                  spotlightColor="rgba(139, 92, 246, 0.3)"
                  className="transition-transform duration-300 hover:scale-[1.02]"
                >
                  <div className="relative z-10">
                    <div className="flex items-center space-x-4 mb-4">
                      <skill.icon className="w-8 h-8 text-indigo-400 shrink-0" />
                      <h3 className="text-2xl font-bold text-white tracking-wider">{skill.name}</h3>
                    </div>
                    <p className="text-gray-400 text-base leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </SpotlightCard>
              ))}
            </div>

          </section>

          {/* 5. SECCIÓN CONTACTO */}
          <section id="contact" className="min-h-screen bg-gray-800 p-8 pt-20">
            <ScrollFloat 
              containerClassName="text-center mb-12"
              textClassName="text-4xl font-extrabold text-indigo-400"
            >
              Let's Talk
            </ScrollFloat>
            <div className="text-center text-gray-400 py-10">
              Your contact form and social links will go here.
            </div>
          </section>

          {/* 6. FOOTER */}
          <footer className="bg-gray-950 p-6 text-center text-gray-500 text-sm border-t border-gray-700">
            © {new Date().getFullYear()} {myGithubHandle}. Built with Next.js and Tailwind CSS.
          </footer>
    </ClickSpark>
        </main>
      </div>
  );
}