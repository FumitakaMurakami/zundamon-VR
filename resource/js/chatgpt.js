require('dotenv').config()
const { CHATGPT_API_KEY } = process.env
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: CHATGPT_API_KEY,
});
const openai = new OpenAIApi(configuration);

// メッセージ初期化
let messages = [];

export async function requestChatGPT(text) {
    const message = {
        role: "user",
        content: text,
    };

    messages.push(message);

    try {
        const completion = await openai.createChatCompletion({
          model: "gpt-3.5-turbo",
          messages: messages,
        });
        return completion.data.choices[0].message.content;
    } catch (error) {
        if (error.response) {
          console.log(error.response.status);
          console.log(error.response.data);
        } else {
          console.log(error.message);
        }
    }
}

export async function sendApiKey() {
    return CHATGPT_API_KEY;
}