const PostComponent = ({post, getCurrentPost}) => {
    const {id, title} = post;
    return (
        <div>
            <p>id: {id}</p>
            <p>title: {title}</p>
            <button onClick={() => {
                getCurrentPost(post)
            }}>Details</button>
        </div>
    );
};

export {PostComponent};