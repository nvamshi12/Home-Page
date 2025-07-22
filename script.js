const label = document.getElementById("cursor-label");
document
  .querySelector(".parent-container")
  .addEventListener("mousemove", (e) => {
    if (e.target.tagName === "IMG") {
      // if the target is an image, show the label
      // move the label to the mouse position
      label.style.left = e.clientX + "px";
      label.style.top = e.clientY + "px";
      label.style.cursor = "pointer";
      label.textContent = `Open ${e.target.alt}!`;
    } else {
      // if the target is not an image, hide the label
      label.style.left = "-9999px";
      label.style.top = "-9999px";
    }
  });

document.querySelector(".parent-container").addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    // if the target is an image, open the link
    const appName = e.target.alt.replace(/ /g, "-").toLowerCase();
    const appLink = e.target.closest(".each-app").querySelector("a").href;
    console.log(appLink);
    window.open(appLink, "_top");
  }
});
