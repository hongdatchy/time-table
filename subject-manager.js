let myList = [];
let mySave = document.getElementById("save");
let myDelete = document.getElementById("delete");
let nameInput = document.getElementById("name-input");
let subjectIdInput = document.getElementById("subject-id-input");
let classIdInput = document.getElementById("class-id-input");
let weekInput = document.getElementById("week-input");
let dayInput = document.getElementById("day-input");
let timeInput = document.getElementById("time-input");
let locationInput = document.getElementById("location-input");
let isTheoryClassSelect = document.getElementById("is-theory-class-select");
let checkAction, indexSelectSubject;
async function getSubjectList(){
    return await ajaxGet("https://5f5741881a07d600167e693d.mockapi.io/api/v1/product").then(function(resole){
        myList = resole;
    })
}
getSubjectList().then(function(){
    render();
});
function render(){
    let innerTable = myList.map(function(item){
        return `<tr>
                    <td>${item.name}</td>
                    <td>${item.subjectId}</td>
                    <td>${item.classId  ==0 ? "" : item.classId}</td>
                    <td>${item.week}</td>
                    <td>${item.time.indexDay}</td>
                    <td>${item.time.start} - ${item.time.end}</td>
                    <td>${item.location}</td>
                    <td>${item.isTheoryClass ? "Lý thuyết":"Bài tập"}</td>
                    <td class = "justify-content-between action">
                        <button class = "btn btn-warning btn-update">Sửa</button>
                        <button class = "btn btn-danger btn-delete">Xoá</button>
                    </td>
                </tr>`
    });
    innerTable.unshift(`<tr>
                            <th id = "action-col">Tên môn học</th>
                            <th id = "subject-col">Mã học phần</th>
                            <th id = "class-col">Mã lớp</th>
                            <th id = "week-col">Tuần học</th>
                            <th id = "day-col">Thứ</th>
                            <th id = "time-col">Thời gian</th>
                            <th id = "location-col">Địa điểm</th>
                            <th id = "is-theory-col">Loại lớp</th>
                            <th colspan = "2" id = "action-col">
                                Hành động
                            </th>
                        </tr>`);
    $("table").html(innerTable.join(""));
}
document.addEventListener("click", function(e){
    let listTr = document.getElementsByTagName("tr");
    for(let i=1; i< listTr.length; i++){
        if(listTr[i] == e.target.parentNode.parentNode && e.target.classList[2] == "btn-update"){
            indexSelectSubject =i-1;
            $("#create-subject-modal").modal("show");
            checkAction = "update";
            subject = myList[indexSelectSubject];
            nameInput.value = subject.name;
            subjectIdInput.value = subject.subjectId;
            classIdInput.value = subject.classId;
            weekInput.value = subject.week;
            dayInput.value = subject.time.indexDay;
            timeInput.value = subject.time.start + "-" + subject.time.end;
            locationInput.value = subject.location;
            document.getElementsByTagName("option")[0].selected = subject.isTheoryClass ? true: false;
            document.getElementsByTagName("option")[1].selected = subject.isTheoryClass ? false: true;
        }
    }
});
document.addEventListener("click", function(e){
    let listTr = document.getElementsByTagName("tr");
    for(let i=1; i< listTr.length; i++){
        if(listTr[i] == e.target.parentNode.parentNode && e.target.classList[2] == "btn-delete"){
            indexSelectSubject =i-1;
            $("#delete-modal").modal("show");
        }
    }
});
myDelete.onclick = function(){
    
    $("#delete-modal").modal("hide");
    ajaxDelete("https://5f5741881a07d600167e693d.mockapi.io/api/v1/product", myList[indexSelectSubject].id);
    myList.splice(indexSelectSubject,1);
    render();
}

$("#them-mon").click(function(){
    $("#create-subject-modal").modal("show");
    checkAction = "create";
})

