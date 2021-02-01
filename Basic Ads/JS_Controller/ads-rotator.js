// image folder  path like (Header_full:'images728x214'),(Side_full:'imagesSideBarFull200x600'),(Side_4:'images300x300')
var adBanners;
var bannerLinks;

var Cus_analyticsId;
var UniqueAds;
var Uid;
var AdsRestriction;
var AdsRestriction2;
var Js_one;
var Js_two;
//Data filter Variables
var mytemp;
var mydata;
var baseurl;
var cssfilepath;
var cssfilepathheader;
var contacturl;



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


// OverAllDisplay Validation Start
 if (data[0].display=="no")
 {
 return;
}
else
{
    baseurl=data[0].baseurl;
   cssfilepath=data[0].cssfilepath;
   cssfilepathheader=data[0].cssfilepathheader;
   contacturl=data[0].contacturl;
};
// OverAllDisplay Validation End


if (AdsRestriction=='Responsive' && Js_one!='1') 
{
        var Rnd =Math.floor(Math.random() * ((2-1) - 0 + 1)) + 0;
        if (Rnd==0)
        {
        // Header full size
        mytemp= data[0].Full.filter((x)=>x.size === "728x214");
        mydata= mytemp.filter((x)=>x.display === "yes");
        }
        else
        {
        //Header Half bar
        mytemp= data[0].Full.filter((x)=>x.size === "300x300");
        mydata=mytemp.filter((x)=>x.display === "yes");
        }
}
else if(AdsRestriction2=='ResponsiveSidebar' && Js_two!='2')
{
	var Rnd =Math.floor(Math.random() * ((2-1) - 0 + 1)) + 0;
	if (Rnd==0)
	{ 
	// Full side bar
                   mytemp= data[0].Full.filter((x)=>x.size === "200x600");
                 mydata= mytemp.filter((x)=>x.display === "yes");
	}
	else
	{
	 //Half side bar
                   mytemp= data[0].Full.filter((x)=>x.size === "300x300");
                   mydata=mytemp.filter((x)=>x.display === "yes");
	}
}
else
{
     return;           
};
        
// Data not found validation start
 if (mydata.length==0)
 {
 return;
};
// Data not found validation End


var strVar="";
if (AdsRestriction=='Responsive' && Js_one!='1') 
{
        if (Rnd==0)
        {
        var randNum     = Math.floor(Math.random() * ((mydata.length-1) - 0 + 1)) + 0;

        var imgPrefix   = baseurl + mydata[randNum].imagefolderpath + "/";         //folder path
        var newBannerImg  = imgPrefix + mydata[randNum].imagename;
        var newBannerLink = mydata[randNum].url;

        // 728x214 728x90 banners 
        strVar += "<link type=\"text/css\" rel=\"stylesheet\n \"";
        strVar += "href=\""+cssfilepathheader+ "\">";
        strVar += "<div id=\"w\">\n <div id=\"topad\">\n <a href="+newBannerLink+">";
        strVar += "<img src="+newBannerImg+ " alt=\"\" class=\"res\"/></a>\n </div> </div>";
        }
        else
        { // 300x300 banners

        var randNum     = Math.floor(Math.random() * ((mydata.length-1) - 0 + 1)) + 0;

       var imgPrefix   = baseurl + mydata[randNum].imagefolderpath + "/"; //folder path  
       var newBannerImg  = imgPrefix + mydata[randNum].imagename;
        var newBannerLink = mydata[randNum].url;
        //

        var randNum2     = Math.floor(Math.random() * ((mydata.length-1) - 0 + 1)) + 0;
  
        var newBannerImg2  = imgPrefix + mydata[randNum2].imagename;
        var newBannerLink2 =mydata[randNum2].url;


        var randNum3     = Math.floor(Math.random() * ((mydata.length-1) - 0 + 1)) + 0;
  
        var newBannerImg3  = imgPrefix + mydata[randNum3].imagename;
        var newBannerLink3 = mydata[randNum3].url;
        

        var randNum4     = Math.floor(Math.random() * ((mydata.length-1) - 0 + 1)) + 0;
  
        var newBannerImg4  = imgPrefix + mydata[randNum4].imagename;
        var newBannerLink4 = mydata[randNum4].url;

        //strVar += "<div style=\"height: 250px;\">";
        strVar += "<div>";
        strVar += "<div align=\"right\">";
	strVar += "	<a href=\"" + contacturl + "\" target=\"_blank\">";
	strVar += "	<font face = \"Quicksand\" size= \"2\">@Ads</font>";
	//strVar += "	<img src=\"https://raw.githack.com/prakashincovai/ShowAds/master/Basic Ads/fevicon/i.png\" ";
	//strVar += "    class=\"Res\" title=\"Testing\"/>";
	strVar += "	</a>";
	strVar += "</div>";
        strVar += "<link type=\"text/css\" rel=\"stylesheet\n \"";
        strVar += "href=\""+cssfilepathheader+ "\">";
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
	  var randNum     = Math.floor(Math.random() * ((mydata.length-1) - 0 + 1)) + 0;
  
                     var imgPrefix   = baseurl + mydata[randNum].imagefolderpath + "/";  //folder path
	  var newBannerImg  = imgPrefix + mydata[randNum].imagename;
                     var newBannerLink = mydata[randNum].url;

	 // 300x300 200x200 banners 
        strVar += "<link type=\"text/css\" rel=\"stylesheet\n \"";
        strVar += "href=\""+cssfilepath+ "\">";
	strVar += "<div id=\"w\">\n <div id=\"topad\" class=\"Ressidebar\">\n <a href="+newBannerLink+">";
	strVar += "<img src="+newBannerImg+ " class=\"Ressidebar\"/></a>\n </div> </div>";
	}
	else
	{ // 300x300 banners


        var randNum     = Math.floor(Math.random() * ((mydata.length-1) - 0 + 1)) + 0;
  
         var imgPrefix   = baseurl + mydata[randNum].imagefolderpath + "/";        //folder path
         var newBannerImg  = imgPrefix + mydata[randNum].imagename;
         var newBannerLink = mydata[randNum].url;
        

        var randNum2     = Math.floor(Math.random() * ((mydata.length-1) - 0 + 1)) + 0;
  
        var newBannerImg2  = imgPrefix + mydata[randNum2].imagename;
        var newBannerLink2 =  mydata[randNum2].url;


        var randNum3     = Math.floor(Math.random() * ((mydata.length-1) - 0 + 1)) + 0;
  
        var newBannerImg3  = imgPrefix + mydata[randNum3].imagename;
        var newBannerLink3 =  mydata[randNum3].url;

        var randNum4     = Math.floor(Math.random() * ((mydata.length-1) - 0 + 1)) + 0;
  
        var newBannerImg4  = imgPrefix + mydata[randNum4].imagename;
        var newBannerLink4 =  mydata[randNum4].url;

        strVar += "<div class=\"Ressidebar\">";
	strVar += "<div align=\"right\">";
                   strVar += "	<a href=\"" + contacturl + "\" target=\"_blank\">";
	strVar += "	<font face = \"Quicksand\" size= \"2\">@Ads</font>";
	//strVar += "	<img src=\"https://raw.githack.com/prakashincovai/ShowAds/master/Basic Ads/fevicon/i.png\" ";
	//strVar += "    class=\"Res\" title=\"Testing\"/>";
	strVar += "	</a>";
	strVar += "</div>";
        strVar += "<link type=\"text/css\" rel=\"stylesheet\n \"";
        strVar += "href=\""+cssfilepath+ "\">";
        strVar += "        <table cellpadding=\"0\" border=\"1\" role=\"presentation\">";
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

