var adBanners;
var bannerLinks;
var Cus_analyticsId;
var UniqueAds;
var Uid;
var AdsRestriction;
var AdsRestriction2;
var Js_one;
var Js_two;

// Muliple Ads not allowed restriction Start
if (isNaN(Uid)==true)
{
Uid=0;
	if (ads_size=='Responsive')
	{
	AdsRestriction=	ads_size;
	}
	else if (ads_size=='ResponsiveSidebar')
 	{
	AdsRestriction2=ads_size;
	}
}
Uid = Uid +  UniqueAds;

if (Uid==2)
{
       if (ads_size=='Responsive')
	{
	AdsRestriction=	ads_size;
	}
	else if (ads_size=='ResponsiveSidebar')
 	{
	AdsRestriction2=ads_size;
	}
}
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
        
// Muliple Ads not allowed restriction Start
if (Uid!==1 && AdsRestriction==AdsRestriction2)
{
return;
};

if (isNaN(Uid)==true)
{
return;
};
	
//if (AdsRestriction=="" && AdsRestriction2=="")
//{
//return;
//};
// Muliple Ads not allowed restriction End

if (AdsRestriction=='Responsive' && Js_one!='1') 
{
	var Rnd =Math.floor(Math.random() * ((2-1) - 0 + 1)) + 0;
        if (Rnd==0)
        {
        ResponsiveBannerNamesCenterFull();
        ResponsiveBannerLinksCenterFull();
        }
        else
        {
        BannerNames300x300Full();
        BannerLinks300x300Full();
        }


}
else if(AdsRestriction2=='ResponsiveSidebar' && Js_two!='2')
{
	var Rnd =Math.floor(Math.random() * ((2-1) - 0 + 1)) + 0;
	if (Rnd==0)
	{
  	ResponsiveBannerNamesSideBarFull();
  	ResponsiveBannerLinksSideBarFull();
	}
	else
	{
         BannerNames300x300Full();
         BannerLinks300x300Full();
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
if (AdsRestriction=='Responsive' && Js_one!='1') 
{
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

        strVar += "<div style=\"height: 250px;\">";
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
	Js_one=1;
}
else if (AdsRestriction2=='ResponsiveSidebar' && Js_two!=2)
{
	if (Rnd==0)
	{
          var imgPrefix   = "https://raw.githack.com/prakashincovai/ShowAds/master/Basic%20Ads/imagesSideBarFull200x600/";
	  var randNum     = Math.floor(Math.random() * ((adBanners.length-1) - 0 + 1)) + 0;
  
	  var newBannerImg  = imgPrefix + adBanners[randNum];
	  var newBannerLink = bannerLinks[randNum];

	 // 728x214 728x90 banners 
	strVar += "<link type=\"text/css\" rel=\"stylesheet\n \"";
	strVar += "https://rawcdn.githack.com/prakashincovai/ShowAds/29c5ec7142781d91e0c975daea6a7d096c1e64f2/Basic%20Ads/css/Ressidebar.css\">";
	strVar += "<div id=\"w\">\n <div id=\"topad\">\n <a href="+newBannerLink+">";
	strVar += "<img src="+newBannerImg+ " alt=\"\" class=\"Ressidebar\"/></a>\n </div> </div>";
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
        strVar += "href=\"https://rawcdn.githack.com/prakashincovai/ShowAds/29c5ec7142781d91e0c975daea6a7d096c1e64f2/Basic%20Ads/css/Ressidebar.css\">";
        strVar += "        <table width=\"11%\" cellpadding=\"0\" border=\"1\" role=\"presentation\">";
        strVar += "            <tr>";
        strVar += "                <td>";
        strVar += "                    <table width=\"100%\" cellspacing=\"0\" cellpadding=\"1\" border=\"1\" align=\"center\">";
        strVar += "                        <tbody> ";
        strVar += "                            <tr>";
        strVar += "                                <td width=\"25%\">";
        strVar += "                                    <a href="+newBannerLink+" style=\"display:block;border:none\" target=\"_blank\" data-saferedirecturl=\"\">";
        strVar += "                                    <img alt=\"xxx\" src="+newBannerImg+ "\n \"";
        strVar += "			            style=\"background-color:#f6f2e9;border:none;color:#818181;display:";
        strVar += "			            block;font-size:9px;max-width:100%\" width=\"100%\"><\/a>";
        strVar += "                                <\/td>";
        strVar += "                            <\/tr>";
        strVar += "                            <tr>";
        strVar += "                                <td width=\"25%\">";
        strVar += "                                    <a href="+newBannerLink2+" style=\"display:block;border:none\" target=\"_blank\" data-saferedirecturl=\"\">";
        strVar += "                                    <img alt=\"xxx\" src="+newBannerImg2+ "\n \"";
        strVar += "			            style=\"background-color:#f6f2e9;border:none;color:#818181;display:";
        strVar += "			            block;font-size:9px;max-width:100%\" width=\"100%\"><\/a>";
        strVar += "                                <\/td>";
        strVar += "                            <\/tr>";
        strVar += "                            <tr>";
        strVar += "                                <td width=\"25%\">";
        strVar += "                                    <a href="+newBannerLink3+" style=\"display:block;border:none\" target=\"_blank\" data-saferedirecturl=\"\">";
        strVar += "                                    <img alt=\"xxx\" src="+newBannerImg3+ "\n \"";
        strVar += "			            style=\"background-color:#f6f2e9;border:none;color:#818181;display:";
        strVar += "			            block;font-size:9px;max-width:100%\" width=\"100%\"><\/a>";
        strVar += "                                <\/td>";
        strVar += "                            <\/tr>";
        strVar += "                            <tr>";
        strVar += "                                <td width=\"25%\">";
        strVar += "                                    <a href="+newBannerLink4+" style=\"display:block;border:none\" target=\"_blank\" data-saferedirecturl=\"\">";
        strVar += "                                    <img alt=\"xxx\" src="+newBannerImg4+ "\n \"";
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
	document.getElementById("UAdsSideBar").innerHTML = strVar;
	Js_two=2;
}



})
// Main Ads End
