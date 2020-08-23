'use strict'

chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.sync.set({ color: '#ffff99' }, function () {
    console.log(
      '%c Default color is #ffff99',
      'background: #ffff99'
    )
  })
})



