
exports.typeDefs=`
type Query{
greeting: String



getAllCourses: [Course]


getCourse(_id: ID!): Course



}



type Course{
        _id: ID
	title: String!
	category: String!
        description: String!
	technologies: String!
        createdDate: String!
        link: String
	plataform: String
	image: String
}

type Mutation{
	addCourse(title: String!, description: String!, category: String!, image: String, technologies: String!, link: String, plataform:String ): Course
        }

` ;
