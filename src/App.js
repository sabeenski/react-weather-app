import React, { Component } from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = "1f7e74434dacd114733c30d29635f23f"

class App extends Component {


state = {
  temperature: undefined,
  city: undefined,
  country: undefined,
  humidity: undefined,
  description: undefined,
  error: undefined
}


getWeather = async(e) => {
  e.preventDefault()
  const city = e.target.city.value
  const country = e.target.country.value
  const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=metric`)
  console.log(city)
  const data = await api_call.json()
  if(data.message) alert ("Cannot find the city!")
  if (city && country && !data.message){
    this.setState({
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error:''
    })
    console.log(this.state.description)
  } else {
    this.setState({
      error: 'Please enter the name of the city and country.'
    })
  }
}


  render() { 
    return ( 
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="title-container">
                  <Titles />
                </div>
                <div className="form-container">
                  <Form getWeather={this.getWeather}/>
                  <Weather 
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}   
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
     );
  }l
}
 
export default App;

        