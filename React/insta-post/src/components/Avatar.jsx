import reactIcon from '../assets/react.svg';

const Avatar = () => {
  return (
    <img style={{
        border: "1px solid black",
        borderRadius: "50%",
        height: "32px",
        width: "32px",
        padding: "4px"
    }} src={reactIcon}/>
  )
}

export default Avatar