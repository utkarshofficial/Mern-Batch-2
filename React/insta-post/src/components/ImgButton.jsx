import PropTypes from 'prop-types';

const ImgButton = ({children, handleClick}) => {
  return (
    <button onClick={handleClick} style={{
      border: "none",
      background: "none",
      textAlign: "center",
      fontSize: "24px",
      fontWeight: "bolder",
      padding: "0",
      height: "36px",
    }}>
      {children}
    </button>
  )
}

ImgButton.propTypes = {
  children: PropTypes.node,
  handleClick: PropTypes.func
}

export default ImgButton

