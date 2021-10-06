// fetch('https://devapi.qweather.com/v7/weather/now?key=ed307526d96b4d03b631607bf5b43845&location=101210101')
//    .then(res => res.json())
//    .then(json => console.log(json))



function fetchwea() {
  fetch('https://devapi.qweather.com/v7/weather/now?key=99c7da2ebe504ae3b0c0cf2e02636552&location=101210101')
  .then(res => res.json())
  .then(json => {
    // const container = document.getElementById('container');
    
    // const element = document.createElement('p');
    // element.textContent = `${json.now.temp} - ${json.now.text}`;
    // container.appendChild(element);
    // document.getElementById('obsTime').insertAdjacentHTML('beforeend',json.now.obsTime);
    document.getElementById('temp').innerHTML=json.now.temp+"℃";
    // document.getElementById('feelsLike').insertAdjacentHTML('beforeend',json.now.feelsLike);
    // document.getElementById('icon').insertAdjacentHTML('beforeend',json.now.icon);
    document.getElementById('text').innerHTML=json.now.text;
    document.getElementById('windDir').innerHTML='风向：'+json.now.windDir;
    document.getElementById('windScale').innerHTML='风力等级：'+json.now.windScale+'级';
    document.getElementById('windSpeed').innerHTML='风速：'+json.now.windSpeed+'KM/H';
    document.getElementById('humidity').innerHTML='相对湿度：'+json.now.humidity+'%';
    document.getElementById('pressure').innerHTML='大气压强：'+json.now.pressure+'hPa';
    document.getElementById('vis').innerHTML='能见度：'+json.now.vis+'KM';
    document.getElementById('i').className='qi-'+json.now.icon;

  });
}

fetchwea();


function fetchMinMaxwea() {
  fetch('https://devapi.qweather.com/v7/weather/3d?key=99c7da2ebe504ae3b0c0cf2e02636552&location=101210101')
  .then(res => res.json())
  .then(json => {
    document.getElementById('weaminmax').innerHTML=json.daily[0].tempMin+"-"+json.daily[0].tempMax;


    document.getElementById('i1').className='qi-'+json.daily[0].iconDay;
    // document.getElementById('day1').innerHTML=json.daily[0].fxDate;
    document.getElementById('textd1').innerHTML=json.daily[0].textDay;
    document.getElementById('minmax1').innerHTML=json.daily[0].tempMin+'-'+json.daily[0].tempMax+'℃';
    document.getElementById('i2').className='qi-'+json.daily[1].iconDay;
    // document.getElementById('day2').innerHTML=json.daily[1].fxDate;
    document.getElementById('textd2').innerHTML=json.daily[1].textDay;
    document.getElementById('minmax2').innerHTML=json.daily[1].tempMin+'-'+json.daily[1].tempMax+'℃';
    document.getElementById('i3').className='qi-'+json.daily[2].iconDay;
    // document.getElementById('day3').innerHTML=json.daily[2].fxDate;
    document.getElementById('textd3').innerHTML=json.daily[2].textDay;
    document.getElementById('minmax3').innerHTML=json.daily[2].tempMin+'-'+json.daily[2].tempMax+'℃';


  });
}

fetchMinMaxwea();



function startTime(){
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("timetxt").innerHTML = h + ":" + m + ":" + s;
  t = setTimeout(function(){
    startTime();
  },10);
function checkTime(i){
  if(i<10){
    i = "0"+i;
  }
  return i;
  }
}



function getNowFormatDate() {
        var date = new Date();
        var seperator1 = "-";
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        var currentdate = year + seperator1 + month + seperator1 + strDate;
        document.getElementById('day').innerHTML=currentdate;
        var str1 = "星期" + "日一二三四五六".charAt(new Date().getDay());
        document.getElementById("day").insertAdjacentHTML('beforeend',' '+str1);
    }
    
getNowFormatDate();

