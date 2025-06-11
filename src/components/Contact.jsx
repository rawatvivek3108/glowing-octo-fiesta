import styles from './Contact.module.css';
import 'animate.css';

const Contact = () => {
    return(
        <section id="contact" className={`${styles.contact} animate_animated animate_fadeInUp`}>
            <h2 className="animate_animated animate_fadeInDown animate_fast">Get in Touch</h2>
            <form action="https://formspree.io/f/mzzgzydp" method="POST" className={`${styles.form} animate_animated animate_fadeInUp animate_delay-1s`}>
            <input type="text" name="name" placeholder="Your Name" required className={`${styles.input} animate_animated animate_fadeInLeft animate_delay-2s`}/>
            <input type="email" name="email" placeholder="Your Email" required className={`${styles.input} animate_animated animate_fadeInRight animate_delay-2s`}/>
            <textarea name="message" rows="5" placeholder="Your Message" required className={`${styles.textarea} animate_animated animate_fadeInUp animate_delay-3s`}></textarea>
            <button type="submit" className={`${styles.submitBtn} animate_animated animate_pulse animate_infinite animate_delay-4s`}>Send Message</button></form>
        </section>
    );
};

export default Contact;