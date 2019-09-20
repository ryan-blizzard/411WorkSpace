import React, { Component } from 'react';
class News extends Component {
    state = { 
        search: '',
        articles: []
    }
    
    handleInput = (e) => {
        this.setState({search: e.target.value})
    }

    handleSubimt = (e) => {
        e.preventDefault()
        fetch(`http://hn.algolia.com/api/v1/search?query=${this.state.search}`)
        .then(res => res.json())
        .then(news => {
            this.setState({ search: '', articles: news.hits})
        })
    }
    
    
    render() { 
        console.log(this.state.articles)
        return ( 

            <div>
                <h1>Fake NEWS</h1>
            <form onSubmit={this.handleSubimt}>
                <label x='search'>Search: </label>
                <input 
                id='search'
                value = {this.state.search}
                onChange={this.handleInput}
                />
                <button type='submit'>Hamburders</button>
            </form>
            <div >
                {this.state.articles.map((a,i) =>{
                    return(
                        <div key={i} className='info'>
                        
                    <p >Title: {a.title}</p>
                    <p> Author: {a.author}</p>
                    <a target='_blank' href={a.url}>Read More</a>
                    <p>Relevancy score: {a.relevancy_score}</p>
                    </div>
                    )
                }
                    )}
            </div>

            </div>
        );
    }
}
 
export default News;