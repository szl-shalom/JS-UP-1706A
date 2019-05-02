# new 关键字
new关键字做了什么
在JavaScript中，使用new关键字后，意味着做了如下四件事情：

- 创建一个新的对象，这个对象的类型是object；

- 设置这个新的对象的内部、可访问性和[[prototype]]属性为构造函数（指prototype.construtor所指向的构造函数）中设置的；

- 执行构造函数，当this关键字被提及的时候，使用新创建的对象的属性；

- 返回新创建的对象（除非构造方法中返回的是‘无原型’）。

在创建新对象成功之后，如果调用一个新对象没有的属性的时候，JavaScript会延原型链向止逐层查找对应的内容。这类似于传统的‘类继承’。

注意：在第二点中所说的有关[[prototype]]属性，只有在一个对象被创建的时候起作用，比如使用new关键字、使用Object.create、基于字面意义的（函数默认为Function.prototype，数字默认为Number.prototype等）。它只能被Object.getPrototypeOf(someObject)所读取。没有其他任何方式来设置或读取这个值。

## 样例说明
ObjMaker = function() {this.a = 'first';};
ObjMaker只是一个用于作为构造器的方法，没有其他意义。

ObjMaker.prototype.b = 'second';
与其他函数类似, ObjMaker拥有一个可被我们修改的prototype属性. 我们添加一个属性b给它。与所有对象一样，ObjMaker也拥有一个不可访问的[[prototype]]属性，我们无法对其进行改变。

obj1 = new ObjMaker();
这里发生了三件事情：

- 一个叫obj1的空对象被创建，首先obj1与{}一致；
- obj1的[[prototype]]属性被设置为ObjMaker的原型属性的拷贝；
- ObjMaker方法被执行，所以obj1.a被设置为‘first‘。

obj1.a;

返回'first'。

obj1.b;
obj1没有'b'属性，所以JavaScript在它的[[prototype]]中查找。它的[[prototype]]与ObjMaker.prototype属性一致。而ObjMaker.prototype属性有一个叫'b'的属性，其值为'second'，所以返回'second'。

模仿继承
你可以使用如下的方式实例化ObjMaker类的子类：

SubObjMaker = function () {};
SubObjMaker.prototype = new ObjMaker(); 
由于这里使用了new关键字，所以SubObjMaker的[[prototype]]属性被设置为ObjMaker.prototype的一个拷贝。

SubObjMaker.prototype.c = 'third';  
obj2 = new SubObjMaker();
obj2的[[prototype]]属性被设置为SubObjMaker的prototype属性的一个拷贝。

obj2.c;
返回'third'。来自SubObjMaker.prototype

obj2.b;
返回‘second’。来自ObjMaker.prototype

obj2.a;
返回‘first’。来自SubObjMaker.prototype，这是因为SubObjMaker是使用ObjMaker的构造方法创建的，这个构造方法赋值给a。