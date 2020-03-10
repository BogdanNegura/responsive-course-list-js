try {
  const apiUrl = "https://learn.accountingcpd.net/ACPD/API/Test/SampleObject";
  const courseListElement = document.querySelector("#course");

  fetch(apiUrl)
    // fix fetch response
    .then(result => result.json())
    .then(result => render(result));

  const render = result => {
    courseListElement.className = "list";
    result.forEach(t => {
      const h1 = document.createElement("h1");
      h1.textContent = t.title;
      courseListElement.appendChild(h1);
    });
  };
  courseListElement.className = "list";
  console.log(courseListElement);
} catch (e) {
  console.log("error", e);
}
