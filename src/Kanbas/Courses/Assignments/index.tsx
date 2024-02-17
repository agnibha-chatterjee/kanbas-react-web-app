import { useParams } from "react-router";
import { FaEllipsisV, FaCheckCircle } from "react-icons/fa";
import { PiNotePencil } from "react-icons/pi";
import { assignments } from "../../Database";
import "./index.css";
import { Link } from "react-router-dom";

function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId,
  );

  return (
    <ul className="list-group wd-modules me-4 mt-4">
      <li className="list-group-items">
        <div className="module-header py-3">
          <span className="me-2 ms-1">
            <FaEllipsisV className="fs-20" />
            <FaEllipsisV className="fs-20" style={{ marginLeft: -13.5 }} />
          </span>
          <div className="d-inline-flex align-items-center justify-content-center">
            <button className="btn dropdown-toggle me-2" />
            <span className="fw-bold cursor-pointer">Assignments</span>
          </div>
          <span className="float-end pe-3">
            <span className="border-dark-subtle rounded-pill fs-12 border p-2">
              40% of Total
            </span>
            <i className="me-2 ms-1 cursor-pointer" />
            <FaEllipsisV className="fs-20 ms-2 cursor-pointer" />
          </span>
        </div>
        <ul className="list-group">
          {assignmentList.map((assignment) => {
            return (
              <li
                key={assignment._id}
                className="list-group-items assignment-li"
              >
                <div className="module-content fw-bold d-flex justify-content-center align-items-center ms-1 py-2">
                  <FaEllipsisV className="fs-20" />
                  <FaEllipsisV
                    className="fs-20"
                    style={{ marginLeft: -13.5 }}
                  />
                  <PiNotePencil className="text-success fs-24 mx-4" />
                  <span className="w-300 me-auto">
                    <Link
                      to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                      className="link-dark link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
                    >
                      {assignment.title}
                    </Link>
                    <br />
                    <Link
                      to="#"
                      className="fw-normal fs-12 link-danger link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
                    >
                      Multiple Modules
                    </Link>
                    <span className="fw-normal fs-16"> | </span>
                    <span className="fw-normal fs-12">
                      {!!assignment.notAvailableBefore && (
                        <span>
                          <span className="fw-bold">Not available until</span>{" "}
                          {assignment.notAvailableBefore}
                          <span className="fw-normal fs-16"> | </span>
                        </span>
                      )}
                      <span className="fw-bold"> Due</span> Sep 18, 2022 at
                      11.59pm
                      <span className="fw-normal fs-16"> | </span>
                      {assignment.totalPoints} pts
                    </span>
                  </span>
                  <span className="pe-3">
                    {assignment.published ? (
                      <FaCheckCircle className="fs-20 me-3 cursor-pointer" />
                    ) : (
                      <FaCheckCircle className="text-success fs-20 me-3 cursor-pointer" />
                    )}
                    <FaEllipsisV className="fa fa-ellipsis-v fs-20 ms-2 cursor-pointer" />
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </li>
    </ul>
  );
}

export default Assignments;
