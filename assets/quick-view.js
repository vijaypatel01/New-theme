document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".quick-view-btn").forEach(button => {
        button.addEventListener("click", function () {
            let modalId = this.getAttribute("data-product-id");
            let modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = "flex";
                document.body.classList.add("quick-view-modal");
            }
        });
    });

    document.querySelectorAll(".quick-view-modal .close-btn").forEach(button => {
        button.addEventListener("click", function () {
            let modal = this.closest(".quick-view-modal");
            if (modal) {
                modal.style.display = "none";
                document.body.classList.remove("quick-view-modal");
            }
        });
    });

    window.addEventListener("click", function (event) {
        document.querySelectorAll(".quick-view-modal").forEach(modal => {
            if (event.target === modal) {
                modal.style.display = "none";
                document.body.classList.remove("quick-view-modal");
            }
        });
    });
});

