type ICourse = {
    id: number;
    title: string;
    teacher: string;
    duration: number;
}

type EditCourse = Partial<ICourse>;
type RequiredCourse = Required<EditCourse>;
type ReadOnlyCourse = Readonly<ICourse>;
class Course {
    addCourse(course: ICourse){}
    editCourse(course: EditCourse){}
    getAll(): ICourse[]{return []}
}

type Titles = "Nodejs" | "TypeScript" | "Javascript" | "Nestjs";

type Courses = Record<Titles, ICourse>

const courses: Courses = {
    Nodejs: {
        id: 1,
        title: "nodejs and express",
        teacher: "erfan yousefi",
        duration: 50
    },
    TypeScript: {
        id: 1,
        title: "nodejs and express",
        teacher: "erfan yousefi",
        duration: 50
    },
    Javascript: {
        id: 1,
        title: "nodejs and express",
        teacher: "erfan yousefi",
        duration: 50
    },
    Nestjs: {
        id: 1,
        title: "nodejs and express",
        teacher: "erfan yousefi",
        duration: 50
    },
}