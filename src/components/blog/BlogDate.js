import React from "react";
import { format } from "date-fns";

function dateCheck(dateCreated, dateUpdated) {

    // Format dates
    const published = format(new Date(dateCreated), "MMMM do, yyyy")
    const updated = format(new Date(dateUpdated), "MMMM do, yyyy")

    // Check which date to use
    if (updated > published) {
        let date = updated,
            text = "Last updated: ";
            
        return [text, date];
    } else { 
        let date = published,
            text = "Published: ";

        return [text, date];
    }

}

const BlogDate = (props) => (

    <p className="date">{dateCheck(props.createdAt, props.updatedAt)}</p>

)

export default BlogDate;