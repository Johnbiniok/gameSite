$(document).ready(function(){

    //declare arrays needed
    var userNums = [], randomchoice, compNums, bulls = 0, cows = 0, tries = 0;
    $('#playerguess').hide();
    $('#playBull').on('click', function(){
        $('#playBull').hide();
        $('#playerguess').show();
        $('#playBulls').show();
        let cell = 1;
        //create the numpad to use
        for(let row = 1; row <= 4; row++){

            //inner loop needs its own loop variables
            for(let col = 1; col <= 3; col++){

                //using let, the other variables (row) are available here because of scope
                $('#replaceWithNumpad').append('<span class="cell" id="bull' + cell + '"></span>');
                //increment each cell
                cell++;
            }

            //the col variable doesnt exist here (using let)
            //start a new row
            $('#replaceWithNumpad').append('<br>');
        }
        //enter the values into each box as desired
        $('#bull1').replaceWith('<span id="bull1" class="cell" value="1">1</span>');
        $('#bull2').replaceWith('<span id="bull2" class="cell" value="2">2</span>');
        $('#bull3').replaceWith('<span id="bull3" class="cell" value="2">3</span>');
        $('#bull4').replaceWith('<span id="bull4" class="cell" value="2">4</span>');
        $('#bull5').replaceWith('<span id="bull5" class="cell" value="2">5</span>');
        $('#bull6').replaceWith('<span id="bull6" class="cell" value="2">6</span>');
        $('#bull7').replaceWith('<span id="bull7" class="cell" value="2">7</span>');
        $('#bull8').replaceWith('<span id="bull8" class="cell" value="2">8</span>');
        $('#bull9').replaceWith('<span id="bull9" class="cell" value="2">9</span>');
        $('#bull10').replaceWith('<span class="icon-arrow-left cell" id="bull10"></span>');
        $('#bull11').replaceWith('<span id="bull0" class="cell" value="2">0</span>');
        $('#bull12').replaceWith('<span class="icon-checkmark cell" id="bull12"></span>');

        compNums = computerGenerate();
        console.log(compNums);
        //detect which button the player clicked and add it to the array
        $('#bull1').on('click', function(){
            checkArray(1);
        });
        $('#bull2').on('click', function(){
            checkArray(2);
        });
        $('#bull3').on('click', function(){
            checkArray(3);
        });
        $('#bull4').on('click', function(){
            checkArray(4);
        });
        $('#bull5').on('click', function(){
            checkArray(5);
        });
        $('#bull6').on('click', function(){
            checkArray(6);
        });
        $('#bull7').on('click', function(){
            checkArray(7);
        });
        $('#bull8').on('click', function(){
            checkArray(8);
        });
        $('#bull9').on('click', function(){
            checkArray(9);
        });
        $('#bull10').on('click', function(){
            //backspace
            userNums.pop();
            deleteFromArray();
        });
        $('#bull11').on('click', function(){
            checkArray(0);
        });
        $('#bull12').on('click', function(){
            //enter
            //run the function to play
            if(userNums.length === 4) {
                tries++;
                bulls = 0;
                cows = 0;
                playBulls();
            }else{
                $('#youneedtogo').replaceWith('<div class="center" id="youneedtogo">You need to enter 4 numbers to start!</div>');
                setTimeout(hideThis, 2000);
            }
        });

        //this function adds bulls and cows accordingly and then a
        function playBulls(){
        if(userNums[0] === compNums[0]){
            bulls++;
        }
        if(userNums[1] === compNums[1]){
            bulls++;
        }
        if(userNums[2] === compNums[2]){
            bulls++;
        }
        if(userNums[3] === compNums[3]){
            bulls++;
        }
        if(compNums.includes(userNums[0]) && userNums[0] !== compNums[0]){
            cows++;
        }
        if(compNums.includes(userNums[1]) && userNums[1] !== compNums[1]){
            cows++;
        }
        if(compNums.includes(userNums[2]) && userNums[2] !== compNums[2]){
            cows++;
        }
        if(compNums.includes(userNums[3]) && userNums[3] !== compNums[3]){
            cows++;
        }
        displayBullsCows();
        }

        //this function will check for a win and if not then display the amount of bulls, cows and tries
        function displayBullsCows(){
            if(bulls === 4){
                //game over
                $('#howBullsCows').replaceWith('<div id="howBullsCows">Congratulations! You have made it in ' + tries + ' tries</div>');

                //hide the game and display win
                $('#playBulls').hide();
                $('#playerguess').hide();
                emptyAll();
                $('#playBull').show();
            }else {
                //$('#howBullsCows').show();
                $('#howBullsCows').show().replaceWith('<div id="howBullsCows">Bulls: ' + bulls + ' &nbsp; Cows: ' + cows + '&nbsp; Tries: ' + tries + '</div>');
            }
        }
    });
    function emptyAll() {
        computerGenerate();
        userNums.splice(0, 4);
    }
    //this function will handle the back button and delete the text accordingly
    function deleteFromArray(){
        if (userNums.length === 0){
            $('#oneNum').replaceWith('<div id="oneNum" class="myline"></div>');
        }
        else if(userNums.length === 1){
            $('#twoNum').replaceWith('<div id="twoNum" class="myline"></div>');
        }
        else if(userNums.length === 2){
            $('#threeNum').replaceWith('<div id="threeNum" class="myline"></div>');
        }
        else if(userNums.length === 3){
            $('#fourNum').replaceWith('<div id="fourNum" class="myline"></div>');
        }
    }

    //this function will randomly select 4 numbers for the computers array by shuffling them and getting rid of extras
    function computerGenerate(){
        //initialize an array with numbers 0-9
        let computerNums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

        //use a loop to iterate through the array and move each into a random position and subtract from i instead of adding
        for (let i = computerNums.length-1; i >=0; i--) {

            //get a random number to determine the order to place the array in
            let randomIn = Math.floor(Math.random()*(i+1));

            //get a let and make it equal to the array computernums with the random number set
            let itemAt = computerNums[randomIn];

            //use the random in and make it equal to the i
            computerNums[randomIn] = computerNums[i];

            //switch the other variable around and place the number in the array where you took the last one
            computerNums[i] = itemAt;
        }
        //get rid of all but the first 4 numbers of the array
        computerNums.splice(4, 6);
        //send the result back to the variable compnums
        return computerNums;
    }

    //check to see how long the array is, and then perform actions accordingly
    function checkArray(numToAdd){
        if (userNums.length === 0){
            userNums[0] = numToAdd;
            $('#oneNum').append(userNums[0]);
        }
        else if(userNums.length === 1){
            checkTwo(numToAdd);
        }
        else if(userNums.length === 2){
            checkThree(numToAdd);
        }
        else if(userNums.length === 3){
            checkFour(numToAdd);
        }
        //this is a check to make sure they don't enter more than 4 numbers
        else{
            $('#youneedtogo').replaceWith('<div class="center" id="youneedtogo">You cannot enter another number!</div>');
            setTimeout(hideThis,2000);
        }

        //this function checks the second number to make sure it isn't the same as the first
        function checkTwo(numToAdd){
            if(numToAdd === userNums[0]){
                $('#youneedtogo').replaceWith('<div class="center" id="youneedtogo">You cannot enter the same number!</div>');
                setTimeout(hideThis, 2000);
            }else{
                userNums[1] = numToAdd;
                $('#twoNum').append(userNums[1]);
            }
        }

        //this function checks the third number to make sure it's different from the first and second
        function checkThree(numToAdd){
            if(userNums[0] === numToAdd || userNums[1] === numToAdd){
                $('#youneedtogo').replaceWith('<div class="center" id="youneedtogo">You cannot enter the same number!</div>');
                setTimeout(hideThis, 2000);
            }else{
                userNums[2] = numToAdd;
                $('#threeNum').append(userNums[2]);
            }
        }

        //this function checks the fourth number to make sure it isn't the same as the first, second, or third
        function checkFour(numToAdd){
            if(userNums[0] === numToAdd || userNums[1] === numToAdd || userNums[2] === numToAdd){
                $('#youneedtogo').replaceWith('<div class="center" id="youneedtogo">You cannot enter the same number!</div>');
                setTimeout(hideThis, 2000);
            }else{
                userNums[3] = numToAdd;
                $('#fourNum').append(userNums[3]);
            }
        }
    }
    //this function will empty the warning div
    function hideThis(){
        $('#youneedtogo').fadeOut().empty();
    }
});