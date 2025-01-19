const userContainer = document.querySelector(".grid-template");

users.forEach((users) => {
  const html = `
  <div class="user-container">
          <section class="image">
            <img
              src="${users.image}"
              alt=""
            />
          </section>
          <section class="user-info">
            <p>Name: ${users.userInfo.name}</p>
            <p>User Age: ${users.userInfo.age}</p>
            <p>Gender: ${users.userInfo.gender}</p>
            <p>Interest: ${users.userInfo.interest}</p>
          </section>
          <section class="lookingfor">
            <h3>Looking For</h3>
            <p>
              ${users.lookingFor}
            </p>
          </section>
          <section class="likeOrDisalike">
            <button class="like">Like</button>
            <button class="dislike">Dislike</button>
          </section>
        </div>
  `;
  userContainer.innerHTML += html;
});

console.log(userContainer);
