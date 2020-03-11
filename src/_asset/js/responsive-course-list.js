try {
  const apiUrl = "https://learn.accountingcpd.net/ACPD/API/Test/SampleObject";
  const courseElement = document.querySelector("#course");
  const courseList = document.querySelector(".course__list");
  const loadMore = document.querySelector("#course__load-more");

  loadMore.addEventListener("click", () => {
    limit += 10;
    render();
  });
  let limit = 10;
  let result = [];

  fetch(apiUrl)
    // fix fetch response
    .then(r => r.json())
    .then(d => {
      result = d;
      render();
      console.log("sasa");
    });

  const render = () => {
    // show the load more button as long as we can load more courses
    loadMore.className =
      limit > result.length
        ? "course__load-more--off"
        : "course__load-more--on";
    courseElement.className = "list";
    console.log(result);
    const courseListInnerHtml = result
      .slice(0, limit)
      .map(elementInLoop => {
        return `<div class="course__card">
          <div class="course__type--${elementInLoop.type}" type="${elementInLoop.type}"></div>
          <h1 class="course__title">${elementInLoop.title}</h1>
          <p class="course__description">${elementInLoop.description}</p>
          <p>Price: £${elementInLoop.price}</p>
        </div>`;
      })
      .join("");
    courseList.innerHTML = courseListInnerHtml;
  };

  // hide the loading message
  courseElement.className = "list";
} catch (e) {
  console.log("error", e);
}
