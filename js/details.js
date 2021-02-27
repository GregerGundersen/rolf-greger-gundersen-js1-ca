const detailContainer = document.querySelector(".chardetails");
const queryString = document.location.search;
const param = new URLSearchParams(queryString);
const id = param.get("id");

const url = "https://the-one-api.dev/v2/character/" + id;

fetch(url, {
  method: "GET",
  headers: {
    Authorization: "Bearer p7jSSrgxvJUIFJ4J0qJy",
  },
})
  .then((response) => response.json())
  .then((data) => createHtml(data))
  .catch((error) => console.log(error));

function createHtml(details) {
  detailContainer.innerHTML = ` <h1>${details.docs[0].name}</h1>
                                <b>${details.docs[0].race}</b>
                                <p>${details.docs[0].birth} - ${details.docs[0].death}</p>
                                `;
}

// createHtml(data.docs)
