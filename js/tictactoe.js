$(document).ready(function(){
    //declare variables
    var piece, userchoice, computerpiece, randomchoice, allchosen = 0;

    //hide the table for tic tac toe
    $('#tacboard').hide();

    //hide user and computer turns
    $('#cTurn').hide();

    //hide the play again button
    $('#displayOnWin').hide();
    //call function to select piece immediately
    select();
    function select() {
        //get the user value of either x or o and then show the table while hiding the choice
        $("input[type='radio'][name='piece']").click(function () {

            //get value of user gamepiece
            piece = $(this).val();

            //set the piece for the computer
            if (piece === "X") {
                computerpiece = "O";
            } else {
                computerpiece = "X";
            }
            //show user and computer turns
            $('#cTurn').show();

            //show gameboard
            $('#tacboard').show();

            //hide gamepiece
            $('#gamepiece').hide();
        });
    }
    //let user reselect piece
    function reselectPiece(){

    }
    //find which one was clicked
    $('#t01').click(function(){

        //test if that one has been chosen already and if yes, return to function
       if($('#t01').hasClass('pChosen') || $('#t01').hasClass('cChosen')) {
           alert("Please choose a different option!");
           return;
       }else{
           //replace the selected one with the players piece and add class chosen
           $('#r1').replaceWith('<div id="p1">' + piece + '</div>');
           $('#t01').addClass('pChosen');
           allchosen += 1;

           //test for the win
           testWin();

           //send to computer turn handler
            turnHandler();

       }
    });
    $('#t02').click(function(){

        //test if that one has been chosen already and if yes, return to function
        if($('#t02').hasClass('pChosen') || $('#t02').hasClass('cChosen')) {
            alert("Please choose a different option!");
            return;
        }else{
            //replace the selected one with the players piece and add class chosen
            $('#r2').replaceWith('<div id="p2">' + piece + '</div>');
            $('#t02').addClass('pChosen');
            allchosen += 1;
            testWin();
            turnHandler();
        }
    });
    $('#t03').click(function(){

        //test if that one has been chosen already and if yes, return to function
        if($('#t03').hasClass('pChosen') || $('#t03').hasClass('cChosen')) {
            alert("Please choose a different option!");
            return;
        }else{
            //replace the selected one with the players piece and add class chosen
            $('#r3').replaceWith('<div id="p3">' + piece + '</div>');
            $('#t03').addClass('pChosen');
            allchosen += 1;
            testWin();
            turnHandler();
        }
    });
    $('#t04').click(function(){

        //test if that one has been chosen already and if yes, return to function
        if($('#t04').hasClass('pChosen') || $('#t04').hasClass('cChosen')) {
            alert("Please choose a different option!");
            return;
        }else{
            //replace the selected one with the players piece and add class chosen
            $('#r4').replaceWith('<div id="p4">' + piece + '</div>');
            $('#t04').addClass('pChosen');
            allchosen += 1;
            testWin();
            turnHandler();
        }
    });
    $('#t05').click(function(){

        //test if that one has been chosen already and if yes, return to function
        if($('#t05').hasClass('pChosen') || $('#t05').hasClass('cChosen')) {
            alert("Please choose a different option!");
            return;
        }else{
            //replace the selected one with the players piece and add class chosen
            $('#r5').replaceWith('<div id="p5">' + piece + '</div>');
            $('#t05').addClass('pChosen');
            allchosen += 1;
            testWin();
            turnHandler();
        }
    });
    $('#t06').click(function(){

        //test if that one has been chosen already and if yes, return to function
        if($('#t06').hasClass('pChosen') || $('#t06').hasClass('cChosen')) {
            alert("Please choose a different option!");
            return;
        }else{
            //replace the selected one with the players piece and add class chosen
            $('#r6').replaceWith('<div id="p6">' + piece + '</div>');
            $('#t06').addClass('pChosen');
            allchosen += 1;
            testWin();
            turnHandler();
        }
    });
    $('#t07').click(function(){

        //test if that one has been chosen already and if yes, return to function
        if($('#t07').hasClass('pChosen') || $('#t07').hasClass('cChosen')) {
            alert("Please choose a different option!");
            return;
        }else{
            //replace the selected one with the players piece and add class chosen
            $('#r7').replaceWith('<div id="p7">' + piece + '</div>');
            $('#t07').addClass('pChosen');
            allchosen += 1;
            testWin();
            turnHandler();
        }
    });
    $('#t08').click(function(){

        //test if that one has been chosen already and if yes, return to function
        if($('#t08').hasClass('pChosen') || $('#t08').hasClass('cChosen')) {
            alert("Please choose a different option!");
            return;
        }else{
            //replace the selected one with the players piece and add class chosen
            $('#r8').replaceWith('<div id="p8">' + piece + '</div>');
            $('#t08').addClass('pChosen');
            allchosen += 1;
            testWin();
            turnHandler();
        }
    });
    $('#t09').click(function(){

        //test if that one has been chosen already and if yes, return to function
        if($('#t09').hasClass('pChosen') || $('#t09').hasClass('cChosen')) {
            alert("Please choose a different option!");
            return;
        }else{
            //replace the selected one with the players piece and add class chosen
            $('#r9').replaceWith('<div id="p9">' + piece + '</div>');
            $('#t09').addClass('pChosen');
            allchosen += 1;
            testWin();
            turnHandler();
        }
    });

    //this function is to change the highlighted from the player to computer and then make it "think" before choosing a move
    function turnHandler() {
        //set the turn from player to computer
        $('#tUser').removeClass('turnPlayer');

        //find the next a and add class turnplayer
        $('#cUser').addClass('turnPlayer');

        //make the computer "think" about which move to choose
        setTimeout(function() {
            computerturn();
        }, 950);
    }
    function changeToPlayer(){
        //remove turnplayer from computer
        $('#cUser').removeClass('turnPlayer');

        //add turnplayer to user
        $('#tUser').addClass('turnPlayer');

    }
    function computerturn() {
        //randomly generate a number
        randomchoice = Math.floor((Math.random() * 9) + 1);

        switch (randomchoice) {
            case 1:
                if ($('#t01').hasClass('cChosen') || $('#t01').hasClass('pChosen')) {
                    computerturn();
                } else {
                    $('#r1').replaceWith('<div id="p1">' + computerpiece + '</div>');
                    $('#t01').addClass('cChosen');
                    allchosen += 1;
                    testWin();
                    changeToPlayer();
                }
                break;
            case 2:
                if ($('#t02').hasClass('cChosen') || $('#t02').hasClass('pChosen')) {
                    computerturn();
                } else {
                    $('#r2').replaceWith('<div id="p2">' + computerpiece + '</div>');
                    $('#t02').addClass('cChosen');
                    allchosen += 1;
                    testWin();
                    changeToPlayer();
                }
                break;
            case 3:
                if ($('#t03').hasClass('cChosen') || $('#t03').hasClass('pChosen')) {
                    computerturn();
                } else {
                    $('#r3').replaceWith('<div id="p3">' + computerpiece + '</div>');
                    $('#t03').addClass('cChosen');
                    allchosen += 1;
                    testWin();
                    changeToPlayer();
                }
                break;
            case 4:
                if ($('#t04').hasClass('cChosen') || $('#t04').hasClass('pChosen')) {
                    computerturn();
                } else {
                    $('#r4').replaceWith('<div id="p4">' + computerpiece + '</div>');
                    $('#t04').addClass('cChosen');
                    allchosen += 1;
                    testWin();
                    changeToPlayer();
                }
                break;
            case 5:
                if ($('#t05').hasClass('cChosen') || $('#t05').hasClass('pChosen')) {
                    computerturn();
                } else {
                    $('#r5').replaceWith('<div id="p5">' + computerpiece + '</div>');
                    $('#t05').addClass('cChosen');
                    allchosen += 1;
                    testWin();
                    changeToPlayer();
                }
                break;
            case 6:
                if ($('#t06').hasClass('cChosen') || $('#t06').hasClass('pChosen')) {
                    computerturn();
                } else {
                    $('#r6').replaceWith('<div id="p6">' + computerpiece + '</div>');
                    $('#t06').addClass('cChosen');
                    allchosen += 1;
                    testWin();
                    changeToPlayer();
                }
                break;
            case 7:
                if ($('#t07').hasClass('cChosen') || $('#t07').hasClass('pChosen')) {
                    computerturn();
                } else {
                    $('#r7').replaceWith('<div id="p7">' + computerpiece + '</div>');
                    $('#t07').addClass('cChosen');
                    allchosen += 1;
                    testWin();
                    changeToPlayer();
                }
                break;
            case 8:
                if ($('#t08').hasClass('cChosen') || $('#t08').hasClass('pChosen')) {
                    computerturn();
                } else {
                    $('#r8').replaceWith('<div id="p8">' + computerpiece + '</div>');
                    $('#t08').addClass('cChosen');
                    allchosen += 1;
                    testWin();
                    changeToPlayer();
                }
                break;
            case 9:
                if ($('#t09').hasClass('cChosen') || $('#t09').hasClass('pChosen')) {
                    computerturn();
                } else {
                    $('#r9').replaceWith('<div id="p9">' + computerpiece + '</div>');
                    $('#t09').addClass('cChosen');
                    allchosen += 1;
                    testWin();
                    changeToPlayer();
                }
                break;
        }
    }
    //check for winners function
    function testWin(){
        //across bottom row
        if(($('#t09').hasClass('pChosen') && $('#t08').hasClass('pChosen') && $('#t07').hasClass('pChosen')) ||
            //diagonal down
            ($('#t09').hasClass('pChosen') && $('#t05').hasClass('pChosen') && $('#t01').hasClass('pChosen')) ||
            //down back row
            ($('#t09').hasClass('pChosen') && $('#t06').hasClass('pChosen') && $('#t03').hasClass('pChosen')) ||
            //diagonal up
            ($('#t07').hasClass('pChosen') && $('#t05').hasClass('pChosen') && $('#t03').hasClass('pChosen')) ||
            //across top
            ($('#t01').hasClass('pChosen') && $('#t02').hasClass('pChosen') && $('#t03').hasClass('pChosen')) ||
            //down middle row
            ($('#t02').hasClass('pChosen') && $('#t05').hasClass('pChosen') && $('#t08').hasClass('pChosen')) ||
            //down first row
            ($('#t01').hasClass('pChosen') && $('#t04').hasClass('pChosen') && $('#t07').hasClass('pChosen')) ||
            //across middle row
            ($('#t04').hasClass('pChosen') && $('#t05').hasClass('pChosen') && $('#t06').hasClass('pChosen'))){
            $('#tacboard').hide();
            $('#cTurn').hide();

            //show the play again button
            $('#displayOnWin').show();

            //reveal the who wins the second time playing
            $('#tacwhoWins').show();

            //display congratulations
            $('#tacDisplayWin').replaceWith('<h1 id="tacDisplayWin" class="center">Congratulations! You Won!</h1>');
        }
        //across bottom row
        else if(($('#t09').hasClass('cChosen') && $('#t08').hasClass('cChosen') && $('#t07').hasClass('cChosen')) ||
            //diagonal down
            ($('#t09').hasClass('cChosen') && $('#t05').hasClass('cChosen') && $('#t01').hasClass('cChosen')) ||
            //down back row
            ($('#t09').hasClass('cChosen') && $('#t06').hasClass('cChosen') && $('#t03').hasClass('cChosen')) ||
            //diagonal up
            ($('#t07').hasClass('cChosen') && $('#t05').hasClass('cChosen') && $('#t03').hasClass('cChosen')) ||
            //across top
            ($('#t01').hasClass('cChosen') && $('#t02').hasClass('cChosen') && $('#t03').hasClass('cChosen')) ||
            //down middle row
            ($('#t02').hasClass('cChosen') && $('#t05').hasClass('cChosen') && $('#t08').hasClass('cChosen')) ||
            //down first row
            ($('#t01').hasClass('cChosen') && $('#t04').hasClass('cChosen') && $('#t07').hasClass('cChosen')) ||
            //across middle row
            ($('#t04').hasClass('cChosen') && $('#t05').hasClass('cChosen') && $('#t06').hasClass('cChosen'))){
            $('#tacboard').hide();
            $('#cTurn').hide();

            //show the play again button
            $('#displayOnWin').show();

            //reveal the who wins the second time playing
            $('#tacwhoWins').show();

            //display losing text
            $('#tacDisplayWin').replaceWith('<h1 id="tacDisplayWin" class="center">Wow, even a computer can beat you!</h1>');
        }
        //calculate for a tie
        else if( allchosen === 9){
            /*($('#t01').hasClass('cChosen') || $('#t01').hasClass('pChosen')) &&
            ($('#t02').hasClass('cChosen') || $('#t02').hasClass('pChosen')) &&
            ($('#t03').hasClass('cChosen') || $('#t03').hasClass('pChosen')) &&
            ($('#t04').hasClass('cChosen') || $('#t04').hasClass('pChosen')) &&
            ($('#t05').hasClass('cChosen') || $('#t05').hasClass('pChosen')) &&
            ($('#t06').hasClass('cChosen') || $('#t06').hasClass('pChosen')) &&
            ($('#t07').hasClass('cChosen') || $('#t07').hasClass('pChosen')) &&
            ($('#t08').hasClass('cChosen') || $('#t08').hasClass('pChosen')) &&
            ($('#t09').hasClass('cChosen') || $('#t09').hasClass('pChosen'))*/

            $('#tacboard').hide();
            $('#cTurn').hide();

            //show the play again button
            $('#displayOnWin').show();

            //reveal the who wins the second time playing
            $('#tacwhoWins').show();

            //display losing text
            $('#tacDisplayWin').replaceWith('<h1 id="tacDisplayWin" class="center">You are evenly matched! it is a tie!</h1>');
        }
        else{
            return;
        }
    }

    //if they hit play again reset everything
    $('#tacToo').on('click', function(){

        //set allchosen back to 0
        allchosen = 0;

        //hide the button and congrats and redisplay the game board
        $('#displayOnWin').hide();
        $('#tacwhoWins').hide();
        $('#gamepiece').show();



        //replace all marked squares with blank ones
        $('#p1').replaceWith('<div id="r1"></div>');
        $('#p2').replaceWith('<div id="r2"></div>');
        $('#p3').replaceWith('<div id="r3"></div>');
        $('#p4').replaceWith('<div id="r4"></div>');
        $('#p5').replaceWith('<div id="r5"></div>');
        $('#p6').replaceWith('<div id="r6"></div>');
        $('#p7').replaceWith('<div id="r7"></div>');
        $('#p8').replaceWith('<div id="r8"></div>');
        $('#p9').replaceWith('<div id="r9"></div>');

        //remove all classes
        $('#t01').removeClass('cChosen').removeClass('pChosen');
        $('#t02').removeClass('cChosen').removeClass('pChosen');
        $('#t03').removeClass('cChosen').removeClass('pChosen');
        $('#t04').removeClass('cChosen').removeClass('pChosen');
        $('#t05').removeClass('cChosen').removeClass('pChosen');
        $('#t06').removeClass('cChosen').removeClass('pChosen');
        $('#t07').removeClass('cChosen').removeClass('pChosen');
        $('#t08').removeClass('cChosen').removeClass('pChosen');
        $('#t09').removeClass('cChosen').removeClass('pChosen');

        select();
    });
});
