import React from "react";
import { FaHandshake, FaMobileAlt } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { Link } from "gatsby";

const Box = ({ heading, description, icon, buttontext, buttonlink }) => (
    
    <>
        <div>
            {(() => {
                if (icon === "handshake") {
                    return (
                        <FaHandshake size={50} />
                        )
                    } else if (icon === "mobile") {
                        return (
                            <FaMobileAlt size={50} />
                            )
                    } else if (icon === "email") {
                        return (
                            <AiOutlineMail size={50} />
                            )
                    }
                }
            )()}
        </div>
        <h3>{heading}</h3>
        <p>{description}</p>
        <div className="cta">
            <Link href={buttonlink}>
                <button className="primary">{buttontext}</button>
            </Link>
        </div>
    </>

)

export default Box;
