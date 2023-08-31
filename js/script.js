
const inpCity = document.getElementById('search');
const btnSear = document.getElementById('btnSearch');

const foo = document.getElementById('cli');
const btnSearch = document.getElementById('btnSearch');

let cities = ['madrid', 'valencia', 'alicante', 'palma de mallorca', 'amsterdam'];



const inputCity = () => {

    let city = inpCity.value
    const main = document.getElementById('main')
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=26c25a94171b06cf681d940caed738cf`


    fetch(url)
        .then(response => {
            return response.json()
        })
        .then(data => {

            let numero = (data.main.temp - 273.15);
            console.log(Math.floor(numero));

            let precitation = data.rain === undefined ? 0 : data.rain['1h'];
            main.innerHTML += `
                    <div class="ciudad">
                        <h1><i class='bx bxs-map'></i>${' ' + data.name + ', ' + data.sys.country}</h1>
                        <p class="degree">${Math.floor(numero)}°</p>
                        <p class="typeOf">${data.weather[0].main}</p>

                        <div class="charac">

                            <div class="degreeMain">
                                <p>${precitation}</p>
                                <p class="humidity">${data.main.humidity}</p>
                                <p>${data.wind.speed}</p>
                                
                            </div>
                            
                        
                            <div class="charachWeather">

                                <span>Humidity</span>
                                <span>Precipitation</span>
                                <span>Speed</span>
                            </div>
                        </div>
                        
                    </div>
                    `


        })
        .catch((error) => console.log('Error', error));

}

cities.forEach(element => {
    const main = document.getElementById('main')
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${element}&appid=26c25a94171b06cf681d940caed738cf`

    fetch(url)
        .then(response => {
            return response.json()
        })
        .then(data => {

            let numero = (data.main.temp - 273.15);
            console.log(Math.floor(numero));
            console.log(data.base)

            let precitation = data.rain === undefined ? 0 : data.rain['1h'];
            let nameCity = ' ' + data.name + ', ' + data.sys.country;
            main.innerHTML += `
                    <div class="ciudad">
                        <h1><i class='bx bxs-map'></i>${nameCity}</h1>
                        <p class="degree">${Math.floor(numero)}°</p>
                        <p class="typeOf">${data.weather[0].main}</p>

                        <div class="charac">

                            <div class="degreeMain">
                                <p>${precitation}</p>
                                <p class="humidity">${data.main.humidity}</p>
                                <p>${data.wind.speed}</p>
                                
                            </div>

                            <div class="imagen-container-weatherMode">
                                <img id="imgWeatherMode" src =/img/clouds.png alt="">
                            </div>
                           
                   
                            <div class="charachWeather">

                                <span>Humidity</span>
                                <span>Precipitation</span>
                                <span>Speed</span>
                            </div>
                        </div>
                        
                    </div>
                    `


        })
        .catch((error) => console.log('Error', error));
})

function addCity(cities, city) {
    if (cities.includes(city)) {
        console.log('hola')
    }
    return addCity(cities, city)
}

btnSear.addEventListener('click', (e) => {
    foo.scrollIntoView({
        behavior: 'smooth'
    })
    e.preventDefault()
    inputCity()
})




