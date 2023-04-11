import React, { useState, useEffect } from 'react';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Portfolio from '../pages/Portfolio';
import Resume from '../pages/Resume';

export default function Body() {
  const [currentPage, setCurrentPage] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(window.location.hash);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const renderPage = () => {
    if (currentPage === '#about') {
      return <About />;
    }
    if (currentPage === '#contact') {
      return <Contact />;
    }
    if (currentPage === '#portfolio') {
      return <Portfolio />;
    }
    return <Resume />;
  };

  return (
    <div>
      {renderPage()}
    </div>
  );
}
