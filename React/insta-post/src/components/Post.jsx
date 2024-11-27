import PostHeader from "./PostHeader";
import ViteLogo from "../../public/vite.svg"

const Post = () => {
    return ( 
        <div className="post">
            <PostHeader/>
            <img src={ViteLogo} alt="" className="post-image" />
        </div>
     );
}
 
export default Post;