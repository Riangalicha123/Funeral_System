import { gh, isExecute, vueDefineComponent } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
export var AccumulationSeriesCollectionDirective = vueDefineComponent({
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
            return 'e-accumulation-series-collection';
        }
    }
});
export var AccumulationSeriesCollectionPlugin = {
    name: 'e-accumulation-series-collection',
    install: function (Vue) {
        Vue.component(AccumulationSeriesCollectionPlugin.name, AccumulationSeriesCollectionDirective);
    }
};
export var AccumulationSeriesDirective = vueDefineComponent({
    render: function () {
        return;
    },
    methods: {
        getTag: function () {
            return 'e-accumulation-series';
        }
    }
});
export var AccumulationSeriesPlugin = {
    name: 'e-accumulation-series',
    install: function (Vue) {
        Vue.component(AccumulationSeriesPlugin.name, AccumulationSeriesDirective);
    }
};
