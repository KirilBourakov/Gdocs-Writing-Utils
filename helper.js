
function CountUniqueWords() {
  var paragraphs = getBodyParagraphs()

  wordmap = {};
  for (var i = 0; i < paragraphs.length; i++) {
    parText = paragraphs[i].getText()
    var words = parText.split(/\s+/);
    for (var j = 0; j < words.length; j++) {
      var word = removePunctuation(words[j].toLowerCase())
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

function FindContractions(){
  var paragraphs = getBodyParagraphs()

  var contractions = getContractions()
  var contractionsFound = {}
  for (var i = 0; i < paragraphs.length; i++) {

    parText = paragraphs[i].getText()
    var words = parText.split(/\s+/);

    for (var j = 0; j < words.length; j++) {
      var word = String(removePunctuation(words[j].toLowerCase()))
      
      if (word in contractions && word in contractionsFound) {
        contractionsFound[word]['count'] += 1
      } else if (word in contractions) {
        contractionsFound[word] = {
          'count': 1,
          'from': contractions[word]
        }
      }
    }
  }
  return contractionsFound
}

function getBodyParagraphs(){
  return DocumentApp.getActiveDocument().getBody().getParagraphs()
}

function getContractions(){
  var userProperties = PropertiesService.getUserProperties();
  var contractionsString = userProperties.getProperty('list');
  return JSON.parse(contractionsString);
}

function removePunctuation(str) {
  var punctuationAtEnd = /\W(?=[.,;:!?\")]*$)/g;
  var cleanedStr = str.replace(punctuationAtEnd, '');
  var regex = /[\{\}\(\)\[\]]+/g;
  var cleanedStr = cleanedStr.replace(regex, '');
  return cleanedStr.replace(/[\u2018\u2019]/g, "'");
}


function Display(map){
  for (let [key, value] of map) {
    Logger.log(key + ': ' + value);
  }
}

