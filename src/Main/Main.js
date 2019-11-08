import React, {Component} from 'react';
import './Main.css';

// const key = 'jXqfArLCGptpT6p8rU9uumrBUIwkZxt2';

// const API_KEY = 'jXqfArLCGptpT6p8rU9uumrBUIwkZxt2';


class Main extends Component{
    state={
        current: '',
        hasErrors: false,
        name : ''
    }

    // async handleSubmit (cityName) {
    //     let city = cityName;
    //     const key = 'jXqfArLCGptpT6p8rU9uumrBUIwkZxt2';
    //     const url = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    //     const query = `?apikey=${key}&q=${city}`;
        
    //     const response = await fetch(url + query);
    //     const data = await response.json();

    //     this.setState(
    //         {name : data[0]
            
    //         })
    //     return data[0];
    // }

    //     getWeather = async (locationId) => {
        
    //     const key = 'jXqfArLCGptpT6p8rU9uumrBUIwkZxt2';
    //     const url = 'http://dataservice.accuweather.com/currentconditions/v1/';
    //     const query = `${locationId}?apikey=${key}`;
    
    //     const response = await fetch(url + query);
    //     const data = await response.json();
    
    //     return data[0];
    // };

    render(){
    return(
        <div className='Main'>
        <form onSubmit={this.handleSubmit}>
            <label>
          Search city: 
          <input type="text"/>
            </label>
            <input type="submit" value="Submit" />
        </form>
      <div>
        {this.state.name}
      </div>
        </div>
        
    )
    }
}

export default Main;