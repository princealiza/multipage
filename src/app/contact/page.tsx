import React from 'react'

const Contact = () => {
  return (
    <div>
        <section className="contact-form" style={{backgroundImage: "url('/contact backgroung image.jpg')", fontSize: 40}}>
            <h2 className="add-in">Contact Us</h2>
            <form>
                <input type="text" placeholder="Full Name" required />
                <input type="email"placeholder="Email Address" required />
                <input type="text" placeholder="Phone Number" required/>
                <textarea placeholder="Your Message" rows={5} required></textarea>
                <button type="submit">Send Message</button>
            </form>
        </section>
    </div>
  )
}

export default Contact