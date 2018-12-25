var t;
function down() {
    var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop); // size

    if(top != 1000)  {
        window.scrollBy(0,+100);
        t = setTimeout('down()',40);
    } else clearTimeout(t);
    return false;
}