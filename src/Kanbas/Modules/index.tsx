import { useState } from "react";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { modules } from "../Database";
import ModuleList from "./List";
import "./index.css";

function Modules() {
  const { courseId } = useParams();
  const modulesList = modules.filter((module) => module.course === courseId);
  const [selectedModule, setSelectedModule] = useState(modulesList[0]);

  return (
    <div>
      <ModuleList />
    </div>
  );
}

export default Modules;
