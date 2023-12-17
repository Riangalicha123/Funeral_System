import { gh, isExecute, vueDefineComponent } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
export var IndicatorsDirective = vueDefineComponent({
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
            return 'e-indicators';
        }
    }
});
export var IndicatorsPlugin = {
    name: 'e-indicators',
    install: function (Vue) {
        Vue.component(IndicatorsPlugin.name, IndicatorsDirective);
    }
};
export var IndicatorDirective = vueDefineComponent({
    render: function () {
        return;
    },
    methods: {
        getTag: function () {
            return 'e-indicator';
        }
    }
});
export var IndicatorPlugin = {
    name: 'e-indicator',
    install: function (Vue) {
        Vue.component(IndicatorPlugin.name, IndicatorDirective);
    }
};
