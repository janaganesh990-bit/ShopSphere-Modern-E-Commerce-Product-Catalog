export function Contact() {
    return `
        <h1>Contact Us</h1>

        <form class="contact-form">

            <input
                type="text"
                placeholder="Your Name"
            >

            <input
                type="email"
                placeholder="Email"
            >

            <textarea
                placeholder="Message"
            ></textarea>

            <button>
                Send
            </button>

        </form>
    `;
}