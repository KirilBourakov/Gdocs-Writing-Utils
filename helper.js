
function CountUniqueWords() {
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();
  var paragraphs = body.getParagraphs();


  var wordmap = countAllWords(paragraphs)

  let objWordMap = {};
  for (let [key, value] of wordmap.entries()) {
    objWordMap[key] = value;
  }
  return objWordMap
}

function countAllWords(paragraphs){
  wordmap = new Map();
  
  for (var i = 0; i < paragraphs.length; i++) {
    parText = paragraphs[i].getText()
    var words = parText.split(/\s+/);
    for (var i = 0; i < words.length; i++) {
      var word = words[i].toLowerCase()
      if (wordmap.has(word)) {
        var newval = wordmap.get(word) + 1;
        wordmap.set(word, newval);
      }
      else {
        wordmap.set(word, 1);
      }
    }
  }
  return wordmap
}

function Display(map){
  for (let [key, value] of map) {
    Logger.log(key + ': ' + value);
  }
}

