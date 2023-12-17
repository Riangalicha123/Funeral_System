import { gh, isExecute, vueDefineComponent } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
export var StockChartAxesDirective = vueDefineComponent({
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
            return 'e-stockchart-axes';
        }
    }
});
export var StockChartAxesPlugin = {
    name: 'e-stockchart-axes',
    install: function (Vue) {
        Vue.component(StockChartAxesPlugin.name, StockChartAxesDirective);
    }
};
export var StockChartAxisDirective = vueDefineComponent({
    render: function () {
        return;
    },
    methods: {
        getTag: function () {
            return 'e-stockchart-axis';
        }
    }
});
export var StockChartAxisPlugin = {
    name: 'e-stockchart-axis',
    install: function (Vue) {
        Vue.component(StockChartAxisPlugin.name, StockChartAxisDirective);
    }
};
