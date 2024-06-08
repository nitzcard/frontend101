import { useEffect, useState } from 'react'
import api from './api';

export function Sol() {
  const [users, setUsers] = useState([]);
  const [firstPost, setFirstPost] = useState({});
  const [search, setSearch] = useState('');

  useEffect(() => {
    api.getUsers(search).then(data => setUsers(data))
  }, [search]);

  function handleUserSelect(userId) {
    api.getPostByUser(userId).then(post => setFirstPost(post[0]));
  }

  return (
    <div>
      <div>user <input value={search} onChange={e => setSearch(e.target.value)} /></div>
      {users.map(user => <div key={user.id} onClick={() => handleUserSelect(user.id)}>{user.name}</div>)}
      <section>
        <h2>{firstPost.title}</h2>
        <p>{firstPost.body}</p>
      </section>
    </div>
  )
}

