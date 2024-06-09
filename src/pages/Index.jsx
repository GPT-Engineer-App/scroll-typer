import React, { useEffect, useRef, useState } from 'react';
import { FaPlus } from "react-icons/fa";

const Index = () => {
  const canvasRef = useRef(null);
  const [character, setCharacter] = useState({ x: 50, y: 50 });
  const [words, setWords] = useState([]);
  const [currentWord, setCurrentWord] = useState('');
  const [inputWord, setInputWord] = useState('');
  const [score, setScore] = useState(0);

  const wordsPool = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew"];

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const handleKeyDown = (e) => {
      let newCharacter = { ...character };
      if (e.key === 'w') newCharacter.y -= 10;
      if (e.key === 'a') newCharacter.x -= 10;
      if (e.key === 's') newCharacter.y += 10;
      if (e.key === 'd') newCharacter.x += 10;
      setCharacter(newCharacter);
    };

    window.addEventListener('keydown', handleKeyDown);

    const gameLoop = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.fillStyle = 'blue';
      context.fillRect(character.x, character.y, 20, 20);

      words.forEach(word => {
        context.fillStyle = 'black';
        context.fillText(word.text, word.x, word.y);
      });

      requestAnimationFrame(gameLoop);
    };

    gameLoop();

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [character, words]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newWord = {
        text: wordsPool[Math.floor(Math.random() * wordsPool.length)],
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight
      };
      setWords(prevWords => [...prevWords, newWord]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    words.forEach(word => {
      if (Math.abs(character.x - word.x) < 20 && Math.abs(character.y - word.y) < 20) {
        setCurrentWord(word.text);
      }
    });
  }, [character, words]);

  const handleInputChange = (e) => {
    setInputWord(e.target.value);
    if (e.target.value === currentWord) {
      setScore(prevScore => prevScore + 10);
      setWords(prevWords => prevWords.filter(word => word.text !== currentWord));
      setCurrentWord('');
      setInputWord('');
    }
  };

  return (
    <div className="relative w-full h-full">
      <canvas ref={canvasRef} className="absolute top-0 left-0"></canvas>
      <div className="absolute top-4 right-4 text-2xl font-bold">Score: {score}</div>
      {currentWord && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <input
            type="text"
            value={inputWord}
            onChange={handleInputChange}
            className="border-2 border-gray-300 p-2"
            placeholder="Type the word..."
          />
        </div>
      )}
    </div>
  );
};

export default Index;