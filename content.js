let possibleColors = {
  blue: '#ACE07A',
  green: '#E00B7A',
  yellow: '#ffff99',
  red: '#E000007A'
}

let color
chrome.storage.sync.get(['color'], data => {
  color = data.color
})

function getSelectedText () {
  return window.getSelection()
}

function highlight (range, color) {
  const surroundDiv = document.createElement('span')
  surroundDiv.setAttribute(
    'style',
    `background-color: ${color}; display:inline;`
  )
  surroundDiv.appendChild(range.extractContents())
  range.insertNode(surroundDiv)
}

//Shows popup (Rudimentary at the moment)
function showPopup (e) {
  console.log(e)
  const popup = document.createElement('div')
  popup.textContent = 'Hello there'
  document.body.appendChild(popup)
  popup.setAttribute(
    'style',
    `
        position: absolute;
        left: ${e.pageX};
        top: ${e.pageY};
    `
  )
}

//When mouse is up get selected text, if its not an empty string then show popup and highlight text
document.body.addEventListener('mouseup', e => {
  const selection = getSelectedText()
  if (selection.toString()) {
    showPopup(e)
    highlight(selection.getRangeAt(0), color)
  }
})
