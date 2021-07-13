import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ContactFormStyles = styled.div`

    .form-wrapper {
        display: flex;
    }

    form {
        background: var(--secondary);
        padding: 25px;
        margin: 3em auto;
        color: var(--white);
        textarea {
            min-height: 5em;
            resize: none;
            color: var(--white);
        }
    }

    input, textarea {
        outline: none;
        border: none;
        background: var(--secondary);
        border-bottom: 1px solid var(--white);
        color: var(--white);
        max-width: 100%;
        margin: 0 0 5px;
        padding-bottom: 10px;
        &:focus, &:active {
            -webkit-transition: border-color 0.3s ease-in-out;
            -moz-transition: border-color 0.3s ease-in-out;
            transition: border-color 0.3s ease-in-out;
            border-bottom: 1px solid var(--tertiary);
        }
        &::-webkit-input-placeholder {
            color: var(--white);
        }
        &:-moz-placeholder { /* Firefox 18- */
            color: var(--white);
        }
        &::-moz-placeholder { /* Firefox 19+ */
            color: var(--white);
        }
        &:-ms-input-placeholder { /* IE 10+ */
            color: var(--white);
        }
        &::-ms-input-placeholder { /* Edge */
            color: var(--white);
        }
        &:placeholder-shown { /* Standard one last! */
            color: var(--white);
        }
    }
        
        
`;

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
};

// const contactForm = document.getElementById("contact");
// contactForm.addEventListener("submit", handleFormSubmit);

const ContactForm = () => {

    const [success, setSuccess] = useState(false);

    useEffect(() => {
        if ( window.location.search.includes("success=true") ) {
            setSuccess(true);
        }
    }, []);

    return (
        
        <ContactFormStyles>
            <div className="form-wrapper">
                {success && (
                    <p style={{ color: "green" }}>Thanks for your message! </p>
                )}
                <form
                    id="contact"
                    name="contact"
                    method="POST"
                    action="/contact/?success=true"
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                    >
                    <input type="hidden" name="form-name" value="contact" />
                    <p>
                        <input type="text" name="name" placeholder="Your name" required /> 
                    </p>
                    <p>
                        <input type="email" name="email" placeholder="Your email address" required />
                    </p>
                    <p>
                        <input type="tel" name="tel" placeholder="Your phone number" required />
                    </p>
                    <p>
                        <textarea name="message" placeholder="Your messsage" required></textarea>
                    </p>
                    <p>
                        <button type="submit" className="primary">Send message</button>
                    </p>
                </form>
             </div>
        </ContactFormStyles>

    );
};

export default ContactForm;