let subject = {
    classId: 0,
    subjectId : "",
    name: "",
    isTheoryClass: true,
    week: [],
    time:{
        indexDay: 0,
        start: "",
        end: "",
    },
    location: ""
}
isTheoryClassSelect.onchange = function(){
    this.value == 1 ? subject.isTheoryClass = true: subject.isTheoryClass = false; 
}
mySave.onclick = function(){
    // lấy dữ liệu vào
    subject.name = nameInput.value;
    subject.classId = classIdInput.value;
    subject.subjectId = subjectIdInput.value;
    let arrWeek =[];
    if(weekInput.value.indexOf("-") >0){
        let firstWeek = weekInput.value.split("-")[0];
        let lastWeek = weekInput.value.split("-")[1];
        for(let i=firstWeek; i<= lastWeek; i++){
            arrWeek.push(String(i));
        }
    }else{
        let week = weekInput.value.split(",");
        for(let i=0; i< week.length; i++){
            arrWeek.push(week[i]);
        }
    }
    subject.week = arrWeek;
    subject.time.indexDay = dayInput.value;
    subject.location = locationInput.value;
    subject.time.start = timeInput.value.split("-")[0];
    subject.time.end = timeInput.value.split("-")[1];
    checkTime(timeInput)
    if(checkLength(nameInput)&& checkLength2(classIdInput)&&checkLength2(subjectIdInput)&& checkLength(locationInput) && checkDayOfWeek(dayInput)&& checkTime(timeInput) && checkWeek(weekInput)
    ){
        if(checkAction == "create"){
            myList.push(subject);
            ajaxPost("https://5f5741881a07d600167e693d.mockapi.io/api/v1/product",subject ).then(function(){
                getSubjectList();
                console.log(myList);
            });
        }else{
            ajaxPut("https://5f5741881a07d600167e693d.mockapi.io/api/v1/product",subject );
            myList[indexSelectSubject] = subject;
        }
        render();
        $("#create-subject-modal").modal("hide");
    } 
}

