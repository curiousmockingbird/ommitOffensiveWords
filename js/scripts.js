// Business Logic
function wordCounter(text) {
    if (text.trim().length === 0) {
        return 0;
    }
    let wordCount = 0;
    const textArray = text.split(" ");
    textArray.forEach(function (element) {
        if (!Number(element)) {
            wordCount++;
        }
    });
    return wordCount;
}

function numberOfOccurrencesInText(word, text) {
    if (word.trim().length === 0) {
        return 0
    };

    const textArray = text.split(" ");
    let wordCount = 0;
    textArray.forEach(function (element) {
        if (element.toLowerCase().includes(word.toLowerCase())) {
            wordCount++;
        }
    });

    return wordCount;
}

function boldPassage(word, text) {
    if ((text.trim().length === 0) || (word.trim().length === 0)) {
        return null;
    }

    const p = document.createElement("p");
    /* p.append(text);
    return p; */

    /* if (word === text) {
        const bold = document.createElement("strong");
        bold.append(text);
        p.append(bold);
    } else {
        p.append(text);
    }
    return p; */

    let textArray = text.split(" ");
    textArray.forEach(function(element) {
      if (word === element) {
        const bold = document.createElement("strong");
        bold.append(element);
        p.append(bold);
      } else {
        p.append(element);
      };
      p.append(" ");
    });
    
    return p; 

}

// Fix this function
function omitOffensiveWordsInText(text) {
    const textArray = text.split(" ");
    textArray.forEach(function (offensiveWord) {
        if (textArray.includes("zoinks", "muppeteer", "biffaroni", "loopdaloop")) {

            alert("Hey, dont use bad words in your text!");
        }
        /* if (element.toLowerCase().includes(word.toLowerCase())) {
            textArray = textArray.filter(e => e !== 'zoinks', 'muppeteer', 'loopdaloop', 'biffaroni');
          } */

    });
}

// UI Logic

function handleFormSubmission(event) {
    event.preventDefault();
    const passage = document.getElementById("text-passage").value;
    const word = document.getElementById("word").value;
    const wordCount = wordCounter(passage);
    const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
    document.getElementById("total-count").innerText = wordCount;
    document.getElementById("selected-count").innerText = occurrencesOfWord;
}

window.addEventListener("load", function () {
    document.querySelector("form#word-counter").addEventListener("submit", handleFormSubmission);
});

