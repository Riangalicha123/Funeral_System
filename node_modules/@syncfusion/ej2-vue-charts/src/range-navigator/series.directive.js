import { gh, isExecute, vueDefineComponent } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
export var RangenavigatorSeriesCollectionDirective = vueDefineComponent({
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
            return 'e-rangenavigator-series-collection';
        }
    }
});
export var RangenavigatorSeriesCollectionPlugin = {
    name: 'e-rangenavigator-series-collection',
    install: function (Vue) {
        Vue.component(RangenavigatorSeriesCollectionPlugin.name, RangenavigatorSeriesCollectionDirective);
    }
};
export var RangenavigatorSeriesDirective = vueDefineComponent({
    render: function () {
        return;
    },
    methods: {
        getTag: function () {
            return 'e-rangenavigator-series';
        }
    }
});
export var RangenavigatorSeriesPlugin = {
    name: 'e-rangenavigator-series',
    install: function (Vue) {
        Vue.component(RangenavigatorSeriesPlugin.name, RangenavigatorSeriesDirective);
    }
};
