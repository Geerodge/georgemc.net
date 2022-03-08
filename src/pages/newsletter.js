import React from "react";
import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';

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

`;

const SignUpSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email address')
        .required('Email address is required')
})

const Newsletter = (props) => {
        const submitForm = (values) => {
            console.log(values); 
        };

    return (
        <NewsletterStyles>
            <Formik
                initialValues={{ email: '' }}
                validationSchema={SignUpSchema}
                onSubmit={submitForm}>
                    {(formik) => (
                        <Form>
                            <h2>{props.formHeading}</h2>
                            <p>{props.paragraph}</p>
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
                                    Join free
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
    )
}

export default Newsletter;