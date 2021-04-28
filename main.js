//pseudo code
const weatherKey = "3452689cc9b0f58ce88b819c85bd8927";
const gifKey = "i3kTKKLGsAgKnO0B7ERRTRGNllXj45s2";
const getLocation = async (city) => {
  //take location as argument
  //callback processData() to fetch JSON and get relevant info
  const info = document.getElementById("info");
  if (info.hasChildNodes()) {
    info.removeChild(info.firstChild);
  }
  const report = await processData(city);
  //callback displayWeather() to... display the weather
  displayWeather(report);
  setBackground(report);
  //callback setBackground to change the page's background image to fit
};
//start here
const processData = async (location) => {
  //use await to look through JSON data for relevant info
  //return relevant data to be used in displayWeather
  try {
    let response = await fetch(
      `https://cors-aywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${weatherKey}`,
      {
        mode: "cors",
      }
    );
    const data = await response.json();
    //in case of further error testing
    //console.log(data.weather[0].description);
    return data.weather[0].description; //return weather report as string
  } catch (error) {
    console.log(error);
  }
};
const displayWeather = (report) => {
  //add weather into #info to .display on the html doc
  const info = document.getElementById("info");
  const weather = document.createElement("p");
  const text = document.createTextNode(report);
  weather.appendChild(text);
  info.appendChild(weather);
};
const setBackground = async (report) => {
  //fetch a gif from giphy
  try {
    let response = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${gifKey}&q=${report}&limit=25&offset=0&rating=g&lang=en`,
      { mode: "cors" }
    );
    const data = await response.json();
    let body = document.querySelector("#body");
    let bg = data.data[0].images.downsized.url;
    body.style.cssText = `background-image:url(${bg}); background-repeat:no-repeat; background-size:cover`;
  } catch (error) {
    alert(error);
  }
  //set as background image for the webpage
};
//OPTIONAL
const loadTime = () => {
  //use date for the moment the info was requested
  //use a second date to for the moment the info was retrieved
};
