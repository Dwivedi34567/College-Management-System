
function check()
{
alert("Details has been saved sucessfully");
}
 window.onload = function () {
  var backgroundImg=["ProjectImages/Image1.jpg","ProjectImages/Image2.jpg","ProjectImages/Image3.jpg","college.jpg","ProjectImages/Image4.jpg","ProjectImages/Image5.jpg","ProjectImages/Image6.jpg"
                    ]
  
    setInterval(changeImage, 2000);
   function changeImage() {   
    var i = Math.floor((Math.random() * 7));
    
    document.getElementById("image").src = backgroundImg[i];
    
  }
}
function LoginApp()
{
var userid=document.getElementById("userid").value;
var password=document.getElementById("password").value;
sessionStorage.setItem("userNane",document.getElementById("userid").value);
if(userid=="Prakhar123" && password=="P@ssw0rd")
{
//window.open("file:///C:/Users/91723/Desktop/html%20programs/pan.html","_self");
document.location.href="file:///C:/Users/91723/Desktop/html%20programs/pan.html"
}
else if(userid=="Sid123" && password=="Sid@123")
{
document.location.href="file:///C:/Users/91723/Desktop/html%20programs/pan.html"
}
else if(userid=="Sanjay123" && password=="San@123")
{
document.location.href="file:///C:/Users/91723/Desktop/html%20programs/pan.html"
}
else if(userid=="Nitik123" && password=="Nit@123")
{
document.location.href="file:///C:/Users/91723/Desktop/html%20programs/pan.html"
}
else
{
alert("Please provide valid authentication.");
}
}