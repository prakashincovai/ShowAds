var adBanners;
var bannerLinks;
var Cus_analyticsId;
var UniqueAds;
var Uid;

// Muliple Ads not allowed restriction Start
if (isNaN(Uid)==true)
{
Uid=0;
}
Uid = Uid +  UniqueAds;
// Muliple Ads not allowed restriction End

// Individual analytics
if (Cus_analyticsId!=='') {
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
        ga('create',Cus_analyticsId, 'auto', 'client');
        ga('client.send', 'pageview');

window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config',Cus_analyticsId);
}
// Overall analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
        ga('create','UA-98674484-3', 'auto', 'myTracker');
        ga('myTracker.send', 'pageview');

window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config','UA-98674484-3');

// Add Css File
// var head = document.getElementsByTagName('head')[0],
// link = document.createElement('link');
// link.type = 'text/css';
// link.rel = 'stylesheet';
// link.href = 'https://rawcdn.githack.com/prakashincovai/ShowAds/c5f5323b51acd028a3e09fe1aa39d0f3c65227ae/Basic Ads/css/Res.css';
// head.appendChild(link);

// Main Ads Start
$(function(){
        
if (Uid!==1)
{
return;
};

if (isNaN(Uid)==true)
{
return;
};
        
if (ads_size=='Any') 
{
  AllBannerNames();
  AllBannerLinks();
}
if (ads_size=='Responsive') 
{
  var Rnd =Math.floor(Math.random() * ((2-1) - 0 + 1)) + 0;
if (Rnd==0)
{
  ResponsiveBannerNames();
  ResponsiveBannerLinks();
}
else
{
  BannerNames300x300();
  BannerLinks300x300();
}


}
else
{
     return;           
};
        
// alert message
if (adBanners.length!=bannerLinks.length)
  {
   alert("Banner and link Mismatch!");
   return;
};
   

var strVar="";
if (Rnd==0)
{
  var imgPrefix   = "https://raw.githack.com/prakashincovai/ShowAds/master/Basic%20Ads/images/";
  var randNum     = Math.floor(Math.random() * ((adBanners.length-1) - 0 + 1)) + 0;

  
  var newBannerImg  = imgPrefix + adBanners[randNum];
  var newBannerLink = bannerLinks[randNum];

 // 728x214 728x90 banners 
strVar += "<link type=\"text/css\" rel=\"stylesheet\n \"";
strVar += "href=\"https://rawcdn.githack.com/prakashincovai/ShowAds/c5f5323b51acd028a3e09fe1aa39d0f3c65227ae/Basic%20Ads/css/Res.css\">";
strVar += "<div id=\"w\">\n <div id=\"topad\">\n <a href="+newBannerLink+">";
strVar += "<img src="+newBannerImg+ " alt=\"\" class=\"res\"/></a>\n </div> </div>";
}
else
{ // 300x300 banners

  var imgPrefix   = "https://raw.githack.com/prakashincovai/ShowAds/master/Basic%20Ads/images300x300/";
  var randNum     = Math.floor(Math.random() * ((adBanners.length-1) - 0 + 1)) + 0;
  
  var newBannerImg  = imgPrefix + adBanners[randNum];
  var newBannerLink = bannerLinks[randNum];
//
  var imgPrefix2   = "https://raw.githack.com/prakashincovai/ShowAds/master/Basic%20Ads/images300x300/";
  var randNum2     = Math.floor(Math.random() * ((adBanners.length-1) - 0 + 1)) + 0;
  
  var newBannerImg2  = imgPrefix2 + adBanners[randNum2];
  var newBannerLink2 = bannerLinks[randNum2];

  var imgPrefix3   = "https://raw.githack.com/prakashincovai/ShowAds/master/Basic%20Ads/images300x300/";
  var randNum3     = Math.floor(Math.random() * ((adBanners.length-1) - 0 + 1)) + 0;
  
  var newBannerImg3  = imgPrefix3 + adBanners[randNum3];
  var newBannerLink3 = bannerLinks[randNum3];
        
  var imgPrefix4   = "https://raw.githack.com/prakashincovai/ShowAds/master/Basic%20Ads/images300x300/";
  var randNum4     = Math.floor(Math.random() * ((adBanners.length-1) - 0 + 1)) + 0;
  
  var newBannerImg4  = imgPrefix4 + adBanners[randNum4];
  var newBannerLink4 = bannerLinks[randNum4];


strVar += "<div style=\"height: 300px;\">";
strVar += "<link type=\"text/css\" rel=\"stylesheet\n \"";
strVar += "href=\"https://rawcdn.githack.com/prakashincovai/ShowAds/c5f5323b51acd028a3e09fe1aa39d0f3c65227ae/Basic%20Ads/css/Res.css\">";
strVar += "        <table cellpadding=\"0\" border=\"1\" role=\"presentation\">";
strVar += "            <tr>";
strVar += "                <td>";
strVar += "                    <table width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" border=\"1\" align=\"center\">";
strVar += "                        <tbody> ";
strVar += "                            <tr>";
strVar += "                                <td width=\"25%\">";
strVar += "                                    <a href="+newBannerLink+" style=\"display:block;border:none\" target=\"_blank\" data-saferedirecturl=\"\">";
strVar += "                                    <img alt=\"xxx\" src="+newBannerImg+ "\n \"";
strVar += "			            style=\"background-color:#f6f2e9;border:none;color:#818181;display:";
strVar += "			            block;font-size:9px;max-width:100%\" width=\"100%\"><\/a>";
strVar += "                                <\/td>";
strVar += "                                <td width=\"25%\">";
strVar += "                                    <a href="+newBannerLink2+" style=\"display:block;border:none\" target=\"_blank\" data-saferedirecturl=\"\">";
strVar += "                                    <img alt=\"xxx\" src="+newBannerImg2+ " \n \"";
strVar += "			            style=\"background-color:#f6f2e9;border:none;color:#818181;display:";
strVar += "			            block;font-size:9px;max-width:100%\" width=\"100%\"><\/a>";
strVar += "                                <\/td>";
strVar += "                                <td width=\"25%\">";
strVar += "                                    <a href="+newBannerLink3+" style=\"display:block;border:none\" target=\"_blank\" data-saferedirecturl=\"\">";
strVar += "                                    <img alt=\"xxx\" src="+newBannerImg3+ " \n \"";
strVar += "			            style=\"background-color:#f6f2e9;border:none;color:#818181;display:";
strVar += "			            block;font-size:9px;max-width:100%\" width=\"100%\"><\/a>";
strVar += "                                <\/td>";
strVar += "                                <td width=\"25%\">";
strVar += "                                    <a href="+newBannerLink3+" style=\"display:block;border:none\" target=\"_blank\" data-saferedirecturl=\"\">";
strVar += "                                    <img alt=\"xxx\" src="+newBannerImg3+ " \n \"";
strVar += "			            style=\"background-color:#f6f2e9;border:none;color:#818181;display:";
strVar += "			            block;font-size:9px;max-width:100%\" width=\"100%\"><\/a>";
strVar += "                                <\/td>";
strVar += "                            <\/tr>";
strVar += "                        <\/tbody>";
strVar += "                    <\/table>";
strVar += "                <\/td>";
strVar += "            <\/tr>";
strVar += "        <\/table>";
strVar += "    <\/div>";
}
document.getElementById("UAds").innerHTML = strVar;


})
// Main Ads End

