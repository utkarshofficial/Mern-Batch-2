import Avatar from "./Avatar"
import { BsThreeDotsVertical } from "react-icons/bs";
import ImgButton from "./ImgButton"
import Text from "./Text"

const PostHeader = () => {
  return (
    <div className="post-header">
      <Avatar/>
      <div className="post-data">
        <Text size="md">
          therock
        </Text>
        <Text size="sm">
          India
        </Text>
      </div>
      <ImgButton>
        <span className="icon-dots">
        <BsThreeDotsVertical />
        </span>
      </ImgButton>
    </div>
  )
}

export default PostHeader