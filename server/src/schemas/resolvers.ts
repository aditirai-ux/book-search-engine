import  User from '../models/index.js';
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
        Users: async () => {
            return User.find().populate('savedBooks');
        },
        me: async (_parent: any, {_id }: userArgs): Promise<User | null> => {
            return await User.findOne( { _id });
        },
        },
    Mutation: {
        addUser: async (_parent: any, { username, email, password }: AddUserArgs): Promise<{ token: string; user: User }> => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        }

    },
}
export default resolvers;

