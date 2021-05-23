var calendar2021 = {
  jan: { 1: "Сайхан амарна" },
  feb: {
    1: "Сагсны тэмцээнтэй",
    3: "Шагнал гардуулна даа",
    17: "Жавхлан багшийн лаб 2-ыг хийнэ",
  },
  mar: {
    2: "Энэ лабынхаа хугацааг сунгах уу яах вэ гэдгээ шийднэ",
    6: "Энд юу бичье дээ байз",
    8: "Эмэгтэйчүүддээ баяр хүргэнэ дээ",
  },
  apr: { 1: "Бүгдээрээ худлаа ярьцаагаагаарай" },
  may: { 10: "Энэ сард ч ёстой юу ч болдоггүй сар даа" },
  jun: { 6: "Жавхлан багшийн төрсөн өдөр" },
  jul: { 4: "Хичээл амарсаан ураа" },
  aug: { 1: "Хөдөө явдаг цаг даа", 25: "Хичээл сонголт эхэллээ" },
  sep: { 1: "9-н сарын нэгэн боллоо ерөөсөө бидний баяр даа" },
  oct: { 13: "Сур сур бас дахин сур" },
  nov: { 2: "Сурсаар л бай" },
  dec: {
    20: "Өвлийн семистер хаагдах нь дээ",
    30: "Дүн гаргаж дууслаа баярлалаа баяртай",
  },
};

var monthName = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "Octomber",
  "November",
  "December",
];
var weekName = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

var year = new Date().getFullYear();
var day = new Date().getDate();

function calendarPrint(month) {
  var sariinEhniiUdur = new Date(year, month, 1).getDay();
  var sariinSuuliinUdur = new Date(year, month + 1, 0).getDate();
  var umnuhSariinSuuliinUdur =
    month == 0
      ? new Date(year - 1, 11, 0).getDate()
      : new Date(year, month, 0).getDate();

  var htmlCreator = "<table>";
  htmlCreator += "<tr>";
  htmlCreator += '<th colspan="7">' + monthName[month] + " 2021" + "</th>";
  htmlCreator += "</tr>";
  htmlCreator += '<tr class="weekName">';

  for (var i = 0; i < weekName.length; i++) {
    htmlCreator += '<td class="weekName">' + weekName[i] + "</td>";
  }
  htmlCreator += "</tr>";

  var i = 1;
  do {
    var count = new Date(year, month, i).getDay();
    if (count == 1) {
      htmlCreator += "<tr>";
    } else if (count == 0 && i == 1) {
      htmlCreator += "<tr>";
      var el = umnuhSariinSuuliinUdur - sariinEhniiUdur - 5;
      for (var j = 0; j <= sariinEhniiUdur + 5; j++) {
        htmlCreator += '<td class="mute">' + el + "</td>";
        el++;
      }
    } else if (i == 1) {
      htmlCreator += "<tr>";
      var el = umnuhSariinSuuliinUdur - sariinEhniiUdur + 3;
      for (var j = 0; j < sariinEhniiUdur - 1; j++) {
        htmlCreator += '<td class="mute">' + el + "</td>";
        el++;
      }
    }

    var sar = new Date().getMonth();

    var correct =
      (month == 0 && calendar2021.jan[i]) ||
      (month == 1 && calendar2021.feb[i]) ||
      (month == 2 && calendar2021.mar[i]) ||
      (month == 3 && calendar2021.apr[i]) ||
      (month == 4 && calendar2021.may[i]) ||
      (month == 5 && calendar2021.jun[i]) ||
      (month == 6 && calendar2021.jul[i]) ||
      (month == 7 && calendar2021.aug[i]) ||
      (month == 8 && calendar2021.sep[i]) ||
      (month == 9 && calendar2021.oct[i]) ||
      (month == 10 && calendar2021.nov[i]) ||
      (month == 11 && calendar2021.dec[i]);

    if (sar == month && i == day) {
      if (sar == i && calendar2021[month][i])
        htmlCreator += '<td class="today events">' + i + "</td>";
      else htmlCreator += '<td class="today">' + i + "</td>";
    } else if (count == 0 || count == 6) {
      if (correct) htmlCreator += '<td class="weekend events">' + i + "</td>";
      else htmlCreator += '<td class="weekend">' + i + "</td>";
    } else {
      if (correct) htmlCreator += '<td class="events">' + i + "</td>";
      else htmlCreator += "<td>" + i + "</td>";
    }

    if (count == 0) {
      htmlCreator += "<tr>";
    } else if (i == sariinSuuliinUdur) {
      var el = 1;
      for (count; count < 7; count++) {
        htmlCreator += '<td class="mute">' + el + "</td>";
        el++;
      }
    }
    i++;
  } while (i <= sariinSuuliinUdur);

  htmlCreator += "</table>";
  document.querySelector(".calendar").innerHTML += htmlCreator;
}

function printJSON() {
  document.getElementById("jan-1").innerHTML = calendar2021.jan[1];
  document.getElementById("jun-6").innerHTML = calendar2021.jun[6];
  document.getElementById("feb-1").innerHTML = calendar2021.feb[1];
  document.getElementById("feb-3").innerHTML = calendar2021.feb[3];
  document.getElementById("feb-17").innerHTML = calendar2021.feb[17];
  document.getElementById("mar-2").innerHTML = calendar2021.mar[2];
  document.getElementById("mar-6").innerHTML = calendar2021.mar[6];
  document.getElementById("mar-8").innerHTML = calendar2021.mar[8];
  document.getElementById("apr-1").innerHTML = calendar2021.apr[1];
  document.getElementById("may-10").innerHTML = calendar2021.may[10];
  document.getElementById("jun-6").innerHTML = calendar2021.jun[6];
  document.getElementById("jul-4").innerHTML = calendar2021.jul[4];
  document.getElementById("aug-1").innerHTML = calendar2021.aug[1];
  document.getElementById("aug-25").innerHTML = calendar2021.aug[25];
  document.getElementById("sep-1").innerHTML = calendar2021.sep[1];
  document.getElementById("oct-13").innerHTML = calendar2021.oct[13];
  document.getElementById("nov-2").innerHTML = calendar2021.nov[2];
  document.getElementById("dec-20").innerHTML = calendar2021.dec[20];
  document.getElementById("dec-30").innerHTML = calendar2021.dec[30];
}

for (var month = 0; month < 12; month++) calendarPrint(month);
printJSON();
