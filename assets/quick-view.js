document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".quick-view-btn").forEach(button => {
        button.addEventListener("click", function () {
            let modalId = this.getAttribute("data-product-id");
            document.getElementById(modalId).style.display = "flex";
        });
    });

    document.querySelectorAll(".close-btn").forEach(button => {
        button.addEventListener("click", function () {
            this.closest(".quick-view-modal").style.display = "none";
        });
    });

    window.addEventListener("click", function (event) {
        document.querySelectorAll(".quick-view-modal").forEach(modal => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    });
});
