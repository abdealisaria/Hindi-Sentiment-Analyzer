NLP (Natural Language processing) Mini Project
# Hindi-Sentiment-Analyzer (or any language: just change the words in the dataset to your preferred language)

Steps to run: 

  1. open index.html
  2. if step 1 doesn't work start a simple python(or any) server to run index.html (easiest way is to install live server extension on vscode -> right click index.html and click open with live server)
  3. Try entering one of the sentences from test.txt into the text area
 
Files:-

  convert.js - converts hindi.txt file to hindi.json so its easier to access key value pairs.
  
  hindi.json - dataset to compare the text input words for calculating the sentiment score.
  
  hindi.txt - custom dataset created to calculate sentiment of words detected. (format= "word" "sentiment-score-of-word" [value              between -5 to 5 with -5 being very negative word and 5 being very positive word])
  
  sketch.js - Loads dataset -> tokenizes sentence using regex -> compares result of words with words in json file (Dataset) -> sum scores of every detected word to total sentiment score and display -> if total sentiment score is +ve then overall attitude of sentence is positive, if it is -ve then sentence attitude is negative and if it equals 0 then it is a neutral sentence.
  
  test.txt - file with some hindi sentences for testing and demo.
