import './user.css'

const User = (props) => {
  return (
    <div className="box">
      <div className="user-name">
        {props.user.name}
      </div>
      <div className="user-username">
        &nbsp;@{props.user.username}
      </div>
    </div>
  )
}

export default User