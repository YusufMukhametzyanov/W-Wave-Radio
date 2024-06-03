const podcastsItems = document.querySelectorAll(".podcasts__item");
const podcastsPics = document.querySelectorAll(".podcasts__pic");

let podcastsItemHeight;

if (matchMedia) {
  let screen = window.matchMedia("(min-width: 577px)");
  screen.addListener(changes);
  changes(screen);
}

function changes(screen) {
  if (screen.matches) {
    podcastsItems.forEach((element) => {
      if (element.clientHeight > 140) {
        podcastsItemHeight = element.clientHeight;
        podcastsItems.forEach((element) => {
          element.style.height = podcastsItemHeight + "px";
          podcastsPics.forEach((element) => {
            element.style.height = podcastsItemHeight + "px";
          });
        });
      }
    });
  }
}
