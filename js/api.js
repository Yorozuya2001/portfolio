const d = document;

export default function api(url) {
  const $template = d.getElementById("card-template").content,
    $projects = d.getElementById("projects"),
    $fragment = d.createDocumentFragment();

  fetch(url)
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
      json.forEach((el) => {
        $template.querySelector("h3").textContent = el.name;
        $template.querySelector("img").src = el.img;
        $template.querySelector("img").alt = `Web: ${el.name}`
        $template.getElementById("url").href = el.url;
        $template.getElementById("github").href = el.github;
        $template.getElementById("date").textContent = el.date
        $template.getElementById("description").textContent = el.type;
        $template.getElementById("tec").textContent = el.tec

        let $clone = d.importNode($template, true);
        $fragment.appendChild($clone);
      });

      $projects.appendChild($fragment);
    })
    .catch((err) => {
      console.log(err);
    });
}
