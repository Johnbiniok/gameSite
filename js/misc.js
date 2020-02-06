$(document).ready(function(){
    var tabContainers = $('div.tabNav > div');
    tryrecursive();
    tabContainers.hide().filter(':first').show();

    //grabs the links (a) inside the tabNavigation
    $('div.tabNav ul.navigation a').on('click', function (e) {

        //hides all other containers
        tabContainers.hide();

        tabContainers.filter(this.hash).show();

        //this removes the class of "selected" from all of the links
        $('div.tabNav ul.navigation a').removeClass('selected');

        //selects the one that was clicked and adds the class of selected to it - dealing with the css
        $(this).addClass('selected');

        //return false;
        e.preventDefault();

        //automatically sets the first tab to "selected"
    }).filter(':first').click();

    //switch to tic-tac-toe
    $('#ticToTac').on('click', function(e){
        var $ticTac = $('.selected').parent().next().children('a');

        $ticTac.click();
        e.preventDefault();
    });
    //switch to bulls and cows
    $('#bullsNCows').on('click', function(e){
        var $bullsCows = $('.selected').parent().next().next().children('a');

        $bullsCows.click();
        e.preventDefault();
    });
    function tryrecursive() {
        console.log("Test");
        var tada = 0;
        setInterval(function(){
            if(tada === 0){
                return;
            }
        }, 1000);
        return;
    }
});