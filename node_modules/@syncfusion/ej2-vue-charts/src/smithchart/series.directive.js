import { gh, isExecute, vueDefineComponent } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
export var SmithchartSeriesCollectionDirective = vueDefineComponent({
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
            return 'e-seriesCollection';
        }
    }
});
export var SmithchartSeriesCollectionPlugin = {
    name: 'e-seriesCollection',
    install: function (Vue) {
        Vue.component(SmithchartSeriesCollectionPlugin.name, SmithchartSeriesCollectionDirective);
    }
};
export var SmithchartSeriesDirective = vueDefineComponent({
    render: function () {
        return;
    },
    methods: {
        getTag: function () {
            return 'e-series';
        }
    }
});
export var SmithchartSeriesPlugin = {
    name: 'e-series',
    install: function (Vue) {
        Vue.component(SmithchartSeriesPlugin.name, SmithchartSeriesDirective);
    }
};
