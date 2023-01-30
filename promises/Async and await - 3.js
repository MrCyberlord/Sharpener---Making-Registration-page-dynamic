const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
];

function getPosts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let output = "";
      posts.forEach((arr) => {
        output += `<li>${arr.title}</li>`;
      });
      document.body.innerHTML = output;
      resolve();
    }, 2000);
  });
}
function createPost(newPost) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(newPost);
      resolve();
    }, 2000);
  });
}

function deleteRecord() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (posts.length !== 0) {
        getPosts();
        posts.pop(posts.length - 1);
        resolve(deleteRecord());
      } else {
        reject(console.log("array is empty now"));
      }
    }, 1500);
  });
}

async function a() {
  createPost({ title: "Post Three", body: "This is post three" });
  createPost({ title: "Post Four", body: "This is post Four" });

  await getPosts();
  await deleteRecord();
}
a();
