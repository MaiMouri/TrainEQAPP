// function listenClick() {
//   const button = document.getElementById('power-btn');
//   button.addEventListener('click', event => {
//     // if event.target.innerText === 'start' {
//     if (event.target.innerText === 'Start') {
//       // const $test = 1
//       chrome.tabs.executeScript({
//         file: 'scripts/monitoring.js'
//       });
//     }

//   })
// }
// function listenClick_two() {
//   const end_button = document.getElementById('end-btn');
//   end_button.addEventListener('click', event => {
//     // if event.target.innerText === 'start' {
//     if (event.target.innerText === 'End') {
//       // const $test = 1
//       chrome.tabs.executeScript({
//         file: 'scripts/end-meeting.js'
//       });
//       window.open("http://www.traineq.site/dashboard");
//     }

//   })
// }
function logOut() {
  const button = document.getElementById('logoutBtn');
  button.addEventListener('click', event => {
    chrome.storage.local.remove(["email", "token"], function () {
      console.log('logging out');
    });

  })
};




function checkBoxtoggle() {
  const button = document.getElementById('checkbox-btn');

  chrome.storage.local.get(['key'], function (result) {
    button.checked = result.key;
    console.log(result.key)
  });
  // localStorage.setItem('sessionActive', button.checked = true );

  // button.checked = window.sessionActive
  // console.log(button.checked)

  button.addEventListener('change', function () {
    if (this.checked) {
      chrome.tabs.executeScript({
        file: 'scripts/monitoring.js'
      });
      chrome.storage.local.set({ key: true }, function () {
        key = button.checked
        console.log(button.checked)
      });
      // window.sessionActive = true;
      // console.log(button.checked)
    } else {
      chrome.tabs.executeScript({
        file: 'scripts/end-meeting.js'
      });
      chrome.storage.local.set({ key: false }, function () {
        key = button.checked
        console.log(button.checked)


      });      // window.open("http://www.traineq.site/dashboard");
      // window.sessionActive = false;
      // console.log(button.checked)
    }

  });

}


function listenClickDashboard() {
  const button = document.getElementById('dashboardBtn');
  button.addEventListener("click", function () {
    window.open("http://www.traineq.site/dashboard");
  });
}

// listenClick();
// listenClick_two();
checkBoxtoggle();
listenClickDashboard();
logOut();
