// /posts/1/comments
// /albums/1/photos
// /users/1/albums
// /users/1/todos
// /users/1/posts
interface User {
    id:       number;
    name:     string;
    username: string;
    email:    string;
    address:  unknown;
    phone:    string;
    website:  string;
    company:  unknown;
}

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}


// https://jsonplaceholder.typicode.com/guide/
const baseUrl = 'https://jsonplaceholder.typicode.com';
export default {
    getUsers: (search) => {
        return fetch(`${baseUrl}/users`).then(res => res.json()).then(data => data.filter(user => !search || user.name.toLowerCase().includes(search.toLowerCase())));
    },
    getPostByUser: (userId) => {
        return fetch(`${baseUrl}/users/${userId}/posts`).then(res => res.json());
    },
    getAlbumByUser: (userId) => { // DO NOT USE - Legal do not allow this!
        return fetch(`${baseUrl}/users/${userId}/albums`).then(res => res.json());
    },
}