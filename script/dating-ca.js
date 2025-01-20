let usersHtml = "";

users.forEach((user) => {
  usersHtml += `
      <div class="user-container" data-container-id="${user.id}">
          <section class="image">
            <img
              src="${user.image}" 
              alt=""
            />
          </section>
          <section class="user-info">
            <p>Name: ${user.userInfo.name}</p>
            <p>User Age: ${user.userInfo.age}</p>
            <p>Gender: ${user.userInfo.gender}</p>
            <p>Interest: ${user.userInfo.interest}</p>
          </section>
          <section class="lookingfor">
            <h3>Looking For</h3>
            <p>${user.lookingFor}</p>
          </section>
          <section class="likeOrDisalike">
            <button class="like-button" data-like-button-id="${user.id}">Like</button>
            <button class="dislike-button" data-dislike-button-id="${user.id}">Dislike</button>
            <div class="output-result"></div>
          </section>
      </div>
  `;
});

document.querySelector(".grid-template").innerHTML += usersHtml;

document.querySelectorAll(".dislike-button").forEach((button) => {
  button.addEventListener("click", () => {
    const likeOrDisalikeData = button.dataset.dislikeButtonId;
    console.log(likeOrDisalikeData);

    let matchingUser;
    dislikedPeople.forEach((user) => {
      if (user.userId === likeOrDisalikeData) {
        matchingUser = user;
      }
    });
    if (matchingUser) {
      displayMessageDissLike(matchingUser.userId);
      alert("User Has alredy been disliked");
      matchingUser.dislike += 1;
    } else {
      dislikedPeople.push({
        userId: likeOrDisalikeData,
        liked: 0,
        dislike: 1,
      });
      console.log(`${likeOrDisalikeData} has been pushed`);
    }
  });
});

document.querySelectorAll(".like-button").forEach((button) => {
  button.addEventListener("click", () => {
    const likeIdButtonData = button.dataset.likeButtonId;
    console.log(likeIdButtonData);
    let matchingUser;

    linkedPeople.forEach((user) => {
      if (user.userId === likeIdButtonData) {
        matchingUser = user;
      }
    });

    if (matchingUser) {
      displayMessage(matchingUser.userId);
      alert("User Has alredy been liked");
      matchingUser.liked += 1;
    } else {
      linkedPeople.push({
        userId: likeIdButtonData,
        liked: 1,
      });
      console.log(`${likeIdButtonData} has been pushed`);
    }
  });
});

function displayMessage(userId) {
  const containers = document.querySelectorAll(".user-container");
  containers.forEach((container) => {
    let containerDataAttribute = container.dataset.containerId;
    if (containerDataAttribute === userId) {
      let messageOutPut = container.querySelector(".output-result");
      messageOutPut.innerHTML = "<p>You have already liked me</p>";
      setTimeout(() => {
        messageOutPut.innerHTML = "";
      }, 3000);
    }
  });
}
function displayMessageDissLike(userId) {
  const containers = document.querySelectorAll(".user-container");
  containers.forEach((container) => {
    let containerDataAttribute = container.dataset.containerId;
    if (containerDataAttribute === userId) {
      let messageOutPut = container.querySelector(".output-result");
      messageOutPut.innerHTML = "<p>You have already disliked me</p>";
      setTimeout(() => {
        messageOutPut.innerHTML = "";
      }, 3000);
    }
  });
}
