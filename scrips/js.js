    (function() {
        if (!window.addEventListener) return;
        var html = document.documentElement;

        function setFont() {
            var cliWidth = html.clientWidth;
            html.style.fontSize = 100 * (cliWidth / 1920) + 'px';
        }
        document.addEventListener('DOMContentLoaded', setFont, false)
    })();

      //原生js动态添加和移除class
function addClass(element, className) {
  if(!new RegExp("(^|\\s)" + className + "(\\s|$)").test(element.className)) element.className += ' ' + className;
}
function removeClass(element, className) {
  element.className = element.className.replace(new RegExp("(^|\\s)" + className + "(?=(\\s|$))", "g"), '');
}

// function getElementsByClassName (className) {
//           var all = document.all ? document.all : document.getElementsByTagName('*');
//           var elements = new Array();
//           for (var e = 0; e < all.length; e++) {
//             if (all[e].className == className) {
//                 elements[elements.length] = all[e];
//                 break;
//             }
//           }
//           return elements;
//          }

 
  
   
    function show(ele) {
        ele.style.display="block";
        console.log(ele);
        // addClass(menulink[0],'selected');
        
    }

    function hide(ele) {
        ele.style.display="none";
         // removeClass(menulink[0],'selected');
    }

    // var menulist= document.getElementsByClassName('headmenu');
    // for (var i = 1; i < menulist.length; i++) {
    //     var menulink=menulist[i].getElementsByTagName("a");
    //     var showContent=menulink[0].getElementsByClassName('nav-container');
    //      menulist[i].onmouseover = show(showContent[0]);
    //     menulist[i].onmouseout = hide(showContent[0]);
    // }
  
      var menulist= document.getElementsByClassName('headmenu');
       var menulink=menulist[1].getElementsByTagName("a");
       showContent=menulink[0].parentNode.getElementsByClassName('nav-container')[0];
       

      show(showContent);
      hide(showContent);



// //导航栏 
//     var menulist= document.getElementsByClassName('headmenu');
//     var menulink=menulist[1].getElementsByTagName("a");
//     menulist[1].onmouseover = show;
//     menulist[1].onmouseout = hide;
//     alert('1');
//     console.log(menulink);
//     function show() {
//         document.getElementById('nav-content').style.display = "block";
//         addClass(menulink[0],'selected');
        
//     }




