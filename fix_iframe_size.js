function change(nr)
{
    let iframe = document.getElementsByClassName("search-bar-iframe-mic")[0];
    if( iframe === undefined)
        iframe = document.getElementsByClassName("search-bar-iframe-mare")[0];
    if(nr==0)
        {
            if(iframe.classList.contains("search-bar-iframe-mic") == false)
                iframe.setAttribute("class","search-bar-iframe-mic");
            if(iframe.classList.contains("search-bar-iframe-mare"))
                iframe.classList.remove("search-bar-iframe-mare");
        }
    else
        {
            if(iframe.classList.contains("search-bar-iframe-mare") == false)
                iframe.setAttribute("class","search-bar-iframe-mare");
            if(iframe.classList.contains("search-bar-iframe-mic"))
                iframe.classList.remove("search-bar-iframe-mic");
        }

}