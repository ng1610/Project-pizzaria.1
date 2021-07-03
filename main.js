var menu_list_array=["Chicken Tandori Pizza",
                     "Veg Supreme Pizza",
                     "Paneer Tikka Pizza",
                     "Deluxe Chicken Pizza",
                     "Veg Extravaganza Pizza"];
console.log(menu_list_array);

function ShowMenu1(){
 var htmldata="";
 htmldata="<ol class='menulist'>";
 menu_list_array.sort();
 for(i=0; i<menu_list_array.length; i++){
 htmldata=htmldata+'<li>'+ menu_list_array[i] + "</li>"
};
console.log(htmldata);
document.getElementById("display_menu").innerHTML=htmldata;
};

function  add_item(){
    var htmldata="";
    var item= document.getElementById("add_item").value;
    menu_list_array.push(item);
    menu_list_array.sort();
    htmldata="<section>";
    for (var i=0; i<menu_list_array.length; i++){
        htmldata= htmldata+"<span class='cards'>"+"<img src='images/pizzaImg.png'>"+menu_list_array[i]+"</span>";
    };
    htmldata=htmldata+"</section>";
    console.log(htmldata);
    document.getElementById("display_addedmenu").innerHTML=htmldata;
};
