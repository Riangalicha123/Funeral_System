import { gh, isExecute, vueDefineComponent } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
export var StockChartSeriesCollectionDirective = vueDefineComponent({
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
            return 'e-stockchart-series-collection';
        }
    }
});
export var StockChartSeriesCollectionPlugin = {
    name: 'e-stockchart-series-collection',
    install: function (Vue) {
        Vue.component(StockChartSeriesCollectionPlugin.name, StockChartSeriesCollectionDirective);
    }
};
export var StockChartSeriesDirective = vueDefineComponent({
    render: function () {
        return;
    },
    methods: {
        getTag: function () {
            return 'e-stockchart-series';
        }
    }
});
export var StockChartSeriesPlugin = {
    name: 'e-stockchart-series',
    install: function (Vue) {
        Vue.component(StockChartSeriesPlugin.name, StockChartSeriesDirective);
    }
};
