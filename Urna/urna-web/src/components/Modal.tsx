import React from 'react';

interface ModalProps {
    isOpen: boolean;
    title?: string;
    message?: React.ReactNode;
    onConfirm?: () => void;
    onCancel?: () => void;
    confirmText?: string;
    cancelText?: string;
    showCancel?: boolean;
}

export default function Modal({
    isOpen,
    title,
    message,
    onConfirm,
    onCancel,
    confirmText = 'Confirmar',
    cancelText = 'Cancelar',
    showCancel = true,
}: ModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 overflow-y-auto p-0 sm:p-4">
            <div className="bg-secondary p-5 sm:p-6 md:p-8 border-t-4 sm:border-4 border-btnTxt rounded-t-2xl sm:rounded-2xl w-full sm:max-w-lg text-center text-btnTxt shadow-2xl relative animate-[slideUp_0.2s_ease-out] sm:animate-none"
                style={{ paddingBottom: 'max(1.25rem, env(safe-area-inset-bottom))' }}
            >
                {title && <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{title}</h3>}
                <div className="text-lg sm:text-xl mb-5 sm:mb-6">{message}</div>
                <div className="flex justify-center gap-3 sm:gap-4">
                    {showCancel && onCancel && (
                        <button
                            onClick={onCancel}
                            className="bg-red-700 text-mainTxt px-4 sm:px-6 py-2.5 sm:py-2 rounded-lg sm:rounded text-base sm:text-xl hover:bg-mainTxt hover:text-btnTxt transition-colors border border-transparent hover:border-btnTxt cursor-pointer flex-1 sm:flex-none active:scale-95"
                        >
                            {cancelText}
                        </button>
                    )}
                    {onConfirm && (
                        <button
                            onClick={onConfirm}
                            className="bg-green-700 text-mainTxt px-4 sm:px-6 py-2.5 sm:py-2 rounded-lg sm:rounded text-base sm:text-xl hover:bg-mainTxt hover:text-btnTxt transition-colors border border-transparent hover:border-btnTxt cursor-pointer flex-1 sm:flex-none active:scale-95"
                        >
                            {confirmText}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
