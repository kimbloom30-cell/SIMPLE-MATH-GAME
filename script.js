let score = 0;
let correctAnswer;

function generateQuestion() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operation = Math.random() > 0.5 ? '+' : '-';
    
    // Ensure subtraction doesn't result in negative numbers
    if (operation === '-' && num1 < num2) {
        [num1, num2] = [num2, num1];
    }
    
    const question = `${num1} ${operation} ${num2}`;
    correctAnswer = operation === '+' ? num1 + num2 : num1 - num2;
    
    document.getElementById('question').textContent = `What is ${question}?`;
}

document.getElementById('submit').addEventListener('click', () => {
    const userAnswer = parseInt(document.getElementById('answer').value);
    const feedback = document.getElementById('feedback');
    
    if (userAnswer === correctAnswer) {
        feedback.textContent = 'Correct!';
        feedback.style.color = '#4CAF50'; // Green
        score++;
    } else {
        feedback.textContent = 'Wrong!';
        feedback.style.color = '#d9534f'; // Red
    }
    
    document.getElementById('score').textContent = `Score: ${score}`;
    document.getElementById('answer').value = '';
    generateQuestion();
});

// Generate the first question on load
generateQuestion();
