import React from "react";
import styles from "./AboutGig.module.scss";
import parse from "html-react-parser";

const AboutGig = (props) => {
  const items = [
    {
      title: "Lesson purpose",
      content: "Website development",
    },
    {
      title: "Student age",
      content: "Teen (13–17), Adult (18–65), Senior (65+)",
    },
    {
      title: "Development technology",
      content: "HTML, CSS, Bootstrap, JavaScript, React, Node.js, NoSQL",
    },
  ];
  return (
    <div className={styles.aboutGig}>
      <div className={styles.content}>
        <h2>About This Gig</h2>
        <h3>
          <u className={styles.text}>{props?.congViec?.moTaNgan}</u>
        </h3>
        <div className={styles.text}>{props?.congViec?.moTa}</div>
      </div>
      <div className={styles.bottom}>
        {items.map((item, index) => (
          <div key={index}>
            <h5>{item.title}</h5>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutGig;
