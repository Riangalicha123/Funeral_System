import { gh, isExecute, vueDefineComponent } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
export var StockChartSelectedDataIndexesDirective = vueDefineComponent({
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
            return 'e-stockchart-selectedDataIndexes';
        }
    }
});
export var StockChartSelectedDataIndexesPlugin = {
    name: 'e-stockchart-selectedDataIndexes',
    install: function (Vue) {
        Vue.component(StockChartSelectedDataIndexesPlugin.name, StockChartSelectedDataIndexesDirective);
    }
};
export var StockChartSelectedDataIndexDirective = vueDefineComponent({
    render: function () {
        return;
    },
    methods: {
        getTag: function () {
            return 'e-stockchart-selectedDataIndex';
        }
    }
});
export var StockChartSelectedDataIndexPlugin = {
    name: 'e-stockchart-selectedDataIndex',
    install: function (Vue) {
        Vue.component(StockChartSelectedDataIndexPlugin.name, StockChartSelectedDataIndexDirective);
    }
};
