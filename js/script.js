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
  let born;
  let died;
  // console.log(character[1]);
  container.innerHTML = "";

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
    born = "Unknown DoB";
    if (character[i].birth) {
      birth = character[i].birth;
    }

    died = "Unknown DoD";
    if (character[i].death) {
      died = character[i].death;
    }

    container.innerHTML += `<div class="charcard">
                              <h2>${name} ${gender}</h2>
                              <h4>${born} - ${died}</h4>
                              <div class="flex">
                                <b>${race}</b>
                                <a class="wikilink" href="${link}">Wiki - ${name}</a>
                              </div>  
                            </div>`;
  }
}
