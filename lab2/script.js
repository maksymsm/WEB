var el = document.getElementsByClassName('menu-item');

for(var i=0; i<el.length; i++) {
   el[i].addEventListener("mouseenter", showSub, false);
   el[i].addEventListener("mouseleave", hideSub, false);
}

function showSub(e) {
   if(this.children.length>1) {
      this.children[1].style.height = "auto";
      this.children[1].style.overflow = "visible";
      this.children[1].style.opacity = "1";
   } else {
      return false;
   }
}

function hideSub(e) {
    if(this.children.length>1) {
      this.children[1].style.height = "0px";
      this.children[1].style.overflow = "hidden";
      this.children[1].style.opacity = "0";
    } else {
       return false;
    }
}

var mas = [
  ["Max Smetana", "Albert Einstein", "Max Planck", "Marie Curie", "Isaac Newton"],
  ["KP specialty", "KV specialty", "KM specialty"],
  ["KV-61 group", "KV-62 group", "KV-63 group"],
  ["Steve Jobs", "Bill Gates", "Mark Zuckerberg", "Elon Musk", "Max Smetana"]
];

var linking = [
  ["biography.html" ,"https://en.wikipedia.org/wiki/Albert_Einstein", "https://en.wikipedia.org/wiki/Max_Planck", "https://en.wikipedia.org/wiki/Marie_Curie", "https://en.wikipedia.org/wiki/Isaac_Newton"],
  ["https://www.istu.edu.ua/%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BD%D0%B0_%D1%96%D0%BD%D0%B6%D0%B5%D0%BD%D0%B5%D1%80%D1%96%D1%8F/", "http://it-kntu.kr.ua/bakalavr-komp_yuterna-inzheneriya/", "https://edunews.ru/entrants/okso/matematicheskie-i-estestvennye-nauki/matematika-i-mexanika/prikladnaya-matematika.html"],
  ["http://rozklad.kpi.ua/Schedules/ViewSchedule.aspx?g=a0462ccb-c991-46da-b19a-4478079de3a3", "http://rozklad.kpi.ua/Schedules/ViewSchedule.aspx?g=f0ed84b4-d976-45dd-9d20-39aa3ef54127", "http://rozklad.kpi.ua/Schedules/ViewSchedule.aspx?g=858dc771-1a13-41c6-a01d-6651f7f0cafd"],
  ["https://www.investors.com/news/technology/top-10-steve-jobs-achievements/", "https://www.thefamouspeople.com/profiles/william-henry-gates-iii-851.php", "https://www.thefamouspeople.com/profiles/mark-zuckerberg-6075.php", "https://logicalposts.com/top-5-achievements-made-by-elon-musk-in-2017/", "achievement.html"]
];

mas.forEach(function(arr, ind) {
   arr.forEach(function(fruit, index) {
    var para = document.createElement("li");
    var node = document.createTextNode('');
    para.appendChild(node);


    if (ind == 0) {
      var element = document.getElementById("drop1");
    } else if (ind == 1) {
      var element = document.getElementById("drop2");
    } else if (ind == 2) {
      var element = document.getElementById("drop3");
    } else if (ind == 3) {
      var element = document.getElementById("drop4");
    }
    element.appendChild(para);

    var link = document.createElement("a");
    var nodelink = document.createTextNode(fruit);
    link.appendChild(nodelink);
    para.appendChild(link);
    link.href=linking[ind][index];
  })
})
