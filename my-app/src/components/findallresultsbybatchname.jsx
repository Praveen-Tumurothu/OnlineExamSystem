import axios from 'axios';
import React, { Component } from 'react';
class Findallresultsbybatchname extends React.Component {
    state={
         findallresultsbybatchname:[],
        };
    componentDidMount(){
        let e=prompt("Batch Name")
         let x=prompt("enroll")
        axios
        .get(`http://localhost:8080/admin/findAllResultsByBatchName/{batchName}/{enrollId}?batchName=${e}&enrollId=${x}`)
        .then((res)=> {
        console.log(res.data);
        this.setState({ findallresultsbybatchname:res.data});
        console.log(this.state. findallresultsbybatchname);
    })
    .catch((error)=>console.log(error));
    }
    render() { 
        return <div style={{
            paddingLeft: '200px',
            paddingRight:'200px',
            boxSizing: 'content-box',
          }}>
            <h1>find All Results by Batchname</h1>
            <table style={{backgroundColor:"skyblue",paddingLeft:'50px',paddingRight:'50px'}} className="table">
          <thead>
            <tr style={{backgroundColor: "yellow"}}>
             
              <th>ExamRollNo</th>
              <th>DateOfExam</th>
              <th>Status</th>
              <th>MaximumScore</th>
              <th>ActualScore</th>
              <th>ExamDuration</th>
               <th>IsAnnouncedToStudent</th> 
            </tr>
          </thead>
          <tbody>
              {this.state.findallresultsbybatchname.map((row)=>(
                        <tr> 
                        <td>{row.examRollNo}</td>
                        <td>{row.dateOfExam}</td>
                        <td>{row.status.toString()}</td>
                        <td>{row.maximumScore}</td>
                        <td>{row.actualScore}</td>
                        <td>{row.examDuration}</td>
                         <td>{row.announcedToStudent.toString()}</td> 
                        </tr>
              ))}
          
          </tbody>
        </table>
</div>
    }
}
export default Findallresultsbybatchname;