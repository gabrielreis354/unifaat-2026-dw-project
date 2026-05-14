import CourseModel from "../../Models/CourseModel.js";

export default async function UpdateCourseController(request, response) {
    try {
        const { id } = request.params;
        const { name, professor } = request.body;

        const course = await CourseModel.findByPk(id);

        if (!course) {
            return response.status(404).json({
                error: "Course not found"
            });
        }

        course.name = name || course.name;
        course.professor = professor || course.professor;

        await course.save();

        return response.json(course);
    } catch (error) {
        console.error(error);

        return response.status(500).json({
            error: "Internal server error"
        });
    }
}   