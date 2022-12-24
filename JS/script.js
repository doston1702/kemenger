let mySwiper = new Swiper(".mySwiper", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 20,
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
});
let mySwiper2 = new Swiper(".mySwiper2", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 20,
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
});

//Тут кнопка оставитьт заявку
let main_btn = document.querySelector(".main-btn");
let form_box = document.querySelector(".form-box");
let form_btn = document.querySelector(".form-btn");
let form2_box = document.querySelector(".form-2-box");

main_btn.onclick = () => {
  form_box.classList.toggle("d-none");
};
form_btn.onclick = () => {
  form_box.classList.toggle("d-none");
  form2_box.classList.toggle("d-none");
};
form2_box.onclick = () => {
  form2_box.classList.toggle("d-none");
};

let slider_btn = document.querySelectorAll(".slider-btn");

for (let item of slider_btn) {
  item.onclick = () => {
    form_box.classList.toggle("d-none");
  };
}

document.addEventListener("keydown", function (event) {
  if (event.keyCode == 27) {
    form_box.classList.add("d-none");
    form2_box.classList.add("d-none");
  }
});

document.addEventListener("keydown", function (event) {
  if (event.code == "KeyO" && event.altKey) {
    form_box.classList.remove("d-none");
  }
});

//Тут кнопка подробнее
let other1 = document.querySelector(".others-1");
let other2 = document.querySelector(".others-2");
let other3 = document.querySelector(".others-3");
let other4 = document.querySelector(".others-4");
let other6 = document.querySelector(".others-6");
let none1 = document.querySelector(".none1");
let none2 = document.querySelector(".none2");
let none3 = document.querySelector(".none3");
let none4 = document.querySelector(".none4");
let none6 = document.querySelector(".none6");
console.log(other4, other6);

other1.onclick = () => {
  event.preventDefault();
  none1.classList.remove("d-none");
  other1.classList.add("d-none");
};
other2.onclick = () => {
  event.preventDefault();
  none2.classList.remove("d-none");
  other2.classList.add("d-none");
};
other3.onclick = () => {
  event.preventDefault();
  none3.classList.remove("d-none");
  other3.classList.add("d-none");
};
other4.onclick = (e) => {
  e.preventDefault();
  none4.classList.remove("d-none");
  other4.classList.add("d-none");
};
other6.onclick = (e) => {
  e.preventDefault();
  none6.classList.remove("d-none");
  other6.classList.add("d-none");
};

//Тут якорь
let links_wrapper = document.querySelector(".links-wrapper").children;
let h_link1 = links_wrapper[0];
let h_link2 = links_wrapper[1];
let h_link3 = links_wrapper[2];
let h_link4 = links_wrapper[3];
let h_link5 = links_wrapper[4];
let sec1 = document.querySelector(".section2").offsetTop;
let sec2 = document.querySelector(".section4").offsetTop;
let sec3 = document.querySelector(".section5").offsetTop;
let sec4 = sec3 + 450;
let sec5 = document.querySelector(".section6").offsetTop;

let jakor = () => {
  event.preventDefault();
  window.scrollTo({
    top: sec1,
    left: 0,
    behavior: "smooth",
  });
};
h_link1.addEventListener("click", jakor);

let jakor2 = () => {
  event.preventDefault();
  window.scrollTo({
    top: sec2,
    left: 0,
    behavior: "smooth",
  });
};
h_link2.addEventListener("click", jakor2);

let jakor3 = () => {
  event.preventDefault();
  window.scrollTo({
    top: sec3,
    left: 0,
    behavior: "smooth",
  });
};
h_link3.addEventListener("click", jakor3);

let jakor4 = () => {
  event.preventDefault();
  window.scrollTo({
    top: sec4,
    left: 0,
    behavior: "smooth",
  });
};
h_link4.addEventListener("click", jakor4);

let jakor5 = () => {
  event.preventDefault();
  window.scrollTo({
    top: sec5,
    left: 0,
    behavior: "smooth",
  });
};
h_link5.addEventListener("click", jakor5);

let footer_links = document.querySelector(".footer-links-wrapper").children;
let f_link1 = footer_links[0];
let f_link2 = footer_links[1];
let f_link3 = footer_links[2];
let f_link4 = footer_links[3];
let f_link5 = footer_links[4];

