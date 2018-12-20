var adBanners;
var bannerLinks;
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
};
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
  var head = document.getElementsByTagName('head')[0],
   link = document.createElement('link');
   link.type = 'text/css';
   link.rel = 'stylesheet';
   link.href = 'https://rawcdn.githack.com/prakashincovai/ShowAds/c5f5323b51acd028a3e09fe1aa39d0f3c65227ae/Basic Ads/css/Res.css';
   head.appendChild(link);

//728x90 Size Ads Start
if (ads_size=='Responsive') {
$(function(){
  AllBannerNames();
  AllBannerLinks();
   
  var imgPrefix   = "https://raw.githack.com/prakashincovai/ShowAds/master/Basic Ads/images/";
  var randNum     = Math.floor(Math.random() * (14 - 0 + 1)) + 0;
  var topAdBanner = $('#topad > a > img');
  
  var newBannerImg  = imgPrefix + adBanners[randNum];
  var newBannerLink = bannerLinks[randNum];
  
  // update new img src and link HREF value
  $(topAdBanner).attr('src',newBannerImg);
  $('#topad > a').attr('href',newBannerLink);
});
};
// 728x90 Size Ads End

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
};

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
};
