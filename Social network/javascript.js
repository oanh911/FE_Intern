const mainPage = document.getElementById("main-page");
const postListElement = document.getElementById("post-list");
const creatPostButton = document.getElementById("creat-post-button");
const creatPost = document.getElementById("creat-post");
const cancelPost = document.getElementById("cancel-post");
const postPost = document.getElementById("post-post");
const creatPostTitleElement = document.querySelector("input[name='creat-post-title']");
const creatPostBodyElement = document.querySelector("input[name='creat-post-body']");
const viewPostDetal = document.getElementById("post-detail-page");

const postsURL = 'https://jsonplaceholder.typicode.com/posts';
const userURL = 'https://jsonplaceholder.typicode.com/users';

function getPosts(){
    return axios.get(postsURL);
}

function getUser(){
    return axios.get(userURL);
}

Promise
    .all([getPosts(), getUser()])
    .then(response => {
        const posts = response[0].data;
        const users = response[1].data;
        return [posts, users];
    })
    .then(([posts, users]) => {
        let postListHtml = `<ul>`;
        posts.map(post => {
            let user = users.find(user => user.id === post.userId);
            postListHtml +=
                `<li class="post-content-area">
                    <img src="./images/avt${post.userId}.jpg">
                    <p class="username">${user.username}</p>
                    <div class="post-content">
                        <p class="post-title">${post.title}</p>
                        <p class="post-body">${post.body}</p>
                        <button onclick="viewPostFunc(${post.id}, ${post.userId})">Xem</button>`;
            if (post.userId === 1) {
                postListHtml +=
                        `<button class="edit-post" onclick="editPostDisplayFunc(event)">Sửa</button>
                        <button class="delete-post" onclick="deletePostFunc(${post.id})">Xóa</button>
                    </div>
                    <div class="edit-post-content">
                        <label>Tiêu đề:</label>
                        <input type="textarea" name="edit-post-title" value="${post.title}">
                        <br>
                        <label>Nội dung:</label><input type="textarea" name="edit-post-body" value="${post.body}">
                        <br>
                        <button class="cancel-edit-post" onclick="cancelEditPostFunc(event)">Hủy</button>
                        <button class="edit-post-button" onclick="editPostFunc(${post.id}, event)">Cập nhật</button>
                    </div>
                </li>`;
            }
            else {
                postListHtml += `</div></li>`
            }
        });
        postListHtml += `</ul>`;
        postListElement.innerHTML = postListHtml;
    })
    .catch((error) => {
        console.log("Error!");
    })

creatPostButton.addEventListener("click", () => {
    creatPost.style.display = "block";
});

cancelPost.addEventListener("click", () => {
    creatPost.style.display = "none";
    creatPostTitleElement.value = "";
    creatPostBodyElement.value = "";
})

postPost.addEventListener("click", () => {
    creatPostFunc(creatPostTitleElement.value, creatPostBodyElement.value);
    creatPostTitleElement.value = "";
    creatPostBodyElement.value = "";
});

function editPostDisplayFunc(event){
    event.currentTarget.parentElement.style.display = "none";
    event.currentTarget.parentElement.nextElementSibling.style.display = "block";
}

function cancelEditPostFunc(event){
    event.currentTarget.parentElement.style.display = "none";
    event.currentTarget.parentElement.previousElementSibling.style.display = "block";
}

function creatPostFunc(postTitle, postBody){
    fetch(postsURL, {
        method: 'POST',
        body: JSON.stringify({
            title: postTitle,
            body: postBody,
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
    creatPost.style.display = "none";
    setTimeout(() => {
        alert("Tạo bài viết thành công!")
    }, 500);
}

function getPostById(index){
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${index}`);
}

function getUserById(index){
    return axios.get(`https://jsonplaceholder.typicode.com/users/${index}`);
}

function viewPostFunc(postId, userId){
    mainPage.style.display = "none";
    viewPostDetal.style.display = "block";

    Promise
    .all([getPostById(postId), getUserById(userId)])
    .then(response => {
        const post = response[0].data;
        const user = response[1].data;
        return [post, user];
    })
    .then(([post, user]) => {
        let viewPostHtml =
        `<div class="post-content-area">
            <img src="./images/avt${post.userId}.jpg">
            <p class="username">${user.username}</p>
            <div class="post-content">
                <p class="post-title">${post.title}</p>
                <p class="post-body">${post.body}</p>
                <button onclick="backMainPageFunc()">Quay lại</button>`;
        if (post.userId === 1){
            viewPostHtml +=
                `<button class="edit-post" onclick="editPostDisplayFunc(event)">Sửa</button>
                <button class="delete-post" onclick="deletePostFunc(${post.id})">Xóa</button>
                </div>
                <div class="edit-post-content">
                    <label>Tiêu đề:</label>
                    <input type="textarea" name="edit-post-title" value="${post.title}">
                    <br>
                    <label>Nội dung:</label><input type="textarea" name="edit-post-body" value="${post.body}">
                    <br>
                    <button class="cancel-edit-post" onclick="cancelEditPostFunc(event)">Hủy</button>
                    <button class="edit-post-button" onclick="editPostFunc(${post.id}, event)">Cập nhật</button>
                </div>
            </div>`
        }
        else {
            viewPostHtml += `</div></div>`;
        }
        viewPostDetal.innerHTML = viewPostHtml;
    })
}

function backMainPageFunc(){
    mainPage.style.display = "block";
    viewPostDetal.style.display = "none";
}

function editPostFunc(index, event){
    fetch(`https://jsonplaceholder.typicode.com/posts/${index}`, {
        method: 'PUT',
        body: JSON.stringify({
            id: index,
            title: event.currentTarget.parentElement.firstElementChild.nextElementSibling.value,
            body: event.currentTarget.previousElementSibling.previousElementSibling.previousElementSibling.value,
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
    setTimeout(() => {
        alert("Sửa bài viết thành công!")
    }, 500);
    cancelEditPostFunc(event);
}

function deletePostFunc(index){
    fetch(`https://jsonplaceholder.typicode.com/posts/${index}`, {
        method: 'DELETE',
    });
    setTimeout(() => {
        alert("Xóa bài viết thành công!")
    }, 500);
}