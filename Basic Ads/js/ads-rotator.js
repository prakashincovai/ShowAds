$(function(){
  var adBanners = [
       "google.png",
       "flipkart728x90.jpg"
  ];
  var bannerLinks = [
       "http://google.com",
       "http://www.flipkart.com/offers/electronics?affid=prakashincovai"
  ];
  
  
  var imgPrefix   = "https://raw.githack.com/prakashincovai/ShowAds/master/Basic Ads/images/";
  var randNum     = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
  var topAdBanner = $('#topad > a > img');
  
  var newBannerImg  = imgPrefix + adBanners[randNum];
  var newBannerLink = bannerLinks[randNum];
  
  // update new img src and link HREF value
  $(topAdBanner).attr('src',newBannerImg);
  $('#topad > a').attr('href',newBannerLink);
});
