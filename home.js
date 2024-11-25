let cv = document.getElementById("cv-page");
let proj = document.getElementById("proj-page");

cv.addEventListener("click", () => {
  window.location.pathname = "/cv.html";
});

proj.addEventListener("click", () => {
  window.location.pathname = "/proj.html";
});
/*

function pageRedirect(listEl) {
  listEl.addEventListener("click", () => {
    window.location.replace = `${listEl}.html`;
  });
}

pageRedirect(cv);
pageRedirect(proj);

*/
