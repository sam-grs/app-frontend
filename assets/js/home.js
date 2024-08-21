const about = document.querySelector("#about");

async function getApiGithub() {
  try {
    const profileData = await fetch(`https://api.github.com/users/sam-grs`);
    const profile = await profileData.json();

    const content = `
      <div class="content">
        <article id="about-image">
            <img
              id="avatar"
              src="./assets/profile.jpeg"
              alt="Foto do Perfil - ${profile.name}"
              width="200px"
              height="250px"
            />
          </article>

          <article id="about-text">
            <h1>Sobre mim</h1>

            <p id='text'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quibusdam odit voluptates incidunt inventore rem error harum
              blanditiis accusamus vitae, minus fugit consequatur? Dolorum
              maiores magni deleniti modi sit laudantium totam!
            </p>
            
            <div id="repo">
              <p>${profile.public_repos} - Repositórios públicos</p>
              <p>${profile.followers} - Seguidores</p>
            </div>

            <!-- Trocar os ícones -->
            <div id="social-network-icons">
              <a href="https://www.linkedin.com/in/samira-grossi/" >
                <img src="assets/linkedin.svg" alt="LinkedIn" width="50px" />
              </a>

              <a href="${profile.html_url}">
                <img src="assets/github.svg" alt="Github" width="50px" />
              </a>

              <!-- EMAIL? -->
              <a href="">
                <img src="assets/instagram.svg" alt="Instagram" width="50px" />
              </a>
            </div>

          </article>
         </div> 
        `;

    about.innerHTML = content;
  } catch (err) {
    console.error(err);
  }
}

getApiGithub();
