### 使用方法

```javascript
useKeyPress(["13", "108"], () => {
  console.log("按下了回车");
});
```

点击下方链接查看运行效果：

[![Edit react 监听键盘事件 hook](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/react-jiantingjianpanshijian-hook-oewt9?fontsize=14&hidenavigation=1&theme=dark)

### 参数


| 参数         | 说明         | 类型                             |
| ------------ | ------------ | -------------------------------- |
| keyFilter    | 按键 code    | `keyType`                        |
| EventHandler | 事件回调函数 | `(event: KeyboardEvent) => void` |
| options      | 可配置项     | `EventOptions`                   |

### options

| 参数   | 说明                | 类型                     |
| ------ | ------------------- | ------------------------ |
| events | 触发事件            | `Array<keydown`          |
| target | DOM 节点或 Ref 对象 | `HTMLElement`  `Element` |