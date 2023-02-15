import { useState, useEffect, useRef } from 'react';

function useSpeech(options: { rate: number; pitch: number; volume: number; }) {
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

    useEffect(() => {
        const synth = window.speechSynthesis;
        setVoices(synth.getVoices());
    }, []);

    function speak(text:string) {
        if(voices.length > 0){
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.voice = voices[0];
            utterance.rate = options.rate;
            utterance.pitch = options.pitch;
            utterance.volume = options.volume;
            utterance.onstart = () => setIsSpeaking(true);
            utterance.onend = () => setIsSpeaking(false);
            
            window.speechSynthesis.speak(utterance);
        }
    }

    return { speak, isSpeaking };
}

export default useSpeech