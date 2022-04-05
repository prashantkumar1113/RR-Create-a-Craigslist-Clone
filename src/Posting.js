function Posting({post, key}) {
    return (
        <div className="posting">
            <h2>{post.title}</h2>
            <img src={post.imageURL} alt={post.title} />
            <p>{post.description}</p>
            <p style={{color: "red", fontWeight: "bolder"}}>{post.price}</p>
        </div>
    );
}
export default Posting;
