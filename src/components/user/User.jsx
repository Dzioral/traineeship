import './user.css'

const User = (props) => {
  return (
    <div className="box">
      <div data-testid='name'>{props.user.name}</div>
      <div className="user-username" data-testid='username'>
        @{props.user.username}
      </div>
    </div>
  )
}

export default User