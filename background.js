function contentScript(taburl, tabtitle) {
  var thetaburl = taburl;
  var thetabtitle = tabtitle;
  if (typeof init === 'undefined') {
    const init = function () {
      const injectElement = document.createElement('div');
      injectElement.className = 'knoldge button';
      injectElement.innerHTML = '<btn margin-top: 1rem; position: absolute; style="border-radius: .4rem; padding: .2rem; width: fit-content; background-color: #50C778;">S.D.D</btn>';
      var inputs = document.getElementsByTagName('pre');
      const key = 43761432;
      let queryOptions = { active: true, currentWindow: true };
      //let taburl = chrome.tabs.query(queryOptions).url;
      for (let i = 0; i < inputs.length; i++) {
        console.log(inputs[i])
        inputs[i].appendChild(injectElement.cloneNode(true)).addEventListener("click", function (event) {
          const element = event.srcElement.parentElement.parentElement.parentElement.outerHTML
          fetch(`https://samueldoes.dev/api/dbHandler?title=${thetabtitle}&domain=${thetaburl}&password=43761432`, {
             mode: 'no-cors',
             method: 'POST',
             body: JSON.stringify({
              element
             }) 

            }).then(r => r.text()).then(result => {
          })
        });
      }
      //Using Shadow Root
    }
    
    init();
  }
}

try {

  //ON page change
  chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete') {
      //console.log(tab)
      //if (changeInfo.url) {
      chrome.scripting.executeScript({
        func: contentScript,
        args: [tab.url, tab.title],
        target: { tabId: tab.id }
      });
      //}
    }
  });


} catch (e) {
  console.log(e);
}
