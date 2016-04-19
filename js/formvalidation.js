function validate() {

    var atpos = document.myForm.email.value.indexOf("@");
    var dotpos = document.myForm.email.value.lastIndexOf(".");

    if (document.myForm.name.value === "") {
        alert("Skriv in ett giltigt namn");
        document.myForm.name.focus();
        return false;
    }

    if (atpos < 1 || (dotpos - atpos < 2)) {
        alert("Ange en giltig epost-adress");
        document.myForm.email.focus();
        return false;
    }


    if (document.myForm.age.value === "" || document.myForm.age.value % 1 !== 0 || document.myForm.age.value < 0) {
        alert("Ange en giltig ålder");
        document.myForm.age.focus();
        return false;
    }

    if (document.myForm.date.value === "") {
        alert("Ange ett giltigt datum");
        document.myForm.date.focus();
        return false;
    }

    if (document.myForm.date.value !== "") {
        var month = parseInt(document.myForm.date.value.substring(5, 7), 10);
        var day = parseInt(document.myForm.date.value.substring(8, 10), 10);
        var year = parseInt(document.myForm.date.value.substring(0, 4), 10);

        if ((month < 1) || (month > 12)) {
            alert("Ange en giltig månad!");
            document.myForm.date.focus();
            return false;
        } else if ((day < 1) || (day > 31)) {
            alert("Ange ett giltigt datum!");
            document.myForm.date.focus();
            return false;
        } else if (((month === 4) || (month === 6) || (month === 9) || (month === 11)) && (day > 30)) {
            alert("Vald månad har färre än 31 dagar!");
            document.myForm.date.focus();
            return false;
        } else if ((month === 2) && (((year % 400) === 0) || ((year % 4) === 0)) && ((year % 100) !== 0) && (day > 29)) {
            alert("Februari har 29 dagar på ett skottår!");
            document.myForm.date.focus();
            return false;
        } else if ((month === 2) && ((year % 100) === 0) && (day > 29)) {
            alert("Februari har 29 dagar på ett skottår!");
            document.myForm.date.focus();
            return false;
        } else if ((month === 2) && (day > 28)) {
            alert("Februari har bara 28 dagar!");
            document.myForm.date.focus();
            return false;
        } else if (year < 1000) {
            alert("Ange ett år med minst 4 siffror!");
            document.myForm.date.focus();
            return false;
        } else {
            alert("Tack för ditt meddelande, vi återkommer till dig inom kort!");
            return true;
        }
    }

    if (document.myForm.msg.value === "") {

        alert("Skriv ett meddelande!");
        document.myForm.msg.focus();
        return false;
    }

    return (true);
}