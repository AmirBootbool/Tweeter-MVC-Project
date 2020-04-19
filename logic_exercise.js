

// ########## TWEETER LOGIC ##########


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

