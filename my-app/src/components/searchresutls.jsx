import axios from 'axios';
import React, { Component } from 'react';
import { style } from '@mui/system';
class Searchresutls extends React.Component {
    state={
        searchresults:[],
    };
    componentDidMount(){
        let e=prompt("Let me the know Course Name?",":please enter")
        let x=prompt("EnrollmentId:")
        axios
        .get(`http://localhost:8080/exam/searchResults/${e}/${x}`)
        .then((response)=> {
        console.log(response.data);
        this.setState({searchresults:response.data});
        console.log(this.state.searchresults);
    })
    .catch((error)=>console.log(error));
    }
    render() { 
        return <div style={{
            paddingTop: '50px',
            boxSizing: 'content-box',
          }}>
            <h1>searchResults</h1>
            <table className="table">
          <thead>
            <tr>
                <th>Batch Name</th>
              <th>ExamRollNo</th>
              <th>DateOfExam</th>
              <th>Status</th>
              <th>MaximumScore</th>
              <th>ActualScore</th>
              <th>ExamDuration</th>
              {/* <th>IsAnnouncedToStudent</th> */}
            </tr>
          </thead>
        
          <tbody>
          
           <tr> 
           <td>{this.state.searchresults.examRollNo}</td>
           <td>{this.state.searchresults.dateOfExam}</td>
           <td>{this.state.searchresults.status}</td>
           <td>{this.state.searchresults.maximumScore}</td>
           <td>{this.state.searchresults.actualScore}</td>
           <td>{this.state.searchresults.examDuration}</td>
           {/* <td>{this.state.searchresults.announcedToStudent}</td> */}
           </tr>
          </tbody>
        </table>
</div>
        
    }
}
 
export default  Searchresutls ;