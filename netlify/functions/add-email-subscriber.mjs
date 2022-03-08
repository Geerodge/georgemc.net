require("dotenv").config({
  path: `.env`,
});

import axios from "axios";

module.exports.handler = async (event, context) => {
  const apiPubKey = process.env.klaviyo_apiPubKey;
  const apiSecret = process.env.klaviyo_apiSecret;
  const listId = process.env.klaviyo_listId;

  const apiEndpoint = `https://a.klaviyo.com/api/v2/list/${listId}/subscribe?api_key=${apiSecret}`;

  const body = JSON.parse(event.body);
  const { email } = body;

  if (!email) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "please provide an email address."})
    }
  };

  try {
    const payload = {
      profiles: [{
        email: email
      }],
    }

    const { data } = await axios.post(apiEndpoint, payload,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
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