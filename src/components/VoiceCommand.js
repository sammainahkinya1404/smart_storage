import React, { useEffect } from 'react';

function VoiceCommand({ onCommand }) {
  useEffect(() => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';

    recognition.onresult = (event) => {
      const command = event.results[0][0].transcript;
      onCommand(command);
    };

    recognition.onend = () => {
      recognition.start();
    };

    recognition.start();

    return () => recognition.stop();
  }, [onCommand]);

  return <div>Listening for commands...</div>;
}

export default VoiceCommand;
