const detailContainer = document.querySelector(".chardetails");
const queryString = document.location.search;
const param = new URLSearchParams(queryString);
const id = param.get("id");

const url = "https://the-one-api.dev/v2/character/" + id;
const quoteUrl = "https://the-one-api.dev/v2/character/" + id + "/quote";

const titleContainer = document.querySelector("title");

/* Fetch character details. */

fetch(url, {
  method: "GET",
  headers: {
    Authorization: "Bearer p7jSSrgxvJUIFJ4J0qJy",
  },
})
  .then((response) => response.json())
  .then((data) => createHtml(data))
  .catch(
    (error) =>
      (detailContainer.innerHTML = `<div class="error">
                              <i class="fas fa-exclamation-triangle"></i>
                              <p style="font-size:2rem;">Error</p>
                              <p> ${error}</p>
                              </div>`)
  );

/* Function for listing details on page. */

function createHtml(details) {
  let gender;
  console.log(details.docs[0].name);

  titleContainer.innerHTML = `LoTR | ${details.docs[0].name}`;
  if (details.docs[0].gender === "Female") {
    gender = '<i class="fas fa-venus"></i>';
  } else if (details.docs[0].gender === "Male") {
    gender = '<i class="fas fa-mars"></i>';
  }
  detailContainer.innerHTML = ` <div>
                                <h1>${details.docs[0].name} ${gender}</h1>
                                <p id="birthdetails">${
                                  details.docs[0].birth
                                } - ${details.docs[0].death}</p>
                                <p><b>Race: </b>${details.docs[0].race}</p>
                                <p><b>Realm: </b>${
                                  details.docs[0].realm
                                    ? details.docs[0].realm
                                    : "Unknown kingdom"
                                }</p>
                                <p><b>Spouse: </b>${
                                  details.docs[0].spouse
                                    ? details.docs[0].spouse
                                    : "Unknown spouse"
                                }
                                 </p>
                                </div>

                                `;
}

/* fetch(quoteUrl, {
  method: "GET",
  headers: {
    Authorization: "Bearer p7jSSrgxvJUIFJ4J0qJy",
  },
})
  .then((response) => response.json())
  .then((data) => createHtml(data))
  .catch(
    (error) =>
      (detailContainer.innerHTML = `<div class="error">
                              <i class="fas fa-exclamation-triangle"></i>
                              <p style="font-size:2rem;">Error</p>
                              <p> ${error}</p>
                              </div>`)
  ); */
