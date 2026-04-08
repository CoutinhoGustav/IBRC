import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Previne que o navegador tente restaurar a posição do scroll ao atualizar a página (F5)
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

export default ScrollToTop;
