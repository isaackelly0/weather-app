//pseudo code
let apiKey = "3452689cc9b0f58ce88b819c85bd8927";
const getLocation = async () => {
  //take location as argument
  //callback processData() to fetch JSON and get relevant info
  //start with an await function that will then console log the info
  //callback displayWeather() to... display the weather
  //callback setBackground to change the page's background image to fit
};
//start here
const processData = async () => {
  //use await to look through JSON data for relevant info
  //return relevant data to be used in displayWeather
  try {
    let data = await fetch(
      "api.openweathermap.org/data/2.5/weather?q=chicago&appid=" + apiKey,
      { mode: "cors" }
    );
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
processData();
const displayWeather = async () => {
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
