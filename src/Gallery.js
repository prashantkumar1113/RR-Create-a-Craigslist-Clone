import Posting from "./Posting";
import {postings} from "./postings";

function Gallery() {
    let postList = postings.map((post, i) => {
        return <Posting post={post} key={i} />;
    });
    return (
        <div className="gallery">
            <h1>Gallery</h1>
            {postList}
        </div>
    );
}
export default Gallery;
