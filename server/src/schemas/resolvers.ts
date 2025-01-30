import User from '../models/index.js';
import { AuthenticationError } from '../utils/auth.js';

interface User {
    id: string;
    email: string;
    password: string;
 }

