/** 
  * @desc: This class will hold all the functions for a calculator.
  * The calculator only operate with only two number, not accept 
  * more than 2 number to operate. This class will contain a BasicMathOperation object
  * (to make basic math operation), a CalcButtonFactory object to create n object of the 
  * type CalcButton wiche set click listener to all the buttons in the view (index.html) and
  * a CalcScreen object.
  * @author monkey (marianomartin79@gmail.com)
*/
function Calculator() {
    // *********************************************************************** 
    // PRIVATE VARIABLES    
    // ***********************************************************************
    var BUTTONS_QUANTITY = 19;
    var CALC_SCREEN_NAME = "calScr";

    var calcBtnFactory_obj;
    var basicMathOpr_obj;
    var calScreen_obj;

    // ************************************************************************ 
    // PUBLIC METHOD
    // ************************************************************************     
    this.initializeMe = function() {
        addEventListener(CalcButton.CALC_BUTTON_CLICKED_EVENT, calcButtonClickedHndl, false);

        basicMathOpr_obj = new BasicMathOperation();


        calcBtnFactory_obj = new CalcButtonFactory(BUTTONS_QUANTITY);
        calcBtnFactory_obj.create();

        calScreen_obj = new CalcScreen(CALC_SCREEN_NAME);
        calScreen_obj.initializeMe();
        calScreen_obj.resetValues();
    }

    // ************************************************************************ 
    // PRIVATE METHOD
    // ************************************************************************     
    function calcButtonClickedHndl(event) {
        var currentValue_sr = event.value;

        //Check when the reset button or the equal button was clicked 
        switch (currentValue_sr) {
            case "AC":
                calScreen_obj.resetValues();
                break;
            case "=":
                checkAndMakeOperation();
                break;
            default:
                if (basicMathOpr_obj.getLastOprtSign() === "=") {
                    calScreen_obj.deleteValue();
                    basicMathOpr_obj.setLastOprtSign("");
                }
                calScreen_obj.addValue(currentValue_sr);
                break;
        }
    }

    function checkAndMakeOperation() {
        var value_str = calScreen_obj.getValue();

        var mathSingIndx_num;
        var mathSign_str; 
        var values_arr;

        var path_str = /([+-/*])/g; //regular expresion, search for the basic math sign

        mathSingIndx_num = path_str.lastIndex;
        mathSign_str = value_str[mathSingIndx_num - 1];
        values_arr = value_str.split(mathSign_str);

        //If the first number is negatives.
        while (path_str.test(value_str) === true) {
            mathSingIndx_num = path_str.lastIndex;
            mathSign_str = value_str[mathSingIndx_num - 1];
            values_arr = value_str.split(mathSign_str);
        }  

        basicMathOpr_obj.saveFirstValue(values_arr[0]);
        basicMathOpr_obj.saveSecondValue(values_arr[1]);
        basicMathOpr_obj.makeOperation(mathSign_str);

        calScreen_obj.pasteValue(basicMathOpr_obj.getResult());

        basicMathOpr_obj.setLastOprtSign("=");
    }
}
