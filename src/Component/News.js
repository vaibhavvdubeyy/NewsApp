import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {
    
    
    
    constructor(){
        super();
        this.state = {
            articles:[] ,
            loading: false,
            page:1
        }
        
      }
    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=bb0bb9348c044296bd56a1514427182d";
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({articles: parsedData.articles});

    }  
     handleNextClick= async()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=bb0bb9348c044296bd56a1514427182d&page=${this.state.page +1}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        


        this.setState({
            page : this.state.page +1,
            articles: parsedData.articles
        })

    }
    handlePrevClick= async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=bb0bb9348c044296bd56a1514427182d&page=${this.state.page -1}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        


        this.setState({
            page : this.state.page -1,
            articles: parsedData.articles
        })


    }
  render() {
    return (
      <div class="container my-3">
         <h2><center>News Monkey - Top Headlines</center></h2>
         <hr/>
         <div className = "row my-3">
            {this.state.articles.map((element)=>{
               return <div className = "col-md-4 " key={element.url}>
                <NewsItem title = {element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
            </div> 
            })}
           
            
        </div>
        <div class ="container d-flex justify-content-between" >
        <button disabled ={this.state.page<=1} type="button" class="btn btn-dark mx-3"onClick={this.handlePrevClick}>Previous</button>
        <button  type="button" class="btn btn-dark mx-3" onClick={this.handleNextClick}>Next</button>  
        </div>
        
      </div>
    );
  }
}

export default News;
