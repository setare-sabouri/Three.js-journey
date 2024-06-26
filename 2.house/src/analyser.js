
import { updateGravesScaleY } from "./objects/graves";
export let analyser = null;
const mediaStreamRef = { current: null };

//---------------------------audio-setup-----------------------------
const audioFileInput = document.getElementById('audioFileInput');
const audioPlayer = document.getElementById('audioPlayer');
const audioSource = document.getElementById('audioSource');

audioFileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    const fileURL = URL.createObjectURL(file);
    audioSource.src = fileURL;
    audioPlayer.load();
    initializeAnalyser()
});

//-------------------------analyser-setup------------------------

export const initializeAnalyser = async () => {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const audioElement = audioPlayer
        const source = audioContext.createMediaElementSource(audioElement);
        analyser = audioContext.createAnalyser();
        source.connect(analyser);
        analyser.connect(audioContext.destination);
        await audioElement.play();
        mediaStreamRef.current = audioElement;
        //----audio data-----
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        const updateGraves = () => {
            analyser.getByteFrequencyData(dataArray);
            updateGravesScaleY(dataArray); // Calls the function in graves.js to update the graves' scaleY
            requestAnimationFrame(updateGraves);
        };
        updateGraves();

    } catch (error) {
        console.log(error.message);
    }
};


window.addEventListener('beforeunload', () => {
    if (analyser) {
        analyser.context.close();
    }
    if (mediaStreamRef.current) {
        mediaStreamRef.current.getTracks().forEach((track) => track.stop());
    }
});




