import KanbasNavigation from './Navigation';
import { Routes, Route, Navigate } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';
import Dashboard from './Dashboard';
import Courses from './Courses';
import { useState } from 'react';
import db from './Database';
import { Course } from '../types';

function Kanbas() {
  const [courses, setCourses] = useState<Course[]>(db.courses);
  const [course, setCourse] = useState({
    _id: '1234',
    name: 'New Course',
    number: 'New Number',
    startDate: '2023-09-10',
    endDate: '2023-12-15',
    image: 'default.png'
  });

  const addNewCourse = () => {
    const totalNoOfCourses = courses.length;
    const commonText = `2042${(totalNoOfCourses + 1) * 10}`;
    const cardText = `${course.number}_12631_${commonText}`;
    const newCourse: Course = {
      ...course,
      _id: new Date().getTime().toString(),
      cardText,
      cardSubText: `${commonText}_1 Fall Semester Full Term`
    };

    setCourses(prevCourses => [...prevCourses, newCourse]);
  };

  const deleteCourse = (courseId: string) => {
    setCourses(courses.filter(course => course._id !== courseId));
  };

  const updateCourse = () => {
    setCourses(
      courses.map(c => {
        if (c._id === course._id) {
          const totalNoOfCourses = courses.length;
          const commonText = `2042${(totalNoOfCourses + 1) * 10}`;
          const cardText = `${course.number}_12631_${commonText}`;
          return {
            ...course,
            cardText,
            cardSubText: `${commonText}_1 Fall Semester Full Term`
          };
        } else {
          return c;
        }
      })
    );
  };

  return (
    <Provider store={store}>
      <div className="d-flex overflow-hidden">
        <KanbasNavigation />
        <div style={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Account" element={<h1>Account</h1>} />
            <Route
              path="Dashboard"
              element={
                <Dashboard
                  courses={courses}
                  course={course}
                  setCourse={setCourse}
                  addNewCourse={addNewCourse}
                  deleteCourse={deleteCourse}
                  updateCourse={updateCourse}
                />
              }
            />
            <Route
              path="Courses/:courseId/*"
              element={<Courses courses={courses} />}
            />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}
export default Kanbas;
