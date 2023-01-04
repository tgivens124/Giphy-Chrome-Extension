document.querySelector(".search-button").addEventListener("click", function () {
  let userInput = getUserInput();
  searchGiphy(userInput);
});
document.querySelector(".Search").addEventListener("keyup", function (e) {
  if (e.which === 13) {
    let userInput = getUserInput();
    searchGiphy(userInput);
  }
});
function getUserInput() {
  let input = document.querySelector(".Search").value;
  return input;
}
function searchGiphy(search) {
  let url =
    "https://api.giphy.com/v1/gifs/search?api_key=jvJMwGsMuIlUxtsnExMcQUdxDtcMmvXj&q=" +
    search;

  let AjaxCall = new XMLHttpRequest();
  AjaxCall.open("GET", url);
  AjaxCall.send();

  AjaxCall.addEventListener("load", function (data) {
    let actualData = data.target.response;
    pushToDom(actualData);
    console.log(actualData);
  });
}
function pushToDom(response) {
  response = JSON.parse(response);

  let images = response.data;

  let container = document.querySelector(".container");

  container.innerHTML = "";

  images.forEach(function (image) {
    let src = image.images.fixed_height.url;

    container.innerHTML += "<img src='" + src + "' class='container-image' />";
  });
}
