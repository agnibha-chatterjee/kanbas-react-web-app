import { useState } from 'react';
import { FaEllipsisV, FaCheckCircle } from 'react-icons/fa';
import { CiCircleCheck } from 'react-icons/ci';
import { HiChevronDown, HiChevronRight } from 'react-icons/hi';
import { GoPlus } from 'react-icons/go';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addModule, deleteModule, updateModule, setModule } from './reducer';
import { KanbasState } from '../../store';

import './index.css';

function ModuleList() {
  const { courseId } = useParams();
  const dispatch = useDispatch();

  const moduleList = useSelector(
    (state: KanbasState) => state.modulesReducer.modules
  );
  const module = useSelector(
    (state: KanbasState) => state.modulesReducer.module
  );

  const [selectedModule, setSelectedModule] = useState(module);

  return (
    <div className="flex-fill">
      <div className="d-flex justify-content-end border-2 border-bottom pb-3">
        <button className="btn btn-light m-1">Collapse All</button>
        <button className="btn btn-light m-1"> View Progress</button>
        <button className="btn btn-light dropdown-toggle m-1 d-flex justify-content-center align-items-center">
          <CiCircleCheck className="text-success me-2" fontSize="1.2em" />
          Publish All
        </button>
        <button className="btn btn-danger m-1"> + Module</button>
        <button className="btn btn-light m-1 d-flex justify-content-center align-items-center">
          <FaEllipsisV />
        </button>
      </div>

      <ul className="list-group wd-modules mt-5">
        <li className="list-group-item">
          <button
            onClick={() => dispatch(addModule({ ...module, course: courseId }))}
            className="btn btn-sm btn-success"
          >
            Add
          </button>
          <button onClick={() => dispatch(updateModule(module))}>Update</button>

          <input
            value={module.name}
            onChange={e =>
              dispatch(setModule({ ...module, name: e.target.value }))
            }
          />
          <textarea
            value={module.description}
            onChange={e =>
              dispatch(setModule({ ...module, description: e.target.value }))
            }
          />
        </li>

        {moduleList
          .filter(module => module.course === courseId)
          .map(module => (
            <li
              className="list-group-item cursor-pointer"
              // onClick={() => setSelectedModule(module)}
              key={module._id}
            >
              <button onClick={() => dispatch(setModule(module))}>Edit</button>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => {
                  dispatch(deleteModule(module._id));
                }}
              >
                Delete
              </button>
              <div className="module-header py-3 bg-light">
                <span className="me-2 ms-1 cursor-pointer">
                  <FaEllipsisV className="mb-1" fontSize="1.1em" />
                </span>
                <div
                  className="d-inline-flex align-items-center justify-content-center cursor-pointer"
                  onClick={() => setSelectedModule(module)}
                >
                  {selectedModule._id === module._id ? (
                    <HiChevronDown className="fs-18" />
                  ) : (
                    <HiChevronRight className="fs-18" />
                  )}
                  <span className="fw-bold cursor-pointer">{module.name}</span>
                </div>
                <span className="float-end pe-2">
                  <button className="dropdown-toggle me-3 bg-transparent d-inline-flex align-items-center justify-content-center">
                    <FaCheckCircle fontSize="1em" className="text-success" />
                  </button>
                  <GoPlus
                    color="gray"
                    className="cursor-pointer me-4 mb-1"
                    fontSize="1.3em"
                  />
                  <FaEllipsisV
                    className="mb-1 cursor-pointer"
                    fontSize="1.1em"
                  />
                </span>
              </div>

              {selectedModule._id === module._id && (
                <ul className="list-group">
                  {module.lessons?.map(lesson => (
                    <li className="list-group-items module-li" key={lesson._id}>
                      <div className="py-2">
                        <span className="me-2 ms-1">
                          <FaEllipsisV className="mb-1" />
                          <FaEllipsisV
                            className="mb-1"
                            style={{ marginLeft: -10.5 }}
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
                            <FaCheckCircle
                              fontSize="1em"
                              className="text-success me-3 cursor-pointer mb-1"
                            />
                            <FaEllipsisV className="ms-2 cursor-pointer mb-1" />
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
