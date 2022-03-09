import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const NewsletterStyles = styled.div`

    margin: 2em 1em;

    form {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        align-items: center;
        justify-items: center;
    }

    form .form-inputs {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        align-items: center;
        justify-items: center;
        margin-top: 3rem;
    }

    .email {
        border: solid 1px var(--tertiary);
        height: 2.3em;
        margin: 0 0 15px 0;
        padding: 0 15px;
    }

    .email::placeholder {
        font-size: smaller;
    }

    .error {
        color: red;
        padding: 15px 0;
    }

    .center {
        text-align: center;
    }

@media only screen
    and (min-width: 640px) {

    form .form-inputs {
        flex-direction: row;
    }

    form button {
        height: 2.4em;
        margin-left: 1rem;
    }

    .email {
        margin: 0;
    }
}
`;

const SignUpSchema = Yup.object().shape({
    email: Yup.string()
        .email("Invalid email address")
        .required("Email address is required")
});

const Newsletter = () => {
    const submitForm = async (values) => {
        console.log(values);
        const { email } = values;
        try {
            const payload = {
                email: email
            };

        await axios.post("/.netlify/functions/add-email-subscriber", payload);
            alert("Contact details were added successfully");
        } catch (error) {
            alert(error.message);
        }
    };


    return (
        <Layout>
            <NewsletterStyles>
                <Formik
                    initialValues={{ email: "" }}
                    validationSchema={SignUpSchema}
                    onSubmit={submitForm}>
                        {(formik) => (
                            <Form>
                                <h1 className="center">Web Development Tips to <span>Supercharge</span> Your Skills</h1>
                                <p className="center">Once a week you'll get some practical web development tips and insights that will help you improve your skills.</p>
                                <div className="form-inputs">
                                    <Field 
                                        name="email"
                                        className="email"
                                        placeholder="Enter your email address..."
                                    />
                                    <button
                                        disabled={!formik.isValid || !formik.dirty}
                                        type="submit"
                                        className="primary">
                                        Subscribe
                                    </button>
                                </div>
                                <ErrorMessage 
                                    name="email"
                                    className="error"
                                    component="div"
                                />
                            </Form>
                        )}
                </Formik>
            </NewsletterStyles>
        </Layout>
    )
}

export default Newsletter;