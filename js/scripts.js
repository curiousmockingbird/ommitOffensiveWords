// Business Logic

function wordCounter(text) {
    // 
    if (text.trim().length === 0) {
        return 0;
    };
    // 
    let wordCount = 0;
    const textArray = text.split(" ");
    textArray.forEach(function (elemnt) {
        if (!Number(elemnt)) {
            wordCount++
        };
    });
    return wordCount;
}

function numberOfOccurrencesInText(word, text) {

    if (word === text) {
        return 1;
    };

    return 0;


}

function omitOffensiveWordsInText(offensiveWord, text) {
    const textArray = text.split(" ");
    textArray.forEach (function(word) {
        if (textArray.includes("zoinks","muppeteer","biffaroni","loopdaloop")) {
           
            alert("Hey, dont use bad words in your text!");
        }
    });


}

