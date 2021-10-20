let count = 1;
const src = "https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_";
let mainElement = document.querySelector("div.main>img");
let thumbnailsElement = document.querySelector("div.thumbnails");
const Min = 1;
const Max = 19;

function prev() {
  count--;
  let url;
  if(count < Min) {
    count = Max;
    thumbnailsElement.children[0].classList.remove("selected");
  } else {
    thumbnailsElement.children[count].classList.remove("selected");
  }

  if(count < 10) {
  url = src + "0" + count + ".jpg";
} else {
  url = src + count + ".jpg";
}

mainElement.setAttribute('src', url);
thumbnailsElement.children[count - 1].classList.add("selected");
}

function next() {
  count++;
  let url;
  if(count > Max) {
    count = Min;
    thumbnailsElement.children[Max - 1].classList.remove("selected");
  } else {
    thumbnailsElement.children[count - 2].classList.remove("selected");
  }

  if(count < 10) {
  url = src + "0" + count + ".jpg";
} else {
  url = src + count + ".jpg";
}

mainElement.setAttribute('src', url);
thumbnailsElement.children[count - 1].classList.add("selected");
}
