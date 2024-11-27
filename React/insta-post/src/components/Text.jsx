const Text = ({children, size}) => {

    switch(size){
        case "sm":
            size = "12"
            break
        case "md":
            size = "18"
            break
        case "lg":
            size = "24"
            break
        default:
            size = "16"
            break
    }

    let style = {
        margin: 0,
        fontFamily: "Arial",
        fontSize: size + "px",
    }
  return (
    <p style={style}>
        {children}
    </p>
  )
}

export default Text