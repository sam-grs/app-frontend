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
              width="250px"
              height="300px"
            />
          </article>

          <article id="about-text">
            <h1>Sobre mim</h1>

            <p id='text'>
              Olá, prazer me chamo Samira Grossi, comecei aos 15 anos em Programação na ETEC. 
              Desde então não parei, trabalhei por 2 anos numa empresa Startup, onde desenvolvi a aplicação do zero
              até o projeto final. Hoje faço bacharelado em Sistemas de Informação e o Bootcamp 
              Intensivo da Generation FullStack JavaScript. Se quiser me conhecer mais, acesse minhas redes:
            </p>
            
            <div id="repo">
              <p>${profile.public_repos} - Repositórios públicos</p>
              <p>${profile.followers} - Seguidores</p>
            </div>

            <!-- Trocar os ícones -->
            <div id="social-network-icons">
              <a href="${profile.html_url}">
                <img src="assets/github.svg" alt="Github" width="50px" />
              </a>

              <a href="https://www.linkedin.com/in/samira-grossi/" >
                <img src="assets/linkedin.svg" alt="LinkedIn" width="50px" />
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
