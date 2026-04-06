import React from 'react';

const ProtectedImage = ({ src, alt, className = "" }) => {
    const handleContextMenu = (e) => {
        e.preventDefault();
    };

    const handleDragStart = (e) => {
        e.preventDefault();
    };

    return (
        <div className={`relative inline-block select-none ${className}`} onContextMenu={handleContextMenu}>
            <img
                src={src}
                alt={alt}
                className="w-full h-auto pointer-events-none"
                onDragStart={handleDragStart}
            />
            {/* Invisible overlay */}
            <div
                className="absolute inset-0 z-10"
                style={{ backgroundColor: 'transparent' }}
            ></div>
        </div>
    );
};

export default ProtectedImage;
