console.log("Client side javascript is loaded");

// fetch("https://puzzle.mead.io/puzzle").then((response) => {
//   response.json().then((data) => {
//     console.log(data);
//   });
// });

//form index.hbs
const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  messageTwo.textContent = "Loading....";
  const location = search.value;
  console.log(location);

  fetch("http://localhost:3000/weather?address=" + location).then(
    (response) => {
      response.json().then((data) => {
        if (data.error) {
          return (messageTwo.textContent = data.error);
          console.log(data.error);
        }
        console.log(data);
        console.log(data.forecast);
        messageTwo.textContent = data.forecast;
      });
    }
  );
});
