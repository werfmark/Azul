var factoryCount = 5;
for (var i = 0; i < factoryCount; ++i) {
    var factorycont = CreateFactoryContainer(i, factoryCount);
    factorycont.appendChild(CreateContainerImg());
    for (var j = 0; j < 4; ++j) {
        factorycont.appendChild(CreateTile(i, j));
    }
    document.body.appendChild(factorycont);
}
function CreateContainerImg() {
    var factoryimg = document.createElement("img");
    factoryimg.src = "Content/Images/factory.jpg";
    factoryimg.className = "factoryimg";
    return factoryimg;
}
function CreateTile(i, j) {
    var tile = document.createElement("div");
    tile.classList.add("tile", "tile" + j);
    tile.addEventListener("mouseover", function (event) {
        ActivateTileBorder(event);
    }, true);
    tile.addEventListener("mouseleave", function (event) {
        DeactivateTileBorder(event);
    }, true);
    var idnum = 4 * i + j;
    tile.id = "t" + idnum.toString();
    return tile;
}
function ActivateTileBorder(event) {
    event.currentTarget.style.border = "thick solid yellow";
    var node = event.currentTarget;
    while (node = node.nextSibling) {
        if (node.nodeType === 1 && node.nodeName.toUpperCase() === "DIV")
            node.style.border = "thick solid yellow";
    }
    node = event.currentTarget;
    while (node = node.previousSibling) {
        if (node.nodeType === 1 && node.nodeName.toUpperCase() === "DIV")
            node.style.border = "thick solid yellow";
    }
}
function DeactivateTileBorder(event) {
    event.currentTarget.style.border = "none";
    var node = event.currentTarget;
    while (node = node.nextSibling) {
        if (node.nodeType === 1 && node.nodeName.toUpperCase() === "DIV")
            node.style.border = "none";
    }
    node = event.currentTarget;
    while (node = node.previousSibling) {
        if (node.nodeType === 1 && node.nodeName.toUpperCase() === "DIV")
            node.style.border = "none";
    }
}
function CreateFactoryContainer(i, total) {
    var factorycont = document.createElement("div");
    factorycont.className = "factorycontainer";
    factorycont.id = "factorycontainer" + i;
    if (total === 5) {
        switch (i) {
            case 0: {
                factorycont.style.top = "10px";
                factorycont.style.left = "400px";
                break;
            }
            case 1: {
                factorycont.style.top = "250px";
                factorycont.style.left = "750px";
                break;
            }
            case 2: {
                factorycont.style.top = "600px";
                factorycont.style.left = "600px";
                break;
            }
            case 3: {
                factorycont.style.top = "600px";
                factorycont.style.left = "200px";
                break;
            }
            case 4: {
                factorycont.style.top = "250px";
                factorycont.style.left = "50px";
                break;
            }
        }
    }
    return factorycont;
}
//# sourceMappingURL=script.js.map