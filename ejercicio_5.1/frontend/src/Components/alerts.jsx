const Notification = ({ message, style }) => {
    console.log(style);
    
  if (message === null) {
    return null
  }

  return (
    <div className={style}>
      {message}
    </div>
  )
}

export default Notification