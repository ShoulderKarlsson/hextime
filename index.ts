const clock = <HTMLElement>document.querySelector('.clock')
const clockContainer = <HTMLElement>document.querySelector('.clock-container')

const transform = (time: number) : string  => time < 10 ? `0${time}` : `${time}`

const getTime = (d: Date) : string => 
  `${transform(d.getHours())}${transform(d.getMinutes())}${transform(d.getSeconds())}`

const setBackground = (element: HTMLElement, hex: string) : void => {
  element.style.background = `#${hex}`
}

const updateClock = (element: HTMLElement, time: string) : void => {
  element.textContent = `#${time}`
}

const update = () : void => {
  const d: Date = new Date()
  const time: string = getTime(d)
  updateClock(clock, time)
  setBackground(clockContainer, time)
}

const run = () : void => {
  setInterval(update, 1000)
}

run()