f_link1.addEventListener("click", jakor);
f_link2.addEventListener("click", jakor2);
f_link3.addEventListener("click", jakor3);
f_link4.addEventListener("click", jakor4);
f_link5.addEventListener("click", jakor5);

//Тут ночной режим
let night_mode = document.querySelector(".night-mode");
let night_round = document.querySelector(".night-button");
let body = document.body;
let header_links = document.querySelector(".links-wrapper");
let section2 = document.querySelector(".section2");
let section4 = document.querySelector(".section4");
let slider = document.querySelector(".mySwiper");
let next_btn = document.querySelector(".n-btn");
let prev_btn = document.querySelector(".p-btn");
let form1 = document.querySelector(".form-1");
let form2 = document.querySelector(".form-2");
let menu_open = document.querySelector(".menu-btn");
let menu_close = document.querySelector(".close-menu");

night_mode.addEventListener("click", function () {
  section2.classList.toggle("orange-color");
  night_mode.classList.toggle("night-right");
  night_mode.classList.toggle("night-left");
  night_round.classList.toggle("left-pos");
  night_round.classList.toggle("right-pos");
  body.classList.toggle("black-bg");
  header_links.classList.toggle("white-color");
  section4.classList.toggle("black-bg");
  slider.classList.toggle("white-bg");
  next_btn.classList.toggle("white-color");
  prev_btn.classList.toggle("white-color");
  form1.classList.toggle("grey-bg");
  form2.classList.toggle("grey-bg");
  menu_open.classList.toggle("inverter");
  menu_close.classList.toggle("inverter");
});

document.addEventListener("keydown", function (event) {
  if (event.code == "KeyN" && event.shiftKey) {
    section2.classList.toggle("orange-color");
    night_mode.classList.toggle("night-right");
    night_mode.classList.toggle("night-left");
    night_round.classList.toggle("left-pos");
    night_round.classList.toggle("right-pos");
    body.classList.toggle("black-bg");
    header_links.classList.toggle("white-color");
    section4.classList.toggle("black-bg");
    slider.classList.toggle("white-bg");
    next_btn.classList.toggle("white-color");
    prev_btn.classList.toggle("white-color");
    form1.classList.toggle("grey-bg");
    form2.classList.toggle("grey-bg");
    menu_open.classList.toggle("inverter");
    menu_close.classList.toggle("inverter");
  }
});

//Scroll indicator
window.onscroll = function () {
  myFunction();
};

function myFunction() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

let scroller = document.querySelector(".header");

document.addEventListener("keydown", function (event) {
  if (event.code == "KeyI" && event.ctrlKey) {
    scroller.classList.toggle("d-none");
  }
});

//Pasxalka
document.addEventListener("keydown", function (event) {
  if (event.code == "KeyY") {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
  }
});

//Certificate onclick image
let cert1 = document.querySelector(".cert-1");
let cert2 = document.querySelector(".cert-2");
let cert3 = document.querySelector(".cert-3");
let cert4 = document.querySelector(".cert-4");
let for_cert1 = document.querySelector(".for-cert-1");
let for_cert2 = document.querySelector(".for-cert-2");
let for_cert3 = document.querySelector(".for-cert-3");
let for_cert4 = document.querySelector(".for-cert-4");

cert1.addEventListener("click", function () {
  for_cert1.classList.toggle("d-none");
  cert1.style.opacity = 0;
});
for_cert1.addEventListener("click", function () {
  for_cert1.classList.toggle("d-none");
  cert1.style.opacity = 1;
});

cert2.addEventListener("click", function () {
  for_cert2.classList.toggle("d-none");
  cert2.style.opacity = 0;
});
for_cert2.addEventListener("click", function () {
  for_cert2.classList.toggle("d-none");
  cert2.style.opacity = 1;
});

cert3.addEventListener("click", function () {
  for_cert3.classList.toggle("d-none");
  cert3.style.opacity = 0;
});
for_cert3.addEventListener("click", function () {
  for_cert3.classList.toggle("d-none");
  cert3.style.opacity = 1;
});

