import React from "react";
// import "./Box.css";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import AdminAppBar from "./AdminNavbar";

const ScheduleExam = () => {
  const cardInfo = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg3l5VvVJY406cjSbGS9byFY-Eh3u_ftCscMzEKBiHD7tTUoXGoHXO_3275Se6RBgam6Q&usqp=CAU",
      title: "ScheduleExamForStudent",

      link: "/admin/scheduleexamstudentform",
    },
    {
      image:
        "https://english.cdn.zeenews.com/sites/default/files/2020/06/09/865758-result-use.png",
      title: "ScheduleExamForBatch",

      link: "/admin/studentexambatchform",
    },
  ];

  const renderCard = (card, index) => {
    return (
      <>
        <Box m={2} pt={3}>
          <Link
            to={card.link}
            style={{ textDecoration: "none", color: "black" }}
          >
            <Card style={{ width: "19rem" }} key={index} className="box">
              <Card.Img
                variant="top"
                src="holder.js/100px180"
                src={card.image}
              />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.text}</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Box>
      </>
    );
  };

  return (
    <div>
      <AdminAppBar />
      <div className="grid">{cardInfo.map(renderCard)}</div>
    </div>
  );
};

export default ScheduleExam;
