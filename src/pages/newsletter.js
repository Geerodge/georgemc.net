import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import BlogPostPreviewList from "../components/blog/BlogPostPreviewList";
import Seo from "../components/Seo";
import seoImage from "../images/primo-post-newsletter.png"

const NewsletterStyles = styled.div`

    margin: 2em 1em;

    form {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        align-items: center;
        justify-items: center;
        margin-bottom: 5em;
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

    h2.heading {
        font-size: 2.5rem;
        text-align: center;
        color: var(--tertiary);
        padding: 0 1rem;
        span {
            font-style: italic;
            text-decoration: underline;
        }
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


export default function Newsletter({ data: { allSanityPost } }) {

    const blogData = allSanityPost.edges;
    const seoImage = `https://georgemc.net${seoImage}`

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
                <Seo 
                    title="The Primo Post Newsletter"
                    description="Web development tips that will supercharge your skills."
                    image={seoImage}
                />
                <Formik
                    initialValues={{ email: "" }}
                    validationSchema={SignUpSchema}
                    onSubmit={submitForm}>
                        {(formik) => (
                            <Form>
                                <h1 className="center">The Primo Post Newsletter</h1>
                                <h2 className="center heading">Web Development Tips to <span>Supercharge</span> Your Skills</h2>
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
                <h2 className="center heading">Previous Issues of The Primo Post</h2>
                <BlogPostPreviewList
                    title=""
                    data={blogData}
                />
            </NewsletterStyles>
        </Layout>
    )
}

// export default Newsletter;

export const query = graphql`
    query NewsletterQuery {
        allSanityPost(filter: {categories: {elemMatch: {_id: {eq: "c51a69c0-7621-4520-a2d7-dae2fea525c9"}}}}) {
            edges {
                node {
                    slug {
                        current
                    }
                    mainImage {
                    alt
                    asset {
                        fluid(maxWidth: 1000) {
                        ...GatsbySanityImageFluid
                        }
                    }
                    }
                    title
                    seoTitle
                    seoDescription
                    _updatedAt
                    _createdAt
                    author {
                    name
                    mainImage {
                        alt
                        asset {
                        fixed(width: 400) {
                            ...GatsbySanityImageFixed
                        }
                        }
                    }
                    bio {
                        _key
                        _type
                        style
                        list
                        _rawChildren
                    }
                    }
                    categories {
                    title
                    }
                }
            }
        }
    }
`;