cert4.addEventListener("click", function () {
  for_cert4.classList.toggle("d-none");
  cert4.style.opacity = 0;
});
for_cert4.addEventListener("click", function () {
  for_cert4.classList.toggle("d-none");
  cert4.style.opacity = 1;
});

document.addEventListener("keydown", function (event) {
  if (event.keyCode == 27) {
    for_cert1.classList.add("d-none");
    cert1.style.opacity = 1;
    for_cert2.classList.add("d-none");
    cert2.style.opacity = 1;
    for_cert3.classList.add("d-none");
    cert3.style.opacity = 1;
    for_cert4.classList.add("d-none");
    cert4.style.opacity = 1;
  }
});

//Адаптация для js
let body_width = document.body.clientWidth;

if (body_width <= 1360) {
  sec4 = sec3 + 650;
}

if (body_width <= 1260) {
  mySwiper = new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 20,
    navigation: {
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next",
    },
  });
  mySwiper2 = new Swiper(".mySwiper2", {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 20,
    navigation: {
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next",
    },
  });
}
if (body_width <= 760) {
  mySwiper = new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next",
    },
  });
  mySwiper2 = new Swiper(".mySwiper2", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next",
    },
  });
  sec4 = sec3 + 1000;
}
if (body_width < 540) {
  let body_children = document.body.children;
  let sorry_box = document.querySelector(".sorry-box");
  for (let item of body_children) {
    item.classList.add("d-none");
  }
  sorry_box.classList.remove("d-none");
}

//Burger Menu
let menu_main = document.querySelector(".menu");
menu_open.addEventListener("click", function () {
  menu_main.classList.toggle("d-none");
  menu_open.classList.toggle("d-none");
});
menu_close.addEventListener("click", function () {
  menu_main.classList.toggle("d-none");
  menu_open.classList.toggle("d-none");
});

document.addEventListener("keydown", function () {
  if (event.keyCode == 27) {
    menu_main.classList.add("d-none");
    menu_open.classList.remove("d-none");
  }
});

let b_link1 = document.querySelector(".ml-1");
let b_link2 = document.querySelector(".ml-2");
let b_link3 = document.querySelector(".ml-3");
let b_link4 = document.querySelector(".ml-4");
let b_link5 = document.querySelector(".ml-5");

b_link1.addEventListener("click", jakor);
b_link2.addEventListener("click", jakor2);
b_link3.addEventListener("click", jakor3);
b_link4.addEventListener("click", jakor4);
b_link5.addEventListener("click", jakor5);

//Drag And Drop for photos (1)
console.warn(
  "Drag and Drop: меняю аттрибуты 'src' первой и последней картинки, вот эти аттрибуты"
);
let drag_and_drop = () => {
  let items = document.querySelectorAll(".certificate-wrapper .cert");
  let delay_time = 300;
  let first_src;
  let last_src;
  for (let item of items) {
    item.classList.remove("over");
  }

  let dr_st = function () {
    this.style.opacity = 0.4;
    for (let item of items) {
      if (item == this) {
        first_src = item.getAttribute("src");
        console.log(first_src);
      }
    }
  };
  let dr_end = function () {
    this.style.opacity = 1;
  };
  let dr_ov = function (event) {
    event.preventDefault();
  };
  let dr_entr = function () {
    this.classList.add("over");
  };
  let dr_lv = function () {
    this.classList.remove("over");
  };
  let dr_op = function () {
    this.classList.remove("over");
    for (let item of items) {
      if (item == this) {
        last_src = item.getAttribute("src");
        console.log(item.getAttribute("src"));
        setTimeout(() => {
          item.setAttribute("src", first_src);
        }, delay_time);
      }
    }
  };
  let dr_end2 = function () {
    for (let item of items) {
      if (item == this) {
        setTimeout(() => {
          item.setAttribute("src", last_src);
        }, delay_time);
      }
    }
  };

  for (let item of items) {
    item.addEventListener("dragover", dr_ov);
    item.addEventListener("dragenter", dr_entr);
    item.addEventListener("dragleave", dr_lv);
    item.addEventListener("drop", dr_op);
    item.addEventListener("dragstart", dr_st);
    item.addEventListener("dragend", dr_end);
    item.addEventListener("dragend", dr_end2);
  }
};
drag_and_drop();
