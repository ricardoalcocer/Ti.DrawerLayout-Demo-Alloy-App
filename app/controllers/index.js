// Android only
if (OS_ANDROID) {
    // Load module
    var TiDrawerLayout = require('com.tripvi.drawerlayout');

    // define menu and main content view
    var menuTable = Alloy.createController('menu').getView();
    var contentView = Alloy.createController('main').getView();

    var drawer = TiDrawerLayout.createDrawer({
            leftView: menuTable,
            centerView: contentView,
            leftDrawerWidth: "240dp",
            width: Ti.UI.FILL,
            height: Ti.UI.FILL
    });

    drawer.addEventListener('draweropen', function(e) {
            // drawer is open
    });

    drawer.addEventListener('drawerclose', function(e) {
            // drawer is closed
    });

    drawer.addEventListener('drawerslide', function(e) {
            // drawer is sliding
            // slide offset: e.offset
    });

    contentView.addEventListener('click',function(e){
    	drawer.toggleLeftWindow();
    })

    $.mainWindow.add(drawer);
    $.mainWindow.open();
}