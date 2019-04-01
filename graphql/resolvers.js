

const Course=require('./../models/Course');

exports.resolvers={

Query:{
        greeting:()=>'hola mundo',

getAllCourses: async (root, args, { Course }) => {                                                                            const allCourses = await Course.find().sort({ createdDate: "desc" });                                                           if (allCourses) {
            return allCourses;
        }

        return null;                                                },
    getCourse: async (root, { _id }, { Course }) => {
        const course = await Course.findOne({ _id });                   return course;
      }
    },
        Mutation:{                                                                                                                    addCourse: async (root, { title, description, category, technologies, link, plataform,image }, { Course }) => {                const newCourse = await new Course({   title,         description,                          category, technologies,
        image,  link,  plataform     }).save();                                                                               return newCourse;                                                                                             }
	}}
