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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 overflow-y-auto p-4">
            <div className="bg-secondary p-6 md:p-8 border-4 border-btnTxt rounded-2xl w-full max-w-lg text-center text-btnTxt shadow-2xl relative">
                {title && <h3 className="text-2xl font-bold mb-4">{title}</h3>}
                <div className="text-xl mb-6">{message}</div>
                <div className="flex justify-center gap-4">
                    {showCancel && onCancel && (
                        <button
                            onClick={onCancel}
                            className="bg-red-700 text-mainTxt px-6 py-2 rounded text-xl hover:bg-mainTxt hover:text-btnTxt transition-colors border border-transparent hover:border-btnTxt cursor-pointer"
                        >
                            {cancelText}
                        </button>
                    )}
                    {onConfirm && (
                        <button
                            onClick={onConfirm}
                            className="bg-green-700 text-mainTxt px-6 py-2 rounded text-xl hover:bg-mainTxt hover:text-btnTxt transition-colors border border-transparent hover:border-btnTxt cursor-pointer"
                        >
                            {confirmText}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
