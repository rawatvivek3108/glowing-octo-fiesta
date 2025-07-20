import 'animate.css';
import styles from './About.module.css';

const About = () => {
    return (
        <section id="about" className={`${styles.about} animate__animated animate__fadeInUp`} aria-label="About Me section">
            <h2 className="animate__animated animate__fadeInDown">About Me</h2>
            <p className="animate__animated animate__fadeIn animate__delay-1s">
                I am a web developer passionate about building beautiful, responsive, and user-friendly web applications. I enjoy working with React, CSS animations, and modern JavaScript features. I believe in clean code, great UI/UX, and continuous learning.
            </p>
        </section>
    );
};

export default About;