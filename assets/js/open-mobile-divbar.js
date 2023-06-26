

mobile_divbar_status = false
function toggle_mobile_divbar(){
    mobile_divbar = document.getElementById("mobile-divbar")
    mobile_divbar_status = !mobile_divbar_status
    if(mobile_divbar_status){
        mobile_divbar.style.display = "block"
    } else {
        mobile_divbar.style.display = "none"
    }
}