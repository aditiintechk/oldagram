const likeBtn = document.querySelector('.like-btn');
const likeCountEle = document.querySelector('.number');
const postImgEle = document.querySelector('.main-post');

// Multiple posts logic

const postProfileEle = document.querySelector('.post-profile');
const postOwnerEle = document.querySelector('.post-owner-name');
const postLocationEle = document.querySelector('.post-location');
const postLikesEle = document.querySelector('.post-likes');
const postHandleEle = document.querySelector('.post-handle')
const postCaptionEle = document.querySelector('.post-caption');
const postImg = document.querySelector('.post-img');
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');

const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 420
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today??",
        likes: 152
    }
];


let click = 1;

rightBtn.addEventListener('click', function() {
    if(click > 2) {
        rightBtn.disabled = true;
    }

    changeContent(click);
    click += 1;
})

leftBtn.addEventListener('click', function() {
    if(click === 0) {
        leftBtn.disabled = true;
    } else {
        click -= 1;
        changeContent(click);

    }
})



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

// Function to change content

function changeContent(click) {
    postProfileEle.src = posts[click].avatar;
    postOwnerEle.textContent = posts[click].name;
    postLocationEle.textContent = posts[click].location;
    likeCountEle.textContent = posts[click].likes;
    likeCountInitial = likeCountEle.textContent;
    postHandleEle.textContent = posts[click].username;
    postCaptionEle.textContent = posts[click].comment;
    postImg.src = posts[click].post;
}
















































