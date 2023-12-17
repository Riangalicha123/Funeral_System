import { gh, isExecute, vueDefineComponent } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
export var StockChartIndicatorsDirective = vueDefineComponent({
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
            return 'e-stockchart-indicators';
        }
    }
});
export var StockChartIndicatorsPlugin = {
    name: 'e-stockchart-indicators',
    install: function (Vue) {
        Vue.component(StockChartIndicatorsPlugin.name, StockChartIndicatorsDirective);
    }
};
export var StockChartIndicatorDirective = vueDefineComponent({
    render: function () {
        return;
    },
    methods: {
        getTag: function () {
            return 'e-stockchart-indicator';
        }
    }
});
export var StockChartIndicatorPlugin = {
    name: 'e-stockchart-indicator',
    install: function (Vue) {
        Vue.component(StockChartIndicatorPlugin.name, StockChartIndicatorDirective);
    }
};
