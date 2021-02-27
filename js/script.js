fetch("https://the-one-api.dev/v2/character", {
  method: "GET",
  headers: {
    Authorization: "Bearer p7jSSrgxvJUIFJ4J0qJy",
  },
})
  .then((response) => response.json())
  .then((data) => listChar(data.docs))
  .catch(
    (error) =>
      (container.innerHTML = `<div class="error">
                              <i class="fas fa-exclamation-triangle"></i>
                              <p style="font-size:2rem;">Error</p>
                              <p> ${error}</p>
                              </div>`)
  );

const container = document.querySelector(".characters");

function listChar(character) {
  let gender;
  let born;
  let died;
  // console.log(character[1]);
  container.innerHTML = "";

  for (i = 0; i < 200; i++) {
    if (!character[i].birth && !character[i].death) {
      continue;
    }
    if (character[i].gender === "Female") {
      gender = '<i class="fas fa-venus"></i>';
    } else if (character[i].gender === "Male") {
      gender = '<i class="fas fa-mars"></i>';
    }
    container.innerHTML += `<a href="details.html?id=${character[i]._id}" class="charcard">
                              <h2>${character[i].name} ${gender}</h2>
                              <h4>${character[i].birth} - ${character[i].death}</h4>
                              <b>${character[i].race}</b>
                            </a>`;
  }
}
