
const mongoose=require('mongoose');
const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require("cors");
const bodyParser = require("body-parser");

const Course=require('./models/Course');
const { GraphQLServer } =require('graphql-yoga')

const {resolvers}=require('./graphql/resolvers');
const {typeDefs}=require('./graphql/schema')
//conexion a mlab 
require('dotenv').config({path:'variables.env'});

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.connect(process.env.MONGO_URI).
then(()=>console.log('bd conectada')).
	catch(err=>console.error(err));





const server = new GraphQLServer({ typeDefs, resolvers,
	context: async({ req }) => ({
		Course
  }),

}
)


server.start(() => console.log('Server is running on localhost:4000'))
