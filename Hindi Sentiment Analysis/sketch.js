var abd;

function preload() {
  // convert json values to object
  abd = loadJSON('hindi.json');
}

function setup() {
  noCanvas();
  console.log(abd);

  var txt = select('#txt');
  txt.input(typing);

  function typing() {
    var textinput = txt.value();
    // tokenization
    var words = textinput.split(/[|.,\s\t]/g);
    console.log(words);
    var scoredwords = [];
    var totalScore = 0;
    for (var i = 0; i < words.length; i++) {
      var word = words[i];
      if (abd.hasOwnProperty(word)) {
        var score = abd[word];
        console.log(word, score);
        totalScore += Number(score);
        scoredwords.push(word + ': ' + score + ' ');
      }
    }
    var scorePar = select('#scoreB');
    scorePar.html('Sentiment Score: ' + totalScore);
    var comp = select('#comparativeB');
    var compval = totalScore / words.length;
    comp.html('Comparative Score: ' + compval.toFixed(2));
    var wordlist = select('#wordlistB');
    wordlist.html('Word List: ' + scoredwords);
    var attitude = select('#attitudeB');
    if (compval > 0) {
      attitude.html('Overall Attitude: <span id="pos"> "Positive" </span>');
      attitude.removeClass('negative');
      attitude.removeClass('neutral');
      attitude.addClass('positive');
    }
    else if (compval < 0) {
      attitude.html('Overall Attitude: <span id= "neg"> "Negative" </span>');
      attitude.removeClass('positive');
      attitude.removeClass('neutral');
      attitude.addClass('negative');
    }
    else {
      attitude.html('Overall Attitude: <span id= "neu"> "Neutral" </span>');
      attitude.removeClass('positive');
      attitude.removeClass('negative');
      attitude.addClass('neutral');
    }
  }
}

function draw() { }