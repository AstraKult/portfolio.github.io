const btn_view_works = document.getElementById("btn_view_works")

btn_view_works.addEventListener("click", function () {
    window.scrollTo({
        top: 900,
        left: 0,
        behavior: "smooth"
    });
})

const btn_view_social_proofs = document.getElementById("btn_view_social_proofs")

btn_view_social_proofs.addEventListener("click", function () {
    window.scrollTo({
        top: 500,
        left: 0,
        behavior: "smooth"
    });
})