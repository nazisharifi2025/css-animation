const h1 = document.getElementsByTagName("h1").item(0);
const newText = document.createTextNode("in the name of allah");
const newElement = document.createElement("h1");
newElement.appendChild(newText);
h1.parentNode.appendChild(newElement);
const p = document.getElementsByTagName("p").item(0);
const newText2 = document.createTextNode("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste sed minus delectus eius perferendis alias? Ut deserunt eum nesciunt, velit, quo aspernatur dignissimos consectetur recusandae cupiditate placeat optio, harum non!");
const newElement2 = document.createElement("p");
newElement2.appendChild(newText2);
p.parentNode.appendChild(newElement2);
