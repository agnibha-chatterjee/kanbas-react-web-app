import { useState } from "react";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle } from "react-icons/fa";
import { HiChevronDown, HiChevronRight } from "react-icons/hi";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import "./index.css";

function ModuleList() {
  const { courseId } = useParams();
  const modulesList = modules.filter((module) => module.course === courseId);
  const [selectedModule, setSelectedModule] = useState(modulesList[0]);
  return (
    <div className="flex-fill">
      <div className="d-flex justify-content-end">
        <button className="btn btn-light m-1">Collapse All</button>
        <button className="btn btn-light m-1"> View Progress</button>
        <button className="btn btn-light dropdown-toggle m-1">
          <FaCheckCircle className="fa fa-check-circle-o text-success fs-20" />
          Publish All
        </button>
        <button className="btn btn-danger m-1"> + Module</button>
        <button className="btn btn-light m-1">
          <FaEllipsisV className="fa fa-ellipsis-v" />
        </button>
      </div>

      <ul className="list-group wd-modules">
        {modulesList.map((module) => (
          <li
            className="list-group-item cursor-pointer"
            onClick={() => setSelectedModule(module)}
            key={module._id}
          >
            <div className="module-header py-3">
              <span className="me-2 ms-1 cursor-pointer">
                <FaEllipsisV className="fs-20" />
              </span>
              <div className="d-inline-flex align-items-center justify-content-center">
                {selectedModule._id === module._id ? (
                  <HiChevronDown className="fs-18" />
                ) : (
                  <HiChevronRight className="fs-18" />
                )}
                <span className="fw-bold cursor-pointer">{module.name}</span>
              </div>
              <span className="float-end pe-2">
                <button className="dropdown-toggle me-3 bg-transparent">
                  <FaCheckCircle className="text-success fs-20" />
                </button>
                <FaEllipsisV
                  className="fa fa-plus fs-20 me-3 cursor-pointer"
                  style={{ color: "gray" }}
                />
                <FaEllipsisV className="fs-20 s-2 cursor-pointer" />
              </span>
            </div>

            {selectedModule._id === module._id && (
              <ul className="list-group">
                {module.lessons?.map((lesson) => (
                  <li className="list-group-items module-li" key={lesson._id}>
                    <div className="py-2">
                      <span className="me-2 ms-1">
                        <FaEllipsisV className="fs-20" />
                        <FaEllipsisV
                          className="fs-20"
                          style={{ marginLeft: -13.5 }}
                        />
                      </span>
                      <span className="module-content p-4">
                        <Link
                          to="#"
                          className="link-dark link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
                        >
                          {lesson.name}
                        </Link>
                        <span className="float-end pe-2">
                          <FaCheckCircle className="text-success fs-20 me-3 cursor-pointer" />
                          <FaEllipsisV className="fs-20 ms-2 cursor-pointer" />
                        </span>
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ModuleList;
