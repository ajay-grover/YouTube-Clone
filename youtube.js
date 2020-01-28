function f()
		{
			var xhttp = new XMLHttpRequest();
                  var a=document.getElementById("i").value;
                  xhttp.open("GET", "https://www.googleapis.com/youtube/v3/search?part=snippet&q="+a+"&key=AIzaSyD38qSogkkzEThZSCfMwhCLAfromUWNWlU");  
xhttp.onload=function() {
    
      var x = JSON.parse(this.responseText);
      var y=x.items[0].id.videoId;
      var b=x.items[0].snippet.channelTitle;
      var cid=x.items[0].snippet.channelId;
      console.log(b);
      var channelname=document.getElementById("d");
      var subscribers=document.getElementById("dd");
     var views=document.getElementById("d1");
     var likes=document.getElementById("d2");
     var dislikes=document.getElementById("d3");
      var z=document.getElementById("if");
      z.setAttribute("src","https://www.youtube.com/embed/"+y);
      var xh= new XMLHttpRequest();
      xh.open("GET","https://www.googleapis.com/youtube/v3/channels?part=statistics&id="+cid+"&key=AIzaSyD38qSogkkzEThZSCfMwhCLAfromUWNWlU");
      xh.onload=function(){
            var x1=JSON.parse(this.responseText);

             channelname.innerHTML="CHANNEL NAME:"+b;
             subscribers.innerHTML="SUBSCRIBERS : "+x1.items[0].statistics.subscriberCount;
      };
    xh.send();
    var xh1=new XMLHttpRequest();
    xh1.open("GET","https://www.googleapis.com/youtube/v3/videos?part=statistics&id="+y+"&key=AIzaSyD38qSogkkzEThZSCfMwhCLAfromUWNWlU");
    xh1.onload=function(){
      var x2=JSON.parse(this.responseText);
      views.innerHTML=x2.items[0].statistics.viewCount+"  views";
      likes.innerHTML=x2.items[0].statistics.likeCount+"  likes";
      dislikes.innerHTML=x2.items[0].statistics.dislikeCount+"  dislikes";
    }
    xh1.send();
  };

xhttp.send();
}