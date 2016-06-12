/* @desc: This class will hold the function for one button in the buttons panel
  * in a calculator (remember: the calculator only operate with only two number, not accept 
  * more than 2 number to operate)
  * @author monkey (marianomartin79@gmail.com)
*/

// ************************************************************************ 
// STATIC PROPERTIES 
// ************************************************************************ 
CalcButton.CALC_BUTTON_CLICKED_EVENT = "calcButtonClickedEvent";

function CalcButton (buttonNameStr) {
    // *********************************************************************** 
    // PUBLIC VARIABLES    
    // ***********************************************************************
	this.CALC_BUTTON_CLICKED_EVENT	= "calcButtonClickedEvent";

    // *********************************************************************** 
    // PRIVATE VARIABLES    
    // ***********************************************************************
	var customEvent_obj;
	var buttonName_str = buttonNameStr;
	var button_obj;

    // ************************************************************************ 
    // PUBLIC METHOD
    // ************************************************************************    
	this.initializeMe = function(){
		button_obj = document.getElementById(buttonName_str);
		addListeners();
	}


    // ************************************************************************ 
    // PRIVATE METHOD
    // ************************************************************************ 
	function addListeners () {
		button_obj.addEventListener("click", onClickMe);
	}

	function onClickMe(event){
		customEvent_obj = new CustomEvent(CalcButton.CALC_BUTTON_CLICKED_EVENT);
		customEvent_obj.type = CalcButton.prototype.CALC_BUTTON_CLICKED_EVENT;
		customEvent_obj.value = event.target.value;

		dispatchEvent(customEvent_obj); //To thel to Calculator which button was clicked
	}

}