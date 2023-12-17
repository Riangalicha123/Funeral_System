import { gh, isExecute, vueDefineComponent } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
export var RowsDirective = vueDefineComponent({
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
            return 'e-rows';
        }
    }
});
export var RowsPlugin = {
    name: 'e-rows',
    install: function (Vue) {
        Vue.component(RowsPlugin.name, RowsDirective);
    }
};
export var RowDirective = vueDefineComponent({
    render: function () {
        return;
    },
    methods: {
        getTag: function () {
            return 'e-row';
        }
    }
});
export var RowPlugin = {
    name: 'e-row',
    install: function (Vue) {
        Vue.component(RowPlugin.name, RowDirective);
    }
};
