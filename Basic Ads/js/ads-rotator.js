$(function(){
  var adBanners = [
       "google.png"
  ];
  var bannerLinks = [
       "http://google.com"
  ];
  
  
  var imgPrefix   = "images/";
  var randNum     = Math.floor(Math.random() * (0 - 0 + 1)) + 0;
  var topAdBanner = $('#topad > a > img');
  
  var newBannerImg  = imgPrefix + adBanners[randNum];
  var newBannerLink = bannerLinks[randNum];
  
  // update new img src and link HREF value
  $(topAdBanner).attr('src',newBannerImg);
  $('#topad > a').attr('href',newBannerLink);
});