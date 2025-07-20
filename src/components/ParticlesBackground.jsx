import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

const ParticlesBackground = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    const particlesOptions = {
        background: {
            color: { value: "#000" }
        },
        fpsLimit: 60,
        interactivity: {
            events: {
                onClick: { enable: true, mode: "push" },
                onHover: { enable: true, mode: "repulse" },
                resize: true
            },
            modes: {
                push: { quantity: 4 },
                repulse: { distance: 100, duration: 0.4 }
            }
        },
        particles: {
            color: { value: ["#ff6b6b", "#f7b801", "#6bcfff", "#a259f7", "#43e97b"] },
            links: {
                color: "#fff",
                distance: 150,
                enable: true,
                opacity: 0.3,
                width: 1
            },
            collisions: { enable: true },
            move: {
                direction: "none",
                enable: true,
                outModes: { default: "bounce" },
                random: false,
                speed: 2,
                straight: false
            },
            number: { density: { enable: true, area: 800 }, value: 60 },
            opacity: { value: 0.7 },
            shape: { type: "circle" },
            size: { value: { min: 3, max: 7 } }
        },
        detectRetina: true
    };

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={particlesOptions}
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0 }}
        />
    );
};

export default ParticlesBackground;
