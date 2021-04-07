window.jQuery = function (selectorOrArray) {
  let elements;
  if (typeof selectorOrArray === "string") {
    elements = document.querySelectorAll(selectorOrArray);
  } else if (selectorOrArray instanceof Array) {
    elements = selectorOrArray;
  }

  //api 可以操作elements
  return {
    find(selector) {
      let array = [];
      for (let i = 0; i < elements.length; i++) {
        //空数组连接一个新的数组
        const elements2 = Array.from(elements[i].querySelectorAll(selector));
        //Array.from把伪数组转换成真的数组
        array = array.concat(elements2);
      }
      array.oldApi = this; //this 就是旧 api
      return jQuery(array); //传什么操作什么！
    },
    each(fn) {
      for (let i = 0; i < elements.length; i++) {
        fn.call(null, elements[i], i);
      }
      return this; //this是
    },
    parent() {
      const array = [];
      this.each((node) => {
        array.push(node.parentNode);
      });
      return jQuery(array);
    },
    print(){
        console.log(elements)
    },
    //闭包，函数访问外部的变量
    addClass(className) {
      for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        element.classList.add(className);
      }
      return this; //这里可以写出return api，是的这里this就算api
    },
    oldApi: selectorOrArray.oldApi,
    end() {
      return this.oldApi; //this是新 api
    },
  };
};
