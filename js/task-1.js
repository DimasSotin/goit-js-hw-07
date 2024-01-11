const categories = document.querySelectorAll(".item");
console.log("Number of categories:", categories.length);

categories.forEach(function (category) {
  const title = category.querySelector("h2");
  console.log("Category:", title.textContent);
  console.log("Elements:", category.lastElementChild.childElementCount);
});
