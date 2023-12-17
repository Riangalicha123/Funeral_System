import { gh, isExecute, vueDefineComponent } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
export var StockChartRowsDirective = vueDefineComponent({
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
            return 'e-stockchart-rows';
        }
    }
});
export var StockChartRowsPlugin = {
    name: 'e-stockchart-rows',
    install: function (Vue) {
        Vue.component(StockChartRowsPlugin.name, StockChartRowsDirective);
    }
};
export var StockChartRowDirective = vueDefineComponent({
    render: function () {
        return;
    },
    methods: {
        getTag: function () {
            return 'e-stockchart-row';
        }
    }
});
export var StockChartRowPlugin = {
    name: 'e-stockchart-row',
    install: function (Vue) {
        Vue.component(StockChartRowPlugin.name, StockChartRowDirective);
    }
};
