var family_images=["mee.png","mee.png","mee.png","mee.png","family book image.jpg"];
var member_name=["aAshisdutta","Salmalidutta","Aaheleedutta","me_Agniddutta","family"];
var i=0; 
function next() {
i++;
var no_members=4;
if(i>no_members){
i=0
}
document.getElementById("member").innerHTML=member_name[i];
document.getElementById("member_img").src=family_images[i];

}