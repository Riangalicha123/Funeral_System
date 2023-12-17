import { gh, isExecute, vueDefineComponent } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
export var AxesDirective = vueDefineComponent({
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
            return 'e-axes';
        }
    }
});
export var AxesPlugin = {
    name: 'e-axes',
    install: function (Vue) {
        Vue.component(AxesPlugin.name, AxesDirective);
    }
};
export var AxisDirective = vueDefineComponent({
    render: function () {
        return;
    },
    methods: {
        getTag: function () {
            return 'e-axis';
        }
    }
});
export var AxisPlugin = {
    name: 'e-axis',
    install: function (Vue) {
        Vue.component(AxisPlugin.name, AxisDirective);
    }
};
