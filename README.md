Describe: wordCounter()

Test: 
    "It should return 0 for an empty string."
Code:
    wordcounter("");
Expected Output: 0

Test:
    "It should return 0 for a string that is only spaces."
Code:
    wordcounter("  ");
Expected Output: 0

Test: 
    "It should return 1 if a passage has just one word."
Code:
    const text = "hello";
    wordCounter(text);
Expected Output: 1

Test: 
    "It should return 2 if a passage has two words."
Code:
    const text = "hello there";
    wordCounter(text);
Expected Output: 2

Test: 
    "It should not count numbers as words."
Code: 
    wordCounter("hi there 77 19");
Expected Output: 2

////

Describe: numberOfOccurrencesInText()

Test: 
    "It should return 0 occurrences of a word for an empty string."
Code:
    const text = "";
    const word = "red";
    numberOfOccurrencesInText(word, text);
Expected Output: 0

Test: 
    "It should return 1 occurrence of a word when the word and the text are the same."
Code:
    const text = "red";
    const word = "red";
    numberOfOccurrencesInText(word, text);
Expected Output: 1

Test: 
    "If an empty string is passed in as a word, it should return 0."
Code:
    const word = "";
    const text = "red RED Red!";
    numberOfOccurrencesInText(word, text);
Expected Output: 0

////
Describe: boldPassage()

Test: 
    "It should return null if no word or text is entered."
Code:
    const text = "";
    const word = "";
    boldPassage(word, text);
Expected Output: null

Test: 
    "It should return a non-matching word in a p tag."
Code:
    const word = "hello";
    const text = "yo";
    boldPassage(word, text);
Expected Output: <p>yo</p>

Test: 
    "It should return a matching word in a strong tag."
Code:
    const word = "hello";
    const text = "hello";
    boldPassage(word, text);
Expected Output: <p><strong>hello</strong></p>

Test: 
    "It should wrap words that match in strong tags but not words that don't."
Code:
    const word = "hello";
    const text = "hello there";
    boldPassage(word, text);
Expected Output: <p><strong>hello</strong> there</p>

////
Describe: omitOffensiveWordsInText()
Test:
    "It should omit offensive words."
Code:
    const text;
    const offensiveWordsArray = ["zoinks", "muppeteer", "biffaroni", "loopdaloop"];
Expected Output: Function will display alert message if the text contains bad words.



