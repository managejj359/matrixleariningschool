import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { fetchActiveWhatsAppNumber, trackWhatsAppClick } from '../../app/learning-center/matrixLearningSlice';

export const useWhatsApp = () => {
    const dispatch = useAppDispatch();
    const { activeWhatsAppNumber, loading, fetched } = useAppSelector((state) => state.matrixLearning);

    useEffect(() => {
        if (!fetched && !loading) {
            dispatch(fetchActiveWhatsAppNumber());
        }
    }, [dispatch, fetched, loading]);

    const handleWhatsAppClick = (message = "I Want New 🆔") => {
        console.log(activeWhatsAppNumber, "activeWhatsAppNumber")
        if (activeWhatsAppNumber) {
            dispatch(trackWhatsAppClick(activeWhatsAppNumber.id));
            const encodedMessage = encodeURIComponent(message);
            window.open(`https://wa.me/${activeWhatsAppNumber.number}?text=${encodedMessage}`, '_blank');
        } else {
            // Fallback if number is not loaded yet
            window.open(`https://wa.me/+919000000000?text=${encodeURIComponent(message)}`, '_blank');
        }
    };

    const whatsappLink = activeWhatsAppNumber
        ? `https://wa.me/${activeWhatsAppNumber.number}`
        : "https://wa.me/+919000000000";

    return {
        whatsappNumber: activeWhatsAppNumber?.number || "+919000000000",
        whatsappLink,
        handleWhatsAppClick,
        loading,
        activeWhatsAppNumber
    };
};
