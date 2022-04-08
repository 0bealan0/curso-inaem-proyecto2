const countryContainer = document.querySelector(".countries");
const boton = document.querySelector("#btnPais");

const renderCountry = (data, optionalClass = "") => {
  const country = data.name.common;
  const flag = data.flags.svg;
  const { region, population } = data;
  const [language] = Object.values(data.languages);
  const [currency] = Object.values(data.currencies);

  // const {name: {common: country }} = data;
  const html = `
        <article class="country ${optionalClass}">
          <img class="country__img" src="${flag}" />
          <div class="country__data">
            <h3 class="country__name">${country}</h3>
            <h4 class="country__region">${region}</h4>
            <p class="country__row">${population}</p>
            <p class="country__row">${language}</p>
            <p class="country__row">${currency.name}(${currency.symbol})</p>
          </div>
        </article>
    `;
  countryContainer.innerHTML += html;
  countryContainer.style.opacity = 1;
};
//función coger datos
const getCountryData = function (country) {
  //promesa
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    //cuando llegue
    .then((response) => {
      console.log(response);
      if (!response.ok) {
        throw Error(`País no encontrado, código ${response.status}`);
      }
      return response.json();
    })
    .then(([data]) => {
      renderCountry(data);
      const neighbour = data.borders;
      if (!neighbour) throw Error("No tiene vecinos");
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour[0]}`);
    })
    .then((response) => {
      if (!response.ok) {
        throw Error(`País no encontrado, código ${response.status}`);
      }
      return response.json();
    })
    .then(([data]) => renderCountry(data, "neighbour"))
    //si no mandamos nosotros el error, aquí entraría rejected
    .catch((err) => console.log("MENSAJE ERROR:", err.message));
};

boton.addEventListener("click", () => {
  getCountryData("australia");
  boton.style.display = "none";
});

const getJSON = function (url, errMessage) {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw Error(errMessage);
    }
    return response.json();
  });
};

const whereami = (lad, lng) => {
  const request = new XMLHttpRequest();
  request.open("GET", `https://geocode.xyz/${lad},${lng}?geoit=json`);
  request.send();
  request.addEventListener("load", function () {
    // const data = JSON.parse(this.responseText)[0];
    const [data] = JSON.parse(this.responseText);
    console.log(`hola `);
  });
};

// function whereami(lat, lng) {
//   const url = `https://geocode.xyz/${lad},${lng}?geoit=json`;

//   fetch(url)
//     .then((response) => {
//       if (!response.ok) {
//         throw Error(`País no encontrado, código ${response.status}`);
//       }
//       return response.json();
//     })
//     .then(([data]) => {
//       console.log(data);

//       //obtener pais y a llamar a getCountryData
//     })
//     .catch((err) => console.log(err.message, "xxxxxxxxx"));
// }
