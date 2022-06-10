
## 条件分发
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
  

```vue
<ul>
  <li v-for="todo in todos" :key="todo.id">
    {{ todo.text }}
  </li>
</ul>
```
