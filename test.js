/**
 * Created by Administrator on 2016/8/12.
 */


  var y = 0;
  function change(){
      y+=15;
      document.getElementsByClassName("content1")[0].style.transform = " rotateY("+y+"deg) translateZ(500px)";
      document.getElementsByClassName("content2")[0].style.transform = " rotateY("+(y+72)+"deg) translateZ(500px)";
      document.getElementsByClassName("content3")[0].style.transform = " rotateY("+(y+144)+"deg) translateZ(500px)";
      document.getElementsByClassName("content4")[0].style.transform = " rotateY("+(y+216)+"deg) translateZ(500px)";
      document.getElementsByClassName("content5")[0].style.transform = " rotateY("+(y+288)+"deg) translateZ(500px)";
  }

setInterval(change,500);