function AllBannerNames() {
   adBanners = [
        "cap420x420.jpg",
        "v400x300.jpg",
        "lavie420x420.jpg",
        "saf400x300.jpg",
        "ama728x214.jpg",
        "footwear728x214.jpg",
       "wash728x214.png",
       "cars24728x214.jpg",
       "icici728x90.jpg",
       "bigbasket728x90.png",
       "hostgator728x90.gif",
       "Ama400x300.jpg",
       "flipkart728x90.jpg",
       "samsung728x90.jpg",
       "skybags420x420.jpg"
  ];
}

function AllBannerLinks() {
   bannerLinks = [
        "https://clnk.in/g1om",
        "https://clnk.in/g1oi",
        "https://clnk.in/g1nX",
        "https://clnk.in/g1nW",
       "https://clnk.in/g0l3",
       "http://fkrt.it/6WJd72NNNN",
       "http://fkrt.it/6cPUF2NNNN",
       "https://clnk.in/gXQB",
       "https://clnk.in/gXIT",
       "https://clnk.in/gXJi",
       "https://clnk.in/gXfD",
       "https://clnk.in/g1ox",
       "http://www.flipkart.com/offers/electronics?affid=prakashincovai",
       "https://goo.gl/y4tS3k",
       "https://clnk.in/g1or"
  ];
}

