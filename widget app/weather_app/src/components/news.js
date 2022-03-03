import React, { useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import "./css/style.css";

const News = () => {
  const [data, setData] = useState([]);
    const getNews = () => {
      axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=c1e15aedb412422db56d4d52bd958822')
        .then((res) => {
            setData(res.data.articles);

        })
    }

  return (
    <>
      {/* <div className='container my-3'>  */}
       
                    <button style={{backgroundColor:"red"}} onClick={getNews}>
                        
        Get News-Click here!!
      </button>
      {/* </div> */}
       <div className="container">
        <div className="row mx-3" >
            {
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
                </div>
    </>
  )
}
export default News;