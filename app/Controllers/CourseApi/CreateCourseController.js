import CourseModel from "../../Models/CourseModel.js";

export default async function CreateCourseController(request, response) {
    try {
        const { name, professor } = request.body;

        if (!name || !professor) {
            return response.status(400).json({
                error: "name e professor são obrigatórios"
            });
        }

        const course = await CourseModel.create({
            name,
            professor
        });

        return response.status(201).json(course);

    } catch (error) {
        console.error(error);   

        return response.status(500).json({
            error: "Internal server error"
        });
    }
}