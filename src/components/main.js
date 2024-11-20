// src/components/Game.js
import React, { useState, useEffect } from 'react';
import { scrambleWord } from '../utils/scrambledword';
import words from '../assets/words.json';
import Timecount from './timecount';
import Hint from './hint';
import ScoreBoard from './scoreboard';

const Game = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [scrambledWord, setScrambledWord] = useState('');
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState('');
  const [score, setScore] = useState(0);
  const [showHint, setShowHint] = useState(false);

  // Initialize the scrambled word once for the current word
  useEffect(() => {
    if (words[currentWordIndex]) {
      setScrambledWord(scrambleWord(words[currentWordIndex].word));
      setShowHint(false);
      setFeedback('');
    }
  }, [currentWordIndex]);

  const handleGuess = () => {
    const currentWord = words[currentWordIndex].word;

    if (guess.toLowerCase() === currentWord) {
      setFeedback('Correct!');
      setScore((prev) => prev + 1);
      setCurrentWordIndex((prev) => prev + 1); // Move to the next word
      setGuess(''); // Reset the input field
    } else {
      setFeedback('Try again!');
    }
  };

  const handleTimeout = () => {
    setFeedback('Time’s up! Moving to the next word.');
    setCurrentWordIndex((prev) => prev + 1); // Move to the next word after timeout
    setGuess(''); // Reset the input field
  };

  // Handle case when there are no more words left
  if (!words[currentWordIndex]) {
    return <div>Game Over! Your final score is {score}.</div>;
  }

  return (
    <div>
      <h1>Word Scramble Game</h1>
      <Timecount duration={30} onTimeout={handleTimeout} />
      <ScoreBoard score={score} />
      <p>Scrambled Word: {scrambledWord}</p>
      {showHint && <Hint hint={words[currentWordIndex].hint} />}
      <input
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        placeholder="Your guess"
      />
      <button onClick={handleGuess}>Submit</button>
      <button onClick={() => setShowHint(true)}>Show Hint</button>
      <p>{feedback}</p>
    </div>
  );
};

export default Game;
