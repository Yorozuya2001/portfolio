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
        $template.querySelector("img").alt = `Web: ${el.name}`;
        $template.getElementById("url").href = el.url;
        $template.getElementById("repo").href = el.repo;
        $template.getElementById(
          "date"
        ).textContent = `Ultima actualización: ${el.date}`;
        $template.getElementById(
          "description"
        ).textContent = `Descripción: ${el.type}`;
        $template.getElementById("tec").textContent = `Tecnologías: ${el.tec}`;

        el.design &&
          (($template.getElementById("url").textContent = "Probar prototipo"),
          ($template.getElementById("repo").textContent = "Ver presentación"));
        let $clone = d.importNode($template, true);
        $fragment.appendChild($clone);
      });

      $projects.appendChild($fragment);
    })
    .catch((err) => {
      console.log(err);
    });
}
