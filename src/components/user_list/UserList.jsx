import User from '../user/User.jsx'
import './user_list.css'

const UserList = (props) => {

  if (props.isLoading) {
    return <div>Loading...</div>
  }

  if (!props.users.length && !props.isLoading) {
    return <div>User not found</div>
  }

  return (
    <ol className="list">
      {props.users.map((user) => (
        <li key={user.id}>
          <User user={user} key={user.id}/>
        </li>
        ))}
    </ol>
  )
}

export default UserList
