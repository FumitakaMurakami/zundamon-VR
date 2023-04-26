console.log("js init");
initCharacter('あなたはずんだもんです、性格は天真爛漫な女の子でずんだ餅が大好物、語尾に「なのだ」をつけます。');

// AFRAME.registerComponent('speech-start', {       
//   init: function () {  
//     console.log("speech start");     

//     this.el.addEventListener('click', async function () {         
//       speech.start();
//     });
//   }
// });

// AFRAME.registerComponent('send-text', {       
//   init: function () {  
//     console.log("speech start");     

//     this.el.addEventListener('click', async function () {         
//       const resultText = document.getElementById('result-text');
//       const zundamonText = document.getElementById('zundamon-text');
//       zundamonText.setAttribute('value', '考え中。。。');
//       const text = await requestChatAPI(resultText.getAttribute('value'));
//       zundamonText.setAttribute('value', text);
//       createAudio(text);
//     });
//   }
// });

window.addEventListener('load', function () {
  const speechBtn = document.getElementById('speech-btn');
  const sendBtn = document.getElementById('send-btn');

  speechBtn.addEventListener('click', async function () {
    speech.start();
  });

  sendBtn.addEventListener('click', async function () {
    const resultText = document.getElementById('result-text');
    const zundamonText = document.getElementById('zundamon-text');
    zundamonText.setAttribute('value', '考え中。。。');
    const text = await requestChatAPI(resultText.getAttribute('value'));
    zundamonText.setAttribute('value', text);
    createAudio(text);
    getApiKey();
  });
});