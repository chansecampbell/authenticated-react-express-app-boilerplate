'use strict';
import React from 'react';
import Header from "../components/header.jsx";
 
class Map extends React.Component {

  constructor(props) {
    super(props);
  }

  // buildProjects() {
  //   let projects = [];
  //   for (let i=0; i<this.projects.length; i++) {
  //     projects.push(
  //       <div className="col-sm-6 col-md-4">
  //         <div className="projects__card card card-1">
  //           <div className="projects__image"></div>
  //           <div className="projects__content">
  //             <h3>{ this.projects[i].name }</h3>
  //           </div>
  //         </div>
  //       </div>
  //     );
  //   }
  //   return projects;
  // }

  render() {
    return (
      <div>
        <Header/>
        <div className="container">
          Map here
        </div>
      </div>
    );
  }
}

export default Map;