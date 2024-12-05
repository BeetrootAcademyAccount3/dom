const title = document.getElementById("title");
// const item = document.getElementsByClassName("item");
// const firstName = document.getElementsByName("firstName");
// const title = document.getElementsByTagName("h1");

// console.dir(item);
// console.dir(firstName);
// console.dir(title);
// title[0].style.color = "red";
// item[3].style.color = "red";

// const title = document.querySelector("#title");
// const item = document.querySelector(".item");
// const item = document.querySelector(".item:nth-child(3)");
// const title = document.querySelector("h1");

// console.dir(title);
// title.style.color = "red";
// title.style.backgroundColor = "blue";

// console.dir(item);
// item.style.color = "red";

// const list = document.querySelectorAll(".item");

/*
for (let index = 0; index < list.length; index++) {
  if (index % 2 === 0) {
    // list[index].style.color = "red";
    // list[index].className = "item primary";
    list[index].classList.add("primary");
    // list[index].classList.remove("item");
  }

  //   if (index % 3 === 0) {
  //     console.log(index);
  //     list[index].classList.toggle("primary");
  //   }
  list[index].setAttribute("id", index + 1);
}
  */

// for (let el of list) {
//   el.style.color = "green";
// }

// list.forEach((el) => el.classList.add("primary"));

// const firstItem = document.querySelector(".item");

// const parent = firstItem.parentNode;
// const parent = firstItem.parentElement;
// parent.classList.add("bg");

// console.dir(parent);

const list = document.querySelector(".list");

const item = document.createElement("li");
item.innerText = "Hello";
list.replaceChildren(item);
// const items = list.children;
// console.log(items);

// items[2].classList.add("primary");

// const main = list.closest("h1");

// console.dir(main);

// const prevChild = items[2].nextElementSibling;

// console.dir(prevChild);

// list.innerHTML = list.innerHTML + "<li> Item X</li>";

// const newLi = document.createElement("li");

// const newLi2 = document.createElement("li");

// newLi.innerText = "Item X";
// newLi2.innerText = "Item X2";

// newLi.classList.add("item");
// newLi2.classList.add("item");

// list.append(newLi2, newLi);

// for (let index = 0; index < 10; index++) {
//   const newLi = document.createElement("li");

//   const newLi2 = document.createElement("li");

//   newLi.innerText = "Item X";
//   newLi2.innerText = "Item X2";

//   newLi.classList.add("item");
//   newLi2.classList.add("item");

//   list.append(newLi2, newLi);
// }
