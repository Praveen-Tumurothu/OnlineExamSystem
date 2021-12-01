import AdminAppBar from "./AdminNavbar";
import React from "react";
// import "./CSS/Box.css";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";

const Results = () => {
  const cardInfo = [
    {
      image:
        "data:image/jpeg;base64,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",
      title: "getresults",
      text: "Can check the results by studentid",
      link: "/getresults",
    },

    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg3l5VvVJY406cjSbGS9byFY-Eh3u_ftCscMzEKBiHD7tTUoXGoHXO_3275Se6RBgam6Q&usqp=CAU",
      title: "results by batch name",
      text: "use batch name to find the results",
      link: "/Findallresultsbybatchname",
    },
    {
      image:
        "https://english.cdn.zeenews.com/sites/default/files/2020/06/09/865758-result-use.png",
      title: "find results by enrollment id",
      text: "can find results by using enrollment id",
      link: "/findresultsbyenrollmentid",
    },
  ];

  const renderCard = (card, index) => {
    return (
      <Box m={2} pt={3}>
        <Link to={card.link} style={{ textDecoration: "none", color: "black" }}>
          <Card style={{ width: "15rem" }} key={index} className="box">
            <Card.Img variant="top" src="holder.js/100px180" src={card.image} />
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>{card.text}</Card.Text>
            </Card.Body>
          </Card>
        </Link>
      </Box>
    );
  };

  return (
    <div className="grid">
      <AdminAppBar />
      {cardInfo.map(renderCard)}
    </div>
  );
};

//   const renderCard = (card, index) => {
//     return (

//       <Link to={card.link} style={{textDecoration:"none",color:"black"}} >

//       <Card style={{ width: "20rem" }} key={index} className="box" >
//         <Card.Img variant="top" src="holder.js/100px180" src={card.image}/>
//         <Card.Body>
//           <Card.Title>{card.title}</Card.Title>
//           <Card.Text>{card.text}</Card.Text>

//         </Card.Body>
//       </Card>

//       </Link>

//     );
//   };

//   return <div className="grid">{cardInfo.map(renderCard)}</div>;
// };

export default Results;
