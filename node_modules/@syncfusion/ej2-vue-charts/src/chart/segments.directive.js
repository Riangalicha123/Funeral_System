import { gh, isExecute, vueDefineComponent } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
export var SegmentsDirective = vueDefineComponent({
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
            return 'e-segments';
        }
    }
});
export var SegmentsPlugin = {
    name: 'e-segments',
    install: function (Vue) {
        Vue.component(SegmentsPlugin.name, SegmentsDirective);
    }
};
export var SegmentDirective = vueDefineComponent({
    render: function () {
        return;
    },
    methods: {
        getTag: function () {
            return 'e-segment';
        }
    }
});
export var SegmentPlugin = {
    name: 'e-segment',
    install: function (Vue) {
        Vue.component(SegmentPlugin.name, SegmentDirective);
    }
};
