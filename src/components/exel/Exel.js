import {$} from '@core/dom'

export class Exel {
    constructor(selector, options) {
        this.$el = $(selector)
        this.components = options.components || []
    }

    // собираем html для добавления
    getRoot() {
        const $root = $.create('div', 'excel')

        // проходим по всем компонентам из index.js
        this.components = this.components.map( Component => {
            const $el = $.create('div', Component.className)
            const component = new Component($el)
            // DEBUG
            // if (component.name) {
            //     window['c' + component.name] = component
            // }
            $el.html(component.toHTML())
            $root.append($el)
            return component
        })

        return $root
    }

    render() {
        this.$el.append(this.getRoot())
        this.components.forEach( component => component.init())
    }
}
