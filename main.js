function onOpen(){
  DocumentApp.getUi().createAddonMenu()
    .addItem('Count Unique Words', 'CreateCountUniqueWords')
    .addItem('Find Contractions', 'CreateContractions')
    .addToUi()
}

function CreateCountUniqueWords() {
  var html = HtmlService.createTemplateFromFile("CountWords").evaluate().setTitle("Word Counter")
  DocumentApp.getUi().showSidebar(html)
}

function CreateContractions(){
  var html = HtmlService.createTemplateFromFile("Contractions").evaluate().setTitle("Contractions")
  DocumentApp.getUi().showSidebar(html)
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
    .getContent();
}