import jwt from 'jsonwebtoken';
import { GraphQLError } from 'graphql';
import dotenv from 'dotenv';
dotenv.config();

export class AuthenticationError extends GraphQLError {
    constructor(message: string) {
      super(message, undefined, undefined, undefined, ['UNAUTHENTICATED']);
      Object.defineProperty(this, 'name', { value: 'AuthenticationError' });
    }
  };