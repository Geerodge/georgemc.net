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
        box-shadow: 10px 10px rgba(85,122,149,.15);
        transition: all .4s ease;
        &:hover, &:focus-within {
            box-shadow: 5px 5px rgba(85,122,149,.25);
        }
        textarea {
            min-height: 5em;
            resize: none;
            color: var(--white);
        }
        span {
            border-bottom: 1px solid var(--white);
            display: block;
            width: 20%;
            height: 2px;
            transition: all .4s ease;
        }
        button {
            margin: 2em 2em 0 2em;
        }
    }

    input, textarea {
        outline: none;
        border: none;
        background: var(--secondary);
        color: var(--white);
        width: 100%;
        margin: 0 0 5px;
        padding-bottom: 10px;
        &:focus ~ span {
            width: 100%;
        }
    }

    input:placeholder-shown, textarea:placeholder-shown {
        color: var(--white);
    }

    /* For devices with width greater than or equal to 769px, like landscape tablets and laptops */
    @media only screen
        and (min-width: 768px) {

        form {
            box-shadow: 20px 20px rgba(85,122,149,.15);
            &:hover, &:focus-within {
                box-shadow: 10px 10px rgba(85,122,149,.25);
            }
            p {
                text-align: center;
            }
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
                        <span></span>
                    </p>
                    <p>
                        <input type="email" name="email" placeholder="Your email address" required />
                        <span></span>
                    </p>
                    <p>
                        <input type="tel" name="tel" placeholder="Your phone number" required />
                        <span></span>
                    </p>
                    <p>
                        <textarea name="message" placeholder="Your message" required></textarea>
                        <span></span>
                    </p>
                    <p>
                        <button type="submit" className="primary">Send message</button>
                    </p>
                    {success && (
                        <p style={{ color: "white" }}>Thanks for your message! <span role="img" aria-label="Partying Face">🥳</span></p>
                    )}
                </form>
             </div>
        </ContactFormStyles>

    );
};

export default ContactForm;