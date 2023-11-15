import PostContainer from "./PostContainer"
import CommentListContainer from "./CommentListContainer"
import AddCommentContainer from "./AddCommentContainer"
import deleteData from "../../js_functions/delete"

export default function PostListItem({post, setReloadPostList, reloadPostList, mockLoggedInUserId, reloadComments, setReloadComments, reloadContacts}) {
    reloadPostList

    const deletePost = () => {
        deleteData(`post/${post.id}`)
        setReloadPostList(!reloadPostList)  
    }
    return(
        <>
            <li className="post-list-element">
                <PostContainer post={post} reloadContacts={reloadContacts} reloadPostList={reloadPostList}/>
                <CommentListContainer postId={post.id} reloadComments={reloadComments} reloadPostList={reloadPostList} setReloadComments={setReloadComments}/>
                <AddCommentContainer 
                    post={post}
                    setReloadPostList={setReloadPostList}
                    reloadPostList={reloadPostList}
                    mockLoggedInUserId={mockLoggedInUserId} 
                    setReloadComments={setReloadComments}
                    reloadComments={reloadComments}/>   
                <button onClick={deletePost}>Delete</button>
    
            </li>
        </>
    )
}