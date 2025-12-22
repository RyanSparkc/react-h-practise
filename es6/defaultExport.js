// 預設匯出 (Default Export)
// 一個模組只能有一個預設匯出，通常用於匯出主要的物件或元件

export default {
  name: '小明',
  age: 18,
  sayHello() {
    console.log(`你好，我是 ${this.name}，今年 ${this.age} 歲`);
  }
}
