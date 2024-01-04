import { ref } from 'vue'

export const useDraggableHandler = () => {
  const modal = ref(null)

  const offset = ref({
    x: 0, // Отступ по оси X
    y: 0 // Отступ по оси Y
  })

  /** @method
   * @name moving - Перетаскивание элемента
   * @param {Event} event - Объект события */
  const moving = ({ clientX, clientY }) => {
    const newX = clientX - offset.value.x
    const newY = clientY - offset.value.y

    const { innerWidth, innerHeight } = window

    const { clientWidth, clientHeight } = modal.value

    modal.value.style.left = computeCoords(newX, innerWidth, clientWidth)
    modal.value.style.top = computeCoords(newY, innerHeight, clientHeight)
  }

  /** @method
   * @name mouseCapture - Захват мышкой элемента триггера перетаскивания
   * @param {Event} event - Объект события */
  const mouseCapture = ({ clientX, clientY, type }) => {
    const actions = {
      mouseup: () => document.removeEventListener('mousemove', moving),
      mousedown: () => document.addEventListener('mousemove', moving)
    }

    actions[type]()

    if (type === 'mouseup') return

    const { left, top } = modal.value.getBoundingClientRect()

    offset.value.x = clientX - left
    offset.value.y = clientY - top
  }

  /** @method
   * @name computeCoords - Расчёт координат элемента
   * @param {number} axis - Ось перетаскивания
   * @param {number} windowSize - Размер окна
   * @param {number} elementSize - Размер элемента */
  const computeCoords = (axis, windowSize, elementSize) => {
    const availableAxis = windowSize - elementSize

    return axis <= 0 ? '0px' : availableAxis <= axis ? `${availableAxis}px` : `${axis}px`
  }

  return { modal, mouseCapture }
}
