interface Musician {
  fullname: string;
  description: string;
  avatar: string;
  birthday: Date | string;
}

const musicians: Musician[] = [
  {
    fullname: "Dave Mustaine",
    description: "Es un músico estadounidense, conocido por ser el fundador de Megadeath",
    avatar: "https://cuarteldelmetal.com/wp-content/uploads/2021/04/Dave-mustaine-2.jpg",
    birthday: "1961-10-13T06:00:00.000Z"
  },
  {
    fullname: "Marilyn Manson",
    description: "Es un cantante, compositor, actor y director de cine estadounidense. Lider de Marilyn Manson",
    avatar: "https://es.rollingstone.com/wp-content/uploads/2021/11/Marilyn-Manson-Un-monstruo-escondido-ante-nuestros-ojos.jpg",
    birthday: "1969-02-05T06:00:00.000Z"
  },
  {
    fullname: "Axl Roses",
    description: "Más conocido por su nombre artístico Axl Rose, es un músico, cantante, compositor",
    avatar: "https://culturacolectiva.com/resizer/HfnZkSVXtRXNgXYJCM4ENwxTirY=/arc-photo-culturacolectiva/arc2-prod/public/NRALIPTE6VA2DFZTVXHMFOVWJQ.jpg",
    birthday: "1962-03-06T06:00:00.000Z"
  }
]

function createMusician(musician: Musician): HTMLDivElement {
  const musicianHTML = document.createElement("div");

  musicianHTML.className = "col-12 col-sm-8 col-md-6 col-xl-4 p-3";

  musicianHTML.innerHTML = /*html*/ `
    <div class="card border-0 bg-white shadow p-2" style="border-radius: 20px;">
      <div class="card-body">
        <div class="d-flex">
          <div>
            <img 
              src="${musician.avatar}"
              width="60px"
              height="60px"
              class="rounded-circle"
              style="object-fit: cover;"
              alt="${musician.fullname} avatar"
            >
          </div>
          <div class="px-3">
            <h4>${musician.fullname}</h4>
            <p class="text-muted">${musician.description}</p>
            <small>${musician.birthday}</small>
          </div>
        </div>
      </div>
    </div>
  `;

  return musicianHTML;
}

(() => {
  const container = document.getElementById("section-musicians");

  if (!container) return;

  musicians.forEach((musician) => {
    const musicianHTML = createMusician(musician);

    container.appendChild(musicianHTML);
  });
})();
