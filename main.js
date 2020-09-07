let myList = [
    {
        classId: 119887,
        subjectId : "ED3200",
        name: "Kĩ năng mềm",
        isTheoryClass: true,
        week: ["2", "4", "6", "8", "12", "14", "16", "18"],
        time:{
            indexDay: 5,
            start: "12:30",
            end: "14:55",
        },
        location: "D9-101"
    },
    {
        classId: 119045,
        subjectId : "ET2020",
        name: "Technical",
        isTheoryClass: true,
        week: ["2","3","4","5","6","7","8","9","11","12","13","14","15","16","17","18"],
        time:{
            indexDay: 3,
            start: "06:45",
            end: "10:05",
        },
        location: "TC-408"
    },
    {
        classId: 119036,
        subjectId : "ET3210",
        name: "Trường điện từ",
        isTheoryClass: true,
        week: ["2","3","4","5","6","7","8","9","11","12","13","14","15","16","17","18"],
        time:{
            indexDay: 2,
            start: "09:20",
            end: "11:45",
        },
        location: "TC-408"
    },
    {
        classId: 698857,
        subjectId : "ET3210",
        name: "Trường điện từ",
        isTheoryClass: false,
        week: ["9", "14", "18"],
        time:{
            indexDay: 4,
            start: "12:30",
            end: "14:55",
        },
        location: "C9-309A"
    },
    {
        classId: 119050,
        subjectId : "ET3250",
        name: "Thông tin số",
        isTheoryClass: true,
        week: ["2","3","4","5","6","7","8","9","11","12","13","14","15","16","17","18"],
        time:{
            indexDay: 4,
            start: "06:45",
            end: "09:10",
        },
        location: "TC-408"
    },
    {
        classId: 699323,
        subjectId : "ET3250",
        name: "Thông tin số",
        isTheoryClass: false,
        week: ["6", "11", "15"],
        time:{
            indexDay: 4,
            start: "12:30",
            end: "14:55",
        },
        location: "C9-202"
    },
    {
        classId: 119054,
        subjectId : "ET3310",
        name: "Lý thuyết mật mã",
        isTheoryClass: true,
        week: ["2","3","4","5","6","7","8","9","11","12","13","14","15","16","17","18"],
        time:{
            indexDay: 2,
            start: "12:30",
            end: "15:50",
        },
        location: "TC-210"
    },
    {
        classId: 119061,
        subjectId : "ET4020",
        name: "Xử lý tín hiệu số",
        isTheoryClass: true,
        week: ["2","3","4","5","6","7","8","9","11","12","13","14","15","16","17","18"],
        time:{
            indexDay: 5,
            start: "15:05",
            end: "17:30",
        },
        location: "TC-210"
    },
    {
        classId: 698794,
        subjectId : "ET4020",
        name: "Xử lý tín hiệu số",
        isTheoryClass: false,
        week: ["8", "12", "15"],
        time:{
            indexDay: 6,
            start: "06:45",
            end: "09:10",
        },
        location: "T-306"
    },
    {
        classId: 119069,
        subjectId : "ET4070",
        name: "Cơ sở truyền số liệu",
        isTheoryClass: true,
        week: ["2","3","4","5","6","7","8","9","11","12","13","14","15","16","17","18"],
        time:{
            indexDay: 3,
            start: "12:30",
            end: "14:55",
        },
        location: "TC-210"
    },
    {
        classId: 699334,
        subjectId : "ET4070",
        name: "Cơ sở truyền số liệu",
        isTheoryClass: false,
        week: ["5", "9", "14"],
        time:{
            indexDay: 2,
            start: "06:45",
            end: "09:10",
        },
        location: "C9-201"
    },
    {
        classId: 698336,
        subjectId : "FL0350",
        name: "TOEIC 350",
        isTheoryClass: true,
        week: ["2","3","4","5","6","7","8","9","11","12","13","14","15","16","17","18"],
        time:{
            indexDay: 4,
            start: "18:00",
            end: "20:30",
        },
        location: "C3B-CFL"
    },
    {
        classId: 698336,
        subjectId : "FL0350",
        name: "TOEIC 350",
        isTheoryClass: true,
        week: ["2","3","4","5","6","7","8","9","11","12","13","14","15","16","17","18"],
        time:{
            indexDay: 7,
            start: "18:00",
            end: "20:30",
        },
        location: "TC-210"
    },
    {
        classId: 638563,
        subjectId : "PE2801",
        name: "Nhảy xa",
        isTheoryClass: true,
        week: ["2","3","4","5","6","7","8","9","11","12","13","14","15","16","17","18"],
        time:{
            indexDay: 5,
            start: "08:00",
            end: "09:00",
        },
        location: "San1"
    },
    {
        classId: 0,
        subjectId : "",
        name: "Java lv3",
        isTheoryClass: false,
        week: ["1","2","3","4","5","6","7","8","9","11","12","13","14","15","16","17","18"],
        time:{
            indexDay: 3,
            start: "17:45",
            end: "19:30",
        },
        location: "inperial "
    },
    {
        classId: 0,
        subjectId : "",
        name: "Java lv3",
        isTheoryClass: false,
        week: ["1","2","3","4","5","6","7","8","9","11","12","13","14","15","16","17","18"],
        time:{
            indexDay: 5,
            start: "17:45",
            end: "19:30",
        },
        location: "inperial "
    },
    {
        classId: 0,
        subjectId : "",
        name: "Họp lab",
        isTheoryClass: false,
        week: ["1"],
        time:{
            indexDay: 3,
            start: "16:30",
            end: "17:30",
        },
        location: "inperial "
    },
    {
        classId: 0,
        subjectId : "",
        name: "FrontEnd",
        isTheoryClass: false,
        week: ["2","3","4","5","6","7","8","9","11","12","13","14","15","16","17","18"],
        time:{
            indexDay: 3,
            start: "15:00",
            end: "17:30",
        },
        location: "inperial "
    },
]
let week = 1, dayStart = new Date("9-7-2020"), nowWeek;
let previous = document.getElementById("previous");
let next = document.getElementById("next");
let showWeek = document.getElementById("show-week");
let morning = document.getElementsByClassName("morning");
let afternoon = document.getElementsByClassName("afternoon");
let evening = document.getElementsByClassName("evening");
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
render(week);
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
{/* <div class="id">
    ${item.subjectId}${item.subjectId == ""|| item.classId == 0 ? "":" - "}${item.classId == 0 ? "" : item.classId}
</div> */}