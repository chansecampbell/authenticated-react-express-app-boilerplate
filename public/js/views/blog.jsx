'use strict';
import React from 'react';
import Header from "../components/header.jsx";
 
class Blog extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="blog">
        <Header/>
        <div className="container">
          <div className="col-sm-9">
            <div className="blog__post card card-2">
                <h3>Main Body</h3>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="blog__recent card card-2">
                <h3>Recent Posts</h3>
                <ul>
                  <li>
                      <h3><a href="/">Post title</a></h3>
                      <div>Post date</div>
                  </li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;