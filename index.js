//arr for all
let all = [];

//arr for active
let active = [];

//arr for completed
let completed = [];

function onInit() {
  document.querySelector("#add").addEventListener("click", function (event) {
    event.preventDefault();
    renderTodo();
  });

  document.querySelector("#completed").addEventListener("click", function () {
    makeTodo(completed);
  });
  //when i click all i shoul see all the todos
  document.querySelector("#all").addEventListener("click", function () {
    makeTodo(all);
  });
}

function makeTodo(arr) {
  let ul = document.querySelector("ul");

  ul.innerText = "";
  //reset the dom
  for (let todo of arr) {
    //create a li el
    let li = document.createElement("li");
    //set li inner text
    li.innerText = todo.value;

    //create span
    let span = document.createElement("span");

    //append span to li
    li.append(span);

    //create a checkbox
    let checkbox = document.createElement("input");

    //add click event to checkbox
    checkbox.addEventListener("click", function () {
      //change todo state
      todo.isDone = true;
      //push inot completed arr
      completed.push(todo);
    });

    //set type of input
    checkbox.type = "checkbox";

    //append checkbox to li
    li.append(checkbox);

    //append li to ul
    ul.append(li);
  }
}

function renderTodo() {
  //save input in var
  let input = document.querySelector("input").value;

  //create a proto of the todo
  let todo = {
    id: Math.random(),
    value: input,
    isDone: false,
  };

  //push todo in all
  all.push(todo);
  //call makeTodo fn
  makeTodo(all);
}

onInit();
