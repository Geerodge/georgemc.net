import React from "react";
import { FaHandshake, FaMobileAlt, FaTools } from 'react-icons/fa';

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
                } else if (icon === "tools") {
                    return (
                        <FaTools size={50} />
                        )
                }
            }
        )()}
        <h3>{heading}</h3>
        <p>{description}</p>
    </>

)

export default Box;
