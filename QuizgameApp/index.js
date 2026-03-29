let questions =[
    {
        question: "What does HTML stand for?",
        answers:[
            "Hyper Test Markup Language",
            "Home Tol Markup Language",
            "High Transfer Machine Language",
        ],
        correct:0
    },

    {
          question: "Which language runs in browser?",
        answers:[
            "Java",
            "Javascript",
            "Python",
        ],
        correct:1
    },

    {
          question: "What does Css control?",
        answers:[
            "Styling",
            "Database",
            "Server",
        ],
        correct:0
    },


    {
    question: "What does the <a> tag do?",
    answers: [
        "Creates a link",
        "Adds an image",
        "Creates a table"
    ],
    correct: 0
},

{
    question: "Which tag is used to insert an image?",
    answers: [
        "<img>",
        "<image>",
        "<pic>"
    ],
    correct: 0
},

{
    question: "What does the <p> tag represent?",
    answers: [
        "Paragraph",
        "Picture",
        "Page"
    ],
    correct: 0
},

{
    question: "Which tag is used for the largest heading?",
    answers: [
        "<h6>",
        "<h1>",
        "<head>"
    ],
    correct: 1
},

{
    question: "What is the correct HTML element for a line break?",
    answers: [
        "<break>",
        "<br>",
        "<lb>"
    ],
    correct: 1
},

{
    question: "Which attribute is used to provide an image description?",
    answers: [
        "alt",
        "src",
        "title"
    ],
    correct: 0
},

{
    question: "Where is the correct place to put the <title> tag?",
    answers: [
        "Inside <body>",
        "Inside <head>",
        "After <html>"
    ],
    correct: 1
},

{
    question: "What does the <ul> tag stand for?",
    answers: [
        "Uniform List",
        "Unordered List",
        "Unique List"
    ],
    correct: 1
},

{
    question: "Which tag is used to create a table?",
    answers: [
        "<table>",
        "<tab>",
        "<tbl>"
    ],
    correct: 0
},

{
    question: "What does the <form> tag do?",
    answers: [
        "Creates a form for user input",
        "Formats text",
        "Adds images"
    ],
    correct: 0
},


]
    let currentQuestion =0
    let Score = 0


    function loadQuestion(){
        document.getElementById("question").innerText = questions[currentQuestion].question
        document.getElementById("btn0").innerText=questions[currentQuestion].answers[0]
        document.getElementById("btn1").innerText=questions[currentQuestion].answers[1] 
        document.getElementById("btn2").innerText=questions[currentQuestion].answers[2] 
    
    }

    function checkAnswer(answer){
        if (answer === questions[currentQuestion].correct){
            document.getElementById("result").innerText ="Correct!"
            document.getElementById("result").style.color ="Green"
            Score++
        }
        else{
            document.getElementById("result").innerText ="Wrong!"
            document.getElementById("result").style.color="red"

        }
    }
    

    function nextQuestion(){
        currentQuestion++
        if(currentQuestion < questions.length){
            loadQuestion()
            document.getElementById("result").innerText =""

        }
        else{
            document.getElementById("question").innerText ="Quiz Finished"

            document.getElementById("result").innerText = "Your Score: "+ Score
        }
    }


      window.onload=loadQuestion;