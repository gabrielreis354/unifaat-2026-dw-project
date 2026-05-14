import CourseModel from "../../Models/CourseModel.js";

export default async function DeleteCourseController(request, response) {
    try {
        const { id } = request.params;

        const course = await CourseModel.findByPk(id);

        if (!course) {
            return response.status(404).json({
                error: "Course not found"
            });
        }

        await course.destroy();

        return response.json({
            message: "Course deleted successfully"
        });
    } catch (error) {
        console.error(error);

        return response.status(500).json({
            error: "Internal server error"
        });
    }
}