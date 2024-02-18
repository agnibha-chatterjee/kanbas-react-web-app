import { Link } from 'react-router-dom';
import {
  FaBan,
  FaCheckCircle,
  FaFileImport,
  FaBullhorn,
  FaBell,
  FaCalendarAlt
} from 'react-icons/fa';
import { FaCircle } from 'react-icons/fa6';
import { LiaSignOutAltSolid } from 'react-icons/lia';
import { PiCrosshair } from 'react-icons/pi';
import { VscGraph } from 'react-icons/vsc';
import { IoIosClose } from 'react-icons/io';
import './index.css';

function Status() {
  return (
    <div
      className="d-none d-lg-block me-2 ms-2 flex-grow-0 pe-4"
      style={{ maxWidth: 280 }}
    >
      <h4>Course Status</h4>
      <div className="btn-group mb-3 ms-1">
        <button
          type="button"
          className="btn btn-light rounded-0 d-flex justify-content-center align-items-center"
        >
          <FaBan className="me-2" />
          Unpublish
        </button>
        <button
          type="button"
          className="btn btn-success rounded-0 d-flex justify-content-center align-items-center"
        >
          <FaCheckCircle className="me-2" />
          Published
        </button>
      </div>
      <div className="container text-center">
        <div className="row">
          <button className="btn btn-light m-1 text-start d-flex justify-content-start align-items-center">
            <FaFileImport className="me-1" />
            Import Existing Content
          </button>
          <button className="btn btn-light m-1 text-start d-flex justify-content-start align-items-center">
            <LiaSignOutAltSolid className="me-1" />
            Import From Commons
          </button>
          <button className="btn btn-light m-1 text-start d-flex justify-content-start align-items-center">
            <PiCrosshair className="me-1" />
            Choose Home Page
          </button>
          <button className="btn btn-light m-1 text-start d-flex justify-content-start align-items-center">
            <VscGraph className="me-1" />
            View Course Stream
          </button>
          <button className="btn btn-light m-1 text-start d-flex justify-content-start align-items-center">
            <FaBullhorn className="me-1" />
            New Announcements
          </button>
          <button className="btn btn-light m-1 text-start d-flex justify-content-start align-items-center">
            <VscGraph className="me-1" />
            New Analytics
          </button>
          <button className="btn btn-light m-1 text-start d-flex justify-content-start align-items-center">
            <FaBell className="me-1" />
            View Course Notification
          </button>
        </div>
      </div>
      <div className="mt-3 px-2">
        <h6 className="fw-bold">To Do</h6>
        <hr />
        <div className="d-flex">
          <div className="todo-1">1</div>
          <div className="fs-12 me-auto ms-4" style={{ color: 'gray' }}>
            <Link
              to="#"
              className="link-danger link-underline link-underline-opacity-0 link-underline-opacity-100-hover fs-14"
            >
              Grade A1 - ENV + HTML
              <br />
            </Link>
            <div className="d-flex justify-content-evenly align-items-center">
              <span className="me-2">100 points</span>
              <FaCircle fontSize="0.5em" />
              <span className="ms-2">Sep 18 at 11:59 pm</span>
            </div>
          </div>
          <div>
            <IoIosClose
              className="cursor-pointer"
              fontSize="1.4em"
              color="gray"
              style={{ marginTop: -20 }}
            />
          </div>
        </div>
      </div>
      <div className="mt-4 px-2">
        <div className="d-flex justify-content-between">
          <h6 className="fw-bold">Coming Up</h6>
          <div>
            <FaCalendarAlt className="me-1" />
            <Link
              to="#"
              className="link-danger link-underline-opacity-0 link-underline-opacity-100-hover fs-12"
            >
              View Calendar
            </Link>
          </div>
        </div>
        <hr />
        <div className="d-flex mb-4">
          <FaCalendarAlt />
          <div className="fs-12 ms-4" style={{ color: 'gray' }}>
            <Link
              to="#"
              className="link-danger link-underline-opacity-0 link-underline-opacity-100-hover fs-14"
            >
              Lecture
              <br />
              <span style={{ color: 'gray' }}>CS5610.48102.99291</span>
              <br />
              <span style={{ color: 'gray' }}>Sep 11 at 6pm</span>
            </Link>
          </div>
        </div>
        <div className="d-flex my-2">
          <FaCalendarAlt />
          <div className="fs-12 ms-4" style={{ color: 'gray' }}>
            <Link
              to="#"
              className="link-danger link-underline-opacity-0 link-underline-opacity-100-hover fs-14"
            >
              Web Dev Lecture
              <br />
              <span style={{ color: 'gray' }}>CS5610.48102.99291</span>
              <br />
              <span style={{ color: 'gray' }}>Sep 11 at 6pm</span>
            </Link>
          </div>
        </div>
        <Link
          to="#"
          className="link-danger link-underline-opacity-0 link-underline-opacity-100-hover fs-14 d-block mt-4"
        >
          12 more in the next week...
        </Link>
      </div>
    </div>
  );
}

export default Status;
