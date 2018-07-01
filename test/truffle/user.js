var Users = artifacts.require("./Users.sol");

contract('User', function(accounts) {
    let myUserContract;
    let owner    = accounts[0];
    let nonOwner = accounts[1];
    let tryCatch = require("./exceptions.js").tryCatch;
    let errTypes = require("./exceptions.js").errTypes;
});
