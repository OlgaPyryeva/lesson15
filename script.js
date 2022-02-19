const DomElement = function (selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.backgroundColor = bg;
  this.fontSize = fontSize;
};

DomElement.prototype.createElemMethod = function (text) {
  if (this.selector[0] === ".") {
    const newDiv = document.createElement("div");
    newDiv.className = this.selector.slice(1);
    newDiv.textContent = text;
    newDiv.style.cssText = `
       height:${this.height}px;
       width:${this.width}px;
       background-color:${this.backgroundColor};
       font-size:${this.fontSize}px`;

    document.body.prepend(newDiv);
  }
  if (this.selector[0] === "#") {
    const newP = document.createElement("p");
    newP.id = "second";
    newP.textContent = "новый параграф";
    newP.style.cssText = `
       height:${this.height}px;
       width:${this.width}px;
       background-color:${this.backgroundColor};
       font-size:${this.fontSize}px`;

    document.body.prepend(newP);
  }
};

const domElem = new DomElement(".block", 10, 10, "red", 10);
domElem.createElemMethod("текст");
