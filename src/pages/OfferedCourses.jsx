import React from 'react';
import './OfferedCourses.css';

// Import images
import react from '../assets/react.png';
import advancedreact from '../assets/advancedreact.png';
import node from '../assets/node.png';
import frontend from '../assets/frontend.png';
import python from '../assets/python.png';
import Selenium from '../assets/Selenium.png';

const courses = [
  { id: 1, title: "React Basics", description: "Learn the fundamentals of React.", image: react },
  { id: 2, title: "Advanced React", description: "Dive deeper into React.", image: advancedreact },
  { id: 3, title: "Node.js for Beginners", description: "Start with the basics of Node.js.", image: node },
  { id: 4, title: "Frontend Development", description: "Learn HTML, CSS, and JavaScript.", image: frontend},
  { id: 5, title: "Python for Data Science", description: "Explore Python for data science projects.", image: python },
  { id: 6, title: "Selenium for Web Automation", description: "Learn Selenium for web automation.", image: Selenium },
];

function OfferedCourses() {
  return (
    <div className="offered-courses">
      <h2>Our Offered Courses</h2>
      <div className="course-list">
        {courses.map(course => (
          <div key={course.id} className="course-card">
            <img src={course.image} alt={course.title} className="course-image" />
            <div className="course-info">
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <button>View Course</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OfferedCourses;
