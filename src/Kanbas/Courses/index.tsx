import { Navigate, Route, Routes, useMatch, useParams } from "react-router";
import { courses } from "../Database";
import CourseNavigation from "./Navigation";
import { HiMiniBars3 } from "react-icons/hi2";
import { PiEyeglasses } from "react-icons/pi";
import "./index.css";
import Modules from "../Modules";

function Courses() {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  const href = window.location.href;
  const splitHref = href.split("/");
  const breadcrumbText =
    splitHref[splitHref.length - 1] === "Home"
      ? "Modules"
      : splitHref[splitHref.length - 1];

  return (
    <>
      <div className="d-none d-md-block mx-3 p-2">
        <div className="d-flex align-items-center custom-breadcrumb">
          <HiMiniBars3 color="#DC4C64" cursor="pointer" fontSize="1.5em" />
          <ol
            className="breadcrumb align-self-center pt-3"
            style={{ fontSize: 20 }}
          >
            <li className="breadcrumb-item">
              <a href="#" className="link-danger">
                {course?.name}
              </a>
            </li>
            <li className="breadcrumb-item">{breadcrumbText}</li>
          </ol>
          <button className="btn btn-light ms-auto">
            <PiEyeglasses />
            Student View
          </button>
        </div>
      </div>
      <CourseNavigation />
      <div>
        <div
          className="position-fixed bottom-0 end-0 overflow-y-scroll"
          style={{ left: "320px", top: "50px" }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<h1>Home</h1>} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Assignments" element={<h1>Assignments</h1>} />
            <Route
              path="Assignments/:assignmentId"
              element={<h1>Assignment Editor</h1>}
            />
            <Route path="Grades" element={<h1>Grades</h1>} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default Courses;
