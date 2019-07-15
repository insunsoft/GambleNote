if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


var AFAppX = self.AFAppX;
self.getCurrentPages = AFAppX.getCurrentPages;
self.getApp = AFAppX.getApp;
self.Page = AFAppX.Page;
self.App = AFAppX.App;
self.my = AFAppX.bridge || AFAppX.abridge;
self.abridge = self.my;
self.Component = AFAppX.WorkerComponent || function(){};
self.$global = AFAppX.$global;


function success() {
require('../../app');
require('../../colorui/components/cu-custom');
require('../../pages/index/index');
require('../../pages/index/list');
require('../../pages/index/feriends');
require('../../pages/index/winitem');
require('../../pages/index/user');
require('../../pages/index/edit');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}