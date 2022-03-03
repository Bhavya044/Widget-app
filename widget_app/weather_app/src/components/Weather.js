import React, {useEffect, useState} from "react";
import "./css/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Time from './Time.js';
import Forecast from './Forecast.js';
import Pressure from './Pressure.js';
import Carousel from 'react-bootstrap/Carousel';
// import Button from '@mui/material/Button';
import axios from 'axios';


const Weather = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Chandigarh");
    const [loading, setLoading] = useState(false);
    // const [tempo,settempo] = useState(null);
    // const [data, setData] = useState([]);
    let res = "";
    useEffect(() => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=110f2b9ec97d037c60903a1418abba54`
            const response = await fetch(url);
            const resJson = await response.json();
            res = response;
            setCity(resJson);
        };

        fetchApi().then(() => setLoading(true))
    }, [search]);
    // const getNews = () => {
    //     axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=c1e15aedb412422db56d4d52bd958822').then((res) => {
    //         setData(res.data.articles);

    //     })
    // }

    function sun(pro) {
        const hours = new Date(city.sys[pro] * 1000).getHours();
        const minutes = new Date(city.sys[pro] * 1000).getMinutes();
        let str = hours + ":";

        if (minutes < 10 && minutes > 0) {
            str += "0" + minutes;
        } else if (minutes >= 10) {
            str += minutes;
        } else {
            str += "00";
        }
        return str;
    }
    function searchingHandler(event) {
        setLoading(false);
        setSearch(event.target.value);
        res = "";
    }

    // return (<div className="body">
    //     <div className="box">
            return (
            <>
            <div className="inputData">
                <input type="search" className="inputField"
                    onBlur={searchingHandler}></input>

            </div>
            <br></br>
            <div className="time"
                style={
                    {
                        textAlign: "center",
                        marginTop: "4rem"
                    }
            }>
                <Time/>
            </div>

            <br></br>

            {
            !city ? (<p className="errorMsg">
                No Data Found
            </p>) : (<div>
                <div>
                    <h6 className="location"> {search} </h6>
                    <h1 className="temp"> {
                        (loading) && city.main.temp
                    }°C
                    </h1>
                    <h3 className="tempmin_max">
                        Min :{
                        (loading === true) && city.main.temp_min
                    }°C | Max :{
                        (loading === true) && city.main.temp_max
                    }°C  | Feels like:{
                        (loading === true) && city.main.feels_like
                    }°C</h3>
                    <div>

                        <br></br>
                        <h3 style={
                            {
                                textAlign: "center",
                                fontSize: "34px",
                                textTransform: "capitalize",
                                fontWeight: "initial"
                            }
                        }> {
                            (loading) ? city.weather.map((desc) => {
                                return desc.description
                            }) : null
                        }
                            <i class="fab fa-skyatlas"></i>
                        </h3>
                        <br></br>
                        <br></br>

                        <Carousel>
                            <Carousel.Item interval={20000}>
                                <h2 style={
                                    {
                                        textAlign: "center",
                                        fontSize: "25px",
                                        fontWeight: "bold"
                                    }
                                }>Sunrise: {
                                    (loading) ? sun('sunrise') : null
                                }
                                    <i class="fas fa-sun"
                                        style={
                                            {color: "yellow"}
                                    }></i>
                                </h2>
                                <h2 style={
                                    {
                                        textAlign: "center",
                                        fontSize: "25px",
                                        fontWeight: "bold"
                                    }
                                }>
                                    Sunset: {
                                    (loading) ? sun('sunset') : null
                                }
                                    <i class="fas fa-cloud-sun"></i>
                                </h2>
                                <br></br>
                                <br></br>
                            </Carousel.Item>
                            <Carousel.Item interval={20000}>

                                <h2 style={
                                    {
                                        textAlign: "center",
                                        fontSize: "25px",
                                        fontWeight: "bold"
                                    }
                                }>Humidity
                                    <i class="fas fa-thermometer-half"
                                        style={
                                            {color: "black"}
                                    }></i>
                                </h2>
                                <h2 style={
                                    {
                                        textAlign: "center",
                                        fontSize: "25px",
                                        fontWeight: "bold"
                                    }
                                }>
                                    <Forecast humidity={
                                        city.main.humidity
                                    }/>
                                </h2>
                                <br></br>
                                <br></br>

                            </Carousel.Item>
                            <Carousel.Item interval={20000}>
                                <h2 style={
                                    {
                                        textAlign: "center",
                                        fontSize: "25px",
                                        fontWeight: "bold"
                                    }
                                }>Pressure
                                    <i class="fab fa-cloudscale"></i>
                                </h2>
                                <h2 style={
                                    {
                                        textAlign: "center",
                                        fontSize: "25px",
                                        fontWeight: "bold"
                                    }
                                }>
                                    <Pressure pressure={
                                        city.main.pressure
                                    }/>
                                </h2>
                                <br></br>
                                <br></br>
                            </Carousel.Item>
                            <Carousel.Item interval={20000}>
                                <h2 style={
                                    {
                                        textAlign: "center",
                                        fontSize: "25px",
                                        fontWeight: "bold"
                                    }
                                }>Wind Speed
                                    <i class="fas fa-wind"></i>
                                </h2>
                                <h2 style={
                                    {
                                        textAlign: "center",
                                        fontSize: "25px",
                                        fontWeight: "bold"
                                    }
                                }> {
                                    (loading) ? city.wind.speed : null
                                }
                                    Km/h</h2>
                                <br></br>
                                <br></br>
                            </Carousel.Item>

                        </Carousel>
                    </div>
                    <br/>
                </div>
                <div className="wave -one"></div>
                <div className="wave -two"></div>
                <div className="wave -three"></div>
                {/* <hr style={
                    {border: "2px solid black"}
                }></hr> */}
                 {/* <div className='container my-3'>
                    <Button variant="contained" style={
                            {cursor: "pointer"}
                        }
                        onClick={getNews}>
                        Get News! :)
                    </Button> */}
                {/* </div>  */}
                {/* <div className="container">
                            <div className="row mx-3" > {
                                !data?<p>Fetching News..</p>:
                        data.map((value) => {
                            return (<div className="col-4">
                                <div className="card" 
                                    style={
                                        {
                                            width: "22rem",
                                            minHeight: "32rem",
                                            border: "2px solid black",
                                            marginBottom:"1rem"
                                        }
                                }>
                                    <img style={ {height:"12rem"}}src={value.urlToImage} className="card-img-top" alt="../"/>                                    <div class="card-header"> {
                                        value.source.name
                                    } </div>
                                    <div className="card-header" id="header2"> {
                                        value.title
                                    } </div>
                                    <div class="card-body">
                                        <blockquote class="blockquote mb-0">
                                            <p> {
                                                value.description
                                            }</p>
                                            <footer class="blockquote-footer">
                                                <cite title="Source Title"> {
                                                    value.author
                                                }</cite>
                                                </footer>
                                            <footer class="blockquote-footer">
                                                {value.publishedAt}
                                                </footer>
                                            
                                        </blockquote>
                                    </div>
                                </div>
                            </div>)
                        })
                    } </div>
                </div> */}

            </div>)
        } 
    </>
            )}
export default Weather;
