let countdown = 0;
let timer = document.getElementById("timer");
let intervalId;
let spinnerEl = document.getElementById("spinner");
let quoteDisplay = document.getElementById("quoteDisplay");

function generateQuote() {
    spinnerEl.classList.remove("d-none");
    let options = {
        method: "GET"
    };
    let url = "https://apis.ccbp.in/random-quote";
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            let {
                content
            } = jsonData;
            quoteDisplay.textContent = content;
            spinnerEl.classList.add("d-none");
        });
    clearInterval(intervalId);
    timer.textContent = 0;
    countdown = 0;
    intervalId = setInterval(function() {
        countdown = countdown + 1;
        timer.textContent = countdown;
    }, 1000);
    quoteInput.value = "";
}

let result = document.getElementById("result");
let submitBtn = document.getElementById("submitBtn");
let quoteInput = document.getElementById("quoteInput");
submitBtn.onclick = function() {
    if (quoteInput.value === quoteDisplay.textContent) {
        clearInterval(intervalId);
        result.textContent = "You typed in " + timer.textContent + " seconds";
    } else {
        result.textContent = "You typed incorrect sentence.";
    }
};

let resetBtn = document.getElementById("resetBtn");
resetBtn.onclick = function() {
    generateQuote();
}

generateQuote();