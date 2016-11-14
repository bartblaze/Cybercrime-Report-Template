widgets = document.getElementsByClassName("widget-frame");

for (i=0; i< widgets.length; i++) {
	var src = widgets[i].src;
	var qid = widgets[i].id.split('_');
	widgets[i].src = src + '#' + encodeURIComponent(window.location.protocol + "//" + window.location.host) + '/' + qid[1];
	widgets[i].className = widgets[i].className + ' custom-field-frame-rendered';
	// the original code to resize embed widgets is now disabled, its now handled inside WidgetsServer.js
	// the oembed iframe template is now using the following code to resize the widget
    // JFCustomWidget.subscribe("ready", function(data){
    //     JFCustomWidget.requestFrameResize({
    //         height: height,
    //         width: width
    //     });
    // });
}

