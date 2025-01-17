import React, { useEffect, useState } from 'react'


const quotes = [
    { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
    { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { text: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" },
    { text: "If life were predictable it would cease to be life, and be without flavor.", author: "Eleanor Roosevelt" },
    { text: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.", author: "Oprah Winfrey" },
    { text: "Life isn’t about getting and having, it’s about giving and being.", author:"Kevin Kruse"},
    { text: "Whatever the mind of man can conceive and believe, it can achieve.", author:"Napoleon Hill"},
    { text: "Strive not to be a success, but rather to be of value.", author:"Albert Einstein"},
    { text: "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.", author:"Robert Frost"},
    { text: "I attribute my success to this: I never gave or took any excuse.", author:"Florence Nightingale"},
    { text: "You miss 100% of the shots you don’t take.", author:"Wayne Gretzky"},
    { text: "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.", author:"Michael Jordan"},
    { text: "The most difficult thing is the decision to act, the rest is merely tenacity.", author:"Amelia Earhart"},
    { text: "Every strike brings me closer to the next home run.", author:"Babe Ruth"},
    { text: "Definiteness of purpose is the starting point of all achievement.", author:"W. Clement Stone"},
  ];


const QuoteGenerator = () => {

    const [quote, setQuote]  = useState({});

    useEffect(() => {
        getRandomQuote();
    }, []);

    const getRandomQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length)
        setQuote(quotes[randomIndex]);
    }
  return (
    <>
      <div className='quote-container'>
            <h1>Quote Generator</h1>
            <p className='quote-text'>{quote.text}</p>
            <p className='quote-author'>{quote.author}</p>

            <button className='btn' onClick={getRandomQuote}>Generate</button>
      </div>
    </>
  )
}

export default QuoteGenerator
