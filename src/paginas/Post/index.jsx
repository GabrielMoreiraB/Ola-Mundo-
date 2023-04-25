import { useParams } from "react-router-dom";
import posts from '../../json/posts.json';
import PostModelo from "../../components/PostModelo";

const Post = () => {
    const parametros =  useParams();
    const post = posts.find(post => +post.id === +parametros.id);
    return ( 
         <PostModelo
         fotoCapa={`/assets/posts/${post.id}/capa.png`}
         titulo={post.titulo}
         
         >
            txt
         </PostModelo>
     );
}
 
export default Post;