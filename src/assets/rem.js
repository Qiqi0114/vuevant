;(function(win) {
    var doc = win.document;
    var docEl = doc.documentElement;
    var tid;

    function refreshRem(){
      var width = docEl.getBoundingClientRect().width;
      if(width > 640) {//最大宽度
        width = 640;
      }
      //设计1rem，等于设计稿当中的100px的值，
      //这样rem的值就出来了
      var rem = width / 6.4;
      docEl.style.fontSize = rem +'px';
    }
    win.addEventListener('resize',function() {
      clearTimeout(tid);
      tid = setTimeout(refreshRem,300);
    },false);
    win.addEventListener('pageshow',function(e) {
      if(e.persisted) {
        clearTimeout(tid);
        tid = setTimeout(refreshRem,300);
      }
    },false);
    refreshRem();
}(window));
