/** 
  * @desc: This class will get ready all the buttons panel
  * in a calculator (remember: the calculator only operate with only two number, not accept 
  * more than 2 number to operate)
  * @author monkey (marianomartin79@gmail.com)
*/
function CalcButtonFactory (buttonsQuantityNum) {
	// *********************************************************************** 
    // PRIVATE VARIABLES    
    // ***********************************************************************
    var buttoonPrefixId_str = "btn";
	var buttonsQuantity_num = buttonsQuantityNum;
	var buttons_arr = [];
	var calButton_obj;

    // ************************************************************************ 
    // PUBLIC METHOD
    // ************************************************************************    
	this.create = function() {
		for(var i = 0; i<buttonsQuantity_num; i++){
			calButton_obj = new CalcButton(buttoonPrefixId_str+(i+1));
			buttons_arr[i] = calButton_obj;
			calButton_obj.initializeMe();			
		}
	}

	this.getButtons = function(){
		return buttons_arr;
	}
	
	this.getButtonById = function(idStr){
		return buttons_arr[idStr];
	}
}