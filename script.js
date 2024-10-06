const movieTriviaQuestions = [
    {
      question: "In which year was the movie 'Titanic' released?",
      options: ["1995", "1997", "2000", "2002"],
      answer: "1997"
    },
    {
      question: "Who played the role of Iron Man in the Marvel Cinematic Universe?",
      options: ["Chris Evans", "Chris Hemsworth", "Robert Downey Jr.", "Mark Ruffalo"],
      answer: "Robert Downey Jr."
    },
    {
      question: "Which film won the Oscar for Best Picture in 2020?",
      options: ["Joker", "1917", "Parasite", "Once Upon a Time in Hollywood"],
      answer: "Parasite"
    },
    {
      question: "Who directed the movie 'Pulp Fiction'?",
      options: ["Martin Scorsese", "Quentin Tarantino", "Steven Spielberg", "Francis Ford Coppola"],
      answer: "Quentin Tarantino"
    },
    {
      question: "Which actor voiced Woody in the 'Toy Story' movies?",
      options: ["Tim Allen", "Tom Hanks", "Billy Crystal", "Robin Williams"],
      answer: "Tom Hanks"
    },
    {
      question: "What is the name of the fictional African country in 'Black Panther'?",
      options: ["Zamunda", "Wakanda", "Genosha", "Latveria"],
      answer: "Wakanda"
    },
    {
      question: "Which movie features the quote, 'Here's looking at you, kid'?",
      options: ["Gone with the Wind", "Casablanca", "Citizen Kane", "The Godfather"],
      answer: "Casablanca"
    },
    {
      question: "Who played the character of Jack Dawson in 'Titanic'?",
      options: ["Brad Pitt", "Johnny Depp", "Leonardo DiCaprio", "Matt Damon"],
      answer: "Leonardo DiCaprio"
    },
    {
      question: "What is the highest-grossing movie of all time (as of 2023)?",
      options: ["Avatar", "Avengers: Endgame", "Titanic", "The Lion King (2019)"],
      answer: "Avatar"
    },
    {
      question: "Which actress played Katniss Everdeen in 'The Hunger Games' series?",
      options: ["Emma Watson", "Shailene Woodley", "Jennifer Lawrence", "Kristen Stewart"],
      answer: "Jennifer Lawrence"
    }
  ];


let score = 0;
let currentQuestionIndex = 0;
let askedQuestions = [];
  

function loadQuestion() {
    if (askedQuestions.length === movieTriviaQuestions.length) {
        document.getElementById('question').textContent = "You've completed the quiz!";
        document.getElementById('choices').innerHTML = "";
        document.getElementById('score').textContent = `Your final score is: ${score}/${movieTriviaQuestions.length}`;
        document.getElementById('next-button').style.display = 'none';
        return;
    }

    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * movieTriviaQuestions.length);
    } while (askedQuestions.includes(randomIndex));

    askedQuestions.push(randomIndex);
    currentQuestionIndex = randomIndex;

    const currentQuestion = movieTriviaQuestions[currentQuestionIndex];
    document.getElementById('question').textContent = currentQuestion.question;
    document.getElementById('choices').innerHTML = '';

    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        document.getElementById('choices').appendChild(button);
    });
}

function checkAnswer(selectedOption) {
  const currentQuestion = movieTriviaQuestions[currentQuestionIndex];
  if (selectedOption === currentQuestion.answer) {
      score++;
  }
  document.getElementById('next-button').style.display = 'block';
}
function nextQuestion() {
  document.getElementById('next-button').style.display = 'none';
  loadQuestion();
}
window.onload = () => {
  loadQuestion();
  document.getElementById('next-button').style.display = 'none';
};