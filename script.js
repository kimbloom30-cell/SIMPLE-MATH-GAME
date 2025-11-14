document.addEventListener("DOMContentLoaded", () => {
    const questionEl = document.getElementById("question");
    const feedbackEl = document.getElementById("feedback");
    const scoreEl = document.getElementById("score");
    const options = [
        document.getElementById("opt1"),
        document.getElementById("opt2"),
        document.getElementById("opt3"),
        document.getElementById("opt4"),
    ];

    let correctAnswer = 0;
    let score = 0;

    function generateQuestion() {
        questionEl.style.animation = "pop 0.3s ease";
        setTimeout(() => (questionEl.style.animation = ""), 300);

        feedbackEl.textContent = "";

        const a = Math.floor(Math.random() * 10) + 1;
        const b = Math.floor(Math.random() * 10) + 1;
        const operators = ["+", "-", "*"];
        const op = operators[Math.floor(Math.random() * operators.length)];

        let questionText = ${a} ${op} ${b};
        correctAnswer = eval(questionText);

        questionEl.textContent = questionText;

        // Enable option buttons
        options.forEach(btn => btn.disabled = false);

        generateOptions(correctAnswer);
    }

    function generateOptions(correct) {
        let answers = [correct];

        while (answers.length < 4) {
            let deviation = Math.floor(Math.random() * 10) + 1;
            let wrong = Math.random() < 0.5 ? correct + deviation : correct - deviation;
            if (wrong > 0 && !answers.includes(wrong)) answers.push(wrong);
        }

        answers.sort(() => Math.random() - 0.5);

        options.forEach((btn, i) => {
            btn.textContent = answers[i];
            btn.onclick = () => checkAnswer(answers[i]);
        });
    }

    function checkAnswer(selected) {
        if (selected === correctAnswer) {
            feedbackEl.textContent = "Correct!";
            feedbackEl.style.color = "green";
            score++;
        } else {
            feedbackEl.textContent = Wrong! Correct answer: ${correctAnswer};
            feedbackEl.style.color = "red";
        }

        scoreEl.textContent = score;
        generateQuestion();
    }

    document.getElementById("startBtn").onclick = () => {
        score = 0;
        scoreEl.textContent = score;
        options.forEach(btn => btn.disabled = false);
        generateQuestion();
    };
});
