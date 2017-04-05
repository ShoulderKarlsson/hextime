
const transform = time => time < 10 ? `0${time}` : time

const getTime = d => `${transform(d.getHours())}${transform(d.getMinutes())}${transform(d.getSeconds())}`

const updateClock = time =>
  document.querySelector('.clock')
    .textContent = `# ${time}`

const setBackground = hex => 
  document.querySelector('.clock-container')
  .style.background = `#${hex}`

const update = () => {
  const d = new Date()
  const time = getTime(d)
  updateClock(time)
  setBackground(time)
}


const run = () => setInterval(update, 1000)
run()