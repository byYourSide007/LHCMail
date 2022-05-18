export function debounce(func,delay) {/* 防抖函数 */
    let timer = null;
    return function () {
      // let self = this,args = arguments;
      if (timer) clearTimeout(timer);
      timer = setTimeout(function () {
        // func.apply(self,args);/*由于bscroll传入改函数方法有问题，只能先满足需求*/
        func.$refs.scroll.scroll.refresh();
      }, delay);
    }
  }//debounce
