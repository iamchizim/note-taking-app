const noteTitle = document.getElementById('title')
const noteContent = document.getElementById('note')
const submitButton = document.getElementById('submit')
const noteContainer = document.getElementById('notes-container')

submitButton.addEventListener('click', function(e){
  e.preventDefault()
  title = noteTitle.value
  content = noteContent.value
  truncatedContent = content.slice(0,10) + "..."

  noteDiv = document.createElement('div')
  noteDivTitle = document.createElement('h2')
  noteDivTitle.textContent = title
  noteDivParagraph = document.createElement('p')
  noteDivParagraph.textContent = truncatedContent
  readMoreButton = document.createElement('button')
  readMoreButton.textContent = "Read more"

  readMoreButton.addEventListener('click', function(){
    if(noteDivParagraph.textContent === truncatedContent){
      noteDivParagraph.textContent = content
      readMoreButton.textContent = "Read less"
    }else {
      noteDivParagraph.textContent = truncatedContent
      readMoreButton.textContent = "Read more"
  }
  })
noteDiv.appendChild(noteDivTitle)
noteDiv.appendChild(noteDivParagraph)
noteDiv.appendChild(readMoreButton)
noteContainer.appendChild(noteDiv);

noteTitle.value = "";
noteContent.value = ""; 

})
