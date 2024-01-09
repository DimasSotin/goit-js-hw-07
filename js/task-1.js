const categories = document.querySelectorAll(".item");
console.log("Number of categories:", categories.length);

const findValueOfCategory = categories.forEach(function (category) {
  const title = document.querySelector("h2");
  console.log("category:", title.textContent);
  console.log("elements:", category.lastElementChild.childElementCount);
});
