const febHolidays = [
    "I don't know why? But nuvvante pichi naku",
    "I love your eyes, chustu undipota",
	"I Love your hair",
	"I will even learn to braid it for you🥰",
	"I love everything about you💓",
	"I love you for real, so much💓",
	"I promise life long neeto unta",
	"lifelong ninnu princess laaga chusukunta",
	"you are my ego, my self-respect, ninnu evadu emi ananivanu",
    "You are my friend, and also my love😊",
    "you are my everything 🤩",
    "Happiness and sadness edina neetone share cheskovali ani untadi 🤨",
	"You're the prettiest, cutest, funniest,",
	"sweetest girl alive. 🤞✍",
	"In one word, you're just perfect.😍",
	"I'm the happiest man alive🥰",
	"I'm so grateful I met you❤️",
	"I'll always do my best to keep you happy🥺",
	"You are the most special person in my life🥰",
	"I don't want to lose you 😒",
	"And trust me I dont want anyone else 🥰",
	"There's no one better than you❤️",
	"There's some hardships, 😢",
	"but we overcame most of them and will overcome more 🥰",
	"and these made me realised how",
	"important you are in my life❤️",
    "Neeto patu eppudu kalisi undali ani undi ❤",
	"Even career kuda neeto kalise build chesukovali ani undi ✔",
	"Kalisi career grow ayyi manchiga settle avdam iddaram",
	"mee intlo kuda elagina opista, i know just how",
	"if edi workout avvakapote mee intlo valla kallu ina pattukunta",
	"naku nv unte chalu",
    "Settlee avdam, Pelli kuda chesukundam❤️",
    "You are my soulmate ✨💕",
	"I will always be there for you",
    "nee past lo unna vaalla laaga undanu. Nijamga, love chestunna and macnhiga chusukunta",
    "nee tarwate evarina",
    "nv kakunda vere ammayini kuda ranivvanu naa lifeloki 🤨",
    "aslu nee permission lekunda inko ammyini kuda chudanu",
    "Pls oppukovachu kada💓",
    "Nijanga okasari experience cheyachu kada naa love ni",
    "pakka happy ga chusukunta💖",
    "I just love you unconditionally❤",
    "You're the love of my life,",
    "I Love You So much❤️"
  ];
  const ulEl = document.querySelector("ul");
  const d = new Date();
  let daynumber = d.getMonth() == 1 ? d.getDate() - 1 : 0;
  let activeIndex = daynumber;
  const rotate = -360 / febHolidays.length;
  init();
  function init() {
    febHolidays.forEach((holiday, idx) => {
      const liEl = document.createElement("li");
      liEl.style.setProperty("--day_idx", idx);
      liEl.innerHTML = `<time datetime="2022-02-${idx + 1}">${idx + 1
        }</time><span>${holiday}</span>`;
      ulEl.append(liEl);
    });
    ulEl.style.setProperty("--rotateDegrees", rotate);
    adjustDay(0);
  }
  function adjustDay(nr) {
    daynumber += nr;
    ulEl.style.setProperty("--currentDay", daynumber);
    const activeEl = document.querySelector("li.active");
    if (activeEl) activeEl.classList.remove("active");
    activeIndex = (activeIndex + nr + febHolidays.length) % febHolidays.length;
    const newActiveEl = document.querySelector(
      `li:nth-child(${activeIndex + 1})`
    );
    document.body.style.backgroundColor = window.getComputedStyle(
      newActiveEl
    ).backgroundColor;
    newActiveEl.classList.add("active");
  }
  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowUp":
        adjustDay(-1);
        break;
      case "ArrowDown":
        adjustDay(1);
        break;
      default:
        return;
    }
  });
  