import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isDark, setIsDark] = useState(() => {
        const saved = localStorage.getItem('theme');
        return saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
    });
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDark]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Programações', path: '/programacoes' },
        { name: 'Quem Somos', path: '/quem-somos' },
        { name: 'Contato', path: '/contato' },
    ];

    const isActive = (path) => location.pathname === path;

    const navBg = scrolled || !isHome
        ? 'bg-cream/95 dark:bg-[#18120E]/95 backdrop-blur-md shadow-sm'
        : 'bg-transparent';

    const textColor = scrolled || !isHome
        ? 'text-charcoal dark:text-[#E8DFD4]'
        : 'text-white';

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${navBg}`}>
            <div className="section-container">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group">
                        <span className={`font-cinzel text-2xl font-bold tracking-[0.15em] transition-colors duration-500 ${textColor}`}>
                            IBRC
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-150 transition-transform duration-300" />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`font-outfit text-sm font-medium tracking-[0.1em] uppercase transition-all duration-300 relative py-1 ${isActive(link.path)
                                        ? 'text-primary'
                                        : `${textColor} hover:text-primary`
                                    }`}
                            >
                                {link.name}
                                <span className={`absolute bottom-0 left-0 h-[1.5px] bg-primary transition-all duration-300 ${isActive(link.path) ? 'w-full' : 'w-0'
                                    }`} />
                            </Link>
                        ))}

                        {/* Theme Toggle */}
                        <button
                            onClick={() => setIsDark(!isDark)}
                            className={`p-2 rounded-full transition-all duration-300 hover:bg-primary/10 ${textColor}`}
                            aria-label="Alternar tema"
                        >
                            {isDark ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                </svg>
                            )}
                        </button>
                    </div>

                    {/* Mobile controls */}
                    <div className="md:hidden flex items-center gap-3">
                        <button
                            onClick={() => setIsDark(!isDark)}
                            className={`p-2 rounded-full transition-colors ${textColor}`}
                        >
                            {isDark ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                </svg>
                            )}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`p-2 transition-colors ${textColor}`}
                            aria-label="Menu"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden absolute top-20 left-0 w-full bg-cream/98 dark:bg-[#18120E]/98 backdrop-blur-xl border-t border-primary/20 transition-all duration-400 origin-top ${isOpen
                        ? 'opacity-100 translate-y-0 visible'
                        : 'opacity-0 -translate-y-4 invisible'
                    }`}
            >
                <div className="section-container py-8 space-y-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className={`block py-3 px-4 font-cinzel text-sm tracking-[0.15em] uppercase transition-all duration-300 border-l-2 ${isActive(link.path)
                                    ? 'text-primary border-primary bg-primary/5'
                                    : 'text-charcoal dark:text-[#E8DFD4] border-transparent hover:border-primary/50 hover:text-primary hover:pl-6'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
