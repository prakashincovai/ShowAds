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
  ResponsiveBannerNames();
  ResponsiveBannerLinks();
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
        
//document.write("<link type=\"text/css\" rel=\"stylesheet\" href=\"https://rawcdn.githack.com/prakashincovai/ShowAds/c5f5323b51acd028a3e09fe1aa39d0f3c65227ae/Basic Ads/css/Res.css\">");
//document.write( '<div id=\"w\">\n' );
//document.write( '<div id=\"topad\">\n' );
//document.write( '<a href=\"\"><img src=\"\" alt=\"\" class=\"res\"/></a>\n' );
//document.write( '</div>\n' );
//document.write( '</div>' );
//document.close()
        
//$(document.body).append("<link type=\"text/css\" rel=\"stylesheet\" href=\"https://rawcdn.githack.com/prakashincovai/ShowAds/c5f5323b51acd028a3e09fe1aa39d0f3c65227ae/Basic Ads/css/Res.css\">");
//$(document.body).append( '<div id=\"w\">\n <div id=\"topad\">\n <a href=\"\"><img src=\"\" alt=\"\" class=\"res\"/></a>\n </div>');
//$(document.body).append( '</div>\n' );
   
  var imgPrefix   = "https://raw.githack.com/prakashincovai/ShowAds/master/Basic%20Ads/images/";
  var randNum     = Math.floor(Math.random() * ((adBanners.length-1) - 0 + 1)) + 0;
  var topAdBanner = $('#topad > a > img');
  
  var newBannerImg  = imgPrefix + adBanners[randNum];
  var newBannerLink = bannerLinks[randNum];
  
  // update new img src and link HREF value
  $(topAdBanner).attr('src',newBannerImg);
  $('#topad > a').attr('href',newBannerLink);
        
document.getElementById("UAds").innerHTML = "<link type=\"text/css\" rel=\"stylesheet\" \
' href=\"https://rawcdn.githack.com/prakashincovai/ShowAds/c5f5323b51acd028a3e09fe1aa39d0f3c65227ae/Basic%20Ads/css/Res.css\"> \
<div id=\"w\">\n <div id=\"topad\">\n <a href="+newBannerLink+">\n \
<img src="+newBannerImg+ " alt=\"\" class=\"res\"/></a>\n </div> </div>\n";
        
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
         "Amazon 01012019_260x214.png",
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
         "https://clnk.in/g7xm",
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

