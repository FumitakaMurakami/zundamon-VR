async function createAudio(text) {
    const data = await createVoice(text);
    const audio = document.querySelector(".audio");
    audio.src = URL.createObjectURL(data);
    audio.play();
}

async function createQuery(text) {
    const response = await axios.post(
      `http://localhost:50021/audio_query?speaker=1&text=${text}`
    );
    return response.data;
}

async function createVoice(text) {
    const query = await createQuery(text);
    const response = await axios.post(
      "http://localhost:50021/synthesis?speaker=1",
      query,
      { responseType: "blob" }
    );
    return response.data;
}