function ResponsiveBannerNames() {
   adBanners = [
        "Ama05012019_728x214.jpg",
        "hp05012019_728x214.jpg",
        "jabong04012019_728x145.jpg",
        "Snapdeal04012019_728x149.jpg",
        "Axa02012019_728x175.jpg",
        "ninecolor_728x195.jpg",
        "Echo_01012019_728x182.jpg",
        "go29122018_728x214.JPG",
        "go291220182_728x214.jpg",
        "go281220183_728x214.gif",
        "go281220184_728x214.jpg",
        "go291220185_728x214.jpg",
        "bing24122018_728x2.png",
        "GoDaddy728x90.gif",
        "GoDaddy728x901.gif",
        "Fire22122018_728x214.jpg",
        "21122018T_728x2014.jpg",
        "tata_21122018_728x214.png",
        "tt_728x214.jpg",
        "tata-cliq-728x214.jpg",
        "21122018_728x214.png",
       "ama728x214.jpg",
       "footwear728x214.jpg",
       "wash728x214.png",
       "cars24728x214.jpg",
       "icici728x90.jpg",
       "bigbasket728x90.png",
       "hostgator728x90.gif",
       "Sarrf728x214.png",
       "flipkart728x90.jpg",
       "samsung728x90.jpg",
       "honey728x214.png"
  ];
}

function ResponsiveBannerLinks() {
   bannerLinks = [
        "https://clnk.in/g9yt",
        "https://clnk.in/g9yu",
        "https://clnk.in/g8RQ",
        "https://clnk.in/g8RT",
        "https://clnk.in/g71N",
        "https://clnk.in/g71P",
        "https://clnk.in/g7xM",
        "https://linksredirect.com/?pub_id=25310CL22798&source=linkkit&url=https%3A%2F%2Fwww.goibibo.com%2Fhotels%2F",
        "https://linksredirect.com/?pub_id=25310CL22798&source=linkkit&url=https%3A%2F%2Fwww.goibibo.com%2Foffers%2Fgo-global%2F",
        "https://linksredirect.com/?pub_id=25310CL22798&source=linkkit&url=https%3A%2F%2Fwww.goibibo.com%2Foffers%2Fgo-stays-on-sale%2F",
        "https://linksredirect.com/?pub_id=25310CL22798&source=linkkit&url=https%3A%2F%2Fwww.goibibo.com%2Finfo%2Ffeatures-and-benefits%2F%23",
        "https://clnk.in/g6bD",
        "https://clnk.in/g3K1",
        "https://clnk.in/gXeG",
        "https://clnk.in/gXeG",
        "https://clnk.in/g2K5",
        "https://clnk.in/g12a",
        "https://clnk.in/g12a",
        "https://clnk.in/g12a",
        "https://clnk.in/g12a",
        "http://fkrt.it/Y9k7Q2NNNN",
       "https://clnk.in/g0l3",
       "http://fkrt.it/6WJd72NNNN",
       "http://fkrt.it/6cPUF2NNNN",
       "https://clnk.in/gXQB",
       "https://clnk.in/gXIT",
       "https://clnk.in/gXJi",
       "https://clnk.in/gXfD",
       "http://fkrt.it/z5QlzLuuuN",
       "http://www.flipkart.com/offers/electronics?affid=prakashincovai",
       "https://goo.gl/y4tS3k",
       "https://clnk.in/g1xR"
  ];
}


// Size 300x300 Responsive
function BannerNames300x300() {
   adBanners = [
       "cam05012019_300x300.jpeg",
       "shoo05012019_300x300.jpeg",
       "cam05012019_300x300.png",
       "Lim05012019_300x300.jpeg",
       "Pay05012019_300x300.jpg",
       "ja05012019_300x300.jpg",
       "f04012019_300x300.jpeg",
       "f104012019_300x300.jpeg",
       "f304012019_300x300.jpeg"
  ];
}

function BannerLinks300x300() {
   bannerLinks = [
       "http://fkrt.it/DqN3znuuuN",
       "http://fkrt.it/DqEFinuuuN",
       "http://fkrt.it/DvQMSnuuuN",
       "https://clnk.in/g9sQ",
       "https://clnk.in/g9sR",
       "https://clnk.in/g9sS",
       "http://fkrt.it/LMbXInuuuN",
       "http://fkrt.it/2HQzDKNNNN",
       "http://fkrt.it/2HWuCKNNNN"
  ];
}