// let myList = [
//     {
//         classId: 119887,
//         subjectId : "ED3200",
//         name: "Kĩ năng mềm",
//         isTheoryClass: true,
//         week: ["2", "4", "6", "8", "12", "14", "16", "18"],
//         time:{
//             indexDay: 5,
//             start: "12:30",
//             end: "14:55",
//         },
//         location: "D9-101"
//     },
//     {
//         classId: 119045,
//         subjectId : "ET2020",
//         name: "Technical",
//         isTheoryClass: true,
//         week: ["2","3","4","5","6","7","8","9","11","12","13","14","15","16","17","18"],
//         time:{
//             indexDay: 3,
//             start: "06:45",
//             end: "10:05",
//         },
//         location: "TC-408"
//     },
//     {
//         classId: 119036,
//         subjectId : "ET3210",
//         name: "Trường điện từ",
//         isTheoryClass: true,
//         week: ["2","3","4","5","6","7","8","9","11","12","13","14","15","16","17","18"],
//         time:{
//             indexDay: 2,
//             start: "09:20",
//             end: "11:45",
//         },
//         location: "TC-408"
//     },
//     {
//         classId: 698857,
//         subjectId : "ET3210",
//         name: "Trường điện từ",
//         isTheoryClass: false,
//         week: ["9", "14", "18"],
//         time:{
//             indexDay: 4,
//             start: "12:30",
//             end: "14:55",
//         },
//         location: "C9-309A"
//     },
//     {
//         classId: 119050,
//         subjectId : "ET3250",
//         name: "Thông tin số",
//         isTheoryClass: true,
//         week: ["2","3","4","5","6","7","8","9","11","12","13","14","15","16","17","18"],
//         time:{
//             indexDay: 4,
//             start: "06:45",
//             end: "09:10",
//         },
//         location: "TC-408"
//     },
//     {
//         classId: 699323,
//         subjectId : "ET3250",
//         name: "Thông tin số",
//         isTheoryClass: false,
//         week: ["6", "11", "15"],
//         time:{
//             indexDay: 4,
//             start: "12:30",
//             end: "14:55",
//         },
//         location: "C9-202"
//     },
//     {
//         classId: 119054,
//         subjectId : "ET3310",
//         name: "Lý thuyết mật mã",
//         isTheoryClass: true,
//         week: ["2","3","4","5","6","7","8","9","11","12","13","14","15","16","17","18"],
//         time:{
//             indexDay: 2,
//             start: "12:30",
//             end: "15:50",
//         },
//         location: "TC-210"
//     },
//     {
//         classId: 119061,
//         subjectId : "ET4020",
//         name: "Xử lý tín hiệu số",
//         isTheoryClass: true,
//         week: ["2","3","4","5","6","7","8","9","11","12","13","14","15","16","17","18"],
//         time:{
//             indexDay: 5,
//             start: "15:05",
//             end: "17:30",
//         },
//         location: "TC-210"
//     },
//     {
//         classId: 698794,
//         subjectId : "ET4020",
//         name: "Xử lý tín hiệu số",
//         isTheoryClass: false,
//         week: ["8", "12", "15"],
//         time:{
//             indexDay: 6,
//             start: "06:45",
//             end: "09:10",
//         },
//         location: "T-306"
//     },
//     {
//         classId: 119069,
//         subjectId : "ET4070",
//         name: "Cơ sở truyền số liệu",
//         isTheoryClass: true,
//         week: ["2","3","4","5","6","7","8","9","11","12","13","14","15","16","17","18"],
//         time:{
//             indexDay: 3,
//             start: "12:30",
//             end: "14:55",
//         },
//         location: "TC-210"
//     },
//     {
//         classId: 699334,
//         subjectId : "ET4070",
//         name: "Cơ sở truyền số liệu",
//         isTheoryClass: false,
//         week: ["5", "9", "14"],
//         time:{
//             indexDay: 2,
//             start: "06:45",
//             end: "09:10",
//         },
//         location: "C9-201"
//     },
//     {
//         classId: 698336,
//         subjectId : "FL0350",
//         name: "TOEIC 350",
//         isTheoryClass: true,
//         week: ["2","3","4","5","6","7","8","9","11","12","13","14","15","16","17","18"],
//         time:{
//             indexDay: 4,
//             start: "18:00",
//             end: "20:30",
//         },
//         location: "C3B-CFL"
//     },
//     {
//         classId: 698336,
//         subjectId : "FL0350",
//         name: "TOEIC 350",
//         isTheoryClass: true,
//         week: ["2","3","4","5","6","7","8","9","11","12","13","14","15","16","17","18"],
//         time:{
//             indexDay: 7,
//             start: "18:00",
//             end: "20:30",
//         },
//         location: "TC-210"
//     },
//     {
//         classId: 638563,
//         subjectId : "PE2801",
//         name: "Nhảy xa",
//         isTheoryClass: true,
//         week: ["2","3","4","5","6","7","8","9","11","12","13","14","15","16","17","18"],
//         time:{
//             indexDay: 5,
//             start: "08:00",
//             end: "09:00",
//         },
//         location: "San1"
//     },
//     {
//         classId: 0,
//         subjectId : "",
//         name: "Java lv3",
//         isTheoryClass: false,
//         week: ["1","2","3","4","5","6","7","8","9","11","12","13","14","15","16","17","18"],
//         time:{
//             indexDay: 3,
//             start: "17:45",
//             end: "19:30",
//         },
//         location: "inperial "
//     },
//     {
//         classId: 0,
//         subjectId : "",
//         name: "Java lv3",
//         isTheoryClass: false,
//         week: ["1","2","3","4","5","6","7","8","9","11","12","13","14","15","16","17","18"],
//         time:{
//             indexDay: 5,
//             start: "17:45",
//             end: "19:30",
//         },
//         location: "inperial "
//     },
//     {
//         classId: 0,
//         subjectId : "",
//         name: "Họp lab",
//         isTheoryClass: false,
//         week: ["1"],
//         time:{
//             indexDay: 3,
//             start: "16:30",
//             end: "17:30",
//         },
//         location: "inperial "
//     },
//     {
//         classId: 0,
//         subjectId : "",
//         name: "FrontEnd",
//         isTheoryClass: false,
//         week: ["2","3","4","5","6","7","8","9","11","12","13","14","15","16","17","18"],
//         time:{
//             indexDay: 3,
//             start: "15:00",
//             end: "17:30",
//         },
//         location: "inperial "
//     }
// ]