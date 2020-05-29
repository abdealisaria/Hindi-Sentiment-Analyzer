var table;
var abd = {}

function preload() {
  table = loadTable('hindi.txt', 'tsv');
}

function setup() {
  noCanvas();
  console.log(table);
  for (var i = 0; i < table.getRowCount(); i++) {
    var row = table.getRow(i);
    var word = row.get(0);
    var score = row.get(1);

    abd[word] = score;
    //console.log(word, score);
  }
  console.log(abd);
  save(abd, 'hindi.json');



}

function draw() {

}