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
            leftDrawerWidth: "240",
            width: Ti.UI.FILL,
            height: Ti.UI.FILL
    });

    // we'll keep global pointers
    Alloy.CFG.drawer=drawer;
    Alloy.CFG.contentView=contentView;

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

    $.mainWindow.addEventListener('open',function(){
        var activity=$.mainWindow.getActivity();
        if (activity){
            var actionBar=activity.getActionBar();
            if (actionBar){
                actionBar.displayHomeAsUp=true;
                actionBar.title="Ti.DrawerLayout Demo"
                actionBar.onHomeIconItemSelected=function(){
                  drawer.toggleLeftWindow();  
                }
            }    
        }
    })

    $.mainWindow.add(drawer);
    $.mainWindow.open();
}