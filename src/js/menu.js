export const menuOpen = () => {
    const allBars = document.querySelectorAll(".bar");
    const menuSystem = document.querySelector("#menu");
    const menuNavigation = document.querySelector("#menu-navigation");
    
    allBars.forEach( (item, i ) => {
        item.style.background = "black";
        switch(i){
            case 0: item.style.transform = "matrix(0.7071, 0.7071, -0.7071, 0.7071, 0, 4)"; break;
            case 1: item.style.transform = "matrix(1, 0, 0, 1, 8, 0)"; 
            item.style.width = "0"; 
            break;
            case 2: item.style.transform = "matrix(0.7071, -0.7071, 0.7071, 0.7071, 0, -4)"; break;
        }
    })
    menuSystem.style.visibility = "inherit";
    menuNavigation.style.visibility = "inherit";
    $(menuSystem).animate({
        opacity: "1",
        width: "350px"
    }, {
        duration: 400,
        easing: "swing",
        complete: function(){
            
        }, queue: false
    });
    $(menuNavigation).animate({
        opacity: "1"
    }, {
        duration: 400,
        easing: "swing",
        complete: function(){
            
        }, queue: false
    });
    // menuSystem.style.width = "350px";
    // menuSystem.style.opacity = "1";
    // menuNavigation.style.opacity = "1";
};
export const menuClose = () => {
    const allBars = document.querySelectorAll(".bar");
    const menuSystem = document.querySelector("#menu");
    const menuNavigation = document.querySelector("#menu-navigation");
    
    allBars.forEach( (item, i ) => {
        item.style.background = "white";
        switch(i){
            case 0: item.style.transform = "matrix(1, 0, 0, 1, 0, 0)"; break;
            case 1: item.style.transform = "matrix(1, 0, 0, 1, 0, 0)";
            item.style.width = "100%";
            break;
            case 2: item.style.transform = "matrix(1, 0, 0, 1, 0, 0)"; break;
        }
    })
    $(menuSystem).animate({
        opacity: "0",
        width: "0"
    }, {
        duration: 400,
        easing: "swing",
        complete: function(){
            menuSystem.style.visibility = "hidden";
        }, queue: false
    });
    $(menuNavigation).animate({
        opacity: "0"
    },{
        duration: 400,
        easing: "swing",
        complete: function(){
            menuNavigation.style.visibility = "hidden";
        }, queue: false
    });
    menuNavigation.style.visibility = "hidden";
    // menuSystem.style.width = "0";
    // menuSystem.style.opacity = "0";
    // menuNavigation.style.opacity = "0";
};