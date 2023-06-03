/* Write class Marker that describes a simple marker. The instances of this class should have the following components:

Private field that stores the color of the marker and only getter color for this field, we set color by parameter in constructor.
Private field that stores the amount of ink in the marker (in percentage), marker creating with 100% of ink and only getter ink for this field.
Public method print(text) that call console.log with letters from text one by one, and write in console as long as there is ink in the marker; one non-whitespace character is 20% of the ink in the marker.
Implement a class that describes a RefillableMarker inherited from a Marker and adding a method refill which add ink to 100%.*/

class Marker {
    #color;
    #inkAmount;
    static maxInkAmount = 100;
    static inkPerSymbol = 9;
    
    constructor(color, inkAmount){
    
        this.#color = color;
        this.#inkAmount = Marker.maxInkAmount;
    }
    
    get color(){
        return this.#color
    }
    
    get ink(){
        return this.#inkAmount;
    }

    _setInkAmount(value) {
        this.#inkAmount = value;
    }
    
    
    print(text) {
    //let noSpaceText = text.replaceAll(/\s/g,'');   // create string without spaces 
    let i = 0; // element of the text
    
    while(this.#inkAmount >= Marker.inkPerSymbol && i < text.length){
        let letter = text[i];
        console.log(text[i]);
        if(letter.trimEnd() !== ' ') {
            this.#inkAmount -= Marker.inkPerSymbol;
        }
        i ++;
        }
    }
}

class RefillableMarker extends Marker {
    
    refill(){
        this._setInkAmount(Marker.maxInkAmount);
    }
    
}