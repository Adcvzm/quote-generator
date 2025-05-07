export default function handler(req, res) {
    const quotes = [
      { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
      { quote: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
      { quote: "Don’t let yesterday take up too much of today.", author: "Will Rogers" },
      { quote: "It’s not whether you get knocked down, it’s whether you get up.", author: "Vince Lombardi" },
      { quote: "You are stronger than you think.", author: "Unknown" }
    ];
  
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    res.status(200).json(random);
  }
  