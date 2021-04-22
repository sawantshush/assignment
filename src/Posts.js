import React, { Component } from 'react';
import "./Posts.css";

class Posts extends Component {

    render() {
        // console.log("post",this.props);
        return (
            <div>
            <ul>
                {
                    this.props.post.map(post=>{
                      return(  <li key={post.id} className="postsCard">
                           <h4>{post.title}</h4> 
                           <h6>{post.body}</h6>
                        </li>
                      )
                    })
                }
                </ul>
            </div>
        )
    }
}

export default Posts;
