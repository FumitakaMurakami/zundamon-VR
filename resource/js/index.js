import { requestChatGPT } from "./chatgpt";

window.addEventListener('load', function () {
    const speechBtn = document.getElementById('speech-btn');
    const sendBtn = document.getElementById('send-btn');
  
    speechBtn.addEventListener('click', async function () {
      speech.start();
    });
    console.log(sendBtn);
    sendBtn.addEventListener('click', async function () {
      const resultText = document.getElementById('result-text');
      const zundamonText = document.getElementById('zundamon-text');
      zundamonText.setAttribute('value', '考え中。。。');
      const text = await requestChatGPT(resultText);
      zundamonText.setAttribute('value', text);
      createAudio(text);
    });
});