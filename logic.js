
let _postsList = []
// _postsList.push("dummy post")
let postIdCounter = _postsList.length
// console.log(_postsList, postIdCounter)

// let commentIdCounter = will count comments (obj items?)

const getPosts = function (){
    return _postsList
}

// console.log(getPosts())  test function return the array
let counter = 1
const addPost = function (string){
    const add =  function () {
        counter += 1;
      }
    _postsList.push({   id:"p"+counter,
                        text: string ,
                        comments: "comments" }) // push object with key set to number of total
                        add() 
}
addPost("test push to list of objects")
addPost("2nd push to list of objects")
addPost("3rd push to list of objects")


console.log(getPosts())


// You should generate the next id correctly for each post: "p4", "p5", ...
// The comments array should be empty initially
// A removePost function that receives a postID and removes the relevant post from posts