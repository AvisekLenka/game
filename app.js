const choices = ['stone', 'paper', 'scissors'];
const resultDiv = document.getElementById('result');

// Function to get a random choice for the computer
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Event listener for player clicks
document.querySelectorAll('.choice').forEach(image => {
  image.addEventListener('click', () => {
    const playerChoice = image.getAttribute('data-choice');
    const computerChoice = getComputerChoice(); // Get a random choice for the computer

    let resultMessage = `You chose ${playerChoice}, computer chose ${computerChoice}. `;

    if (playerChoice === computerChoice) {
      resultMessage += "It's a draw!";
    } else if (
      (playerChoice === 'stone' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'stone') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      resultMessage += "You win!";
    } else {
      resultMessage += "You lose!";
    }

    resultDiv.innerText = resultMessage;
  });
});
