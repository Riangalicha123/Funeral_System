import { gh, isExecute, vueDefineComponent } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
export var AccumulationAnnotationsDirective = vueDefineComponent({
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
            return 'e-accumulation-annotations';
        }
    }
});
export var AccumulationAnnotationsPlugin = {
    name: 'e-accumulation-annotations',
    install: function (Vue) {
        Vue.component(AccumulationAnnotationsPlugin.name, AccumulationAnnotationsDirective);
    }
};
export var AccumulationAnnotationDirective = vueDefineComponent({
    render: function () {
        return;
    },
    methods: {
        getTag: function () {
            return 'e-accumulation-annotation';
        }
    }
});
export var AccumulationAnnotationPlugin = {
    name: 'e-accumulation-annotation',
    install: function (Vue) {
        Vue.component(AccumulationAnnotationPlugin.name, AccumulationAnnotationDirective);
    }
};
