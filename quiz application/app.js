var quizQuestions = [
    {
        id: 1,
        question: "HTML stands for?",
        options: [
            "Hyper Text Markup Language",
            "Hyper Text Programming Language",
            "Hyper Text Styling Language",
            "Hyper Text Scripting Language"
        ],
        answer: "Hyper Text Markup Language"
    },
    {
        id: 2,
        question: "Which HTML tag is used to create a hyperlink?",
        options: [
            "a",
            "link",
            "href",
            "hyperlink"
        ],
        answer: "a"
    },
    {
        id: 3,
        question: "Which CSS property is used to change the text color?",
        options: [
            "font-color",
            "text-color",
            "color",
            "background-color"
        ],
        answer: "color"
    },
    {
        id: 4,
        question: "Which CSS property controls the size of text?",
        options: [
            "text-style",
            "font-size",
            "text-size",
            "font-style"
        ],
        answer: "font-size"
    },
    {
        id: 5,
        question: "Inside which HTML element do we put JavaScript?",
        options: [
            "javascript",
            "js",
            "script",
            "code"
        ],
        answer: "<script>"
    },
    {
        id: 6,
        question: "Which symbol is used for single-line comments in JavaScript?",
        options: [
            "//",
            "/* */",
            "#",
            "!-- --"
        ],
        answer: "//"
    },
    {
        id: 7,
        question: "Which JavaScript keyword is used to declare a variable?",
        options: [
            "var",
            "int",
            "string",
            "declare"
        ],
        answer: "var"
    },
    {
        id: 8,
        question: "Which CSS property is used to make a website responsive?",
        options: [
            "flex",
            "media-query",
            "@media",
            "responsive"
        ],
        answer: "@media"
    },
    {
        id: 9,
        question: "Which method is used to select an element by its ID in JavaScript?",
        options: [
            "getElementByClass()",
            "getElementById()",
            "querySelectorAll()",
            "selectById()"
        ],
        answer: "getElementById()"
    },
    {
        id: 10,
        question: "Which HTML attribute is used to define inline styles?",
        options: [
            "class",
            "styles",
            "style",
            "font"
        ],
        answer: "style"
    }
];


var h1 = document.getElementById('h1')
var ul = document.getElementById('ul')
var p = document.getElementById('p')
var button = document.getElementById('button')
var quizNum = document.getElementById('quizNum')
var container = document.getElementsByClassName('container')
var reportCard = document.getElementsByClassName('reportCard')
var totalQuestion = document.getElementById('totalQuestion')
var rightAnswer = document.getElementById('rightAnswer')
var wrongAnswer = document.getElementById('wrongAnswer')
var grade = document.getElementById('grade')
var quizNum = document.getElementById('quizNum')
var counter = 0
var score = 0
quizNum.innerHTML = `${counter + 1}/${quizQuestions.length}`



function loading() {
    h1.innerHTML = quizQuestions[counter].question
    var option = quizQuestions[counter].options
    ul.innerHTML = ""
    for (var i = 0; i < option.length; i++) {
        var li = `<li onclick="answerCall(this)"> ${option[i]} </li>`
        ul.innerHTML += li
    }

}

function nextQuestion() {
    counter++

    if (counter < quizQuestions.length) {
        loading()

    } else {
        console.log('Allah Hafiz')
        container[0].style.display = 'none'
        reportCard[0].style.display = 'block'
        totalQuestion.innerHTML = `Total Question : ${quizQuestions.length}`
        rightAnswer.innerHTML = `Right Answer : ${score}`
        wrongAnswer.innerHTML = `Wrong Answer: ${quizQuestions.length - score}`
        if (score >= (quizQuestions.length / 2)) {
            grade.innerHTML = `Grade: Pass`
        } else {
            grade.innerHTML = `Grade: Fail`
        }




    }
    quizNum.innerHTML = `${counter + 1}/${quizQuestions.length}`
    button.setAttribute('disabled', true)
}

function answerCall(li) {
    var rightAnwser = quizQuestions[counter].answer
    var userAnswer = li.innerText
    var allList = ul.getElementsByTagName('li')
    if (rightAnwser === userAnswer) {
        console.log('best right answer');
        li.style.background = 'green'
        li.style.color = 'white'
        score++
    } else {
        console.log('wrong answer');
        li.style.background = 'red'
        li.style.color = 'white'

        for (var li of allList) {
            if (li.innerText === rightAnwser) {
                li.style.background = 'green'
                li.style.color = 'white'
                break
            }
        }
    }

    for (var li of allList) {
        li.style.pointerEvents = 'none'
    }

    button.removeAttribute('disabled')

}


function againGame() {
    counter = 0;
    score = 0;

    document.getElementById("page2").style.display = "none";
    document.getElementById("page1").style.display = "block";

    button.removeAttribute('disabled');

    loading();
    quizNum.innerHTML = `${counter + 1}/${quizQuestions.length}`;
}

