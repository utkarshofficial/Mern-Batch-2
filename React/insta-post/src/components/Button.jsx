const Button = (props) => {

    // const {showAlert, children} = props
  return (
    <button onClick={props.showAlert}>
        {props.children}
    </button>
  )
}

export default Button