// global.d.ts или css-modules.d.ts
declare module '*.module.css' {
  const classes: { [key: string]: string } // Возвращает объект с ключами (классами) и значениями (именами сгенерированных классов).
  export default classes
}
