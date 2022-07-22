const search = document.querySelector('#search');

function start() {
    let widthCurrent = search.offsetWidth;
    document.addEventListener("click", (evt) => {
        let widthNew = widthCurrent + 150 + "px";

        let targetEl = evt.target; // clicked element      
        do {
            if (targetEl == search) {
                // This is a click inside Element, does nothing, just return.
                search.style.width = widthCurrent < 205 ? widthNew : widthCurrent;
                search.style.borderBottom = "1px solid"
                return;
            }
            targetEl = targetEl.parentNode; // Go up the DOM

        } while (targetEl); // This is a click outside. 
        search.style.width =  205 - 150 +"px";
        search.style.borderBottom = "none"
    });
}

start();