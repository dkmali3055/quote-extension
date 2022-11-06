const getBtn = document.getElementById("get");
const nameSpan = document.getElementById("name");
const span = document.getElementById("span");
const container = document.getElementById("container");

async function fetchNew() {
  const url = "https://hindi-quote-app.herokuapp.com/";
  let result = await fetch(url);
  let res = await result.json();

  chrome.storage.sync.set({ key: res });
  //console.log(res);
}

const getNew = () => {
  chrome.storage.sync.get(["key"], (result) => {
    console.log(result.key.data.id);
    span.innerHTML = result.key.data.quote;
    nameSpan.innerHTML = "- " + result.key.data.name;
    fetchNew();
  });
};
getBtn.addEventListener("click", getNew);
//document.body.style.backgroundColor = color;