import { useState, useEffect } from "react";

function BackgroundFade() {
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const viewportHeight = window.innerHeight; // Get 100vh value
            const fadePoint = viewportHeight/2; // Fully faded at 100vh
            const newOpacity = Math.max(0, 1 - scrollY / fadePoint);
            setOpacity(newOpacity);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <img
            className="fixed top-0 left-0 w-full h-full transition-opacity duration-10"
            src="https://i.gifer.com/J4o.gif"
            style={{ opacity,pointerEvents:"none" }}
        />
    );
}

export default BackgroundFade;
