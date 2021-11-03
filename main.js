const btnCreateList = document.querySelector("button");
btnCreateList.addEventListener("click", createList);

const ul = document.querySelector("ul");

const btnClearList = document.querySelectorAll("button")[1];
btnClearList.addEventListener("click", function () {
  ul.innerHTML = "";
});

function createArray() {
  const array = [];
  const arrayLength = Math.round(Math.random() * 10);

  for (let i = 0; i < arrayLength; i++) {
    let item = Math.round(Math.random() * 10);
    array.push(item);
  }
  return array;
}

function delayAndCreateArray(time) {
  return new Promise((resolve) => setTimeout(resolve(createArray()), time));
}

function createList() {
  const promise0 = delayAndCreateArray(5000);
  const promise1 = delayAndCreateArray(3000);
  const promise2 = delayAndCreateArray(2000);

  Promise.allSettled([promise0, promise1, promise2]).then((data) => {
    console.log(data);

    const listOfAllArrays = [];

    data.forEach(function (object) {
      listOfAllArrays.push(object.value);
    });

    const resultDisplay = document.createElement("li");
    resultDisplay.classList.add("list-group-item", "active");
    resultDisplay.innerText = `Lista única: ${listOfAllArrays}`;
    ul.append(resultDisplay);

    data.map(function (object) {
      const resultDisplay = document.createElement("li");
      resultDisplay.className = "list-group-item";
      resultDisplay.innerText = object.value;
      ul.append(resultDisplay);
    });
  });
}
