// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="index.html">Go语言圣经</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="preface-zh.html">译者序</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="preface.html">前言</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch1/ch1.html"><strong aria-hidden="true">1.</strong> 入门</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch1/ch1-01.html"><strong aria-hidden="true">1.1.</strong> Hello, World</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch1/ch1-02.html"><strong aria-hidden="true">1.2.</strong> 命令行参数</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch1/ch1-03.html"><strong aria-hidden="true">1.3.</strong> 查找重复的行</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch1/ch1-04.html"><strong aria-hidden="true">1.4.</strong> GIF动画</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch1/ch1-05.html"><strong aria-hidden="true">1.5.</strong> 获取URL</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch1/ch1-06.html"><strong aria-hidden="true">1.6.</strong> 并发获取多个URL</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch1/ch1-07.html"><strong aria-hidden="true">1.7.</strong> Web服务</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch1/ch1-08.html"><strong aria-hidden="true">1.8.</strong> 本章要点</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch2/ch2.html"><strong aria-hidden="true">2.</strong> 程序结构</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch2/ch2-01.html"><strong aria-hidden="true">2.1.</strong> 命名</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch2/ch2-02.html"><strong aria-hidden="true">2.2.</strong> 声明</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch2/ch2-03.html"><strong aria-hidden="true">2.3.</strong> 变量</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch2/ch2-04.html"><strong aria-hidden="true">2.4.</strong> 赋值</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch2/ch2-05.html"><strong aria-hidden="true">2.5.</strong> 类型</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch2/ch2-06.html"><strong aria-hidden="true">2.6.</strong> 包和文件</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch2/ch2-07.html"><strong aria-hidden="true">2.7.</strong> 作用域</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch3/ch3.html"><strong aria-hidden="true">3.</strong> 基础数据类型</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch3/ch3-01.html"><strong aria-hidden="true">3.1.</strong> 整型</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch3/ch3-02.html"><strong aria-hidden="true">3.2.</strong> 浮点数</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch3/ch3-03.html"><strong aria-hidden="true">3.3.</strong> 复数</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch3/ch3-04.html"><strong aria-hidden="true">3.4.</strong> 布尔型</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch3/ch3-05.html"><strong aria-hidden="true">3.5.</strong> 字符串</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch3/ch3-06.html"><strong aria-hidden="true">3.6.</strong> 常量</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch4/ch4.html"><strong aria-hidden="true">4.</strong> 复合数据类型</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch4/ch4-01.html"><strong aria-hidden="true">4.1.</strong> 数组</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch4/ch4-02.html"><strong aria-hidden="true">4.2.</strong> Slice</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch4/ch4-03.html"><strong aria-hidden="true">4.3.</strong> Map</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch4/ch4-04.html"><strong aria-hidden="true">4.4.</strong> 结构体</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch4/ch4-05.html"><strong aria-hidden="true">4.5.</strong> JSON</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch4/ch4-06.html"><strong aria-hidden="true">4.6.</strong> 文本和HTML模板</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch5/ch5.html"><strong aria-hidden="true">5.</strong> 函数</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch5/ch5-01.html"><strong aria-hidden="true">5.1.</strong> 函数声明</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch5/ch5-02.html"><strong aria-hidden="true">5.2.</strong> 递归</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch5/ch5-03.html"><strong aria-hidden="true">5.3.</strong> 多返回值</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch5/ch5-04.html"><strong aria-hidden="true">5.4.</strong> 错误</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch5/ch5-05.html"><strong aria-hidden="true">5.5.</strong> 函数值</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch5/ch5-06.html"><strong aria-hidden="true">5.6.</strong> 匿名函数</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch5/ch5-07.html"><strong aria-hidden="true">5.7.</strong> 可变参数</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch5/ch5-08.html"><strong aria-hidden="true">5.8.</strong> Deferred函数</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch5/ch5-09.html"><strong aria-hidden="true">5.9.</strong> Panic异常</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch5/ch5-10.html"><strong aria-hidden="true">5.10.</strong> Recover捕获异常</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch6/ch6.html"><strong aria-hidden="true">6.</strong> 方法</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch6/ch6-01.html"><strong aria-hidden="true">6.1.</strong> 方法声明</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch6/ch6-02.html"><strong aria-hidden="true">6.2.</strong> 基于指针对象的方法</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch6/ch6-03.html"><strong aria-hidden="true">6.3.</strong> 通过嵌入结构体来扩展类型</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch6/ch6-04.html"><strong aria-hidden="true">6.4.</strong> 方法值和方法表达式</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch6/ch6-05.html"><strong aria-hidden="true">6.5.</strong> 示例: Bit数组</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch6/ch6-06.html"><strong aria-hidden="true">6.6.</strong> 封装</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch7/ch7.html"><strong aria-hidden="true">7.</strong> 接口</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch7/ch7-01.html"><strong aria-hidden="true">7.1.</strong> 接口是合约</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch7/ch7-02.html"><strong aria-hidden="true">7.2.</strong> 接口类型</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch7/ch7-03.html"><strong aria-hidden="true">7.3.</strong> 实现接口的条件</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch7/ch7-04.html"><strong aria-hidden="true">7.4.</strong> flag.Value接口</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch7/ch7-05.html"><strong aria-hidden="true">7.5.</strong> 接口值</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch7/ch7-06.html"><strong aria-hidden="true">7.6.</strong> sort.Interface接口</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch7/ch7-07.html"><strong aria-hidden="true">7.7.</strong> http.Handler接口</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch7/ch7-08.html"><strong aria-hidden="true">7.8.</strong> error接口</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch7/ch7-09.html"><strong aria-hidden="true">7.9.</strong> 示例: 表达式求值</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch7/ch7-10.html"><strong aria-hidden="true">7.10.</strong> 类型断言</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch7/ch7-11.html"><strong aria-hidden="true">7.11.</strong> 基于类型断言识别错误类型</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch7/ch7-12.html"><strong aria-hidden="true">7.12.</strong> 通过类型断言查询接口</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch7/ch7-13.html"><strong aria-hidden="true">7.13.</strong> 类型分支</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch7/ch7-14.html"><strong aria-hidden="true">7.14.</strong> 示例: 基于标记的XML解码</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch7/ch7-15.html"><strong aria-hidden="true">7.15.</strong> 补充几点</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch8/ch8.html"><strong aria-hidden="true">8.</strong> Goroutines和Channels</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch8/ch8-01.html"><strong aria-hidden="true">8.1.</strong> Goroutines</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch8/ch8-02.html"><strong aria-hidden="true">8.2.</strong> 示例: 并发的Clock服务</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch8/ch8-03.html"><strong aria-hidden="true">8.3.</strong> 示例: 并发的Echo服务</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch8/ch8-04.html"><strong aria-hidden="true">8.4.</strong> Channels</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch8/ch8-05.html"><strong aria-hidden="true">8.5.</strong> 并发的循环</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch8/ch8-06.html"><strong aria-hidden="true">8.6.</strong> 示例: 并发的Web爬虫</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch8/ch8-07.html"><strong aria-hidden="true">8.7.</strong> 基于select的多路复用</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch8/ch8-08.html"><strong aria-hidden="true">8.8.</strong> 示例: 并发的目录遍历</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch8/ch8-09.html"><strong aria-hidden="true">8.9.</strong> 并发的退出</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch8/ch8-10.html"><strong aria-hidden="true">8.10.</strong> 示例: 聊天服务</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch9/ch9.html"><strong aria-hidden="true">9.</strong> 基于共享变量的并发</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch9/ch9-01.html"><strong aria-hidden="true">9.1.</strong> 竞争条件</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch9/ch9-02.html"><strong aria-hidden="true">9.2.</strong> sync.Mutex互斥锁</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch9/ch9-03.html"><strong aria-hidden="true">9.3.</strong> sync.RWMutex读写锁</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch9/ch9-04.html"><strong aria-hidden="true">9.4.</strong> 内存同步</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch9/ch9-05.html"><strong aria-hidden="true">9.5.</strong> sync.Once惰性初始化</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch9/ch9-06.html"><strong aria-hidden="true">9.6.</strong> 竞争条件检测</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch9/ch9-07.html"><strong aria-hidden="true">9.7.</strong> 示例: 并发的非阻塞缓存</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch9/ch9-08.html"><strong aria-hidden="true">9.8.</strong> Goroutines和线程</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch10/ch10.html"><strong aria-hidden="true">10.</strong> 包和工具</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch10/ch10-01.html"><strong aria-hidden="true">10.1.</strong> 包简介</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch10/ch10-02.html"><strong aria-hidden="true">10.2.</strong> 导入路径</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch10/ch10-03.html"><strong aria-hidden="true">10.3.</strong> 包声明</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch10/ch10-04.html"><strong aria-hidden="true">10.4.</strong> 导入声明</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch10/ch10-05.html"><strong aria-hidden="true">10.5.</strong> 包的匿名导入</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch10/ch10-06.html"><strong aria-hidden="true">10.6.</strong> 包和命名</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch10/ch10-07.html"><strong aria-hidden="true">10.7.</strong> 工具</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch11/ch11.html"><strong aria-hidden="true">11.</strong> 测试</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch11/ch11-01.html"><strong aria-hidden="true">11.1.</strong> go test</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch11/ch11-02.html"><strong aria-hidden="true">11.2.</strong> 测试函数</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch11/ch11-03.html"><strong aria-hidden="true">11.3.</strong> 测试覆盖率</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch11/ch11-04.html"><strong aria-hidden="true">11.4.</strong> 基准测试</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch11/ch11-05.html"><strong aria-hidden="true">11.5.</strong> 剖析</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch11/ch11-06.html"><strong aria-hidden="true">11.6.</strong> 示例函数</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch12/ch12.html"><strong aria-hidden="true">12.</strong> 反射</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch12/ch12-01.html"><strong aria-hidden="true">12.1.</strong> 为何需要反射?</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch12/ch12-02.html"><strong aria-hidden="true">12.2.</strong> reflect.Type和reflect.Value</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch12/ch12-03.html"><strong aria-hidden="true">12.3.</strong> Display递归打印</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch12/ch12-04.html"><strong aria-hidden="true">12.4.</strong> 示例: 编码S表达式</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch12/ch12-05.html"><strong aria-hidden="true">12.5.</strong> 通过reflect.Value修改值</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch12/ch12-06.html"><strong aria-hidden="true">12.6.</strong> 示例: 解码S表达式</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch12/ch12-07.html"><strong aria-hidden="true">12.7.</strong> 获取结构体字段标签</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch12/ch12-08.html"><strong aria-hidden="true">12.8.</strong> 显示一个类型的方法集</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch12/ch12-09.html"><strong aria-hidden="true">12.9.</strong> 几点忠告</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch13/ch13.html"><strong aria-hidden="true">13.</strong> 底层编程</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch13/ch13-01.html"><strong aria-hidden="true">13.1.</strong> unsafe.Sizeof, Alignof 和 Offsetof</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch13/ch13-02.html"><strong aria-hidden="true">13.2.</strong> unsafe.Pointer</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch13/ch13-03.html"><strong aria-hidden="true">13.3.</strong> 示例: 深度相等判断</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch13/ch13-04.html"><strong aria-hidden="true">13.4.</strong> 通过cgo调用C代码</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ch13/ch13-05.html"><strong aria-hidden="true">13.5.</strong> 几点忠告</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="appendix/appendix.html"><strong aria-hidden="true">14.</strong> 附录</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="appendix/appendix-a-errata.html"><strong aria-hidden="true">14.1.</strong> 附录A：原文勘误</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="appendix/appendix-b-author.html"><strong aria-hidden="true">14.2.</strong> 附录B：作者译者</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="appendix/appendix-c-cpoyright.html"><strong aria-hidden="true">14.3.</strong> 附录C：译文授权</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="appendix/appendix-d-translations.html"><strong aria-hidden="true">14.4.</strong> 附录D：其它语言</a></span></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split('#')[0].split('?')[0];
        if (current_page.endsWith('/')) {
            current_page += 'index.html';
        }
        const links = Array.prototype.slice.call(this.querySelectorAll('a'));
        const l = links.length;
        for (let i = 0; i < l; ++i) {
            const link = links[i];
            const href = link.getAttribute('href');
            if (href && !href.startsWith('#') && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The 'index' page is supposed to alias the first chapter in the book.
            if (link.href === current_page
                || i === 0
                && path_to_root === ''
                && current_page.endsWith('/index.html')) {
                link.classList.add('active');
                let parent = link.parentElement;
                while (parent) {
                    if (parent.tagName === 'LI' && parent.classList.contains('chapter-item')) {
                        parent.classList.add('expanded');
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', e => {
            if (e.target.tagName === 'A') {
                const clientRect = e.target.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                sessionStorage.setItem('sidebar-scroll-offset', clientRect.top - sidebarRect.top);
            }
        }, { passive: true });
        const sidebarScrollOffset = sessionStorage.getItem('sidebar-scroll-offset');
        sessionStorage.removeItem('sidebar-scroll-offset');
        if (sidebarScrollOffset !== null) {
            // preserve sidebar scroll position when navigating via links within sidebar
            const activeSection = this.querySelector('.active');
            if (activeSection) {
                const clientRect = activeSection.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                const currentOffset = clientRect.top - sidebarRect.top;
                this.scrollTop += currentOffset - parseFloat(sidebarScrollOffset);
            }
        } else {
            // scroll sidebar to current active section when navigating via
            // 'next/previous chapter' buttons
            const activeSection = document.querySelector('#mdbook-sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        const sidebarAnchorToggles = document.querySelectorAll('.chapter-fold-toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(el => {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define('mdbook-sidebar-scrollbox', MDBookSidebarScrollbox);


// ---------------------------------------------------------------------------
// Support for dynamically adding headers to the sidebar.

(function() {
    // This is used to detect which direction the page has scrolled since the
    // last scroll event.
    let lastKnownScrollPosition = 0;
    // This is the threshold in px from the top of the screen where it will
    // consider a header the "current" header when scrolling down.
    const defaultDownThreshold = 150;
    // Same as defaultDownThreshold, except when scrolling up.
    const defaultUpThreshold = 300;
    // The threshold is a virtual horizontal line on the screen where it
    // considers the "current" header to be above the line. The threshold is
    // modified dynamically to handle headers that are near the bottom of the
    // screen, and to slightly offset the behavior when scrolling up vs down.
    let threshold = defaultDownThreshold;
    // This is used to disable updates while scrolling. This is needed when
    // clicking the header in the sidebar, which triggers a scroll event. It
    // is somewhat finicky to detect when the scroll has finished, so this
    // uses a relatively dumb system of disabling scroll updates for a short
    // time after the click.
    let disableScroll = false;
    // Array of header elements on the page.
    let headers;
    // Array of li elements that are initially collapsed headers in the sidebar.
    // I'm not sure why eslint seems to have a false positive here.
    // eslint-disable-next-line prefer-const
    let headerToggles = [];
    // This is a debugging tool for the threshold which you can enable in the console.
    let thresholdDebug = false;

    // Updates the threshold based on the scroll position.
    function updateThreshold() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // The number of pixels below the viewport, at most documentHeight.
        // This is used to push the threshold down to the bottom of the page
        // as the user scrolls towards the bottom.
        const pixelsBelow = Math.max(0, documentHeight - (scrollTop + windowHeight));
        // The number of pixels above the viewport, at least defaultDownThreshold.
        // Similar to pixelsBelow, this is used to push the threshold back towards
        // the top when reaching the top of the page.
        const pixelsAbove = Math.max(0, defaultDownThreshold - scrollTop);
        // How much the threshold should be offset once it gets close to the
        // bottom of the page.
        const bottomAdd = Math.max(0, windowHeight - pixelsBelow - defaultDownThreshold);
        let adjustedBottomAdd = bottomAdd;

        // Adjusts bottomAdd for a small document. The calculation above
        // assumes the document is at least twice the windowheight in size. If
        // it is less than that, then bottomAdd needs to be shrunk
        // proportional to the difference in size.
        if (documentHeight < windowHeight * 2) {
            const maxPixelsBelow = documentHeight - windowHeight;
            const t = 1 - pixelsBelow / Math.max(1, maxPixelsBelow);
            const clamp = Math.max(0, Math.min(1, t));
            adjustedBottomAdd *= clamp;
        }

        let scrollingDown = true;
        if (scrollTop < lastKnownScrollPosition) {
            scrollingDown = false;
        }

        if (scrollingDown) {
            // When scrolling down, move the threshold up towards the default
            // downwards threshold position. If near the bottom of the page,
            // adjustedBottomAdd will offset the threshold towards the bottom
            // of the page.
            const amountScrolledDown = scrollTop - lastKnownScrollPosition;
            const adjustedDefault = defaultDownThreshold + adjustedBottomAdd;
            threshold = Math.max(adjustedDefault, threshold - amountScrolledDown);
        } else {
            // When scrolling up, move the threshold down towards the default
            // upwards threshold position. If near the bottom of the page,
            // quickly transition the threshold back up where it normally
            // belongs.
            const amountScrolledUp = lastKnownScrollPosition - scrollTop;
            const adjustedDefault = defaultUpThreshold - pixelsAbove
                + Math.max(0, adjustedBottomAdd - defaultDownThreshold);
            threshold = Math.min(adjustedDefault, threshold + amountScrolledUp);
        }

        if (documentHeight <= windowHeight) {
            threshold = 0;
        }

        if (thresholdDebug) {
            const id = 'mdbook-threshold-debug-data';
            let data = document.getElementById(id);
            if (data === null) {
                data = document.createElement('div');
                data.id = id;
                data.style.cssText = `
                    position: fixed;
                    top: 50px;
                    right: 10px;
                    background-color: 0xeeeeee;
                    z-index: 9999;
                    pointer-events: none;
                `;
                document.body.appendChild(data);
            }
            data.innerHTML = `
                <table>
                  <tr><td>documentHeight</td><td>${documentHeight.toFixed(1)}</td></tr>
                  <tr><td>windowHeight</td><td>${windowHeight.toFixed(1)}</td></tr>
                  <tr><td>scrollTop</td><td>${scrollTop.toFixed(1)}</td></tr>
                  <tr><td>pixelsAbove</td><td>${pixelsAbove.toFixed(1)}</td></tr>
                  <tr><td>pixelsBelow</td><td>${pixelsBelow.toFixed(1)}</td></tr>
                  <tr><td>bottomAdd</td><td>${bottomAdd.toFixed(1)}</td></tr>
                  <tr><td>adjustedBottomAdd</td><td>${adjustedBottomAdd.toFixed(1)}</td></tr>
                  <tr><td>scrollingDown</td><td>${scrollingDown}</td></tr>
                  <tr><td>threshold</td><td>${threshold.toFixed(1)}</td></tr>
                </table>
            `;
            drawDebugLine();
        }

        lastKnownScrollPosition = scrollTop;
    }

    function drawDebugLine() {
        if (!document.body) {
            return;
        }
        const id = 'mdbook-threshold-debug-line';
        const existingLine = document.getElementById(id);
        if (existingLine) {
            existingLine.remove();
        }
        const line = document.createElement('div');
        line.id = id;
        line.style.cssText = `
            position: fixed;
            top: ${threshold}px;
            left: 0;
            width: 100vw;
            height: 2px;
            background-color: red;
            z-index: 9999;
            pointer-events: none;
        `;
        document.body.appendChild(line);
    }

    function mdbookEnableThresholdDebug() {
        thresholdDebug = true;
        updateThreshold();
        drawDebugLine();
    }

    window.mdbookEnableThresholdDebug = mdbookEnableThresholdDebug;

    // Updates which headers in the sidebar should be expanded. If the current
    // header is inside a collapsed group, then it, and all its parents should
    // be expanded.
    function updateHeaderExpanded(currentA) {
        // Add expanded to all header-item li ancestors.
        let current = currentA.parentElement;
        while (current) {
            if (current.tagName === 'LI' && current.classList.contains('header-item')) {
                current.classList.add('expanded');
            }
            current = current.parentElement;
        }
    }

    // Updates which header is marked as the "current" header in the sidebar.
    // This is done with a virtual Y threshold, where headers at or below
    // that line will be considered the current one.
    function updateCurrentHeader() {
        if (!headers || !headers.length) {
            return;
        }

        // Reset the classes, which will be rebuilt below.
        const els = document.getElementsByClassName('current-header');
        for (const el of els) {
            el.classList.remove('current-header');
        }
        for (const toggle of headerToggles) {
            toggle.classList.remove('expanded');
        }

        // Find the last header that is above the threshold.
        let lastHeader = null;
        for (const header of headers) {
            const rect = header.getBoundingClientRect();
            if (rect.top <= threshold) {
                lastHeader = header;
            } else {
                break;
            }
        }
        if (lastHeader === null) {
            lastHeader = headers[0];
            const rect = lastHeader.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top >= windowHeight) {
                return;
            }
        }

        // Get the anchor in the summary.
        const href = '#' + lastHeader.id;
        const a = [...document.querySelectorAll('.header-in-summary')]
            .find(element => element.getAttribute('href') === href);
        if (!a) {
            return;
        }

        a.classList.add('current-header');

        updateHeaderExpanded(a);
    }

    // Updates which header is "current" based on the threshold line.
    function reloadCurrentHeader() {
        if (disableScroll) {
            return;
        }
        updateThreshold();
        updateCurrentHeader();
    }


    // When clicking on a header in the sidebar, this adjusts the threshold so
    // that it is located next to the header. This is so that header becomes
    // "current".
    function headerThresholdClick(event) {
        // See disableScroll description why this is done.
        disableScroll = true;
        setTimeout(() => {
            disableScroll = false;
        }, 100);
        // requestAnimationFrame is used to delay the update of the "current"
        // header until after the scroll is done, and the header is in the new
        // position.
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                // Closest is needed because if it has child elements like <code>.
                const a = event.target.closest('a');
                const href = a.getAttribute('href');
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    threshold = targetElement.getBoundingClientRect().bottom;
                    updateCurrentHeader();
                }
            });
        });
    }

    // Takes the nodes from the given head and copies them over to the
    // destination, along with some filtering.
    function filterHeader(source, dest) {
        const clone = source.cloneNode(true);
        clone.querySelectorAll('mark').forEach(mark => {
            mark.replaceWith(...mark.childNodes);
        });
        dest.append(...clone.childNodes);
    }

    // Scans page for headers and adds them to the sidebar.
    document.addEventListener('DOMContentLoaded', function() {
        const activeSection = document.querySelector('#mdbook-sidebar .active');
        if (activeSection === null) {
            return;
        }

        const main = document.getElementsByTagName('main')[0];
        headers = Array.from(main.querySelectorAll('h2, h3, h4, h5, h6'))
            .filter(h => h.id !== '' && h.children.length && h.children[0].tagName === 'A');

        if (headers.length === 0) {
            return;
        }

        // Build a tree of headers in the sidebar.

        const stack = [];

        const firstLevel = parseInt(headers[0].tagName.charAt(1));
        for (let i = 1; i < firstLevel; i++) {
            const ol = document.createElement('ol');
            ol.classList.add('section');
            if (stack.length > 0) {
                stack[stack.length - 1].ol.appendChild(ol);
            }
            stack.push({level: i + 1, ol: ol});
        }

        // The level where it will start folding deeply nested headers.
        const foldLevel = 3;

        for (let i = 0; i < headers.length; i++) {
            const header = headers[i];
            const level = parseInt(header.tagName.charAt(1));

            const currentLevel = stack[stack.length - 1].level;
            if (level > currentLevel) {
                // Begin nesting to this level.
                for (let nextLevel = currentLevel + 1; nextLevel <= level; nextLevel++) {
                    const ol = document.createElement('ol');
                    ol.classList.add('section');
                    const last = stack[stack.length - 1];
                    const lastChild = last.ol.lastChild;
                    // Handle the case where jumping more than one nesting
                    // level, which doesn't have a list item to place this new
                    // list inside of.
                    if (lastChild) {
                        lastChild.appendChild(ol);
                    } else {
                        last.ol.appendChild(ol);
                    }
                    stack.push({level: nextLevel, ol: ol});
                }
            } else if (level < currentLevel) {
                while (stack.length > 1 && stack[stack.length - 1].level > level) {
                    stack.pop();
                }
            }

            const li = document.createElement('li');
            li.classList.add('header-item');
            li.classList.add('expanded');
            if (level < foldLevel) {
                li.classList.add('expanded');
            }
            const span = document.createElement('span');
            span.classList.add('chapter-link-wrapper');
            const a = document.createElement('a');
            span.appendChild(a);
            a.href = '#' + header.id;
            a.classList.add('header-in-summary');
            filterHeader(header.children[0], a);
            a.addEventListener('click', headerThresholdClick);
            const nextHeader = headers[i + 1];
            if (nextHeader !== undefined) {
                const nextLevel = parseInt(nextHeader.tagName.charAt(1));
                if (nextLevel > level && level >= foldLevel) {
                    const toggle = document.createElement('a');
                    toggle.classList.add('chapter-fold-toggle');
                    toggle.classList.add('header-toggle');
                    toggle.addEventListener('click', () => {
                        li.classList.toggle('expanded');
                    });
                    const toggleDiv = document.createElement('div');
                    toggleDiv.textContent = '❱';
                    toggle.appendChild(toggleDiv);
                    span.appendChild(toggle);
                    headerToggles.push(li);
                }
            }
            li.appendChild(span);

            const currentParent = stack[stack.length - 1];
            currentParent.ol.appendChild(li);
        }

        const onThisPage = document.createElement('div');
        onThisPage.classList.add('on-this-page');
        onThisPage.append(stack[0].ol);
        const activeItemSpan = activeSection.parentElement;
        activeItemSpan.after(onThisPage);
    });

    document.addEventListener('DOMContentLoaded', reloadCurrentHeader);
    document.addEventListener('scroll', reloadCurrentHeader, { passive: true });
})();

