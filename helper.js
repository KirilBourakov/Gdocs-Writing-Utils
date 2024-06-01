
function CountUniqueWords() {
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();
  var paragraphs = body.getParagraphs();


  var wordmap = countAllWords(paragraphs)

  return wordmap
}

function countAllWords(paragraphs){
  wordmap = {};
  
  for (var i = 0; i < paragraphs.length; i++) {
    parText = paragraphs[i].getText()
    var words = parText.split(/\s+/);
    for (var i = 0; i < words.length; i++) {
      var word = removePunctuation(words[i].toLowerCase())
      if (word in wordmap) {
        wordmap[word]++
      }
      else {
        wordmap[word] = 1
      }
    }
  }
  return wordmap
}

function removePunctuation(str) {
  var punctuationAtEnd = /\W(?=[.,;:!?\)]*$)/g;
  var cleanedStr = str.replace(punctuationAtEnd, '');
  var regex = /[\{\}\(\)\[\]]+/g;
  var cleanedStr = cleanedStr.replace(regex, '');
  return cleanedStr;
}

function Display(map){
  for (let [key, value] of map) {
    Logger.log(key + ': ' + value);
  }
}

