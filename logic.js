//  a module to store posts and comments data- return  _posts array

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

let _postsList = []

let postIdCounter = _postsList.length

let counter = 1  // set counter outside of target function to prevent it from loosing count each time the function is called

const addPost = function (string){
    const add =  function () {
        counter += 1;
      }
    _postsList.push({   id:"p"+counter,
                        text: string ,
                        comments:[] })
                        add() 
}

const searchAndDeletePost = function (_postsList, postID) {
    for (let item of _postsList) {
        let key = item.id
        if (key == postID) {
            let index = _postsList.indexOf(item)
            _postsList.splice(index, 1)
        }
    }
}

const addComment = function (postID, string) {
    for (item of _postsList) {
        if (postID == item.id) {
            let id = item.comments.length + 1
            id = "c" + id
            item.comments.push({
                "id": id,
                "text": string
            })
        }
    }
}

const removeComment = function (postID, commentID) {
    for (item of _postsList) {
        if (postID == item.id) {
            for (comment of item.comments) {
                if (comment["id"] == commentID) {
                    let index = item.comments.indexOf(comment) /
                        item.comments.splice(index, 1)
                }
            }
        }
    }
}






