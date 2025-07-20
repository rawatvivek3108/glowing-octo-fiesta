import styles from './Contact.module.css';
import 'animate.css';

const Contact = () => {
    return (
        <section id="contact" className={`${styles.contact} animate__animated animate__fadeInUp`}>
            <h2 className="animate__animated animate__fadeInDown animate__fast">Get in Touch</h2>
            <form 
                action="https://formspree.io/f/mzzgzydp" 
                method="POST" 
                className={`${styles.form} animate__animated animate__fadeInUp animate__delay-1s`}
                aria-label="Contact form"
            >
                <label htmlFor="name" className="visually-hidden">Name</label>
                <input 
                    id="name"
                    type="text" 
                    name="name" 
                    placeholder="Your Name" 
                    required 
                    className={`${styles.input} animate__animated animate__fadeInLeft animate__delay-2s`}
                />
                <label htmlFor="email" className="visually-hidden">Email</label>
                <input 
                    id="email"
                    type="email" 
                    name="email" 
                    placeholder="Your Email" 
                    required 
                    className={`${styles.input} animate__animated animate__fadeInRight animate__delay-2s`}
                />
                <label htmlFor="message" className="visually-hidden">Message</label>
                <textarea 
                    id="message"
                    name="message" 
                    rows="5" 
                    placeholder="Your Message" 
                    required 
                    className={`${styles.textarea} animate__animated animate__fadeInUp animate__delay-3s`}
                ></textarea>
                <button 
                    type="submit" 
                    className={`${styles.submitBtn} animate__animated animate__pulse animate__infinite animate__delay-4s`}
                >
                    Send Message
                </button>
            </form>
        </section>
    );
};

export default Contact;