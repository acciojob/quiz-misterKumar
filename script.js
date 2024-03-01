//your JS code here. If required.
const questions = [
	{
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    }
]

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById('question');
const aTextElement = document.getElementById('a_text');
const bTextElement = document.getElementById('b_text');
const cTextElement = document.getElementById('c_text');
const dTextElement = document.getElementById('d_text');
const submitButton = document.getElementById('submit');
submitButton.addEventListener("click", onClick);

function showQuestion(){
	questionElement.innerText = questions[currentQuestion].question;
	aTextElement.innerText = questions[currentQuestion].a;
	bTextElement.innerText = questions[currentQuestion].b;
	cTextElement.innerText = questions[currentQuestion].c;
	dTextElement.innerText = questions[currentQuestion].d;
}

function showResult(){
	questionElement.textContent = `\n You answered ${score}/${questions.length} questions correctly\n `;
	aTextElement.style.display = "none";
	bTextElement.style.display = "none";
	cTextElement.style.display = "none";
	dTextElement.style.display = "none";
	document.getElementById("a").style.display = "none";
	document.getElementById("b").style.display = "none";
	document.getElementById("c").style.display = "none";
	document.getElementById("d").style.display = "none";
	submitButton.innerText = "Reload";
	submitButton.removeEventListener("click", onClick);
	submitButton.addEventListener("click", resetQuiz);
}
function onClick(){
	const selectedOption = document.querySelector('input[name="option"]:checked');
	if(selectedOption){
		const selectedAnswer = selectedOption.id;
		if(selectedAnswer == questions[currentQuestion].correct){
			score++;
		}
		selectedOption.checked = false;
		currentQuestion++;
		if(currentQuestion < questions.length){
			showQuestion();
		}
		else{
			showResult();
		}
	}
	else{
		alert("Please select an option before submitting.");
	}
}
function resetQuiz(){
	score = 0;
	currentQuestion = 0;
	aTextElement.style.display = "inline-block";
	bTextElement.style.display = "inline-block";
	cTextElement.style.display = "inline-block";
	dTextElement.style.display = "inline-block";
	document.getElementById("a").style.display = "inline-block";
	document.getElementById("b").style.display = "inline-block";
	document.getElementById("c").style.display = "inline-block";
	document.getElementById("d").style.display = "inline-block";
	showQuestion();
	submitButton.innerText = "Submit";
	submitButton.addEventListener("click", onClick);
	submitButton.removeEventListener("click", resetQuiz);
}
showQuestion();