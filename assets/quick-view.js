function openQuickView(button) {
    let productHandle = button.getAttribute("data-handle");

    fetch(`/products/${productHandle}?view=quick-view`)
        .then(response => response.text())
        .then(data => {
            document.getElementById("quick-view-content").innerHTML = data;
            document.getElementById("quick-view-modal").style.display = "block";
        });
}

function closeQuickView() {
    document.getElementById("quick-view-modal").style.display = "none";
}