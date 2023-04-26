// メッセージ初期化
let messages = [];

async function requestChatAPI(text) {
    const apikey = await getApiKey();
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apikey}`,
    };

    const message = {
        role: "user",
        content: text,
    };

    messages.push(message);
  
    const payload = {
      model: "gpt-3.5-turbo",
      messages: messages,
    };
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      payload,
      {
        headers: headers,
      }
    );
    messages.push(response.data.choices[0].message);
    console.log(messages);
    return response.data.choices[0].message.content;
  }

async function initCharacter(initText) {
    console.log('chara init', initText);
    requestChatAPI(initText);
}

async function getApiKey () {
  const response = await axios.post(
    `http://localhost:3000/app`
  );
  return response.data;
}