const typeDefs = `
type User {
    id: ID!
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]}

type Book {
    bookId: ID!
    title: String!
    authors: [String]
    description: String
    image: String
    link: String
}

input BookInput {
    authors: [String]
    description: String!
    title: String!
    bookId: String!
    image: String
    link: String}

input UserInput {}

type Query {
    users: [User]
    user(id: ID!): User
    books: [Book]
    book(id: ID!): Book
}

type Mutation {
    addUser(email: String!, password: String!): User
    updateUser(id: ID!, email: String, password: String): User
    deleteUser(id: ID!): User
    createBook(title: String!): Book
    updateBook(id: ID!, title: String): Book
    deleteBook(id: ID!): Book
}
`;