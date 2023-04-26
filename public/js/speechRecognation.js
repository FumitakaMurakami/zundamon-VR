const speech = new webkitSpeechRecognition();
speech.lang = 'ja-JP';
speech.interimResults = true;
speech.ontinuous = true;

// DOMが読み込まれてから結果表示イベント登録
window.addEventListener('load', () => {
    const resultText = document.getElementById('result-text');
  
    speech.onsoundstart = function() {
      resultText.setAttribute('value', "認識中");
    };
  
    speech.onnomatch = function() {
      resultText.setAttribute('value', "もう一度試してください");
    };
  
    speech.onerror = function() {
      resultText.setAttribute('value', "エラー");
    };
  
    speech.onresult = async function(e) {
      const resultText = document.getElementById('result-text');
      const text = e.results[0][0].transcript;
      resultText.setAttribute('value', text);
    };
  
});