const ImgButton = ({children}) => {
  return (
    <button style={{
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

export default ImgButton

{/* <ImgButton> */}
      {/* <CiHeart />
     </ImgButton>
     <ImgButton>
      <FiMessageCircle />
     </ImgButton>
     <ImgButton>
      <FaRegBookmark />
     </ImgButton>
     <ImgButton>
      <BsThreeDotsVertical />
     </ImgButton>
     <ImgButton>
      <IoPaperPlaneOutline />
     </ImgButton> */}