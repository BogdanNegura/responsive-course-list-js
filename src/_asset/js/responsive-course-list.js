try {
  const apiUrl = "https://learn.accountingcpd.net/ACPD/API/Test/SampleObject";
  const courseElement = document.querySelector("#course");
  const courseList = document.querySelector(".course__list");

  fetch(apiUrl)
    // fix fetch response
    .then(r => r.json())
    .then(d => render(d));

  const render = result => {
    courseElement.className = "list";

    const courseListInnerHtml = result
      .map(elementInLoop => {
        return `<div class="course__card">
          <div class="course__type--${elementInLoop.type}" type="${elementInLoop.type}"></div>
          <h1 class="course-title">${elementInLoop.title}</h1>
          <p class="course-description">${elementInLoop.description}</p>
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
