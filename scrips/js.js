    (function() {
        if (!window.addEventListener) return;
        var html = document.documentElement;

        function setFont() {
            var cliWidth = html.clientWidth;
            html.style.fontSize = 100 * (cliWidth / 1920) + 'px';
        }
        document.addEventListener('DOMContentLoaded', setFont, false)
    })();

    $(function(){
      $(".headmenu").mouseover(function(){
        $(this).children(".nav-container").show();
      })
      $(".headmenu").mouseout(function(){
        $(this).children(".nav-container").hide();
      })
    })

  
 