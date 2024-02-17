import ModuleList from "../Modules/List";
import {
  FaBan,
  FaCheckCircle,
  FaFileImport,
  FaBullhorn,
  FaBell,
  FaCalendarAlt,
} from "react-icons/fa";
import { FaCircle } from "react-icons/fa6";
import { LiaSignOutAltSolid } from "react-icons/lia";
import { PiCrosshair } from "react-icons/pi";
import { VscGraph } from "react-icons/vsc";
import { IoIosClose } from "react-icons/io";
import "./index.css";

function Home() {
  return (
    <div className="d-flex justify-content-between pt-5">
      <ModuleList />
      <div
        className="d-none d-lg-block me-2 ms-2 flex-grow-0 pe-4"
        style={{ maxWidth: 280 }}
      >
        <h4>Course Status</h4>
        <div className="btn-group mb-3 ms-1">
          <button type="button" className="btn btn-light rounded-0">
            <FaBan />
            Unpublish
          </button>
          <button type="button" className="btn btn-success rounded-0">
            <FaCheckCircle />
            Published
          </button>
        </div>
        <div className="container text-center">
          <div className="row">
            <button className="btn btn-light m-1 text-start">
              <FaFileImport />
              Import Existing Content
            </button>
            <button className="btn btn-light m-1 text-start">
              <LiaSignOutAltSolid />
              Import From Commons
            </button>
            <button className="btn btn-light m-1 text-start">
              <PiCrosshair />
              Choose Home Page
            </button>
            <button className="btn btn-light m-1 text-start">
              <VscGraph />
              View Course Stream
            </button>
            <button className="btn btn-light m-1 text-start">
              <FaBullhorn />
              New Announcements
            </button>
            <button className="btn btn-light m-1 text-start">
              <VscGraph />
              New Analytics
            </button>
            <button className="btn btn-light m-1 text-start">
              <FaBell />
              View Course Notification
            </button>
          </div>
        </div>
        {/* To Do */}
        <div className="mt-3 px-2">
          <h6 className="fw-bold">To Do</h6>
          <hr />
          <div className="d-flex">
            <div className="todo-1">1</div>
            <div className="fs-12 me-auto ms-4" style={{ color: "gray" }}>
              <a
                href="#"
                className="link-danger link-underline link-underline-opacity-0 link-underline-opacity-100-hover fs-14"
              >
                Grade A1 - ENV + HTML
                <br />
              </a>
              <div className="d-inline-flex justify-content-evenly align-items-center w-100">
                <span className="me-2">100 points</span>
                <FaCircle fontSize="0.5em" />
                <span className="ms-2">Sep 18 at 11:59 pm</span>
              </div>
            </div>
            <IoIosClose
              className="pe-1"
              fontSize="1.5em"
              style={{ color: "gray" }}
            />
          </div>
        </div>
        <div className="mt-4 px-2">
          <div className="d-flex justify-content-between">
            <h6 className="fw-bold">Coming Up</h6>
            <div>
              <FaCalendarAlt />
              <a
                href="#"
                className="link-danger link-underline-opacity-0 link-underline-opacity-100-hover fs-12"
              >
                View Calendar
              </a>
            </div>
          </div>
          <hr />
          <div className="d-flex mb-4">
            <FaCalendarAlt />
            <div className="fs-12 ms-4" style={{ color: "gray" }}>
              <a
                href="#"
                className="link-danger link-underline-opacity-0 link-underline-opacity-100-hover fs-14"
              >
                Lecture
                <br />
                <span style={{ color: "gray" }}>CS5610.48102.99291</span>
                <br />
                <span style={{ color: "gray" }}>Sep 11 at 6pm</span>
              </a>
            </div>
          </div>
          <div className="d-flex my-2">
            <FaCalendarAlt />
            <div className="fs-12 ms-4" style={{ color: "gray" }}>
              <a
                href="#"
                className="link-danger link-underline-opacity-0 link-underline-opacity-100-hover fs-14"
              >
                Web Dev Lecture
                <br />
                <span style={{ color: "gray" }}>CS5610.48102.99291</span>
                <br />
                <span style={{ color: "gray" }}>Sep 11 at 6pm</span>
              </a>
            </div>
          </div>
          <div className="d-flex my-4">
            <FaCalendarAlt />
            <div className="fs-12 ms-4" style={{ color: "gray" }}>
              <a
                href="#"
                className="link-danger link-underline-opacity-0 link-underline-opacity-100-hover fs-14"
              >
                CS4550 Lecture
                <br />
                <span style={{ color: "gray" }}>CS5610.48102.99291</span>
                <br />
                <span style={{ color: "gray" }}>Sep 11 at 6pm</span>
              </a>
            </div>
          </div>
          <a
            href="#"
            className="link-danger link-underline-opacity-0 link-underline-opacity-100-hover fs-14"
          >
            12 more in the next week...
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
