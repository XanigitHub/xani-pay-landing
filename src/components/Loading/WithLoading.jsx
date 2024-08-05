import React, { useEffect, useState } from 'react';
import Loading from './Loading';

const WithLoading = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        return () => clearTimeout(timer); // Cleanup timer
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    return <>{children}</>;
};

export default WithLoading;
