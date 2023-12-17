import { gh, isExecute, vueDefineComponent } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
export var StripLinesDirective = vueDefineComponent({
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
            return 'e-striplines';
        }
    }
});
export var StripLinesPlugin = {
    name: 'e-striplines',
    install: function (Vue) {
        Vue.component(StripLinesPlugin.name, StripLinesDirective);
    }
};
export var StripLineDirective = vueDefineComponent({
    render: function () {
        return;
    },
    methods: {
        getTag: function () {
            return 'e-stripline';
        }
    }
});
export var StripLinePlugin = {
    name: 'e-stripline',
    install: function (Vue) {
        Vue.component(StripLinePlugin.name, StripLineDirective);
    }
};
