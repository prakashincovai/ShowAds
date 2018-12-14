(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
        ga('create', + CusanalyticsId +, 'auto', 'blogger');
        ga('blogger.send', 'pageview');

window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', + CusanalyticsId +);


$(function(){
  var adBanners = [
       "cars24728x214.jpg",
       "icici728x90.jpg",
       "bigbasket728x90.png",
       "hostgator728x90.gif",
       "GoDaddy728x90.gif",
       "flipkart728x90.jpg",
       "samsung728x90.jpg",
       "GoDaddy728x901.gif"
  ];
  var bannerLinks = [
       "https://clnk.in/gXQB",
       "https://clnk.in/gXIT",
       "https://clnk.in/gXJi",
       "https://clnk.in/gXfD",
       "https://clnk.in/gXeG",
       "http://www.flipkart.com/offers/electronics?affid=prakashincovai",
       "https://goo.gl/y4tS3k",
       "https://clnk.in/gXeG"
  ];
  
  
  var imgPrefix   = "https://raw.githack.com/prakashincovai/ShowAds/master/Basic Ads/images/";
  var randNum     = Math.floor(Math.random() * (7 - 0 + 1)) + 0;
  var topAdBanner = $('#topad > a > img');
  
  var newBannerImg  = imgPrefix + adBanners[randNum];
  var newBannerLink = bannerLinks[randNum];
  
  // update new img src and link HREF value
  $(topAdBanner).attr('src',newBannerImg);
  $('#topad > a').attr('href',newBannerLink);
});
