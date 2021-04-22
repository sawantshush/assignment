import './App.css';
import React, { Component } from 'react'
import Posts from './Posts';

class App extends Component {
  constructor(){
    super();
    this.state={
      postPerFetch:1,
      posts:[]
    }
  }
  // to initally fetch the data
  componentDidMount(){
    this.fetchData(this.state.postPerFetch);
    window.addEventListener("scroll",this.handleScroll);
  }

  //to remove the eventlistner
  componentWillUnmount(){
    window.removeEventListener("scroll",this.handleScroll)
  }

  //fetch Data from the Api
  fetchData=async(postStart)=>{
      const URL=`https://jsonplaceholder.typicode.com/posts/?_start=${postStart}&_limit=10`;
      await fetch(URL).then(response=>response.json()).then(response=>{
        console.log("response",response)
        this.setState({
          posts:[...this.state.posts,...response]
        })
      })

  }

  // to check whether the scrollbar has reach the end of the screen
  handleScroll=()=>{
    if(window.innerHeight + document.documentElement.scrollTop
      === document.documentElement.offsetHeight){
        console.log("handleScroll")
      let newfetch=this.state.postPerFetch;
      newfetch+=10;
      this.setState({postPerFetch:newfetch})
      this.fetchData(this.state.postPerFetch);
    }
  }

  render() {
   
    return (
      <div>
        <h1>Assignment</h1>
       <Posts post={this.state.posts}/>
      </div>
    )
  }
}


export default App;
