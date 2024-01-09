const categories = document.querySelectorAll(".item");
console.log("Number of categories:", categories.length);

const titleRef = categories.forEach(function (category) {
  const title = category.childNodes[1];
  console.log("category:", title.textContent);
  console.log("elements:", category.lastElementChild.childElementCount);
});
