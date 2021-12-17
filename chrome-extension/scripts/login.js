// chrome.cookies.get({ url: 'https://www.traineq.site/', name: 'someone' },
//   function (cookie) {
//     if (cookie) {
//       console.log(cookie.value);
//       window.location.href = '../popup.html';
//     }
//     else {
//       console.log('Can\'t get cookie! Check the name!');
//       window.location.href = '../login.html';
//     }
//   });

// For log-in-----------------------
chrome.storage.local.get(['email', 'token'], function (result) {
  console.log('Email is ' + result.email);
  console.log('Token is ' + result.token);
  const email = result.email;
  const token = result.token;
  if (email && token) {
    window.location.href = '../popup.html';
  }
})


const login = document.getElementById('log-in');
login.addEventListener('click', event => {
  event.preventDefault();
  const email = document.getElementById('email-input').value;
  const password = document.getElementById('password-input').value;
  console.log(email, password);
  const url = 'https://www.traineq.site/api/v1/auth/sign_in';
  fetch(url, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "email": email,
      "password": password,
    })
  }).then(response => response.json())
    .then((data) => {
      console.log(data)
      const email = data.data.email
      const token = data.data.authentication_token
      chrome.storage.local.set({ email: email }, function () {
        console.log('Value is set to ' + email);
      });
      chrome.storage.local.set({ token: token }, function () {
      });
      window.location.href = '../popup.html';
    });
});
