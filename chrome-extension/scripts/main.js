function createMeeting() {
  const url = 'https://www.traineq.site/api/v1/meetings';
  fetch(url, {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
  })
}

function createExpression({ emotion, confidence }) {
  const url = 'https://www.traineq.site/api/v1/expressions';
  fetch(url, {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      "expression": { emotion, confidence }
    })
  })
}

// createMeeting();
// createExpression();
