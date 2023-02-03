console.log("console added");

let content = document.getElementsByClassName("content");
for (let i = 0; i < content.length; i++) {
  let subtitle = content[i].getElementsByClassName("subtitle");
  for (let j = 0; j < subtitle.length; j++) {
    let icon = subtitle[j].getElementsByClassName("icon");
    for (let k = 0; k < icon.length; k++) {
      icon[
        k
      ].innerHTML = `<i class="icomoon-star"></i><i class="icomoon-star"></i><i class="icomoon-star"></i><i class="icomoon-star"></i><i class="icomoon-star"></i>`;
      console.log(icon[k].innerHTML);
    }
  }
}
