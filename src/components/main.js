import React, { useState, useEffect } from 'react';
import { scrambleWord } from '../utils/scrambleWord';
import words from '../assets/words.json';
import Hint from './Hint';
import ScoreBoard from './ScoreBoard';

const Game = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [scrambledWord, setScrambledWord] = useState('');
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState('');
  const [score, setScore] = useState(0);
  const [showHint, setShowHint] = useState(false);

  const wordData = words[currentWordIndex];

  useEffect(() => {
    if (wordData) {
      setScrambledWord(scrambleWord(wordData.word));
      setShowHint(false);
    }
  }, [currentWordIndex]);

  const handleGuess = () => {
    if (guess.toLowerCase() === wordData.word) {
      setFeedback('Correct!');
      setScore((prev) => prev + 1);
      setCurrentWordIndex((prev) => prev + 1);
      setGuess('');
    } else {
      setFeedback('Try again!');
    }
  };

  const handleTimeout = () => {
    setFeedback('Time’s up! Moving to the next word.');
    setCurrentWordIndex((prev) => prev + 1);
    setGuess('');
  };

  if (!wordData) {
    return <div>Game Over! Your final score is {score}.</div>;
  }

  return (
    <div>
      <h1>Word Scramble Game</h1>
      <Timer duration={30} onTimeout={handleTimeout} />
      <ScoreBoard score={score} />
      <p>Scrambled Word: {scrambledWord}</p>
      {showHint && <Hint hint={wordData.hint} />}
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
