export interface Course {
  title: string;
  subtitle: string;
  courseSlug: string;
  content: string;
  thumbnail: string;
  video: string;
  rating: number;
  reviewsCount: number;
  studentCount: number;
  reviewsUrl: string;
  inflearnUrl: string;
  gymcodingUrl: string;
}

// Course에서 rating, reviewsCount, studentCount 을 제외하고 똑같이 만들어 준다

export interface CourseWithPath
  extends Omit<Course, "rating" | "reviewsCount" | "studentCount"> {
  path: string;
  rating: string;
  reviewsCount: string;
  studentCount: string;
}
