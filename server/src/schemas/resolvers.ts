import User from '../models/index.js';
import { signToken, AuthenticationError } from '../utils/auth.js';

interface User {
    username: string;
    email: string;
    password: string;
    bookCount: number;
}

interface userArgs {
    _id: string;
}

interface AddUserArgs {
    username: string;
    email: string;
    password: string;
}

interface saveBookArgs {
    bookData: {
        authors: string[];
        description: string;
        title: string;
        bookId: string;
        image: string;
        link: string;
    }
}

interface removeBookArgs {
    bookId: string;
}

interface Context {
    user?: User;
}

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

