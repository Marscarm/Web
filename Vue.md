[toc]

# Vue

### 零、Vue的基本思想

> 页面由数据生成，数据改变，页面就跟着改变
>
> Vue的基本思想就是模板与数据分离，先构建模板，然后渲染数据

### 一、Vue开发的基本步骤

Step1、加载Vue包

~~~html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
~~~

Step2、

创建页面模板；

创建Vue实例对象，设置el属性和data属性；

Step3、

使用简洁的模板语法把数据渲染到页面上

~~~html
data————→{{ message }}
~~~

**第一个Vue程序：**

~~~html
<body>
    <div id="app">
        {{ message }}
        <span> {{message}} </span>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js">		</script>
    <script>
        var app = new Vue({
            el: '#app',
            data: {
                message: 'Hello Vue!'
        }
    })
    </script>
</body>
</html>
~~~

### 二、Vue实例：

#### 1、el属性

el：挂载点，将vue实例挂载到一个标签上

通过css选择器设置Vue实例的挂载点，例如将{{}}中的内容替换成vue实例中data元素的值

el元素的性质

1. Vue实例作用于el选项命中的标签及其内部的标签

2. el可以使用其他选择器：

   '#app'是id选择器，'.app'是类选择器。**建议使用id选择器**

3. 可以设置除了div以外的其他dom元素，但是不允许挂载到html和body元素上去。

#### 2、data属性

vue实例中的数据存放在data属性中

1. data中可以写复杂类型的数据

   ~~~js
   var app = new Vue({
   	el:"#app",
   	data:{
           message:"111",
           school:{
               a:"a",
               b:"b",
           },
           campus:["1","2"]
       },
   })
   ~~~

   注：

   1、vue实例中各个元素需要以 ，结尾；每个元素之间的各项也要以，分隔

   2、data中元素采用键值对的方式书写

   >字符串 a：“a”  
   >
   >对象a：{a:"a",b:"b"}
   >
   >数组a：["","",]

2. 渲染复杂类型的数据遵守js语法

   ~~~js
   1：字符串、{{ message }}
   
   2：对象、{{ school.a }}
   
   3：列表、{{ list[0] }}
   ~~~

   

### 三、Vue指令

- 内容绑定&事件绑定

#### 1、v-test

作用：设置标签的文本值

~~~html
<div id="app">
    <h2 v-text="message + ‘！’"></h2>
    <h2>
        content+{{ message }} 
    <!-- 插值表达式 -->    
    </h2>
</div>
~~~

~~~js
var app = new Vue({
    el:"#app",
    data:{
        message:"black man",
    },
})
~~~

如果对某个标签使用了v-text指令，那么标签内部的内容便会被替换成对应数据项，而如果采用插值表达式的方法，就只替换{{}}中的内容

注：除了直接放数据项，也可以放表达式，例如字符串拼接

#### 2、v-html

设置标签的内部html

注：在普通文本的情况下两者没有区别，但在内容具有html结构时，v-html可以将内部html结构解析出来

#### 3、v-on

为元素绑定事件

~~~html
<input type="button" value="doit" v-on:click="doit">
<input type="button" @dblclick="doit">
~~~

~~~js
var app = new Vue({
    el:"#app",
    methods:{
        doit:function(){
           	this.message="aaa"
        }
    }
})
~~~

方法内部可以通过this来调用



- 显示切换&属性绑定

#### 4、v-show

控制元素是否显示

原理是修改元素的display

指令后面的内容最终解析为布尔值，true显示，false隐藏

~~~html
<img src="loc" v-show="isShow">
<img src="loc" v-show="age>=18">
~~~

#### 5、v-if

根据表达式的值，切换元素的显示和隐藏

~~~html
<p v-if="isShow">
    text...
</p>
~~~

表现上与v-show一致，但v-show是操作display（style）。而v-if是操作dom，当v-if为false时，这个元素直接消失了

v-show时间开销小，v-if大，因为需要操作dom树

#### 6、v-bind

设置元素的属性
$$
v-bind:属性名=表达式
$$

~~~js
<img v-bind:src="imgSrc">
<img :class="isActive?'active':''"> 判断isActive是不是真，是就active，不是就返回空串
<img :class="{active:isActive}">
~~~

#### 7、v-for

根据数据生成列表结构

~~~html
<ul>
    <li v-for="(item,index) in arr" :title="item">
        {{index}}{{item.name}}
    </li>
</ul>
~~~

数组经常和v-for使用
$$
(item,index) \quad in \quad数组
$$
item和index的名字可以修改

数组的更新会同步在v-for中

#### 8、v-on补充

自定义参数与事件修饰符

~~~html
<input type="button" @click="doit(p1,p2)">
<input type="text" @keyup.enter="sayHi">
~~~

定义方法时，需要通过形参来接受实参

修饰符可以对事件进行限制

.enter可以限制触发的按键为回车

事件修饰符有多种

#### 9、v-model

获取和设置表单元素的值：双向绑定

~~~html
<input type="text" v-model="message"/>
~~~

vue实例中的值和表单元素的值是一一对应的（双向绑定）



### 四、网络应用

axios+vue开发网络应用

~~~html
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
axios.get(addr?key=value & key2=value2).then(function(response){},function(err){})
axios.post(addr,{key:value,key2=value2}).then(function(response){},function(err){})
~~~

 注意：axios函数中this已经改变，无法访问到vue实例中data的数据，可以把this保存起来：var that=this；回调函数中直接使用保存的this即可



注意：通过审查元素的方式来确定标签





### 五、Vue组件

Vue组件和Vue实例本质相同，大家都是Vue组件

但是vue实例会比vue组件多出el和router属性，而vue组件的data会被要求必须是函数，防止出现同种组件多实例共享同一个data的事情

[浅谈 vue实例 和 vue组件 - 张啊咩 - 博客园 (cnblogs.com)](https://www.cnblogs.com/amiezhang/p/8366194.html)







[Vue props用法详解 - 迷你淘 - 博客园 (cnblogs.com)](https://www.cnblogs.com/360minitao/p/11850269.html)

