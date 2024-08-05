import { useEffect } from 'react';

const useScrollSpeed = (scrollSpeed = 0.5) => {
    useEffect(() => {
        const handleScroll = (event) => {
            event.preventDefault(); // default skroll harakatini oldini oladi
            let delta = event.deltaY * scrollSpeed;
            window.scrollBy({
                top: delta,
                left: 0,
                behavior: 'smooth'
            });
        };

        window.addEventListener('wheel', handleScroll, { passive: false });

        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, [scrollSpeed]);
};

export default useScrollSpeed;
