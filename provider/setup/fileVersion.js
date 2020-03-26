// define global.FILE_VERSION for dist file version. see render/Index.js template.
const version = require("../../package").version;

// generate random string like: VL8fcfzQ84xBCJqoJCf4nR2u
const versionHash = function () {
    let text = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < 24; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}


// define global.FILE_VERSION for dist file version. see render/Index.js template.
// global.FILE_VERSION  is 'npm' or 'random' or 'disable'
switch (process.env.FILE_VERSION_TYPE) {
    case 'npm':
        global.FILE_VERSION = '?v=' + version; // value of npm package.js verion property
        break;
    case 'random':
        global.FILE_VERSION = '?v=' + versionHash(); // random 24 char string
        break;
    case 'disable':
        global.FILE_VERSION = ''; // without version
        break;
    default:
        console.error('env.FILE_VERSION is not valid!',  global.FILE_VERSION)
}
