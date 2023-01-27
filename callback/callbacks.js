const posts = [
  {
    title: "post 1",
    body: "this is post one",
    createdAt: new Date().getTime(),
  },
  {
    title: "post 2",
    body: "this is post two",
    createdAt: new Date().getTime(),
  },
];

let intervalId = 0;

function getPosts() {
  clearInterval(intervalId);
  setInterval(() => {
    let output = "";
    posts.forEach((post) => {
      output += `<li>${post.title} last updated ${
        (new Date().getTime() - post.createdAt) / 1000
      } seconds ago</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post, callback) {
  setTimeout(() => {
    posts.push({ ...post, createdAt: new Date().getTime() });
    callback();
  }, 2000);
}

createPost({ title: "Post 3", body: "This is post three" }, getPosts);
createPost({ title: "Post 4", body: "This is post four" }, getPosts);
