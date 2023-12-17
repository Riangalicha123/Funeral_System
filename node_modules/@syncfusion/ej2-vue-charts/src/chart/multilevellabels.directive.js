import { gh, isExecute, vueDefineComponent } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
export var MultiLevelLabelsDirective = vueDefineComponent({
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
            return 'e-multilevellabels';
        }
    }
});
export var MultiLevelLabelsPlugin = {
    name: 'e-multilevellabels',
    install: function (Vue) {
        Vue.component(MultiLevelLabelsPlugin.name, MultiLevelLabelsDirective);
    }
};
export var MultiLevelLabelDirective = vueDefineComponent({
    render: function () {
        return;
    },
    methods: {
        getTag: function () {
            return 'e-multilevellabel';
        }
    }
});
export var MultiLevelLabelPlugin = {
    name: 'e-multilevellabel',
    install: function (Vue) {
        Vue.component(MultiLevelLabelPlugin.name, MultiLevelLabelDirective);
    }
};
