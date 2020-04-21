// add comments to all relvant loops and functions

const Renderer = function(){
    const renderPost = function(posts){
        $("#posts").empty()  // empty old render elements before loading new ele'
        for (let post of posts) {
            let postBox = $(`<div class='post' data-id = "${post.id}">
            <p class="post-text">${post.text}</p>
            </div>`)
            const deletePost = $(`<div class="delete">Delete Post</div>`);
        $(postBox).append(deletePost);
            
            // $(this).empty()  // do we need to empty post's children even if its created dynamically?

            for (let comment of post.comments){
                let comBox = $(`<br><div class="comment" data-id ="${comment.id}">
                <span class="delete-comment">X</span>
                <span class="comments">${comment.text}</span>`)
                postBox.append(comBox)  // append to newly created post
            }
            $("#posts").append(postBox)  // append post and its comments 
    }
    // create new comment input space and button

        const addCommentBox = $(`<br><input class = "comInput" type="text" placeholder="wanna add your comment?">
        <button class="comBtn">COMMENT</button><br><br>`);
        $(".post").append(addCommentBox);

// create delete post button 

        
           
    }

    return {
        renderPost: renderPost}
}


