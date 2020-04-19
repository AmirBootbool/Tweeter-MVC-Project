

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
                $("post").append(comBox)  // append to postbox or post ?

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



//  make sure you're generating HTML with some classes.



//     receive posts[] from tweeter File
//     empty the #posts Element
//     loop on posts and create elements for them with jQuery
//     render text and comments text separatly
//     assign post id and comment id to data-id attribute

//     The function should first empty the #posts element
// It should loop through each post in the posts array and append some HTML to #posts
// Use jQuery to create and add the elements
// Functions are your friends
// Notice that each post has its own text, as well as the text of its comments
// You need to generate the HTML for both
// Make sure you're adding each post and comment's ID in a data-id attribute
// Use the CSS below for styling - you should be able to figure out which elements receive which class
// We highly encourage you to use template literals