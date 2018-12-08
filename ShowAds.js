
 function Ads(){
	ad_client = "100";
	/* Leader Board Ad */
	ad_slot = "Leader_Board_ad";
	ad_width = 300;
	ad_height = 250;
   
    ads = new Array(5);
    ads[0] = "<a href='http://www.google.com' rel='nofollow'>" + 
             "<img src='http://www.winnershtriangle.com/images/Match.gif' border='0' height='90px' width='468px'/></a>";
    ads[1] = "<a href='AD URL' rel='nofollow'>" +
             "<img src='https://www.searchenginegenie.com/images/new-logo-1.gif' border='0' height='90px' width='468px'/></a>";
    ads[2] = "<a href='AD URL' rel='nofollow'>" + 
             "<img src='IMAGE URL' border='0' height='90px' width='468px'/></a>";
    ads[3] = "<a href='AD URL' rel='nofollow'>" +
             "<img src='https://3.bp.blogspot.com/-ThnEqjSRK_Q/Wm2MjueFNpI/AAAAAAAATco/LrNzwRdmWDgLaIEoUjmtFS5VHHnoLkpagCLcBGAs/s297/blog-logo.jpg' border='0' height='90px' width='468px'/></a>";
    ads[4] = "<a href='AD URL' rel='nofollow'>" + 
             "<img src='https://stackoverflow.com/' border='0' height='90px' width='468px'/></a>";
    index = Math.floor(Math.random() * ads.length);
    document.write(ads[index]); 
}
