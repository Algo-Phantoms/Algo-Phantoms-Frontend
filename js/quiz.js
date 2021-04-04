
function startQuiz() {
    document.getElementById('btn').style.visibility = "hidden";
    return displayQuestion();
}

var pos = 0, test, test_status, question, option, options, opA, opB, opC, opD,result, score = 0;
var questions = [
	[" In order traversal of binary search tree will produce",
	"unsorted list",
	"reverse of input",
	"sorted list",
	 "none of the above",
	 "C"],
    ["A circular linked list can be used for",
	"Stack",
	"Queue",
	"Both Stack & Queue",
	"Neither Stack or Queue",
	"C"],
    ["Minimum number of queues required for priority queue implementation?",
	" 5"," 4"," 3","2","D"],
	["Time required to merge two sorted lists of size m and n, is",
	"Ο(m | n)","Ο(m + n)","Ο(m log n)","Ο(n log m)","B"],
    [ "A balance factor in AVL tree is used to check",
	"what rotation to make.",
	"if all child nodes are at same level.",
	"when the last rotation occured.",
	"if the tree is unbalanced.","D"],
    ["The number of items used by the dynamic array contents is its ",
	"Physical size",
	"Capacity",
	 "Logical size",
	 "Random size","C"],
	 ["How will you implement dynamic arrays in Java?",
	 " Set",
	 " Map",
	 " HashMap",
	 "List","D"]
];
function $(arg) {
    return document.getElementById(arg);
 }

function displayQuestion() {
    test = $("test");
    if (pos >= questions.length) {
        test.innerHTML = "<h2>You got " + score + " of " + questions.length + " questions correct!</h2>";
        $("test_status").innerHTML = "Test Completed.";
        pos = 0;
        score = 0;
        return false;
    }
    
    $("test_status").innerHTML = "Question " + (pos + 1) + " of " + questions.length;
    question = questions[pos][0];
    opA = questions[pos][1];
    opB = questions[pos][2];
    opC = questions[pos][3];
    opD = questions[pos][4];
	
	
	
    test.innerHTML = "<h3>Que" +(pos+1)+". "+question + "</h3>";
    test.innerHTML += "<h4><input type='radio' name='options' value='A'>" + opA + "</h4>";
    test.innerHTML += "<h4><input type='radio' name='options' value='B'>" + opB + "</h4>";
    test.innerHTML += "<h4><input type='radio' name='options' value='C'>" + opC + "</h4>";
    test.innerHTML += "<h4><input type='radio' name='options' value='D'>" + opD + "</h4>";
    test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}

function checkAnswer() {
    options = document.getElementsByName("options");
    for (var i = 0; i < options.length; i++) {
        if (options[i].checked) {
            option = options[i].value;
        }
    }
    if (option == questions[pos][5]) {
        score++;
    }
    pos++;
    displayQuestion();}
	
