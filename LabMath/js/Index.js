
document.getElementById("submitButton").addEventListener("click", renderEquations)
document.getElementById("showAnswerButton").addEventListener("click", renderAnswerEquations)
document.getElementById("checkAnswers").addEventListener("click", renderCheckAnswerEquarions)

function hiddenAllEquations() {
    var index;

    for (index = 0; index < 20; index++) {
        if (document.getElementById('equation' + index).style.display == "block") {
            document.getElementById('equation' + index).style.display = "none";
            document.getElementById('answer' + index).value = '';
            document.getElementById('answer' + index).style.color = "black";
        } else {
            break;
        }
    }
}

function renderEquations() {
    var numberEquations = document.getElementById("numberEquations");
    hiddenAllEquations();
    if (numberEquations.value >= 5 && numberEquations.value <= 20) {
        var index;

        for (index = 0; index < numberEquations.value; index++) {
            document.getElementById('equation' + index).style.display = "block";
        }

    } else {
        alert("Número de ecuaciones tiene que estar entre 5 y 20");
    }

}

function renderAnswerEquations() {
    var index;

    for (index = 0; index < 20; index++) {

        if (document.getElementById('equation' + index).style.display == "block") {
            document.getElementById('answer' + index).value = answers[index];
            document.getElementById('answer' + index).style.color = "black";
        } else {
            break;
        }  
    }
}

function renderCheckAnswerEquarions() {
    var index;

    for (index = 0; index < 20; index++) {
        if (document.getElementById('equation' + index).style.display == "block") {
            if (document.getElementById('answer' + index).value != null) {
                if (document.getElementById('answer' + index).value == answers[index]) {
                    document.getElementById('answer' + index).style.color = "green";
                } else {
                    document.getElementById('answer' + index).style.color = "red";
                }
            }
        } else {
            break;
        }
    }
}