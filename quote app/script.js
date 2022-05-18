const quotes = [
  {
    id: 1,
    name: "Ace Ventura",
    job: "pet detective",
    img: "https://c-fa.cdn.smule.com/rs-s24/arr/63/8d/70b22de2-0599-4616-b764-103019b7c35e_1024.jpg",
    text: `That's None Of Your Damn Business And I'll Thank You To Stay Out Of My Personal Affairs.`,
  },
  {
    id: 2,
    name: "Lloyd Christmas",
    job: "Dog Grooming",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyl4Ykyp9e8NwUdt8jhuaXErjaFwVK-xegoQ&usqp=CAU",
    text: "I'll tell ya where. Some place warm. A place where the beer flows like wine and beautiful women instinctively flock that salmon of capastrano! I'm talking about a place called ASS-PEN!",
  },
  {
    id: 3,
    name: "Andy Kaufman",
    job: "Performance Artist",
    img: "https://media.vanityfair.com/photos/5a0ca44e81b9683f1bac033d/16:9/w_1552,h_873,c_limit/jim-carey-man-on-the-moon.jpg",
    text: "I just want real reactions. I want people to laugh from the gut, be sad from the gut - or get angry from the gut.",
  },
  {
    id: 4,
    name: "Truman Burbank",
    job: "Insurance Salesman",
    img: "https://www.pajiba.com/assets_c/2019/11/truman-show-depressing-epilogue-thumb-700xauto-218713.jpg",
    text: "Good morning, and in case I don't see ya, good afternoon, good evening, and good night!",
  },
];

// Select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  showPerson(currentItem);
});

// show quote based on item
function showPerson() {
  const item = quotes[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

// Show next quote
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > quotes.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

// show previous quote
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = quotes.length - 1;
  }
  showPerson(currentItem);
});

// show random quote
randomBtn.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * quotes.length);
  console.log(currentItem);
  showPerson();
});
