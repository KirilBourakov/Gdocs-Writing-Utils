function onOpen(){
  DocumentApp.getUi().createAddonMenu()
    .addItem('Count Unique Words', 'CreateCountUniqueWords')
    .addToUi()
}

function CreateCountUniqueWords() {
  var html = HtmlService.createTemplateFromFile("Index").evaluate().setTitle("Word Counter")
  DocumentApp.getUi().showSidebar(html)
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
    .getContent();
}