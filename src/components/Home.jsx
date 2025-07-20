import styles from './Home.module.css';
import useFadeInOnScroll from "./hooks/useFadeInOnScroll";
import 'animate.css';
import { ReactTyped } from 'react-typed';
import ParticlesBackground from "./ParticlesBackground";

const Home = () => {
    const [ref, isVisible] = useFadeInOnScroll();

    // Animate.css class names to use when visible
    const sectionAnimation = isVisible ? 'animate__animated animate__fadeInUp' : '';
    const avatarAnimation = isVisible ? 'animate__animated animate__bounceIn' : '';
    const taglineAnimation = isVisible ? 'animate__animated animate__fadeInUp animate__delay-1s' : '';
    const buttonAnimation = isVisible ? 'animate__animated animate__zoomIn animate__delay-2s' : '';

    return (
        <section
            id="home"
            ref={ref}
            className={`fade-in-section ${styles.home} ${sectionAnimation}`}
            aria-label="Home section"
            style={{ position: "relative", overflow: "hidden" }}
        >
            <ParticlesBackground />
            <div style={{ position: "relative", zIndex: 1 }}>
                <h1 className={styles.heading}>
                    <ReactTyped
                        strings={["Hello, I am Vivek Rawat."]}
                        typeSpeed={70}
                        backSpeed={50}
                        showCursor={true}
                        cursorChar="|"
                        loop={true}
                    />
                </h1>

                <p className={`${styles.tagline} ${taglineAnimation}`}>
                    I am passionate about building beautiful web experiences. I have made this website using React.
                </p>

                <img
                    src="vivek_picture.jpg"
                    alt="Portrait of Vivek Rawat, web developer"
                    className={`${styles.avatar} ${avatarAnimation}`}
                />

                <div className={`${styles.buttonContainer} ${buttonAnimation}`}>
                    <a href="/VivekRawatResume.pdf" className={styles["resume-btn"]} target="_blank" rel="noreferrer" aria-label="View Resume PDF in new tab">
                        View Resume
                    </a>
                    <a href="/VivekRawatResume.pdf" className={styles["resume-btn"]} download aria-label="Download Resume PDF">
                        Download Resume
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Home;
