function news(image, date, month, miniText, bigText, link) {
    this.header = image;
    this.date = date;
    this.month = month;
    this.info = miniText;
    this.title = bigText;
    this.link = link;
}

const news1 = new news("images/shaders/farm.png", "17, 2022", "March", "Development: Upcoming 0.3 Update", "Forestblock Ultimate Restart", "#");
const news2 = new news("images/news/weppartnership.png", "30, 2021", "September", "Announcement: Community", "Official Partnership & Affiliation with Wepwawet Hosting", "");
const news3 = new news("images/news/fblaunch.png", "25, 2021", "August", "Release: Alpha Launch", "Forestblock Official Alpha Launch", "");

document.getElementById('month1').innerHTML = news1.month;
document.getElementById('date1').innerHTML = news1.date;
document.getElementById('mini1').innerHTML = news1.info;
document.getElementById('header1').src = news1.header;
document.getElementById('link1').href = news1.link;
document.getElementById('title1').innerHTML = news1.title;

document.getElementById('month2').innerHTML = news2.month;
document.getElementById('date2').innerHTML = news2.date;
document.getElementById('mini2').innerHTML = news2.info;
document.getElementById('header2').src = news2.header;
document.getElementById('link2').href = news2.link;
document.getElementById('title2').innerHTML = news2.title;

document.getElementById('month3').innerHTML = news3.month;
document.getElementById('date3').innerHTML = news3.date;
document.getElementById('mini3').innerHTML = news3.info;
document.getElementById('header3').src = news3.header;
document.getElementById('link3').href = news3.link;
document.getElementById('title3').innerHTML = news3.title;