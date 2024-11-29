import PostHeader from "./PostHeader";
import ViteLogo from "../../public/vite.svg";
import PostFooter from "./PostFooter";

const Post = () => {
  return (
    <div className="post">
      <PostHeader />

      <img src={ViteLogo} alt="" className="post-image" />

      <PostFooter />
    </div>
  );
};

export default Post;
