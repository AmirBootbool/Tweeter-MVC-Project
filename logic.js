//  a module to serve as our database and useful methods


const Tweeter = function () {
    const _posts = [  // posts and comments data base
        {
            id: "p1",
            text: "First post!",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            id: "p2",
            text: "Aw man, I wanted to be first",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]


// available methods of Tweeter 


let postsCounter = _posts.length+1  // counter for number of posts already stored
 
// add a new post function by accepting a new string from user

const addPost = function (string){
    const add =  function () {
    postsCounter += 1;
      }
    _posts.push({   id:"p"+postsCounter,
                        text: string ,
                        comments:[] })
                        add() 
}


// delete a post by its ID tag

const searchAndDeletePost = function (_posts, postID) {
    for (let item of _posts) {
        let key = item.id
        if (key == postID) {
            let index = _posts.indexOf(item)
            _posts.splice(index, 1)
        }
    }
}

// add a new comment string from user, to an existing post

const addComment = function (postID, string) {
    for (item of _posts) {
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

// remove a  comment by its ID and its post ID


const removeComment = function (postID, commentID) {
    for (item of _posts) {
        if (postID == item.id) {
            for (comment of item.comments) {
                if (comment["id"] == commentID) {
                    let index = item.comments.indexOf(comment);
                    item.comments.splice(index, 1)
                }
            }
        }
    }
}

// retrieve the current posts and comments data base

const getPosts = function(){
    return _posts
}

   return {  // all methods exposed to global scope
       removeComment : removeComment,
       addComment : addComment,
       searchAndDeletePost : searchAndDeletePost,
       addPost : addPost,
       getPosts : getPosts
    }
    
}


// Testing functions ##########

// let twit = Tweeter()

// Testing all methods

// console.log("DB at start", twit.getPosts())
// twit.addPost("this is a test post added")  // check addition and id correct
// twit.addPost("this is a 2nd test post added")  // check addition and id correct
// console.log("DB after 2 posts added", twit.getPosts())

// twit.addComment("p1" , "new comment to post 1")

// console.log("DB after 1 comment to 1st post", twit.getPosts())

// twit.searchAndDeletePost("p1")  // not working - fix error

// console.log("remove post 1", twit.getPosts())

// twit.removeComment("p1", "c1")
// console.log("check posts DB after posting in input box + button", twit.getPosts())













// helper functions from early chapter ##########

// let postIdCounter = _posts.length

// let counter = 1  // set counter outside of target function 

// const addPost = function (string){
//     const add =  function () {
//         counter += 1;
//       }
//     _posts.push({   id:"p"+counter,
//                         text: string ,
//                         comments:[] })
//                         add() 
// }

// const searchAndDeletePost = function (_posts, postID) {
//     for (let item of _posts) {
//         let key = item.id
//         if (key == postID) {
//             let index = _posts.indexOf(item)
//             _posts.splice(index, 1)
//         }
//     }
// }

// const addComment = function (postID, string) {
//     for (item of _posts) {
//         if (postID == item.id) {
//             let id = item.comments.length + 1
//             id = "c" + id
//             item.comments.push({
//                 "id": id,
//                 "text": string
//             })
//         }
//     }
// }

// const removeComment = function (postID, commentID) {
//     for (item of _posts) {
//         if (postID == item.id) {
//             for (comment of item.comments) {
//                 if (comment["id"] == commentID) {
//                     let index = item.comments.indexOf(comment) /
//                         item.comments.splice(index, 1)
//                 }
//             }
//         }
//     }
// }






