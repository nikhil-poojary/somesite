import "../scss/heading.scss";
export default function heading() {
  const h1 = document.createElement("h1");
  const body = document.querySelector("body");
  h1.innerHTML =
    "If you take a look at the DOM .... you can see the mp4 has been injected but video doesn't show up in UI and video goes inside that gold box";
  body.appendChild(h1);
}
