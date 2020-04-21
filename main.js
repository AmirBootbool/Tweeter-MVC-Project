const tweeter = Tweeter()
const renderer = Renderer()

renderer.renderPost(tweeter.getPosts())


// adding event listeners per button

$("#post").on('click', function(){
    let tweet = $("#input").val()  // get new tweet text from input field- GO
    tweeter.addPost(tweet)
    renderer.renderPost(tweeter.getPosts())  

    // console.log(tweet)
    console.log(tweeter.getPosts())
})

$("#posts").on('click', ".delete", function(){
    let delPostId = $(this).closest("div.post").data().id
    tweeter.searchAndDeletePost(tweeter.getPosts(), delPostId)  // call to delete post func from module
    renderer.renderPost(tweeter.getPosts())
    console.log("show posts after delete post pressed", tweeter.getPosts())  // removes post from array- go
    
})

$("#posts").on('click', ".comBtn" ,  function(){
    let newComment = $(this).closest(".post").find(".comInput").val() 
    let postID = $(this).closest("div.post").data().id
    tweeter.addComment(postID, newComment)
    renderer.renderPost(tweeter.getPosts())
    console.log("check insertion of new comment text", "new comment is:", newComment, tweeter.getPosts())

})

$("#posts").on('click', ".delete-comment", function(){
    let commentID = $(this).closest("div.comment").data().id
    let postID = $(this).closest("div.post").data().id
    tweeter.removeComment(postID, commentID)
    renderer.renderPost(tweeter.getPosts())
    console.log("check removal of  comment from DB", tweeter.getPosts())

})


// When the Delete Post button is clicked, grab the ID of the post using what you learned about DOM Traversal and invoke the removePost function in your logic module



// Notice that you already have an addPost function in your Tweetermodule - invoke it!
// When the Delete Post button is clicked, grab the ID of the post using what you learned about DOM Traversal and invoke the removePost function in your logic module




