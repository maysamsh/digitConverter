$.fn.convertToEnglishDigits = function () {
    var newValue = "";
    arfaDigit = this.val();
    for (var i = 0; i < arfaDigit.length; i++) {
        var ch = arfaDigit.charCodeAt(i);
        //arabic numbers
        if (ch >= 1632 && ch <= 1641) {
            var newChar = ch - 1584;
            newValue = newValue + String.fromCharCode(newChar);
        }
            //persian numbers
        else if (ch >= 1776 && ch <= 1785) {
            var newChar = ch - 1728;
            newValue = newValue + String.fromCharCode(newChar);
        } else {
            newValue = newValue + String.fromCharCode(ch);
        }
    }
    this.val(newValue);
};
