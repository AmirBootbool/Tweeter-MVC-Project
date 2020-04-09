

// ########## TWEETER LOGIC ##########

let _postsList = []
// _postsList.push("dummy post")
let postIdCounter = _postsList.length
// console.log(_postsList, postIdCounter)

const getPosts = function (){
    return _postsList
}

// console.log(getPosts())  test function return the array


// adding posts and comments to DB with post number 

let counter = 1  // set counter ouside of target function to prevent it from loosing count each time the function is called

const addPost = function (string){
    const add =  function () {
        counter += 1;
      }
    _postsList.push({   id:"p"+counter,
                        text: string ,
                        comments:[] })
                        add() 
}

// console.log(getPosts())

// function removePost(array, postIndex) { 
//     return array.filter(function(ele){
//         return ele != postIndex; });
// }

// ### helper remove function ###

     // a method to remove an element from array by its value- using  filter to bring back only values that doenst match the targeted item to be removed.

    //  function arrayRemove(arr, value) { 
    //      return arr.filter(function(ele){
    //           return ele != value; });}

    // push some new posts inside the list

    addPost("1st dummy post")
    addPost("2nd dummy post")
    addPost("3rd dummy post")

    console.log("original DB", getPosts())  // print post DB

const searchAndDeletePost = function (_postsList, postID){
        for (let item of _postsList){
            // console.log(item)
            let key = item.id
            // console.log(key)
        if (key == postID){
            let index = _postsList.indexOf(item)  // get the index of the target item in array
            // console.log(index)
            _postsList.splice(index, 1)
        }
    }
}

// searchAndDeletePost(_postsList, "p3")
// console.log("after removing", getPosts())

const addComment = function (postID, string){
     for (item of _postsList){
         if (postID == item.id){
             let id = item.comments.length + 1
             id = "c"+id
             item.comments.push({"id": id, "text": string})
             

         }
     }
}


addComment("p2", "this is  a 4th comment to post2")
console.log(getPosts())

const removeComment = function (postID, commentID){
    for (item of _postsList){
        if (postID == item.id){
            for (comment of item.comments){
                if (comment["id"] == commentID){
                    let index = item.comments.indexOf(comment)  // get the index of the target item in array
            // console.log(index)
                    item.comments.splice(index, 1)
                }
        }
    }
}
}

// removeComment("p2", "c1")
console.log("DB after p2-c1 comment  removal", getPosts())
