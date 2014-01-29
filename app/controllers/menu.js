var args = arguments[0] || {};

var data=[];

for (i=0;i<=10;i++){
	var row=Alloy.createController('menurow').getView();
	data.push(row);
}

$.menuTable.data=data;

function doMenuClick(){
	// handle the click and close the drawer
	Alloy.CFG.contentView.backgroundColor='#' + generateColor();
	Alloy.CFG.drawer.toggleLeftWindow();  
}

function generateColor(){
	return (function lol(m, s, c) {
                    return s[m.floor(m.random() * s.length)] +
                        (c && lol(m, s, c - 1));
                })(Math, '3456789ABCDEF', 4);
}