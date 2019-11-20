import React, {Component} from 'react';
import './apicall.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
        background: 'white',
        // border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'black',
        height: 68,
        padding: '0 30px',
        width: 200,
        border: '1px solid black'
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
  }));
  
    function ContainedButtons() {
    const classes = useStyles();
  
    return (
        <div>
      <Button type='submit' 
            variant="contained" 
            className={classes.button}
            >
        Check weather
      </Button>
      </div>
    );}

class Apicall extends Component {

        state = {
            visible: false,
            city : 'Local weather App',
            weather : '',
            temperature : '',
            icon: '',
            isDayTime: '',
            notFound: '',
            valueAttr: '',
            backgroundImage: `url(${require('../img/background.png')})`,
        }

        handleChange = (e) => {
            this.setState({valueAttr: e.target.value});

        }

        handleSubmit = (e) => {
            e.preventDefault();
            const city = this.state.valueAttr;
            console.log(city)
            this.updateCity(city)
            this.setState({valueAttr: ''})
          }

        getCity = async (cityName) => {
        let city = cityName;
        const key = 'jXqfArLCGptpT6p8rU9uumrBUIwkZxt2';
        const url = 'https://dataservice.accuweather.com/locations/v1/cities/search';
        const query = `?apikey=${key}&q=${city}`;
        
        const response = await fetch(url + query);
        const data = await response.json();

        return data[0];
    }
        getWeather = async (locationId) => {
        
        const key = 'jXqfArLCGptpT6p8rU9uumrBUIwkZxt2';
        const url = 'https://dataservice.accuweather.com/currentconditions/v1/';
        const query = `${locationId}?apikey=${key}`;
    
        const response = await fetch(url + query);
        const data = await response.json();
    
        return data[0];
    }
        updateCity = async (city) => {

        this.setState({
            notFound: ''
        })

        const cityDetails = await this.getCity(city);
        console.log(typeof cityDetails)

        if (typeof cityDetails === 'undefined') {
            console.log(cityDetails)
            this.setState({
                notFound: 'City not found',
                city : '',
                weather : '',
                temperature : '',
                icon: '',
                visible: '',
            })
            return console.log('not a city');
        } else {
        const weather = await this.getWeather(cityDetails.Key)
    
        console.log(cityDetails, weather);
        console.log(cityDetails.LocalObservationDateTime)

        this.setState({
            visible : true,
            city : cityDetails.EnglishName,
            weather : weather.WeatherText,
            temperature : weather.Temperature.Metric.Value+'°C',
            icon: require( `../img/icons/${weather.WeatherIcon}.png` ),
            isDayTime: weather.IsDayTime,
        }
        )
        return {cityDetails, weather}
    } 
    }

    render(){
        return (
            <div className='container' style ={{
                backgroundImage: this.state.backgroundImage,
                height: 'auto',width:'100%', 
            }}>
            <div className='weather-container' >
                <div className='city'>
                {this.state.notFound === '' ? this.state.city : this.state.notFound}
                </div>
                <div className='icon'>
                    {this.state.notFound === '' ? <img src={this.state.icon} alt=''/> : ''} 
                </div>
                    <div className='weather'>
                    {this.state.weather}
                    </div>
                    <div className='temperature'>
                    {this.state.temperature}
                    </div>
            </div>
            <div className='input-box'>
            <form onSubmit={this.handleSubmit} 
            onChange={this.handleChange} 
            value={this.state.valueAttr} >
            <div>
            </div>
            {/* <form onSubmit={this.handleSubmit}> */}
            <input type="text" placeholder='Enter city' value={this.state.valueAttr} onChange={this.handleChange} />
           
            <div>
            <ContainedButtons />
            </div>
            </form>
            </div>
            </div>
        )
}}

export default Apicall;
