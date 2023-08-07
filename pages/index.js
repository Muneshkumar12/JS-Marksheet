var Enlish = prompt("type your english marks");
if (Enlish === "" || Enlish === null){
    alert("type something......")
}else if (Number(Enlish) > 100){
    alert("please type invalid marks 0-100")
}else {
    var html = prompt("type your html marks");
    if (html === "" || html === null){
        alert("type something.....")
    }else if (Number(html) > 100){
        alert("please type invalid maarks 0-100")
    }else {
        var css = prompt("type your css marks");
        if (css === "" || css === null){
            alert("type something")
        }else if (Number(css) > 100){
            alert("please type invalid maarks 0-100")
        }else {
            var java = prompt("type your java marks");
            if (java === "" || java === null){
                alert("type something.....")
            }else if (Number(css) > 100){
                alert("please type invalid maarks 0-100")
            }else{
                var php = prompt("type your php marks");
                if (php === "" || php === null){
                    alert("type something.....")
                }else if (Number(php) > 100){
                    alert("please type invalid maarks 0-100")
                }else{
                    var total = Number(Enlish) + Number(html) + Number(css) + Number(java) + Number(php);
                    var percentage = total*100/500
                }if (percentage>=80){
                    alert("yout percentage is" + percentage + "% and your grade is A+")
                }else if (percentage>=60){
                    alert("your percentage is" + percentage + "% and you grade is A")
                }else if (percentage>=40){
                    alert("your percentage is" + percentage + "% and you grade is B")
                }else if (percentage>=30){
                    alert("your percentage is" + percentage + "% and you grade is C")
                }else if(percentage <30){
                    alert("your percentage is" + percentage + "% and you're fail")
                }
            }
        }
    }
}