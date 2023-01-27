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
    console.log("TIMER RUNNING ID IS", intervalId);
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject("THERE IS SOME ERROR");
      }
    }, 1000);
  });
}

createPost({ title: "post 3", body: "this is post three" })
  .then(getPosts)
  .catch((err) => console.log(err));

function deletePost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (posts.length > 0) {
        const lastElement = posts.pop();
        resolve(lastElement);
      } else {
        reject("ARRAY IS EMPTY NOW");
      }
    }, 5000);
  });
}

deletePost().then(() => {
  getPosts();
  deletePost().then(() => {
    getPosts();
    deletePost().then(() => {
      getPosts();
      deletePost().catch((err) => console.log("THIS IS THE ERROR ->", err));
    });
  });
});
