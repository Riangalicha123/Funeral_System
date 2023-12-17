import { gh, isExecute, vueDefineComponent } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
export var SeriesCollectionDirective = vueDefineComponent({
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
            return 'e-series-collection';
        }
    }
});
export var SeriesCollectionPlugin = {
    name: 'e-series-collection',
    install: function (Vue) {
        Vue.component(SeriesCollectionPlugin.name, SeriesCollectionDirective);
    }
};
export var SeriesDirective = vueDefineComponent({
    render: function () {
        return;
    },
    methods: {
        getTag: function () {
            return 'e-series';
        }
    }
});
export var SeriesPlugin = {
    name: 'e-series',
    install: function (Vue) {
        Vue.component(SeriesPlugin.name, SeriesDirective);
    }
};
