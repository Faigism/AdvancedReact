import { useState } from 'react'
import { data } from '../../../data'

const UserChallenge = () => {
  const [name, setName] = useState('')
  const [users, setUser] = useState(data)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name) return
    const fakeId = Date.now()
    const newUser = { id: fakeId, name }
    const updatedUsers = [...users, newUser]
    setUser(updatedUsers)
    setName('')
  }
  const deletedUser = (id) => {
    const updatedUsers = users.filter((person) => person.id !== id)
    setUser(updatedUsers)
  }
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      <h2>Users:</h2>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h4>{user.name}</h4>
            <button className="btn" onClick={() => deletedUser(user.id)}>
              delete
            </button>
          </div>
        )
      })}
    </div>
  )
}
export default UserChallenge
