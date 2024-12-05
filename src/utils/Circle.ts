export default class Circle {
  private _x: number
  private _y: number
  private _radius: number
  private _color: string

  constructor(x: number, y: number, radius: number, color: string) {
    this._x = x
    this._y = y
    this._radius = radius
    this._color = color
  }

  public draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath()
    ctx.arc(this._x, this._y, this._radius, 0, 2 * Math.PI)
    ctx.fillStyle = this._color
    ctx.fill()
    ctx.closePath()

    // ctx.globalAlpha = 1 // Сбрасываем прозрачность
  }

  public update(mousePos: { x: number; y: number }) {
    // this._x += Math.cos(Math.random() * Math.PI * 2) * 2
    // this._y += Math.sin(Math.random() * Math.PI * 2) * 2
    // ===============================
    // const dx = mousePos.x - this._x
    // const dy = mousePos.y - this._y
    // const distance = Math.sqrt(dx * dx + dy * dy)
    // const angle = Math.atan2(dy, dx)
    // const newX = this._x + Math.cos(angle)
    // const newY = this._y + Math.sin(angle)
  }
}
