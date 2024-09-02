function change(nr)
{
    let iframe = document.getElementsByClassName("search-bar-iframe-mic")[0];
    if(nr==0)
        {
            if(iframe.classList.contains("menu-bar-iframe-mic") == false)
                iframe.setAttribute("class","menu-bar-iframe-mic");
            if(iframe.classList.contains("menu-bar-iframe-mare"))
                iframe.classList.remove("menu-bar-iframe-mare");
        }
    else
        {
            if(iframe.classList.contains("menu-bar-iframe-mare") == false)
                iframe.setAttribute("class","menu-bar-iframe-mare");
            if(iframe.classList.contains("menu-bar-iframe-mic"))
                iframe.classList.remove("menu-bar-iframe-mic");
        }

}