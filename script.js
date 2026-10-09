const pages = [["index.html","Home"],["resume.html","Resume"],["biodata.html","Bio-data"]];
const here = location.pathname.split("/").pop() || "index.html";
const root = document.documentElement;
root.dataset.theme = localStorage.getItem("theme") || "light";

document.body.insertAdjacentHTML("afterbegin",
  `<header><nav><b>Tanush Unna</b>${pages.map(([u,t]) =>
    `<a href="${u}" class="${u === here ? "on" : ""}">${t}</a>`).join("")}
  <button class="ghost" id="theme">Dark mode</button></nav></header>`);
document.body.insertAdjacentHTML("beforeend",
  `<footer>© ${new Date().getFullYear()} Tanush Unna · Built with HTML, CSS & JavaScript</footer>`);

const btn = document.getElementById("theme");
const sync = () => btn.textContent = root.dataset.theme === "dark" ? "Light mode" : "Dark mode";
btn.onclick = () => {
  root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
  localStorage.setItem("theme", root.dataset.theme);
  sync();
};
sync();

document.querySelectorAll("[data-print]").forEach(b => b.onclick = () => window.print());
