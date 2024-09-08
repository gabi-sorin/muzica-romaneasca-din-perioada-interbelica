var x;
var scroll_amount;

document.addEventListener("DOMContentLoaded", function () {
    var search_bar_elements = [
        document.getElementsByClassName('iframe-container')[0],
        document.getElementsByClassName('search-wrapper')[0],
        document.getElementsByClassName('search-input')[0],
        document.getElementsByClassName('suggestions-wrap')[0],
        document.getElementsByClassName('suggestions')[0],
    ];
    document.addEventListener("keydown", function (event) {
        let activEl = document.activeElement;
        if(search_bar_elements.includes(document.getElementsByClassName('suggestions-li')[0]) === false){
            let li = document.getElementsByClassName('suggestions-li');
            let a = document.getElementsByClassName('suggestions-a');
            for(let i = 0 ; i < li.length ; i++)
            {
                search_bar_elements.push(li[i]);
            }
            for(let i = 0 ; i < a.length ; i++)
            {
                search_bar_elements.push(a[i]);
            }

        }

        if (!search_bar_elements.includes(activEl)) {
            switch (event.key) {
                case "ArrowDown":
                    event.preventDefault();
                    set_variables();
                    scroll_(1);  // Scroll down
                    break;
                case "ArrowUp":
                    event.preventDefault();
                    set_variables();
                    scroll_(-1);  // Scroll up
                    break;
                default:
                    break;
            }
        }
    });
});

function set_variables() {
    x = window.scrollY;        // Current scroll position
    scroll_amount = 10;        // Higher value for faster scrolling (adjust as needed)
}

function scroll_(dir) {
    window.scrollBy({
        left: 0,
        top: dir * scroll_amount,
        behavior: 'instant'
    }
    );
}

