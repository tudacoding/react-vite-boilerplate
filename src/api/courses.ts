import { Course } from "@/types/courses";
import { ApiFactory } from "./factory";
class CourseApi extends ApiFactory<Course> {
  constructor() {
    super("/courses");
  }
}

export const courseApi = new CourseApi();
