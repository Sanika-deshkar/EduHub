import React from "react";
import "./courseCard.css";
import { server } from "../../config";
import { UserData } from "../../context/UserContext";
import { CourseData } from "../../context/CourseContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

const CourseCard = ({ course }) => {
  const navigate = useNavigate();
  const { user, isAuth, setUser, fetchUser } = UserData();
  const { fetchCourses, fetchMyCourse } = CourseData();

  // DELETE COURSE (admin)
  const deleteHandler = async (id) => {
    if (confirm("Are you sure you want to delete this course?")) {
      try {
        const { data } = await axios.delete(`${server}/api/course/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        toast.success(data.message);
        fetchCourses();
      } catch (error) {
        toast.error(error.response?.data?.message);
      }
    }
  };

  // BUY COURSE
  const buyCourseHandler = async () => {
    try {
      const { data } = await axios.post(
        `${server}/api/course/checkout/${course._id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      toast.success("Course purchased successfully!");

      // Update user subscription locally
      setUser({
        ...user,
        subscription: [...user.subscription, course._id],
      });

      fetchMyCourse(); // refresh dashboard
      navigate(`/course/study/${course._id}`); // go to study page
    } catch (error) {
      toast.error(error.response?.data?.message || "Purchase failed");
    }
  };

  return (
    <div className="course-card">
      <div className="course-image-wrap">
        <img src={`${server}/${course.image}`} alt={course.title} className="course-image" />
        <span className="course-price-tag">₹{course.price}</span>
      </div>

      <div className="course-card-body">
        <h3>{course.title}</h3>

        <div className="course-meta">
          <p><span>Instructor</span>{course.createdBy}</p>
          <p><span>Duration</span>{course.duration} weeks</p>
        </div>

        <div className="course-actions">
          {isAuth ? (
            <>
              {user && user.role !== "admin" ? (
                <>
                  {user.subscription.includes(course._id) ? (
                    <button
                      onClick={() => navigate(`/course/study/${course._id}`)}
                      className="common-btn"
                    >
                      Study
                    </button>
                  ) : (
                    <button onClick={buyCourseHandler} className="common-btn">
                      Get Started
                    </button>
                  )}
                </>
              ) : (
                <button
                  onClick={() => navigate(`/course/study/${course._id}`)}
                  className="common-btn"
                >
                  Study
                </button>
              )}
            </>
          ) : (
            <button onClick={() => navigate("/login")} className="common-btn">
              Get Started
            </button>
          )}

          {user && user.role === "admin" && (
            <button
              onClick={() => deleteHandler(course._id)}
              className="common-btn course-delete-btn"
            >
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
