import React from "react";
import { Link } from "react-router-dom";
import { courses } from "../Database";
import { PiNotePencil } from "react-icons/pi";
import "./index.css";

function Dashboard() {
  return (
    <div className="p-4">
      <h1>Dashboard</h1> <hr />
      <h2>Published Courses ({courses.length})</h2> <hr />
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div key={course._id} className="col" style={{ width: 300 }}>
              <div className="card">
                <div className="d-inline-block position-absolute position-ellipsis fs-24 text-light">
                  <i className="fa fa-ellipsis-v" />
                </div>
                <Link to={`/Kanbas/Courses/${course._id}/Home`}>
                  <img
                    src={`/images/${course.image}`}
                    className="card-img-top"
                    style={{ height: 150 }}
                    alt={course.name + " image"}
                  />
                </Link>
                <div className="card-body">
                  <Link
                    className="link-primary link-underline link-underline-opacity-0 link-underline-opacity-100-hover fw-bold fs-14"
                    to={`/Kanbas/Courses/${course._id}/Home`}
                  >
                    {course.name}
                    <p className="card-text fs-15 link-dark">
                      {course.cardText}
                      <br />
                      <span className="fs-12">{course.cardSubText}</span>
                    </p>
                  </Link>
                  <Link
                    className="text-decoration-none text-dark"
                    to={`/Kanbas/Courses/${course._id}/Home`}
                  >
                    <PiNotePencil fontSize="1.5em" className="mt-3" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
