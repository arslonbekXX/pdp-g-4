"use strict";

const getUser = (userID, callback) => {
  console.log("user loading...");
  setTimeout(() => {
    callback({ id: userID, username: "arslonbekXX" }); // from server
  }, 2000);
};

const getRepos = (username, callback) => {
  console.log("repos loading...");
  setTimeout(() => {
    callback([
      { id: "repo-1", name: "pdp-g-4" },
      { id: "repo-2", name: "famic" },
    ]); // from server
  }, 2000);
};

const getCommits = (repoID, callback) => {
  console.log("commits loading...");
  setTimeout(() => {
    callback([
      { id: "commit-1", message: "first-commit" },
      { id: "commit-2", message: "second-commit" },
    ]); // from server
  }, 2000);
};

// userID => getUser(userID) -> { id: "123", username: "arslonbekXX", birthDate: "20.12.20" }
// username => getRepos(username) -> [{id: 'repo-1', name: 'pdp-g-4'},{id: 'repo-2', name: 'famic'},...]
// repoID => getCommits(repoID) -> [{id: 'commit-1', message: 'first-commit'},{id: 'commit-2', message: 'second-commit'},]

function app() {
 getUser(123).eh
  getUser(123, (user) => {
    console.log("user = ", user);
    getRepos(user.username, (repos) => {
      console.log("repos = ", repos);
      getCommits(repos[0].id, (commits) => {
        console.log("commits = ", commits);
      });
    });
  });
}

app();
