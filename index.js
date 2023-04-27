const likeBtn = document.querySelector('.like-btn');
const likeCountEle = document.querySelector('.number');
const postImgEle = document.querySelector('.main-post');

let likeCountInitial = likeCountEle.textContent;

// Adding the like functionality

likeBtn.addEventListener('click', function() {
    if(Number(likeCountInitial) < Number(likeCountEle.textContent)) {
        likeCountEle.textContent = likeCountInitial;
    } else {
        likeCountEle.textContent = Number(likeCountEle.textContent) + 1;
    }
})

postImgEle.addEventListener('dblclick',function() {
    if(Number(likeCountInitial) === Number(likeCountEle.textContent)) {
        likeCountEle.textContent = Number(likeCountEle.textContent) + 1;
    }
})












































// const posts = [
//     {
//         name: "Vincent van Gogh",
//         username: "vincey1853",
//         location: "Zundert, Netherlands",
//         avatar: "images/avatar-vangogh.jpg",
//         post: "images/post-vangogh.jpg",
//         comment: "just took a few mushrooms lol",
//         likes: 21
//     },
//     {
//         name: "Gustave Courbet",
//         username: "gus1819",
//         location: "Ornans, France",
//         avatar: "images/avatar-courbet.jpg",
//         post: "images/post-courbet.jpg",
//         comment: "i'm feelin a bit stressed tbh",
//         likes: 4
//     },
//         {
//         name: "Joseph Ducreux",
//         username: "jd1735",
//         location: "Paris, France",
//         avatar: "images/avatar-ducreux.jpg",
//         post: "images/post-ducreux.jpg",
//         comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
//         likes: 152
//     }
// ]


