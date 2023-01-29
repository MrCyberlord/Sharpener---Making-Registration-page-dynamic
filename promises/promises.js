let lastActivity = new Date().getTime();
console.log("last activity time", lastActivity);

const posts = [
  { title: "post 1", body: "this is post one" },
  { title: "post 2", body: "this is post two" },
];

let intervalId = 0;

function getPosts() {
  clearInterval(intervalId);
  intervalId = setInterval(() => {
    let output = "";
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      resolve(post);
    }, 1000);
  });
}

function updateLastUserActivityTime() {
  return new Promise((resolve, reject) => {
    let recentTime = new Date().getTime();
    setTimeout(() => {
      resolve(recentTime());
    }, 1000);
  });
}

function updatePost() {
  Promise.all([createPost, updateLastUserActivityTime]).then(() => {
    console.log("lastActivity:", lastActivity);
  });
}

createPost({ title: "post 3", body: "this is post three" })
  .then(updatePost)
  .then(getPosts);

createPost({ title: "post 4", body: "This is post four" })
  .then(updatePost)
  .then(getPosts);

function deleteRecord() {
  return new Promise((reject, resolve) => {
    getPosts();
    setTimeout(() => {
      if (posts.length != 0) {
        resolve(deleteRecord());
      } else {
        reject(console.log("Array is empty"));
      }

      posts.pop(posts.length - 1);
    }, 1000);
  });
}

// deleteRecord();
