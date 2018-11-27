// Controls -if
var actionType = "add";
if(actionType == "add") {
    console.log("add is called");
}
else if(actionType == "mul") {
    console.log("multiply is called");
}
else {
    console.log("no action called");
}

// Controls - switch
var actionType = "add";
switch(actionType) {
    case "add" : console.log("add is called");
                    break;
    case "mul" : console.log("multiply is called");
                    break;
    default: console.log("no action called");
}

