const mongoose = require('mongoose');
const { faker } = require('@faker-js/faker');
const {
	Blog,
	User,
	Todo
} = require('./model');

const seedDb = async () => {
	await mongoose.connect('mongodb://localhost:27017/todoMongoDB');
	await User.deleteMany({});
	await Todo.deleteMany({});

	const usersToCreate = [
		{
			username: faker.company.companyName(),
			email: faker.internet.email(),
			role: 'Employee',
		},
		{
			username: faker.company.companyName(),
			email: faker.internet.email(),
			role: 'Employee',
		},
		{
			username: faker.company.companyName(),
			email: faker.internet.email(),
			role: 'Employee',
		},
		{
			username: faker.company.companyName(),
			email: faker.internet.email(),
			role: 'Employee',
		},
		{
			username: faker.company.companyName(),
			email: faker.internet.email(),
			role: 'Employee',
		},
		{
			username: faker.company.companyName(),
			email: faker.internet.email(),
			role: 'Employee',
		},
	];

	const users = await User.insertMany(usersToCreate);

	const todosToCreate = [
		{
			text: faker.random.word(),
			userId: users[Math.floor(Math.random() * users.length)]._id,
		},
		{
			text: faker.random.word(),
			userId: users[Math.floor(Math.random() * users.length)]._id,
		},
		{
			text: faker.random.word(),
			userId: users[Math.floor(Math.random() * users.length)]._id,
		},
		{
			text: faker.random.word(),
			userId: users[Math.floor(Math.random() * users.length)]._id,
		},
		{
			text: faker.random.word(),
			userId: users[Math.floor(Math.random() * users.length)]._id,
		},
		{
			text: faker.random.word(),
			userId: users[Math.floor(Math.random() * users.length)]._id,
		},
		{
			text: faker.random.word(),
			userId: users[Math.floor(Math.random() * users.length)]._id,
		},
		{
			text: faker.random.word(),
			userId: users[Math.floor(Math.random() * users.length)]._id,
		},
		{
			text: faker.random.word(),
			userId: users[Math.floor(Math.random() * users.length)]._id,
		},
		{
			text: faker.random.word(),
			userId: users[Math.floor(Math.random() * users.length)]._id,
		},
		{
			text: faker.random.word(),
			userId: users[Math.floor(Math.random() * users.length)]._id,
		},
	];

	const todos = await Todo.insertMany(todosToCreate);


	const blogsToCreate = [
		{
			description: faker.lorem.paragraph(),
			userId: users[Math.floor(Math.random() * users.length)]._id,
		},
		{
			description: faker.lorem.paragraph(),
			userId: users[Math.floor(Math.random() * users.length)]._id,
		},
		{
			description: faker.lorem.paragraph(),
			userId: users[Math.floor(Math.random() * users.length)]._id,
		},
		{
			description: faker.lorem.paragraph(),
			userId: users[Math.floor(Math.random() * users.length)]._id,
		},
		{
			description: faker.lorem.paragraph(),
			userId: users[Math.floor(Math.random() * users.length)]._id,
		},
		{
			description: faker.lorem.paragraph(),
			userId: users[Math.floor(Math.random() * users.length)]._id,
		},
		{
			description: faker.lorem.paragraph(),
			userId: users[Math.floor(Math.random() * users.length)]._id,
		},
		{
			description: faker.lorem.paragraph(),
			userId: users[Math.floor(Math.random() * users.length)]._id,
		},		{
			description: faker.lorem.paragraph(),
			userId: users[Math.floor(Math.random() * users.length)]._id,
		},
		{
			description: faker.lorem.paragraph(),
			userId: users[Math.floor(Math.random() * users.length)]._id,
		},		{
			description: faker.lorem.paragraph(),
			userId: users[Math.floor(Math.random() * users.length)]._id,
		},		{
			description: faker.lorem.paragraph(),
			userId: users[Math.floor(Math.random() * users.length)]._id,
		},
	];

	const blogs = await Blog.insertMany(blogsToCreate);

    const employees = await User.findByRole('Employee');

    employees.forEach(employee => employee.greeting());

	process.exit(0);
};

seedDb();
/*
	Create a Blog model
	a blog model will belong to a user
  a blog model will have a description which is a text
	Seed your database with at least 5 blogs that all belong to a user
  Create an API GET endpoint that gets all of the blogs from the database with the userId populated
* */