function listenClick() {
  const button = document.getElementById('power-btn');
  button.addEventListener('click', e => {
    console.log(e)
    if (e.target.innerText === 'Start') {
      chrome.tabs.executeScript({
        file: 'scripts/monitoring.js'
      });
      console.log("start")
    }
  })
}
function listenClick_two() {
  const end_button = document.getElementById('end-btn');
  end_button.addEventListener('click', event => {
    // if event.target.innerText === 'start' {
    if (event.target.innerText === 'End') {
      // const $test = 1
      chrome.tabs.executeScript({
        file: 'scripts/end-meeting.js'
      });
      window.open("http://www.traineq.site/dashboard");
    }



  })
}

listenClick();
listenClick_two();
