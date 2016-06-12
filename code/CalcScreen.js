/** 
  * @desc: This class will hold all the functions for a the screen
  * in a calculator (remember: the calculator only operate with only two number, not accept 
  * more than 2 number to operate)
  * @author monkey (marianomartin79@gmail.com)
*/
function CalcScreen(screenNameStr) {
    // *********************************************************************** 
    // PRIVATE VARIABLES    
    // ***********************************************************************
    var screen_obj;


    // ************************************************************************ 
    // PUBLIC METHOD
    // ************************************************************************    
    this.initializeMe = function() {
        screen_obj = document.getElementById(screenNameStr);
    }

    this.addValue = function(valueStr) {
    	checkStatus();
        screen_obj.value += valueStr;
    }
    this.resetValues = function() {
        screen_obj.value = "0";
    }
    this.deleteValue = function() {
        screen_obj.value = "";
    }
    this.pasteValue = function(valueStr) {
        screen_obj.value = valueStr;
    }
    this.getValue = function() {
        return screen_obj.value;
    }

    // ************************************************************************ 
    // PRIVATE METHOD
    // ************************************************************************ 
    function checkStatus() {
        if (screen_obj.value === "0") screen_obj.value = "";   
    }
}
