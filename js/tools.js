function myTools() {
    var bndongTools = this;
    var colors      = {
        "gray": "color: #1B2B34;font-size: 12px; line-height: 18px;",
        "red": "color: #EC5f67;font-size: 12px; line-height: 18px;",
        "orange": "color: #F99157;font-size: 12px; line-height: 18px;",
        "yellow": "color: #FAC863;font-size: 12px; line-height: 18px;",
        "green": "color: #99C794;font-size: 12px; line-height: 18px;",
        "teal": "color: #5FB3B3;font-size: 12px; line-height: 18px;",
        "blue": "color: #6699CC;font-size: 12px; line-height: 18px;",
        "purple": "color: #C594C5;font-size: 12px; line-height: 18px;",
        "brown": "color: #AB7967;font-size: 12px; line-height: 18px;"
    };

    /**
     * 加载CSS文件
     */
    this.dynamicLoadingCss = function (path) {
        if (!path || path.length === 0) { throw new Error('argument "path" is required !'); }
        var head = document.getElementsByTagName('head')[0], link = document.createElement('link');
        link.href = path; link.rel = 'stylesheet'; link.type = 'text/css'; head.appendChild(link);
    };

    /**
     * 控制台输出图片
     */
    this.consoleImg = function(url) {
        console.log('%c', 'padding:50px 300px; line-height:120px; background:url('+url+') no-repeat;');
    };

    /**
     * 控制台输出内容
     */
    this.consoleText = function(list, mode) {
        switch (mode) {
            case 'random':
                var colorList = [colors.red, colors.orange, colors.yellow, colors.green, colors.teal, colors.blue, colors.purple, colors.brown];
                $.each(list, function (i) {
                    var str = list[i];
                    var ind = bndongTools.randomNum(0, colorList.length - 1);
                    console.log('%c'+str, colorList[ind]);
                });
                break;
            case 'banner':
                console.log('\n' + ' %c BNDong CNBlogs %c https://www.cnblogs.com/WithLin ' + '\n', 'color: #fadfa3; background: #030307; padding:5px 0;', 'background: #fadfa3; padding:5px 0;');
                console.log('\n' + ' %c BNDong GitHub %c https://github.com/WithLin ' + '\n', 'color: #fadfa3; background: #030307; padding:5px 0;', 'background: #fadfa3; padding:5px 0;');
                console.log('\n' + ' %c BNDong Email %c withlin#yeah.net ' + '\n', 'color: #fadfa3; background: #030307; padding:5px 0;', 'background: #fadfa3; padding:5px 0;');
                break;

            default:
                console.log('%c'+list.join('\n'), colors.gray);
                break;
        }
    };

    /**
     * 滚动主体滚动条到指定位置
     */
    this.actScroll = function(endScroll, time) {
        $('html,body').animate({scrollTop: endScroll}, time);
    };

    /**
     * 随机数
     */
    this.randomNum = function(minNum,maxNum){
        switch(arguments.length){
            case 1:
                return parseInt(Math.random()*minNum+1);
                break;
            case 2:
                return parseInt(Math.random()*(maxNum-minNum+1)+minNum);
                break;
            default:
                return 0;
                break;
        }
    };

    /**
     * 获取页面滚动百分比
     */
    this.getScrollPercent = function() {
        var scrollTo      = $(window).scrollTop(),
            docHeight     = $(document).height(),
            windowHeight  = $(window).height(),
            scrollPercent = (scrollTo / (docHeight-windowHeight)) * 100;
        return scrollPercent.toFixed(0);
    };

    /**
     * 过滤HTML中JavaScript代码
     */
    this.htmlFiltrationScript = function(str) {
        var subStr = new RegExp('\<script.*\<\/script\>', 'ig');
        return str.replace(subStr,"");
    };
}