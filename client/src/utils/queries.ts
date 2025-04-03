import { gql } from '@apollo/client';

export const GET_ME = gql`
    query ME {
        me {
            _id
            username
            email
            bookCount
            savedBooks {
                bookId
                authors
                title
                image
                description
                link
            }
        }
    }
`;

export const GET_ALL_USERS = gql`
    query getAllUsers {
        Users {
            _id
            username
            email
            bookCount
            savedBooks {
                bookId
                authors
                title
                image
                description
                link
            }
        }
    }
`;
export const GET_USER = gql`
    query getProfile($profileId: ID!) {
        user(profileId: $profileId) {
            _id
            name
            skills
            }
        }
    }
`;