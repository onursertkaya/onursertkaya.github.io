/* Utility function for animations  */

function showSection(clicked_obj) {

    var all_content = document.querySelectorAll('.wrap .centeredContent');

    for (var i = 0; i < all_content.length; i++) {
        all_content[i].style.visibility = "hidden";
    }

    var content = document.getElementById("content_" + clicked_obj);

    var k_num_steps = 80;
    var k_update_resolution_ms = 5;
    var k_initial_opacity = "10%";

    content.style.opacity = k_initial_opacity;

    for (let i = 1; i <= k_num_steps; i++) {
        setTimeout(function timer() {
            content.style.opacity = ((i / k_num_steps).toString());
        }, i * k_update_resolution_ms);
    }


    if (content.style.visibility === "visible") {
        content.style.visibility = "hidden";
    } else {
        content.style.visibility = "visible";
    }

}
