//pseudo code
const apiKey = "3452689cc9b0f58ce88b819c85bd8927";
const getLocation = async (city) => {
  //take location as argument
  //new function to check if city name has multiple words
  const location = cityName(city);

  //callback processData() to fetch JSON and get relevant info
  const report = await processData(location);
  //callback displayWeather() to... display the weather
  displayWeather(report);
  //callback setBackground to change the page's background image to fit
};
const cityName = (city) => {
  //seperate city into multiple words
  let newName = Array.from(city);
  let location = "";
  newName.forEach((item, i) => {
    if (item === " ") {
      location += "+";
    } else {
      location += item;
    }
  });

  return location;

  //spit back encapsulated string with + instead of spaces
};
//start here
const processData = async (location) => {
  //use await to look through JSON data for relevant info
  //return relevant data to be used in displayWeather
  try {
    let response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`,
      {
        mode: "cors",
      }
    );
    const data = await response.json();
    //in case of further error testing
    //console.log(data.weather);
    return data.weather[0].description; //return weather report as string
  } catch (error) {
    console.log(error);
  }
};
getLocation("New Orleans");
const displayWeather = (report) => {
  //add weather into #info to .display on the html doc
};
const setBackground = async () => {
  //fetch a gif from giphy
  //set as background image for the webpage
};
//OPTIONAL
const loadTime = () => {
  //use date for the moment the info was requested
  //use a second date to for the moment the info was retrieved
};
