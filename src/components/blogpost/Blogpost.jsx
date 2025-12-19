import {Link, useParams} from "react-router-dom";
import posts from "../../constants/data.json"

function Blogpost() {
    const {id} = useParams();
    const {title, content, author} = posts.find((post) => {
        return post.id.toString() === id;
    });

    return (
    <div>
        <h3>{title}</h3>
        <p>{content}</p>
        <p>Geschreven door: {author}</p>

    </div>


    );
}

export default Blogpost;