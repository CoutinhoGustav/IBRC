import React from 'react';

const ProtectedImage = ({ src, alt, className = "", imgClassName = "" }) => {
    return (
        <div
            className={`relative select-none ${className}`}
            onContextMenu={(e) => e.preventDefault()}
        >
            <img
                src={src}
                alt={alt}
                className={`pointer-events-none ${imgClassName}`}
                draggable={false}
            />
            <div className="absolute inset-0 z-10" />
        </div>
    );
};

export default ProtectedImage;
