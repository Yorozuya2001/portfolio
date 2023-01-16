const d = document;

export default function api(url,query) {
  const $template = d.getElementById("Mystack").content,
    $stack = d.querySelector(query),
    $fragment = d.createDocumentFragment();

  fetch(url)
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
      console.log(json);
      json.forEach((el) => {
        $template.querySelector("div img").src = el.img;
        $template.querySelector("div img").alt = el.name;
        $template.querySelector("div h3").textContent = el.name;

        let $clone = d.importNode($template, true);
        $fragment.appendChild($clone);

        $stack.appendChild($fragment);
      });
    })
    .catch((err) => {
      console.log(err);
    });
}
