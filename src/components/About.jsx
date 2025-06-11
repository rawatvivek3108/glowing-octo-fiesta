import 'animate.css';
import styles from './About.module.css';

const About = () => {
    return (
        <section id="about" className={`${styles.about} animate_animated animate_fadeInUp`}>
            <h2 className="animate_animated animate_fadeInDown">About Me</h2>
            <p className="animate_animated animate_fadeIn delay-1s"> I am a web developer passinate about building beautiful , responsive, and user-friendly web applications. I enjoy working with react, CSS animations, and modern JavaScript features. i believe i clean code, great UI/UX, and continuous learning.</p>
        </section>
    );
};

export default About;