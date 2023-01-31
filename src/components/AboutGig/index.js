import React from 'react';
import styles from "./AboutGig.module.scss";

const AboutGig = () => {
  const items = [
    {
      title: "Lesson purpose",
      content: "Website development"
    },
    {
      title: "Student age",
      content: "Teen (13–17), Adult (18–65), Senior (65+)"
    },
    {
      title: "Development technology",
      content: "HTML, CSS, Bootstrap, JavaScript, React, Node.js, NoSQL"
    },
  ]
  return (
    <div className={styles.aboutGig}>
      <div className={styles.content}>
        <h2>About This Gig</h2>
        <h3>
          <u>Top Rate Seller width all positive review.</u>
        </h3>
        <p>Hi there,</p>
        <p>I'm a professional web developer having vast experience in working with React Js, Next Js, Node, Express, and MongoDB.</p>
        <h4>Things you can learn:</h4>
        <h4>The Basics:</h4>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
        </ul>
        <h4>Advance Stuff:</h4>
        <ul>
          <li>React Js</li>
          <li>Next Js</li>
          <li>Redux</li>
          <li>Material-UI</li>
          <li>Node Js</li>
          <li>Express</li>
          <li>MongoDB / Mongoose</li>
        </ul>
        <h4>After learning, You will be able to:</h4>
        <ul>
          <li>Perform CRUD operations on the above-mentioned technologies.</li>
          <li>Develop responsive and user-friendly websites.</li>
          <li>Convert designs into pixel-perfect websites and apps.</li>
          <li>Develop Single Page Applications using React Js.</li>
          <li>Develop Static and Server-Rendered Apps using Next Js.</li>
          <li>Manage state using Context API and Redux.</li>
          <li>Develop REST APIs using Node and Express.</li>
          <li>Add Authentication / Authorization.</li>
          <li>Work with database for storing and retrieving data.</li>
          <li>Upload files like images and videos to the server.</li>
        </ul>
        <h4>Note: <span>Make sure to message me before placing the order to discuss all the requirements and we can have a perfect deal :)</span></h4>
        <p>Thanks</p>
        <h3>
          <u>Order Now and Become a Web Developer.</u>
        </h3>
      </div>
      <div className={styles.bottom}>
        {items.map( (item, index) => (
          <div key={index}>
            <h5>{item.title}</h5>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AboutGig