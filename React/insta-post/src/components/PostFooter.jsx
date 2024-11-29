import { useState } from "react";

import { FiMessageCircle } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa";
import ImgButton from "./ImgButton";

const PostFooter = () => {
  let footerStyle = {
    footer: {
      display: "flex",
      padding: "0 7px",
    },
    actionButtonsLeft: {
      display: "flex",
      alignItems: "center",
      gap: "5px",
    },
    buttonLike: {
      display: "flex",
      alignItems: "center",
    },
    likeCount: {
      fontSize: "20px",
      marginLeft: "2px",
    },
  };

  const [likeCount, setLikeCount] = useState(0)

  const handleLikeClick = ()=>{
    setLikeCount(likeCount + 1)
    console.log(likeCount)
  }

  return (
    <div style={footerStyle.footer}>
      <div style={footerStyle.actionButtonsLeft}>
        <div style={footerStyle.buttonLike}>
          <ImgButton handleClick={handleLikeClick}>
            <FaRegHeart />
          </ImgButton>
          <span style={footerStyle.likeCount}>
            {likeCount}
          </span>
        </div>
        <ImgButton>
          <FiMessageCircle />
        </ImgButton>
        <ImgButton>
          <IoPaperPlaneOutline />
        </ImgButton>
      </div>

      <div
        style={{
          marginLeft: "auto",
        }}
      >
        <ImgButton>
          <FaRegBookmark />
        </ImgButton>
      </div>
    </div>
  );
};

export default PostFooter;
