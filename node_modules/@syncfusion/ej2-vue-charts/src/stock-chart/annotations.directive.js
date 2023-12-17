import { gh, isExecute, vueDefineComponent } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
export var StockChartAnnotationsDirective = vueDefineComponent({
    inject: { custom: { default: null } },
    render: function (createElement) {
        if (!isExecute) {
            var h = !isExecute ? gh : createElement;
            var slots = null;
            if (!isNullOrUndefined(this.$slots.default)) {
                slots = !isExecute ? this.$slots.default() : this.$slots.default;
            }
            return h('div', { class: 'e-directive' }, slots);
        }
        return;
    },
    updated: function () {
        if (!isExecute && this.custom) {
            this.custom();
        }
    },
    methods: {
        getTag: function () {
            return 'e-stockchart-annotations';
        }
    }
});
export var StockChartAnnotationsPlugin = {
    name: 'e-stockchart-annotations',
    install: function (Vue) {
        Vue.component(StockChartAnnotationsPlugin.name, StockChartAnnotationsDirective);
    }
};
/**
 * `e-annotation` directive represent a annotation of the VueJS Chart.
 * It must be contained in a Chart component(`ejs-chart`).
 * ```vue
 * <ejs-stockchart>
 *   <e-stockchart-annotations>
 *    <e-annotation content='ID' />
 *    <e-annotation content='ID' />
 *   </e-annotations>
 * </ejs-chart>
 * ```
 */
export var StockChartAnnotationDirective = vueDefineComponent({
    render: function () {
        return;
    },
    methods: {
        getTag: function () {
            return 'e-stockchart-annotation';
        }
    }
});
export var StockChartAnnotationPlugin = {
    name: 'e-stockchart-annotation',
    install: function (Vue) {
        Vue.component(StockChartAnnotationPlugin.name, StockChartAnnotationDirective);
    }
};
