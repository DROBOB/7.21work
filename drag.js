function drag(selector){
    this.ele=document.querySelector(selector);
    this.x=true;
    this.y=true;
    this.side={
        x1:"",x2:"",y1:"",y2:""
    }
}
drag.prototype={
    move(){
        var that=this;
        this.ele.onmousedown=function(ev){
            var cx=ev.clientX;
            var cy=ev.clientY;
            var ox=that.ele.offsetLeft;
            var oy=that.ele.offsetTop;
            var downx=cx-ox;
            var downy=cy-oy;


            document.onmousemove=function(ev){
                var movex=ev.clientX;
                var movey=ev.clientY;
                var x=movex-downx;
                var y=movey-downy;
                if(that.side.x1!==""){
                    if(x<that.side.x1){
                        x=that.side.x1

                    }
                }
                if(that.side.x2!==""){
                    if(x>that.side.x2){
                        x=that.side.x2

                    }
                }
                if(that.side.y1!==""){
                    if(y<that.side.y1){
                        y=that.side.y1

                    }
                }
                if(that.side.y2!==""){
                    if(y>that.side.y2){
                        y=that.side.y2

                    }
                }
                if(that.x){
                    that.ele.style.left=x+"px";
                }
                if(that.y){
                    that.ele.style.top=y+"px"
                }




            }
            document.onmouseup=function(){
                document.onmousemove=null;
                document.onmousedown=null;
            }

        }

    }

}



// var div = document.querySelector(".two")

// div.onmousedown = function (ev) {
//     var cx=ev.clientX;
//     var cy=ev.clientY
//     var ox=div.offsetLeft;
//     var oy=div.offsetTop;
//     var downx=cx-ox;
//     var downy=cy-oy

//     console.log(ev.offsetX)
//     var startx = ev.offsetX;
//     var starty = ev.offsetY;


//     document.onmousemove = function (ev) {
//         var movex = ev.clientX;
//         var movey = ev.clientY;
//         div.style.left = movex - startx + "px"
//         div.style.top = movey - starty + "px"
//         ev.preventDefault();



//     }
//     document.onmouseup = function (ev) {
//         document.onmousemove = null;
//         document.onmouseup = null;


//     }
//     // console.log(ev.clientX)
//     // div.style.left=bodyLeft-ev.clientX

// }