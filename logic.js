

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

    console.log("before removing", getPosts())  // print post DB

const searchAndDeletePost = function (_postsList, postId){
        for (let item of _postsList){
            // console.log(item)
            let key = item.id
            // console.log(key)
        if (key == postId){
            let index = _postsList.indexOf(item)
            // console.log(index)
            _postsList.splice(index, 1)
        }
    }
}
searchAndDeletePost(_postsList, "p3")
console.log("after removing", getPosts())



              



