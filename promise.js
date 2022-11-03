"use strict";

const getUser = (userID) => {
  return new Promise((resolve) => {
    console.log("user loading...");
    setTimeout(() => {
      resolve({ id: userID, username: "arslonbekXX" }); // from server
    }, 2000);
  });
};

const getRepos = (username, callback) => {
  return new Promise((resolve) => {
    console.log("repos loading...");
    setTimeout(() => {
      resolve([
        { id: "repo-1", name: "pdp-g-4" },
        { id: "repo-2", name: "famic" },
      ]); // from server
    }, 2000);
  });
};

const getCommits = (repoID, callback) => {
  return new Promise((resolve) => {
    console.log("commits loading...");
    setTimeout(() => {
      resolve([
        { id: "commit-1", message: "first-commit" },
        { id: "commit-2", message: "second-commit" },
      ]); // from server
    }, 2000);
  });
};

// userID => getUser(userID) -> { id: "123", username: "arslonbekXX", birthDate: "20.12.20" }
// username => getRepos(username) -> [{id: 'repo-1', name: 'pdp-g-4'},{id: 'repo-2', name: 'famic'},...]
// repoID => getCommits(repoID) -> [{id: 'commit-1', message: 'first-commit'},{id: 'commit-2', message: 'second-commit'},]

function app() {
  getUser(123)
    .then((user) => {
      console.log("user = ", user);
      return getRepos(user.username);
    })
    .then((repos) => {
      console.log("repos = ", repos);
      return getCommits(repos[0].id);
    })
    .then((commits) => console.log("commits = ", commits));
}

async function appAsync() {
  const user = await getUser(123);
  console.log("user = ", user);

  const repos = await getRepos(user.username);
  console.log("repos = ", repos);

  const commits = await getCommits(repos[0].id);
  console.log("commits = ", commits);
}

appAsync();
