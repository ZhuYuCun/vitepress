---
layout: "doc"
title: markdown语法和写法！

---  

<script setup>
import vDemo from '../components/v-demo.vue'
</script>

## 获取目录
[[toc]]

## header获取
#### title获取 
{{ $frontmatter.title }}

## 代码演示
- 只有针对泛型才有条件分发的概念。同时这个泛型是联合类型
```ts
type A555 <T = string|number|123> =  T extends string ? 1 : 2
type A7777 =   string|number|boolean extends string ? 1 : 2   // 2
type adfasdf = A555   1 | 2
```
:::demo 使用`type`，`plain`，`round`来定义 Button 的样式

```ts
let a = 123
```
:::

## 提示框/字段标题
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::


## 代码块 (高亮)
```vue{3}
<ul>
  <li v-for="todo in todos" :key="todo.id">
    {{ todo.text }}
  </li>
</ul>
```

## 表格   

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |  


## 组件导入和使用  

<v-demo></v-demo>
  

