import React from 'react'

const RandomQuote10 = () => {

    let quotes = [
        " I think, therefore I am. (Rene Descartes)",
        "I may disagree with what you say, but I will defend to death your right to say it. (Evelyn Beatrice Hall)",
        "If men were perfectly virtuous, they wouldn’t have friends. (Montesquieu)",
        "Ignorance is bliss.",
        "People do what they hate for money and use the money to do what they love. (Jimmy O. Yang’s dad?)",
        "Small things make perfection, but perfection is no small thing. (Sir Henry Royce)",
        "A masterpiece is born a masterpiece. (Hyouka)",
    ];

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
  return (
    <div>
      {quote}
    </div>
  )
}

export default RandomQuote10
