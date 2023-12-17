import { gh, isExecute, vueDefineComponent } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
export var StockChartTrendlinesDirective = vueDefineComponent({
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
            return 'e-trendlines';
        }
    }
});
export var StockChartTrendlinesPlugin = {
    name: 'e-trendlines',
    install: function (Vue) {
        Vue.component(StockChartTrendlinesPlugin.name, StockChartTrendlinesDirective);
    }
};
export var StockChartTrendlineDirective = vueDefineComponent({
    render: function () {
        return;
    },
    methods: {
        getTag: function () {
            return 'e-trendline';
        }
    }
});
export var StockChartTrendlinePlugin = {
    name: 'e-trendline',
    install: function (Vue) {
        Vue.component(StockChartTrendlinePlugin.name, StockChartTrendlineDirective);
    }
};
