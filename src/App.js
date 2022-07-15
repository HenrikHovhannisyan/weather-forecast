import React from "react";
import Form from "./components/Form";
import Info from "./components/inpo";
import Weather from "./components/Weather";

const API_KEY = "647da832546c5d35f3a576246c75e8b8";

class App extends React.Component {
  gettingWeather = async () => {
    const api_url = await fetch(
      `api.openweathermap.org/data/2.5/weather?q=Kiev,ua&appid=${API_KEY}&units=metric`
    );
    const data = await api_url.json();
    console.log(data);
  };

  render() {
    return (
      <>
        <Info />
        <Form />
        <Weather />
      </>
    );
  }
}

export default App;
