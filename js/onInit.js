function onInit(){
    Blockly.JavaScript['onswitch'] = function (block) {
        var dropdown_direction = block.getFieldValue('direction');
        // var dropdown_switch = block.getFieldValue('switch');
        if (dropdown_direction === "F") {
            var code = "window.gameInstance.SendMessage('vehicle', 'goForward');"
            
            
                
                      
        }
        
        
        return code;
        
        
    };
    

}