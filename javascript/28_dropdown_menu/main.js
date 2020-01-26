const movieObj = document.getElementsByClassName("movie");
const actorsObj = document.getElementsByClassName("actors")


console.log(movieObj);

for (let i = 0; i < movieObj.length; i++) {
    movieObj[i].onclick = function () {
        
        showActors(i)
    }
}


function showActors(movieItem) {
    for (let j = 0; j < movieObj.length; j++) {
        if (movieItem === j) {
            actorsObj[j].classList.toggle("active2");
            movieObj[j].classList.toggle("active1")

        } else {
            actorsObj[j].classList.remove("active2");
            movieObj[j].classList.remove("active1");
        }
    }
}

var ulObj = document.getElementById(`liste`);
var ulLiObj = document.getElementsByClassName(`listitem`);

// var newLi = document.createElement("li");
// var newLi2 = document.createElement("li");
// var newLi3 = document.createElement("li");

// newLi.innerHTML=`<li><a href="https://www.imdb.com/name/nm0413168/">Hugh Jackman als letztes</a></li>`;
// newLi2.innerHTML=`<li><a href="https://www.imdb.com/name/nm0413168/">Hugh Jackman als erstes</a></li>`;
// newLi3.innerHTML=`<li><a href="https://www.imdb.com/name/nm0413168/">Hugh Jackman als drittes</a></li>`;

// ulObj.appendChild(newLi);
// ulObj.appendChild(newLi);
// ulObj.appendChild(newLi);
// ulObj.insertBefore(newLi2, ulObj.firstChild);
// ulObj.insertBefore(newLi3, ulObj.childNodes[3]);


// ulObj.remove();
// ulLiObj[ulLiObj.length-1].remove();

// var newLi = document.createElement("li");
// newLi.innerText="Ich bin ein einfaches List-Item";

// var newLi5 = document.createElement("li");
// newLi5.innerHTML=`<a href="https://www.google.de">Link zu Google</a>`;


ulLiObj[1].classList.add(`bg`);