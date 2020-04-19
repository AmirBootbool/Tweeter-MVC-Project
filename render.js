

const Renderer = function(){
    const renderPost = function(posts){
        $("#posts").empty()
        for (let post of posts) {
            let postBox = $(`<div class='post' data-id = "${post.id}">
            <p class="post-text">${post.text}</p>
            </div>`)
            $(this).empty()  // do we need to empty post's children even if its created dynamically?

            for (let comment of post.comments){
                let comBox = $(`<div class="comment" data-id ="${comment.id}">
                <span class="delete-comment">X</span>
                <span class="comments">${comment.text}</span>`)
                $("#posts").append(comBox)  // append to postbox or post ?

            }

            $("#posts").append(postBox)
    }
    // add comment input and button
        const addCommentBox = $(`<input type="text" placeholder="What's on your mind?"><button>COMMENT</button>`);
        $(".post").append(addCommentBox);

// delete post button 
        const deletePost = $(`<div class="delete">Delete Post</div>`);
        $(".post").append(deletePost);
        
        
    }

    return {
        renderPost: renderPost}
}


