export default class Particle {
  static particles: Particle[] = []

  public x: number
  public y: number
  public radius: number
  public dx: number
  public dy: number
  public speed: number
  public angle: number

  private _color: string
  private _canvas: HTMLCanvasElement
  private _ctx: CanvasRenderingContext2D

  constructor(canvas: HTMLCanvasElement) {
    this.x = Math.random() * window.innerWidth
    this.y = Math.random() * window.innerHeight
    this.radius = Math.random() * 2 + 2
    this.angle = Math.random() * 2 * Math.PI
    this.speed = Math.random() * 0.5 + 0.2
    this.dx = this.speed * Math.cos(this.angle)
    this.dy = this.speed * Math.sin(this.angle)

    this._color = `rgba(${Math.round(Math.random() * 255)}, ${Math.round(
      Math.random() * 255
    )}, ${Math.round(Math.random() * 255)}, 1)`
    // this._color = `hsl(${Math.random() * 360}, 100%, 50%)`

    // this._color = Math.round(Math.random()) ? 'white' : 'red'
    // this._color = Math.round(Math.random())
    //   ? 'rgba(255,255,255, 1)'
    //   : 'rgba(255,255,255, .5)'
    this._canvas = canvas
    this._ctx = canvas.getContext('2d')!
  }

  private _draw() {
    this._ctx.beginPath()
    this._ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
    this._ctx.fillStyle = this._color
    this._ctx.fill()
    this._ctx.closePath()
  }
  public update(mousePos: { x: number; y: number }) {
    const koef = 0.3
    if (this.dx > this.speed) this.dx -= koef
    if (this.dx < -this.speed) this.dx += koef
    if (this.dy > this.speed) this.dy -= koef
    if (this.dy < -this.speed) this.dy += koef
    if (this.x - this.radius < 0 || this.x + this.radius > this._canvas.width) {
      this.bounce({ x: this.x < 0 ? 1 : -1, y: 0 }) //Нормаль для вертикальных стенок
    }
    if (
      this.y - this.radius < 0 ||
      this.y + this.radius > this._canvas.height
    ) {
      this.bounce({ x: 0, y: this.y < 0 ? 1 : -1 }) //Нормаль для горизонтальных стенок
    }

    this.getDistanceToMouse(mousePos)

    this.x += this.dx
    this.y += this.dy
    this._draw()
  }

  // Функция для изменения угла после столкновения
  bounce(normal: { x: number; y: number }) {
    // normal - это вектор нормали к поверхности столкновения (вектор длины 1)
    // Вычисляем угол отражения
    const v = { x: this.dx, y: this.dy } //Скорость частицы
    const dotProduct = v.x * normal.x + v.y * normal.y
    this.dx -= 2 * dotProduct * normal.x
    this.dy -= 2 * dotProduct * normal.y
  }

  getDistanceToMouse(mousePos: { x: number; y: number }) {
    const distanceX = this.x - mousePos.x
    const distanceY = this.y - mousePos.y
    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2)

    const escapingDistance = 100

    if (distance < escapingDistance) {
      const currentSpeed = Math.sqrt(this.dx ** 2 + this.dy ** 2)
      if (currentSpeed + 10 > this.speed) {
        this.dx = (this.dx / currentSpeed) * this.speed
        this.dy = (this.dy / currentSpeed) * this.speed
      }
      const angle = Math.atan2(distanceY, distanceX)

      this.dx += Math.cos(angle) * 5
      this.dy += Math.sin(angle) * 5
    }
  }

  static updateAll(mousePos: { x: number; y: number }) {
    Particle.particles.forEach(particle => particle.update(mousePos))
  }
}
