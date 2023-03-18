function getImagePaths(directory) {
  let skills = [];
  directory.keys().map((item, index) => skills.push(item.replace("./", "")));
  return skills;
}

const directory = require.context("./", false, /\.(png|jpe?g|svg)$/);
let imagePaths = getImagePaths(directory);

let skills = [];
imagePaths.map((path) => skills.push(require("./" + path)));
export default skills