import { gh, isExecute, vueDefineComponent } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
export var TrendlinesDirective = vueDefineComponent({
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
export var TrendlinesPlugin = {
    name: 'e-trendlines',
    install: function (Vue) {
        Vue.component(TrendlinesPlugin.name, TrendlinesDirective);
    }
};
export var TrendlineDirective = vueDefineComponent({
    render: function () {
        return;
    },
    methods: {
        getTag: function () {
            return 'e-trendline';
        }
    }
});
export var TrendlinePlugin = {
    name: 'e-trendline',
    install: function (Vue) {
        Vue.component(TrendlinePlugin.name, TrendlineDirective);
    }
};
