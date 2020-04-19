// call the renderPost method from Renderer module, and give as arguments the getPosts property (is it a func?)

// Specifically, we want to add a listener on the following elements:

//tweet button to get post and show it

// $("#post").on('click', function(){
// let inputText = $("#input").val()
// alert(inputText)

// invoke addpost
// should grab the value from the big input and create a new post


// })

// remove post button 
// grab the ID of the post using what you learned about DOM Traversal and invoke the removePost function in your logic module

// $(#??).on('click', ".??", function(){
//     postID = $(this).egt clickedpost id
// })


// push text to DATA BASE





const Tweeter = function () {
    const _posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]

const getPosts = function(){
    return _posts
}

   return {
       getPosts:getPosts
    }
    
}







