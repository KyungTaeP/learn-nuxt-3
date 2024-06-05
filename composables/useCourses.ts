import courseData from "./coursesData";
import type { CourseWithPath } from "~/types/course";

interface CoursesReturn {
  courses: CourseWithPath[];
}

export const useCourses = (): CoursesReturn => {
  const courses = courseData.map((item) => ({
    ...item,
    rating: item.rating.toFixed(1), // 5.0
    reviewsCount: item.reviewsCount.toLocaleString(), // 1000 -> 1,000
    studentCount: item.studentCount.toLocaleString(), // 12345 -> 12,345
    path: `/course/${item.courseSlug}`,
  }));
  return {
    courses,
  };
};
