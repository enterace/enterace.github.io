var params = new URLSearchParams(window.location.search);
if(
    params.has('msgtitle') &&
    params.has('msgmessage')
){
    var title = params.get('msgtitle');
    var message = params.get('msgmessage');

    const message_box = document.getElementById("message-box")
    const message_title = document.getElementById("message-title")
    const message_text = document.getElementById("message-message")
    message_box.style.display = "block"
    message_title.innerHTML = title
    message_text.innerHTML = message

}

function close_message(){
    const message_box = document.getElementById("message-box")
    message_box.style.display = "none"
    location.href = "/"
}