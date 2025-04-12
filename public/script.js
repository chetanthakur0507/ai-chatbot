function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.8; 
    speechSynthesis.speak(utterance);
  }
  