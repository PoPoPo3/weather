fetch('2cba8e06b6125fd7c048950284e59d0d')
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
        console.log(data);
    })

.catch(function() {
    // catch any errors
});


function change_state(obj) {
    if (obj.checked) {
        //if checkbox is being checked, add a "checked" class
        obj.parentNode.classList.add("checked");
    } else {
        //else remove it
        obj.parentNode.classList.remove("checked");
    }
}