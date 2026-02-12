import { useState, useEffect } from 'react';

export const useGoldenHour = () => {
    const [isGoldenHour, setIsGoldenHour] = useState(false);

    useEffect(() => {
        const checkTime = () => {
            const now = new Date();
            const hour = now.getHours();
            // Golden hour: roughly 6-8 AM and 4-6 PM (16-18)
            // Adjust these hours as needed or fetch real sunset/sunrise times
            const morningGolden = hour >= 6 && hour < 8;
            const eveningGolden = hour >= 16 && hour < 18;

            const isGolden = morningGolden || eveningGolden;
            setIsGoldenHour(isGolden);

            if (isGolden) {
                document.body.classList.add('golden-hour');
            } else {
                document.body.classList.remove('golden-hour');
            }
        };

        checkTime();
        const interval = setInterval(checkTime, 60000); // Check every minute

        return () => clearInterval(interval);
    }, []);

    return isGoldenHour;
};
