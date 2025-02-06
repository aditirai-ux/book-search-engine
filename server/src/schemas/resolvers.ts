import User from '../models/index.js';
import { AuthenticationError } from '../utils/auth.js';

interface User {
    id: string;
    email: string;
    password: string;
}

interface Book {}

interface UserInput {}
interface BookInput {}

const resolvers = {
    Query: {
        users: async () => {
            return User.find();
        },
        user: async (parent: User, { id }: User) => {
            return User.findById};


        },
        books: async () => {
            return Book.find();
        },
}
export default resolvers;

