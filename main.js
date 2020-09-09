let myList = []
let week = 1, dayStart = new Date("9-7-2020"), nowWeek;
let previous = document.getElementById("previous");
let next = document.getElementById("next");
let showWeek = document.getElementById("show-week");
let morning = document.getElementsByClassName("morning");
let afternoon = document.getElementsByClassName("afternoon");
let evening = document.getElementsByClassName("evening");
let today = document.getElementById("today");

let username = "hongdatchy";
let password = "hongdat10";
let userameInput = document.getElementById("username-input");
let passwordInput = document.getElementById("password-input");
let btnLogin = document.getElementById("btn-login");
setInterval(function(){
    let date = new Date();
    today.innerHTML = `Thứ ${date.getDay()} <span class ="text-danger">${date.getHours() < 10 ? "0" + date.getHours():date.getHours()}:${date.getMinutes() < 10 ? "0" + date.getMinutes():date.getMinutes()}:${date.getSeconds() < 10 ? "0" + date.getSeconds():date.getSeconds()}</span> Time không dừng lại => đừng dại ngồi chơi :))`;
}, 1000);
ajaxGet("https://5f5741881a07d600167e693d.mockapi.io/api/v1/product").then(function(resole){
    myList = resole;
    console.log(myList);
    // render(week);
})

function getweek(){
    week += Math.floor((new Date().getTime() - dayStart.getTime())/(7*1000*24*3600));
    nowWeek = week;
}
getweek();
function render(week){
    thisWeekList = myList.filter(function(item){
        for(let i=0; i< item.week.length; i++){
            if(item.week[i] == week){
                return true;
            }
        }
        return false;
    })
    for(let i=0; i< 7; i++){
        let thisDayList = thisWeekList
        .filter(function(item){
            return item.time.indexDay == i+1;
        })
        .sort(function(a,b){
            return a.time.start.split(":")[0] - b.time.start.split(":")[0];
        })
        let thisMorningList = thisDayList.filter(function(item){
            return Number(item.time.end.split(":")[0]) < 12;
        })
        let thisAfternoonList = thisDayList.filter(function(item){
            return Number(item.time.start.split(":")[0]) >= 12 && Number(item.time.end.split(":")[0]) <= 17;
        })
        let thisEveningList = thisDayList.filter(function(item){
            return Number(item.time.start.split(":")[0]) >=17;
        })
        morning[i].innerHTML = myMap(thisMorningList).join("");
        afternoon[i].innerHTML = myMap(thisAfternoonList).join("");
        evening[i].innerHTML = myMap(thisEveningList).join("");
    }
}
function myMap(list){
    return list.map(function(item){
        return `<li class=${item.isTheoryClass? "bg-success": "bg-warning"}>
                    <div class="time">
                    ${item.time.start} - ${item.time.end}
                    </div>
                    <div class="name">
                        ${item.name}
                    </div>
                    <div class="location">
                        ${item.location}
                    </div>
                </li>`
    })
}
updateShowWeek(week);
next.onclick = function(){
    if(week<18){
        week++;
        render(week);
    }
    updateShowWeek(week)
}
previous.onclick = function(){
    if(week>1){
        week--;
        render(week);
    }
    updateShowWeek(week);
}
function updateShowWeek(week){
    showWeek.innerHTML = "Tuần " + week;
    if(week == nowWeek){
        showWeek.classList.add("bg-danger")
    }else{
        showWeek.classList.remove("bg-danger")
    }
}


