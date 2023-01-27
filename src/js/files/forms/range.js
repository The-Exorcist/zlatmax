// Подключение из node_modules
import * as noUiSlider from 'nouislider'

// Подключение стилей из scss/base/forms/range.scss
// в файле scss/forms/forms.scss

// Подключение cтилей из node_modules
// import 'nouislider/dist/nouislider.css'

export function rangeInit() {
    const rangeItems = document.querySelectorAll('[data-range]')
    if (rangeItems.length) {
        rangeItems.forEach((rangeItem) => {
            const fromValue = rangeItem.querySelector('[data-range-from]')
            const toValue = rangeItem.querySelector('[data-range-to]')
            const inputs = [fromValue, toValue]
            const item = rangeItem.querySelector('[data-range-item]')

            noUiSlider.create(item, {
                start: [Number(fromValue.value), Number(toValue.value)], // [0,200000]
                connect: true,
                tooltips: [true, true],
                range: {
                    min: [Number(fromValue.dataset.rangeFrom)],
                    max: [Number(toValue.dataset.rangeTo)],
                },
            })
            item.noUiSlider.on('update', function (values, handle) {
                inputs[handle].value = Math.round(values[handle])
            })

            const setRangeSlider = (i, value) => {
                let arr = [null, null]
                arr[i] = value

                console.log(arr)
                item.noUiSlider.set(arr)
            }

            inputs.forEach((input, index) => {
                input.addEventListener('change', function (e) {
                    setRangeSlider(index, e.currentTarget.value)
                })
            })
        })
    }
}

rangeInit()
