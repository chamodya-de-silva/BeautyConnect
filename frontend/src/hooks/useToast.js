import { useState, useCallback } from 'react';

let _toastId = 0;

/**
 * Custom hook for managing toast notifications.
 * Returns `toasts` array and helper functions: `showToast`, `removeToast`.
 */
const useToast = () => {
    const [toasts, setToasts] = useState([]);

    const showToast = useCallback((message, type = 'info') => {
        const id = ++_toastId;
        setToasts(prev => [...prev, { id, message, type }]);
    }, []);

    const removeToast = useCallback((id) => {
        setToasts(prev => prev.filter(t => t.id !== id));
    }, []);

    return { toasts, showToast, removeToast };
};

export default useToast;
