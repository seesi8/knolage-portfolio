function hi(){
  console.log("hi")
}


console.log(config)
if (typeof init === 'undefined') {



  const init = function () {
    const injectElement = document.createElement('div');
    injectElement.className = 'knoldge button';
    injectElement.innerHTML = '<btn margin-top: 1rem; position: absolute; style="border-radius: .4rem; padding: .2rem; width: fit-content; background-color: #50C778;">S.D.D</btn>';
    var inputs = document.getElementsByTagName('pre');
    const key = 43761432;
    let queryOptions = { active: true, currentWindow: true };
    let taburl = chrome.tabs.query(queryOptions).url;
    for (let i = 0; i < inputs.length; i++) {
      console.log(inputs[i])
      inputs[i].appendChild(injectElement.cloneNode(true)).addEventListener("click", function () {
        fetch(`http://samueldoes.dev/api/dbHandler?value=hi&domain=${taburl}&password=43761432`, { mode: 'no-cors'}).then(r => r.text()).then(result => {
         
        })
      });
    }
    //Using Shadow Root
  }
  init();
}