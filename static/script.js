function sendText() {
  const text = document.getElementById("inputText").value;

  fetch("/analyze", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ text: text })
  })
  .then(response => response.json())
  .then(data => {
    document.getElementById("analysis").innerText =
      "Emotion: " + data.emotion + " | Confusion: " + data.confusion;

    document.getElementById("solution").innerText = data.solution;
  });
}
