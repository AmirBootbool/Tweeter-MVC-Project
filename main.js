// assign var names to main modules

const tweeter = Tweeter()
const renderer = Renderer()

renderer.renderPost(tweeter.getPosts())


// Adding event listeners per button

// adding new post

$("#post").on('click', function(){
    let tweet = $("#input").val()  
    tweeter.addPost(tweet)
    renderer.renderPost(tweeter.getPosts())  // re-render after changes were made to DB
})

// delete post 

$("#posts").on('click', ".delete", function(){
    let delPostId = $(this).closest("div.post").data().id
    tweeter.searchAndDeletePost(tweeter.getPosts(), delPostId)  
    renderer.renderPost(tweeter.getPosts())
    
})

// add new comment

$("#posts").on('click', ".comBtn" ,  function(){
    let newComment = $(this).closest(".post").find(".comInput").val() 
    let postID = $(this).closest("div.post").data().id
    tweeter.addComment(postID, newComment)
    renderer.renderPost(tweeter.getPosts())

})

// delete comment

$("#posts").on('click', ".delete-comment", function(){
    let commentID = $(this).closest("div.comment").data().id
    let postID = $(this).closest("div.post").data().id
    tweeter.removeComment(postID, commentID)
    renderer.renderPost(tweeter.getPosts())
    console.log("check removal of  comment from DB", tweeter.getPosts())

})






