//Solution 1
/*$(document).ready(function(){	
	noOfRows = 3;
	noOfCols = 8;
	for(i=1;i<=noOfCols;i++){				
		for (j=1;j<=noOfRows;j++){								
			$('#container').append('<div class="square"></div>');		
			$('div:nth-child('+((j*noOfCols) + 1)+')').css('clear','left');			
		}
	}			
});

//Solution 2
$(document).ready(function(){	
	noOfRows = 3;
	noOfCols = 8;
	for(i=1;i<=noOfRows;i++){				
		$('#grid').append('<tr class="tablesquare"></tr>');
		for (j=1;j<=noOfCols;j++){								
			$('tr:nth-child('+i+')').append('<td class="tablesquare"></td>');								
		}
		
	}			
});*/

//Solution 3
$(document).ready(function(){	
	noOfRows = 2;
	noOfCols = 3;
	for(i=1;i<=noOfCols;i++){				
		for (j=1;j<=noOfRows;j++){								
			$('#container').append('<div class="inlinesquare"></div>');
		}
	}	
		$('div:nth-child('+2+')').css('display','inline-block');	
		$('div:nth-child('+3+')').css('display','inline-block');
		$('div:nth-child('+4+')').css('display','inline');
		$('div:nth-child('+5+')').css('display','inline');
			

});
