/* @desc: This class will hold all functions for make math operation
  * in a calculator (remember: the calculator only operate with only two number, not accept 
  * more than 2 number to operate)
  * @author monkey (marianomartin79@gmail.com)
*/
function BasicMathOperation() {
    // *********************************************************************** 
    // PRIVATE VARIABLES    
    // ***********************************************************************
	var value1_num = 0;
	var value2_num = 0;
	var operation_str;

	var result_num;
	var lastOprtSign_str;

    // ************************************************************************ 
    // PUBLIC METHOD
    // ************************************************************************   
	this.saveFirstValue = function(value1Num){
		value1_num = value1Num;
	}
	this.saveSecondValue = function(value2Num){
		value2_num = value2Num;
	}

	this.makeOperation = function(oprtSignStr){
		lastOprtSign_str = oprtSignStr
		switch(lastOprtSign_str){
			case "+":
				add();
				break;
			case "-":
				subtract();
				break;
			case "*":
				multiply();
				break;
			case "/":
				divide();
				break;

		}
	}
	this.getResult = function(){
		return result_num;
	}
	this.setLastOprtSign = function(oprtSignStr){
		lastOprtSign_str = oprtSignStr;
	}
	this.getLastOprtSign = function(){
		return lastOprtSign_str;
	}

    // ************************************************************************ 
    // PRIVATE METHOD
    // ************************************************************************ 
	function add() {
		result_num = Number(value1_num) + Number(value2_num);
	}

	function subtract() {
		result_num =  Number(value1_num) - Number(value2_num);
	}

	function multiply() {
		result_num = Number(value1_num) * Number(value2_num);
	}

	function divide() {
		result_num = Number(value1_num) / Number(value2_num);
	}
	
}