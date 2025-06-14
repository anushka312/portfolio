import { useEffect, useState } from 'react';

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

export default function DecryptEffect({ text, className, trigger }) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    if (!trigger) return;

    let iterations = 0;
    const interval = setInterval(() => {
      setDisplayedText(() => {
        return text
          .split('')
          .map((char, index) => {
            if (index < iterations) return char;
            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join('');
      });

      if (iterations >= text.length) clearInterval(interval);
      iterations += 1 / 2;
    }, 60);

    return () => clearInterval(interval);
  }, [trigger, text]);

  return <span className={className}>{trigger ? displayedText : ''}</span>;
}
