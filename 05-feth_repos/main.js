let theInput = document.querySelector(".get-repos input"),
  getButton = document.querySelector(".get-button"),
  reposData = document.querySelector(".show-data");

getButton.addEventListener("click", getRepo);

function getRepo() {
  if (theInput.value === "") {
    reposData.innerHTML = `<span>Please Write Github Username.</span>`;
  } else {
    fetch(`https://api.github.com/users/${theInput.value}/repos`)
      .then((res) => res.json())

      .then((data) => {
        reposData.innerHTML = "";

        data.forEach((repo) => {
          reposData.innerHTML += `
            <div class='repo-box'>
              ${repo.name}
              <a target='_blank' href="https://github.com/${repo.full_name}">Visit</a>
              <span>${repo.stargazers_count}</span>
            </div>
            `;
        });
      });
  }
}
