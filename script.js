
function toggleSelect() {
    var select = document.getElementById("party");
    var checkbox = document.getElementById("noneOfTheAbove");

    select.disabled = checkbox.checked;
}
