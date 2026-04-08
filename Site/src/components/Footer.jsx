import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-secondary transition-colors duration-300 py-8 border-t border-gray-200 dark:border-white-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <span className="text-xl font-bold text-gray-900 dark:text-white">
                            IBRC<span className="text-primary"></span>
                        </span>
                    </div>
                    <div className="text-gray-600 dark:text-white text-sm">
                        © {new Date().getFullYear()} Igreja Batista Regular do Calvário. Todos os direitos reservados.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
