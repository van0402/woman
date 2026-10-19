onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);

  const gallery = document.getElementById("gallery");
  if (gallery) {
    setTimeout(() => {
      document.body.classList.add("show-gallery");
    }, 6000);

    const items = gallery.querySelectorAll(".gallery__item");
    if (items.length > 1) {
      let activeIndex = 0;
      setInterval(() => {
        items[activeIndex].classList.remove("is-active");
        activeIndex = (activeIndex + 1) % items.length;
        items[activeIndex].classList.add("is-active");
      }, 4000);
    }
  }
};