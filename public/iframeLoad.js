
window.addEventListener("load", function() {
    console.log("inside iframeload")
    var iframe = document.createElement('iframe');
    iframe.title="YouTube video player"
    iframe.src = "sumit.html"
    iframe.width = "560px"
    iframe.height = "315px"
   
    document.body.appendChild(iframe)


})
