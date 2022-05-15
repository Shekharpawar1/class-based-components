import React, { Component } from "react";
import PropTypes from "prop-types";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
 
  articles = [];
  static defaultProps = {
    pageSize: 8,
  };
  //  static defaultProps={

  //  }
  //  static PropsTypes={

  //  }
  static PropsTypes = {
    pageSize: PropTypes.number,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: this.articles,
      page: 1,
      loading: false,
    };
    document.title = `Daily News-${this.props.category}`;
  }

  // url="https://newsdata.io/api/1/news?apikey=pub_7369fb89fc89bc45c701ad3c6501e6920805"
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=8`;
    console.log(url)
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    //

    this.setState({
      articles: parsedData.articles,
      totalarticles: parsedData.totalarticles,
      loading: false,
    });
    // this.setState(this.articles=parsedData.articles)
  }

 
  
  fetchMoreData= async (props)=>{
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=8`;
    console.log(url)
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      page: this.state.page + 1,
    
    });
     
  
  }

  render() {
    return (
      <>
        {this.loader && <Spinner />}
       
          <h2 className="text-center  mt-2 mb-8">
            {" "}
            DailyNews - Top {this.props.category} Headlines{" "}
          </h2>
         
       
            <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalarticles}>
              {this.state.articles.map((element) => {
                  return (
                    <div className="container">
                      <div className="row">
                      <div className="col-md-8" key={element.url}>
                      <NewsItem
                        title={element.title}
                      
                        description={element.description}
                        imageUrl={element.urlToImage}
                        newsUrl={element.url}
                        author={element.author}
                        source={element.source["name"]}
                        published={element.publishedAt}
                      />
                    </div>

                      </div>
                       
                    </div>
                   
                  );
                })}
                </InfiniteScroll>
          
          
        
      </>
    );
  }
}

export default News;
