const PostDetailsComponent = ({postDetails}) => {
    const {id, title, body} = postDetails;
    return (
        <div>
            <p>id: {id},</p>
            <p>title: {title},</p>
            <p>body: {body}</p>
        </div>
    );
};

export {PostDetailsComponent};