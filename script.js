const DomElement = function (selector, height, width, bg, fontSize) {
  this.selector = "";
  this.height = "";
  this.width = "";
  this.bg = "";
  this.fontSize = "";
};

DomElement.prototype.createElemMethod = function () {
  const elem = document.querySelectorAll(".elements");
  elem.forEach(function (item) {
    const elemText = item.textContent.split("", 1);
    const firstDiv = document.getElementById("div1");

    if (elemText[0] == ".") {
      const newDiv = document.createElement("div");
      newDiv.className = ".block";
      newDiv.textContent = "новый блок";

      document.body.before(newDiv, firstDiv);
    } else if (elemText[0] == "#") {
      const newP = document.createElement("p");
      newP.id = "second";
      newP.textContent = "новый параграф";
      document.body.before(newP, firstDiv);
    }
  });
};
const domElem = new DomElement();
domElem.createElemMethod();
