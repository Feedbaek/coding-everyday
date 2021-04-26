var Link = {
    setColor: function(color){
        $("a").css("color",color);
        // var alist = document.querySelectorAll('a');
        // var i = 0;
        // while (i < alist.length) {
        //     alist[i].style.color = color;
        //     i = i + 1;
        // }
    }
}

var Body = {
    setColor: function(color) {
        $("body").css("color",color);
        // document.querySelector('body').style.color = color;
    },
    setBackgroundColor: function(color){
        $("body").css("backgroundColor",color);
        // document.querySelector('body').style.backgroundColor = color;
    }
}

function night_day(self){
    var target = document.querySelector('body');
    if (self.value === 'night') {
        Body.setBackgroundColor("black")
        Body.setColor("white")
        self.value = "day"
        Link.setColor("powderblue");
    }
    else{
        Body.setBackgroundColor("white")
        Body.setColor("black")
        self.value = "night"
        Link.setColor("blue");
    }
    
}