import { gh, isExecute, vueDefineComponent } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
export var SelectedDataIndexesDirective = vueDefineComponent({
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
            return 'e-selecteddataindexes';
        }
    }
});
export var SelectedDataIndexesPlugin = {
    name: 'e-selecteddataindexes',
    install: function (Vue) {
        Vue.component(SelectedDataIndexesPlugin.name, SelectedDataIndexesDirective);
    }
};
export var SelectedDataIndexDirective = vueDefineComponent({
    render: function () {
        return;
    },
    methods: {
        getTag: function () {
            return 'e-selecteddataindex';
        }
    }
});
export var SelectedDataIndexPlugin = {
    name: 'e-selecteddataindex',
    install: function (Vue) {
        Vue.component(SelectedDataIndexPlugin.name, SelectedDataIndexDirective);
    }
};
