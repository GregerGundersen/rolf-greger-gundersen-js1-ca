fetch("https://the-one-api.dev/v2/character", {
  method: "GET",
  headers: {
    Authorization: "Bearer p7jSSrgxvJUIFJ4J0qJy",
  },
})
  .then((response) => response.json())
  .then((data) => listChar(data.docs))
  .catch((error) => console.log(error));

const container = document.querySelector(".characters");

function listChar(character) {
  let name;
  let race;
  let gender;
  let link;
  // console.log(character[1]);

  for (i = 0; i < 200; i++) {
    name = "";
    if (character[i].name) {
      name = character[i].name;
    }
    race = "";
    if (character[i].race) {
      race = character[i].race;
    }
    gender = "";
    if (character[i].gender === "Female") {
      gender = '<i class="fas fa-venus"></i>';
    } else if (character[i].gender === "Male") {
      gender = '<i class="fas fa-mars"></i>';
    } else {
      gender = "";
    }
    link = "";
    if (character[i].wikiUrl) {
      console.log(character[i].wikiUrl);
      link = character[i].wikiUrl;
    }

    container.innerHTML += `<div class="charcard">
                              <h2>${name}</h2>
                              <p>${race}</p>
                              <p>${gender}</p>
                              <a href="${link}">LOTR Wiki - ${name}</a>
                              </div>`;
  }
}
