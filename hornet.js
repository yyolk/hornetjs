loadedInterfaceName = "hornet";

interfaceOrientation = "landscape";

control.colorChanger = function() {
    for (var i = 0; i < myButton.children.length; i++) {
        myButton.children[i].setColors(rgba(slider1.value(),slider2.value(), slider3.value(), 1),rgba(slider1.value(),slider2.value(), slider3.value(), 1),rgba(slider1.value(),slider2.value(), slider3.value(), 1));
    }
}

pages = [[
{
     "name" : "leftPanel",
     "type" : "MultiButton",
     "x" : 0, "y" : 0,
     "width" : .45, "height" : .45,
     "stroke" : "#000000",
     "backgroundColor" : "#1c1c1c",
     "fillColor" : "#fff",
     "rows" : 13, "columns" : 25,
},
{
     "name" : "rightPanel",
     "type" : "MultiButton",
     "x" : 0.5, "y" : 0,
     "width" : .45, "height" : .45,
     "rows" : 13, "columns" : 25,
},
{
     "name" : "bbb",
     "type" : "Button",
     "bounds": [0, .95, .1, .05],
     "ontouchstart" : "control.colorChanger()",
     "color" : "#727272",
     "label": "chngr",
},
{
    "name" : "slider1",
    "type" : "Slider",
    "x" : 0, "y" : .82,
    "width" : .25, "height" : .06,
    "min" : 0, "max" : 255,
    "address" : "/filterCutoff",
    "isVertical" : false,
    "isXFader" : false,
  "color" : "#fb0500",
  "stroke" : "#fb0500",
    "onvaluechange" : "control.colorChanger()"
},
{
    "name" : "slider2",
    "type" : "Slider",
    "x" : .3, "y" : .82,
    "width" : .25, "height" : .06,
    "min" : 0, "max" : 255,
    "address" : "/filterCutoff",
    "isVertical" : false,
    "isXFader" : false,
  "color" : "#1efb00",
  "stroke" : "#1efb00",
    "onvaluechange" : "filterCutoffLabel.changeValue(this.value);"
},
{
    "name" : "slider3",
    "type" : "Slider",
    "x" : .6, "y" : .82,
    "width" : .25, "height" : .06,
    "min" : 0, "max" : 255,
    "address" : "/filterCutoff",
    "isVertical" : false,
    "isXFader" : false,
  "color" : "#0008fb",
  "stroke" : "#0008fb",
    "onvaluechange" : "filterCutoffLabel.changeValue(this.value);"
},
{
    "name": "refreshHH",
    "type": "Button",
    "bounds": [.8, .95, .1, .05],
    "startingValue": 0,
    "isLocal": true,
    "mode": "contact",
    "ontouchstart": "interfaceManager.refreshInterface()",
    "stroke": "rgba(40, 40, 40, 1)",
    "label": "R"
},
{
    "name": "tabButton",
    "type": "Button",
    "bounds": [.9, .95, .1, .05],
    "mode": "toggle",
    "stroke": "#575757",
    "isLocal": true,
    "ontouchstart": "if(this.value == this.max) { control.showToolbar(); } else { control.hideToolbar(); }",
    "label": "menu",
},

]

];