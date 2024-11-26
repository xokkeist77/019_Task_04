import "./index.css";
import { sum } from "./main";
import jsLogo from "./JS_Logo.png";

const array = [1, 2, 3].map((i) => i + 1);
function hello(...args) {
  console.log(`####: Hello WebPack!`, args[0], args[1]);
}

hello(sum(5000000, 300), array);
const img = document.createElement("img");
img.src = jsLogo;
document.querySelector("body").append(img);
console.log(jsLogo);
