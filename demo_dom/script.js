const API_URL = "https://fakestoreapi.com/products";

function fetchData(url) {
  return fetch(`${url}?limit=5`)
    .then((res) => res.json())
    .then((jsonData) => jsonData);
}

async function loadTable(url, CssSelector, tableHeaders = []) {
  const rootElement = document.querySelector(CssSelector);
  const $thead = rootElement.querySelector("thead");
  const $tbody = rootElement.querySelector("tbody");

  // clear previous data
  $thead.innerHTML = `<tr></tr>`;
  $tbody.innerHTML = "";
  // populate table header
  for (const header of tableHeaders) {
    const th = document.createElement("th");
    th.textContent = header.toUpperCase();
    $thead.insertAdjacentElement("beforeend", th);
  }
  // populate table rows
  const data = await fetchData(url);
  data.forEach((obj) => {
    const $tr = document.createElement("tr");
    tableHeaders.forEach((property) => {
      const $td = document.createElement("td");
      $td.textContent = obj[property];
      $tr.appendChild($td);
    });
    $tbody.appendChild($tr);
  });
}

loadTable(API_URL, ".table", ["id", "title", "price"]);
