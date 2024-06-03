
function CountUniqueWords() {
  var paragraphs = getBodyParagraphs()

  let wordMap = {};
  for (const paragraph of paragraphs) {
    const text = paragraph.getText();
    const words = text.split(/\s+/);
    
    for (const word of words) {
      const cleanedWord = removePunctuation(word.toLowerCase());
      
      if (wordMap.hasOwnProperty(cleanedWord)) {
        wordMap[cleanedWord]++;
      } else {
        wordMap[cleanedWord] = 1;
      }
    }
  }
  return wordMap
}

function FindContractions(){
  var paragraphs = getBodyParagraphs()

  var contractions = getContractions()
  var contractionsFound = {}
  for (const paragraph of paragraphs) {

    parText = paragraph.getText()
    var words = parText.split(/\s+/);

    for (const word of words) {
      var cleanword = String(removePunctuation(word.toLowerCase()))
      
      if (cleanword in contractions && cleanword in contractionsFound) {
        contractionsFound[cleanword]['count'] += 1
      } else if (cleanword in contractions) {
        contractionsFound[cleanword] = {
          'count': 1,
          'from': contractions[cleanword]
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

