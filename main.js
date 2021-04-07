jQuery(".test")
  .find(".child")
  .addClass(".red") ////链式操作
  .addClass(".blue") //this就算api
  .addClass(".green")
  .end()
  .addClass("yellow"); //遍历所有刚才获取的元素

//obj.fn(p1)//函数里的this就是obj
//obj.fn.call(obj,p1)

//const x1 = jQuery(".test").find(".child");
//console.log(x1);

const x = jQuery('.test')
x.parent().print()
