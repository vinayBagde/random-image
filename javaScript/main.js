let url = "https://dog.ceo/api/breeds/image/random";

let btn = document.querySelector("#btn");
btn.addEventListener("click", async () => {
  let link = await getInfo();
  let img = document.querySelector("#image");
  img.setAttribute("src", link.message);

});

async function getInfo() {
  let info = await fetch(url);
  return info.json();
}
