import { Router } from 'express';

import ListCourseController from '../../app/Controllers/CourseApi/ListCourseController.js';
import UpdateCourseController from '../../app/Controllers/CourseApi/UpdateCourseController.js';
import CreateCourseController from '../../app/Controllers/CourseApi/CreateCourseController.js';
import GetCourseController from '../../app/Controllers/CourseApi/GetCourseController.js';
import DeleteCourseController from '../../app/Controllers/CourseApi/DeleteCourseController.js';

export default (() => {
    const router = Router();

    /** TF 11 */
    router.get('/', ListCourseController);

    router.get('/:id', GetCourseController);

    router.post('/', CreateCourseController);

    router.put('/:id', UpdateCourseController);

    router.delete('/:id', DeleteCourseController);

    return router;
})();