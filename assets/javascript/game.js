/* -- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  -- */

	var btn1Val, btn2Val, btn3Val, btn4Val  = 0; 	// button random number values 
	var btnMin = 1, btnMax = 12;					// button random number range 1-12

	var ctrLosses, ctrWins = 0;		// counters for wins and losses

	var randNum = 0, randMin = 19, randMax = 120;	// a random number range 19-120

	var totScore = 0								// button clicked score accumulator

	/* -- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  -- */

	function genRandNumRange(min, max) {
			var randNum =  Math.floor(Math.random() * (max - min + 1)) + min;
			return randNum;
	}

		randNum = genRandNumRange(randMin, randMax);
		//'alert("randNum=" + randNum);

		btn1Val = genRandNumRange(btnMin, btnMax);
		btn2Val = genRandNumRange(btnMin, btnMax);
		btn3Val = genRandNumRange(btnMin, btnMax);
		btn4Val = genRandNumRange(btnMin, btnMax);
		//alert(btn1Val + " " + btn2Val + " " + btn3Val + " " + btn4Val);




	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 	

	// THE MAINLINE OF THE GAME - ALL THE ACTION TAKES PLACE HERE

		$(document).ready(function(){


			
			$('#ctrWinsSpan').text(ctrWins);
			$('#ctrLossesSpan').text(ctrLosses);

			function clicked(btnXVal){
				//You already won/lost - alert already displayed
				if(totScore >= randNum){
    				alert("You are done...Reset the game to begin again!!");
    				return;
    			}

				totScore = totScore + btnXVal;
        		$('#totalScoreCtr').text(totScore);
        		if(totScore == randNum){
        			ctrWins++;
        			$('#ctrWinsSpan').text(ctrWins);
    				alert("You Win!!");
    				return;
    			}

    			if(totScore > randNum){
           			ctrLosses++;
           			$('#ctrLossesSpan').text(ctrLosses);
    				alert("You Lose!!");
    				return;
    			}
			}

		// - - - - - - - -  - - - - - - - - - - - - - - - - - - - - - - - - - - - 

		function resetGame(){
			//alert("resetGame function called")

			// vars for button random number values, init to zero
			 btn1Val, btn2Val, btn3Val, btn4Val  = 0;

			totScore = 0;

			randNum = genRandNumRange(randMin, randMax);
			//randNum = Math.floor(Math.random() * (randMax - randMin + 1)) + randMin;
			//'alert("randNum=" + randNum);

			btn1Val = genRandNumRange(btnMin, btnMax);
			btn2Val = genRandNumRange(btnMin, btnMax);
			btn3Val = genRandNumRange(btnMin, btnMax);
			btn4Val = genRandNumRange(btnMin, btnMax);


			$('#randNumbBox').text(randNum);
			$('#totalScoreCtr').text(totScore);

		
		}


			$('#randNumbBox').text(randNum);

			// - - - - - - - -  - - - - - - - - - - - - - - - - - - - - - - - - - - - 

			// Gem Button OnClick processing

			$("#btn1").click(function(){   		//alert("The Red Crystal was clicked.");
				clicked(btn1Val);
        	});

	   		$("#btn2").click(function(){		//alert("The Blue Crystal was clicked");
        		clicked(btn2Val);
    		});

    		$("#btn3").click(function(){		//alert("The Yellow Crystal was clicked");
        		
        		clicked(btn3Val);
    		});

    		$("#btn4").click(function(){		//alert("The Green Crystal was clicked");
        		clicked(btn4Val);
        	});

    		// click on the total score box to reset game // wins and losses are not reset
    		$("#totalScoreCtr").click(function(){  // play game again
    			resetGame();
            });

			// - - - - - - - -  - - - - - - - - - - - - - - - - - - - - - - - - - - - 

            $("#randNumbBox").click(function(){   	// reset game - start a fresh
				resetGame();
				randNum = Math.floor(Math.random() * (randMax - randMin + 1)) + randMin;
				$('#randNumbBox').text(randNum);
				ctrLosses = 0;
				ctrWins = 0;
				$('#ctrWinsSpan').text(ctrWins);
				$('#ctrLossesSpan').text(ctrLosses);

    		});
    		
            // - - - - - - - -  - - - - - - - - - - - - - - - - - - - - - - - - - - - 

        	    		

		});