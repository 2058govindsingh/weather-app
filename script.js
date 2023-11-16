const button = document.getElementById('search-button')
const input = document.getElementById('city-input')

const cityName = document.getElementById('city-name');
const cityTime = document.getElementById('city-time');
const cityTemp = document.getElementById('city-temp');

async function getData(city) {
  city = String(city)
  city = city.toLowerCase();
  const serializedItem = await localStorage.getItem(city);
  if(serializedItem != null)
  {
    console.log("Found in Local Storage");
    return await JSON.parse(serializedItem);
  }
  const promise = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=afe6067841744e30bf9123743231311&q=${city}&aqi=yes`
  );
  const result = await promise.json();
  localStorage.setItem(city, JSON.stringify(result))
  return result;
}

button.addEventListener('click', async () => {
  const city = input.value;
  const data = await getData(city);
  console.log(data);
  cityName.innerText = `${data.location.name} ${data.location.region} - ${data.location.country}`;
  cityTime.innerText = data.location.localtime;
  cityTemp.innerText = data.current.temp_c;
})

