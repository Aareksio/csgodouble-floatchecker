// ==UserScript==
// @name            csgodouble.com - float checker
// @description     Check float value of given item
// @namespace       floatchecker@mole
// @version         1.01
// @author          Mole
// @match           http://www.csgodouble.com/withdraw.php
// @run-at          document-end
// @grant           none
// ==/UserScript==

"use strict";

function checkfloat(ins) {
    var myWindow = window.open("http://king-dev.com/float.php#" + ins, "", "toolbar=no, scrollbars=no, resizable=no, top=150, left=150, width=320, height=120");
}

$("#contextMenu").append("<li><a tabindex='-1' href=\"javascript:checkfloat($('#contextMenu [data-act=0]').attr('href'))\" data-act='1'>Check Float...</a></li>");

(function () {
    var script = document.createElement( "script" );
    script.type = "text/javascript";
    script.appendChild(document.createTextNode(checkfloat));
    document.body.appendChild(script);
})();