const btnCreateList = document.querySelector("button");
btnCreateList.addEventListener("click", createList);

const ul = document.querySelector("ul");

function createArray() {
  const array = [];
  const arrayLength = Math.round(Math.random() * 10);

  for (let i = 0; i < arrayLength; i++) {
    let item = Math.round(Math.random() * 10);
    array.push(item);
  }
  return array;
}

function delay(time) {
  return new Promise((resolve) => setTimeout(resolve(createArray()), time));
}

function createList() {
  const listOfAllArrays = [];

  const promise0 = delay(5000);
  listOfAllArrays.push(promise0);

  const promise1 = delay(6000);
  listOfAllArrays.push(promise1);

  const promise2 = delay(3000);
  listOfAllArrays.push(promise2);

  Promise.allSettled(listOfAllArrays).then((data) => {
    console.log(data);

    return data.map(function (object) {
      const resultDisplay = document.createElement("li");
      resultDisplay.className = "list-group-item";
      resultDisplay.innerText = object.value;
      ul.append(resultDisplay);
    });
  });
}
