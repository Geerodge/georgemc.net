require("dotenv").config({
  path: `.env`,
});

import axios from "axios";

const handler = async (event, context) => {
  const apiPubKey = "UEBgMU"; //put in env vairable
  const listId = "V3Jynm"; //put in env vairable 

  const apiEndpoint = `https://a.klaviyo.com/api/v2/list/${listId}/subscribe`;

  const body = JSON.parse(event.body);
  const { email } = body;

  if (!email) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "please provide an email address."})
    }
  }

  try {
    const payload = {
      profiles: [{
        email: email
      }]
    }

    const { data } = await axios.post(`${apiEndpoint}?api_key=${apiPubKey}`, payload,
      {
        headers: {
          Accept: 'application/json', 'Content-Type': 'application/json',
        },
      }
    );
    
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    }
  }
};

export {
  handler
}

//   body: JSON.stringify({
//     profiles: [
//       {email: 'george.washington@klaviyo.com'}
//     ]
//   })