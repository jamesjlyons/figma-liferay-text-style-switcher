document.getElementById("change").onclick = () => {
    parent.postMessage({ pluginMessage: { type: "change-font" } }, "*");
};
document.getElementById("changePage").onclick = () => {
    parent.postMessage({ pluginMessage: { type: "change-font-page" } }, "*");
};
document.getElementById("cancel").onclick = () => {
    parent.postMessage({ pluginMessage: { type: "cancel" } }, "*");
};
