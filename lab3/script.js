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

$(function(){
    $.getJSON('http://localhost/data.json', function(data) {
		Menu(data);
    });
});

async function Menu(hash) {
  var element1 = await document.getElementById("drop1");
  var element2 = await document.getElementById("drop2");
  var element3 = await document.getElementById("drop3");
  var element4 = await document.getElementById("drop4");
  
  for (i in hash) {
	Object.values(hash[i][1]).forEach(function(arr, index) {
		arr.forEach(function(el) {
			var para = document.createElement("li");
			var node = document.createTextNode('');
			para.appendChild(node);

		    if (hash[i][0] == "biography") {
			  var element = element1;
			} else if (hash[i][0] == "subjects") {
			  var element = element2;
			} else if (hash[i][0] == "schedule") {
			  var element = element3;
			} else if (hash[i][0] == "achievement") {
			  var element = element4;
			}
			element.appendChild(para);
			var link = document.createElement("a");
			var nodelink = document.createTextNode(el);
			link.appendChild(nodelink);
			para.appendChild(link);
			link.href=Object.keys(hash[i][1])[index];
		});
	});
  }
}


