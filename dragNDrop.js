let fill = document.querySelector(".fill")
let boxes = document.querySelectorAll(".box")

console.log(fill)
console.log(boxes)

boxes.forEach(element => {
    //Both commands not working witout the target
    element.addEventListener("dragover", (event) => {
        event.preventDefault();
        return false;
    })

    element.addEventListener("dragenter", (event) => event.target.classList.add("boxHover"))
    element.addEventListener("dragleave", (event) => event.target.classList.remove("boxHover"));
   
    element.addEventListener("drop", (event) => {
        event.stopPropagation();
        event.target.classList.add("fill")

        event.target.classList.remove("boxHover")
        element.setAttribute("draggable", "true")
        return false
    });


    element.addEventListener("dragstart", (event) => {
        if (event.target.classList.contains("fill")) 
        {
            // it didn't work as per expectations
            // event.target.style.borderColor = "grey"
            // element.style.borderColor = "black"
              
            console.log("drag start")
            event.target.classList.add("hold")
            element.removeAttribute("draggable")
            setTimeout(() => {
                element.classList = "box"
            }, 0400); 
        }
    })
});
