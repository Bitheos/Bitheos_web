'use client'

// NavLinkGroup.tsx
import React from 'react';
import styled from 'styled-components';

// Define la estructura para los enlaces
interface NavLink {
  name: string;
  href: string;
}

interface NavLinkGroupProps {
  navLinks: NavLink[];
  // Opcional: Define un enlace activo si quieres simular el estado de 'checked'
  activeLink: string; 
}

const NavLinkGroup: React.FC<NavLinkGroupProps> = ({ navLinks, activeLink }) => {
  return (
    <StyledWrapper>
      <div className="customCheckBoxHolder">
        {navLinks.map((link) => (
          // Usamos <a> en lugar de <label> y <input>
          // Aplicamos la clase 'active' si el href coincide con activeLink
          <a 
            key={link.name} 
            href={link.href}
            className={`customNavLink ${link.href === activeLink ? 'active' : ''}`}
          >
            <div className="customCheckBox">
              <div className="inner">{link.name}</div>
            </div>
          </a>
        ))}
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  /* --- ESTILOS ADAPTADOS DE TU CÓDIGO --- */
  
  .customCheckBoxHolder {
    margin: 5px;
    display: flex;
  }

  /* La clase 'customNavLink' reemplaza a '.customCheckBoxWrapper' */
  .customNavLink {
    text-decoration: none; /* Quitamos el subrayado del enlace */
    color: inherit;
  }

  .customCheckBox {
    width: fit-content;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    user-select: none;
    padding: 2px 25px;
    background-color: rgba(0, 0, 0, 0.16);
    border-radius: 0px;
    color: rgba(255, 255, 255, 0.7);
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 300ms;
    transition-property: color, background-color, box-shadow;
    display: flex;
    height: 32px;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 1px 0px inset, rgba(255, 255, 255, 0.17) 0px 1px 1px 0px;
    outline: none;
    justify-content: center;
    min-width: 55px;
  }

  .customCheckBox:hover {
    background-color: #2c2c2c;
    color: white;
    box-shadow: rgba(0, 0, 0, 0.23) 0px -4px 1px 0px inset, rgba(255, 255, 255, 0.17) 0px -1px 1px 0px, rgba(0, 0, 0, 0.17) 0px 2px 4px 1px;
  }

  .customCheckBox .inner {
    font-size: 16px; /* Ajustado el tamaño para la navegación */
    font-weight: 700;
    pointer-events: none;
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 300ms;
    transition-property: transform;
    transform: translateY(0px);
  }

  .customCheckBox:hover .inner {
    transform: translateY(-2px);
  }

  /* --- MANEJO DE BORDES REDONDEADOS --- */
  /* Reemplazamos :first-of-type y :last-of-type en el padre <a> */
  .customNavLink:first-of-type .customCheckBox {
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
    border-right: 0px;
  }

  .customNavLink:last-of-type .customCheckBox {
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
    border-left: 0px;
  }

  /* --- ESTADO ACTIVO (SIMULADO) --- */
  /* La clase 'active' en <a> reemplaza a ':checked + .customCheckBoxWrapper' */
  .customNavLink.active .customCheckBox {
    background-color: #2d6737; /* Color verde/activo */
    color: white;
    box-shadow: rgba(0, 0, 0, 0.23) 0px -4px 1px 0px inset, rgba(255, 255, 255, 0.17) 0px -1px 1px 0px, rgba(0, 0, 0, 0.17) 0px 2px 4px 1px;
  }

  .customNavLink.active .customCheckBox .inner {
    transform: translateY(-2px);
  }
  
  /* Efecto hover sobre el estado activo */
  .customNavLink.active .customCheckBox:hover {
    background-color: #34723f; /* Tono de verde ligeramente diferente en hover */
    box-shadow: rgba(0, 0, 0, 0.26) 0px -4px 1px 0px inset, rgba(255, 255, 255, 0.17) 0px -1px 1px 0px, rgba(0, 0, 0, 0.15) 0px 3px 6px 2px;
  }
`;

export default NavLinkGroup;