import './Overview.css';
import posts from '../../constants/data.json';
import {Link} from 'react-router-dom';

function Overview() {
    return (
        <section>
            <h1>Bekijk hier alle blogposts</h1>

            <div className="outer-container">
                {posts.map((post) => {
                    return <>
                        <div key={post.id} className="title-author">
                            <h2><Link to={`/posts/${post.id}`}>{post.title}</Link> ({post.author})</h2>
                        </div>

                        <div className="comments-shares">
                            <p>{post.comments} reacties - {post.shares} keer gedeeld</p>
                        </div>
                    </>
                })}
            </div>

        </section>
    );
}

export default Overview;