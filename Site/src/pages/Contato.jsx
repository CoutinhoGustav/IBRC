import React from 'react';

const Contato = () => {
    const socials = [
        {
            name: "Facebook",
            url: "https://www.facebook.com/IgrejaBatistaRegulardoCalvarioDF/?locale=pt_BR",
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
            )
        },
        {
            name: "Instagram",
            url: "https://www.instagram.com/ibrc_df",
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
            )
        },
        {
            name: "Youtube",
            url: "https://www.youtube.com/@igrejabatistaregulardocalv5714",
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
            )
        },
        {
            name: "Spotify",
            url: "https://open.spotify.com/show/3RC1O9rkXKZCRGRWXLrih8",
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.508 17.33c-.201.328-.623.434-.951.234-2.625-1.599-5.932-1.956-9.825-1.073-.377.086-.75-.152-.835-.529-.086-.377.152-.75.529-.835 4.305-.98 8.081-.555 11.135 1.305.327.201.434.623.235.952zm1.314-2.923c-.254.412-.79.537-1.198.285-3.003-1.846-7.584-2.381-11.144-1.303-.464.14-1.025-.13-1.168-.593-.143-.464.13-1.025.594-1.168 4.155-1.258 9.387-.643 12.915 1.527.409.252.534.789.283 1.198zm.135-3.048c-3.605-2.14-9.554-2.337-12.997-1.291-.564.171-1.166-.145-1.338-.709-.17-.564.145-1.166.709-1.338 4.032-1.226 10.672-.992 14.931 1.531.549.325.733 1.036.409 1.585-.325.549-1.036.733-1.585.409z" />
                </svg>
            )
        },
    ];

    return (
        <div className="min-h-screen transition-colors duration-300 flex items-start justify-center pt-20 lg:pt-24">
            <div className="max-w-4xl mx-auto px-4 text-center animate-hero-content">
                <h1 className="text-4xl font-bold mb-12">
                    Fique por dentro em nossas <span className="text-secondary dark:text-primary">redes sociais:</span>
                </h1>

                <div className="flex flex-col items-center gap-6 w-full max-w-md mx-auto">
                    {socials.map((social, index) => (
                        <a
                            key={index}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative w-full flex items-center justify-center gap-4 py-4 px-8 bg-white dark:bg-secondary/20 border-2 border-transparent hover:border-[#C5A57D]/50 rounded-[20px] shadow-lg hover:shadow-[#C5A57D]/20 transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <div className="absolute left-6 text-white-400 group-hover:text-[#C5A57D] transition-colors duration-300">
                                {social.icon}
                            </div>
                            <span className="text-xl font-bold text-white-800 dark:text-white group-hover:text-[#C5A57D] transition-colors duration-300">
                                {social.name}
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Contato;
