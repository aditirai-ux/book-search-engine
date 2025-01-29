const typeDefs = `
type User {
    id: ID!
    email: String!
    password: String!}

type Book {
    id: ID!
    title: String!
}
type Query {
    users: [User]
    user(id: ID!): User
    books: [Book]
    book(id: ID!): Book
}

type Mutation {
    createUser(email: String!, password: String!): User
    updateUser(id: ID!, email: String, password: String): User
    deleteUser(id: ID!): User
    createBook(title: String!): Book
    updateBook(id: ID!, title: String): Book
    deleteBook(id: ID!): Book
}
`;