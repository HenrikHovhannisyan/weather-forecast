import React from "react";
import Form from "./components/Form";
import Info from "./components/inpo";
import Weather from "./components/Weather";

const API_KEY = "647da832546c5d35f3a576246c75e8b8";

class App extends React.Component {
  gettingWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_url = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    ).then((data) => data.json());
    console.log(api_url);
  };

  render() {
    return (
      <>
        <Info />
        <Form weatherMethod={this.gettingWeather} />
        <Weather />
      </>
    );
  }
}

export default App;
