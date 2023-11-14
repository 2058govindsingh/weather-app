const button = document.getElementById('search-button')
const input = document.getElementById('city-input')

const cityName = document.getElementById('city-name');
const cityTime = document.getElementById('city-time');
const cityTemp = document.getElementById('city-temp');

async function getData(city) {
  const promise = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=afe6067841744e30bf9123743231311&q=${city}&aqi=yes`
  );
  return await promise.json();
}

button.addEventListener('click', async () => {
  const city = input.value;
  const data = await getData(city);
  console.log(data);
  cityName.innerText = `${data.location.name} ${data.location.region} - ${data.location.country}`;
  cityTime.innerText = data.location.localtime;
  cityTemp.innerText = data.current.temp_c;
})

window.addEventListener("load", () => {
    const value = 
})
