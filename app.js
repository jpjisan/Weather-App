const search = document.querySelector("#btn");
const image = document.querySelector(".weather-box img");

const temp = document.querySelector(".temparature");
const description = document.querySelector(".description");
const humidity = document.querySelector(".info-humidity");
const wind = document.querySelector(".info-wind");
const place = document.querySelector(".your-location");
const hide = document.querySelector(".hide");
const notFound = document.querySelector(".not-found");

window.addEventListener("load", () => {
  navigator.geolocation.getCurrentPosition((position) => {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    console.log(lat);
    console.log(long);
    const APIkey = "2124bcb4ebdd921ada966896d62714b8";
    // const cityname = document.querySelector(".search-box input").value;
    // console.log(cityname);

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${APIkey}`
    )
      .then((response) => response.json())
      .then((data) => {
        if(data.cod=="404"){
            hide.classList.add("active")
            notFound.classList.remove("active");
            
        }else{
            notFound.classList.add("active");
            hide.classList.remove("active")
            
        }
        console.log(data);
        console.log(data.weather[0].main);
        switch (data.weather[0].main) {
          case "Clear":
            image.src = "./imges/clear.png";
            break;
          case "Rain":
            image.src = "./imges/rain.png";
            break;
          case "Clouds":
            image.src = "./imges/cloud.png";
            break;
          case "Mist":
            image.src = "./imges/mist.png";
            break;
          case "Haze":
            image.src = "./imges/mist.png";
            break;
          case "Snow":
            image.src = "./imges/snow.png";
            break;

          default:
            image.src = "./imges/cloud.png";
        }

        temp.innerHTML = `${data.main.temp}<span>°C</span>`;
        description.innerHTML = `${data.weather[0].description}`;
        humidity.innerHTML = `${data.main.humidity} %`;
        wind.innerHTML = `${data.wind.speed} Km/h`;
        place.innerText = `${data.name}`;
      });
  });
});

search.addEventListener("click", (evt) => {
  evt.preventDefault();
  updateWeather();
});

const updateWeather = () => {
  const APIkey = "2124bcb4ebdd921ada966896d62714b8";
  const cityname = document.querySelector(".search-box input").value;
  console.log(cityname);

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric&appid=${APIkey}`
  )
    .then((response) => response.json())
    .then((data) => {


        if(data.cod=="404"){
            hide.classList.add("active")
            notFound.classList.remove("active");
            
        }else{
            notFound.classList.add("active");
            hide.classList.remove("active")
            
        }
      console.log(data);
      console.log(data.weather[0].main);
      switch (data.weather[0].main) {
        case "Clear":
          image.src = "./imges/clear.png";
          break;
        case "Rain":
          image.src = "./imges/rain.png";
          break;
        case "Clouds":
          image.src = "./imges/cloud.png";
          break;
        case "Mist":
          image.src = "./imges/mist.png";
          break;
        case "Haze":
          image.src = "./imges/mist.png";
          break;
        case "Snow":
          image.src = "./imges/snow.png";
          break;

        default:
          image.src = "./imges/cloud.png";
      }

      temp.innerHTML = `${data.main.temp}<span>°C</span>`;
      description.innerHTML = `${data.weather[0].description}`;
      humidity.innerHTML = `${data.main.humidity} %`;
      wind.innerHTML = `${data.wind.speed} Km/h`;
      place.innerText = `${data.name}`
      
    });
};
