import React from "react";
import { FaHandshake, FaMobileAlt } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

const Box = ({ heading, description, icon }) => (
    
    <>
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
        <h3>{heading}</h3>
        <p>{description}</p>
    </>

)

export default Box;
