import { gh, isExecute, vueDefineComponent } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
export var StockChartPeriodsDirective = vueDefineComponent({
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
            return 'e-stockchart-periods';
        }
    }
});
export var StockChartPeriodsPlugin = {
    name: 'e-stockchart-periods',
    install: function (Vue) {
        Vue.component(StockChartPeriodsPlugin.name, StockChartPeriodsDirective);
    }
};
export var StockChartPeriodDirective = vueDefineComponent({
    render: function () {
        return;
    },
    methods: {
        getTag: function () {
            return 'e-stockchart-period';
        }
    }
});
export var StockChartPeriodPlugin = {
    name: 'e-stockchart-period',
    install: function (Vue) {
        Vue.component(StockChartPeriodPlugin.name, StockChartPeriodDirective);
    }
};
