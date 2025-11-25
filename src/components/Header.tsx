import React, { useState, useEffect, useRef } from 'react';
import FuzzyText from './FuzzyText';
import Noise from './Noise';
import Magnet from './Magnet';
import ClickSpark from './ClickSpark'; 
import NavLinkGroup from './NavLinkGroup';

interface HeaderProps {
  githubHandle: string;
}

const Header: React.FC<HeaderProps> = ({ githubHandle }) => {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  // 1. ESTADO: Para guardar el enlace activo (por defecto, '#home')
  const [activeLink, setActiveLink] = useState(navLinks[0].href); 

  // 2. EFECTO: Configurar el Intersection Observer al cargar
  useEffect(() => {
    // Busca todas las secciones que coincidan con los IDs de los hrefs
    const sectionElements = navLinks
      .map(link => document.querySelector(link.href))
      .filter(Boolean) as Element[]; // Filtra nulls y asegura el tipo

    if (sectionElements.length === 0) return;

    // Callback del observador
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach(entry => {
        // Si la sección es visible (intersecando)
        if (entry.isIntersecting) {
          // El ID de la sección es el href (ej: 'home' -> '#home')
          const currentHash = `#${entry.target.id}`;
          setActiveLink(currentHash);
        }
      });
    };

    // Opciones: 10% visible es suficiente para considerarse activo
    const observerOptions: IntersectionObserverInit = {
      root: null, // viewport
      rootMargin: '0px 0px -70% 0px', // Un margen superior para activar antes de llegar al centro
      threshold: 0.1, // 10% de la sección visible
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observa todas las secciones
    sectionElements.forEach(section => observer.observe(section));

    // Limpieza: Desconecta el observador al desmontar el componente
    return () => observer.disconnect();
  }, []); // Se ejecuta solo una vez al montar

  // Estilo Glassmorphism aplicado:
  const glassHeaderClasses = "fixed top-0 left-0 w-full z-50 bg-gray-900/40 backdrop-blur-lg shadow-2xl border-b border-white/20";

  return (
    <header className={glassHeaderClasses}>
      <ClickSpark sparkColor="#FFFF" duration={400} sparkCount={8} sparkSize={10} sparkRadius={15}>
        <div> 
          <div className="flex justify-between items-center h-16 gap-8 px-4 sm:px-6 lg:px-8"> 
              <Noise 
                  patternSize={250}
                  patternRefreshInterval={3}
                  patternAlpha={12}
              />
            
            {/* Logo/Handle - SIN CAMBIOS */}
            <div className="shrink-0">
              <a href="/" className="flex items-center space-x-2">
                <FuzzyText 
                  fontSize="1.5rem"
                  fontWeight={800}
                  color="#ffffff"
                  baseIntensity={0.05}
                  hoverIntensity={0.2}
                  enableHover={true}
                >
                  {githubHandle}
                </FuzzyText>
              </a>
            </div>

            {/* Navigation with Magnet Effect - Centro */}
            <nav className="hidden md:flex flex-1 justify-center">
              {/* 2. REEMPLAZO: Usar NavLinkGroup */}
              {/* Se envuelve todo el grupo en UN solo Magnet */}
            
                <NavLinkGroup 
                  navLinks={navLinks} 
                  activeLink={activeLink} 
                />
              {/* Se eliminó el mapeo anterior: {navLinks.map((link) => (...))} */}
            </nav>

            {/* CV Button with Magnet Effect - Fijo a la derecha */}
            <div className="shrink-0">
              <Magnet padding={80} magnetStrength={10}>
                {/* 3. REEMPLAZO: Usar el componente Button (Neumorfismo) */}
                <a
                  href="/cv-link" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:block" // Mantenemos la visibilidad de Tailwind
                >
                    Download CV
                </a>
                {/* Se eliminó la clase Tailwind del <a> anterior: className="hidden sm:block px-6 py-2..." */}
              </Magnet>
            </div>
          </div>
        </div>
      </ClickSpark>
    </header>
  );
};

export default Header;