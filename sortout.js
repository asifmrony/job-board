const alldivs = document.getElementsByClassName("filterDiv");
myAddClass(alldivs, "showDivs");

function filterSelection(anything) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    console.log(x);
    if (anything == "all") anything = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
        myRemoveClass(x[i], "showDivs");
        if (x[i].className.indexOf(anything) > -1) {
            myAddClass(x[i], "showDivs");
        }
    }
}


// Show filtered elements
function myAddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    console.log(arr1);
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}


// Hide elements that are not selected
function myRemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}