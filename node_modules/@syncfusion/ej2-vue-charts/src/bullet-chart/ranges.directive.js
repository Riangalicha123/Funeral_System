import { gh, isExecute, vueDefineComponent } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
export var BulletRangeCollectionDirective = vueDefineComponent({
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
            return 'e-bullet-range-collection';
        }
    }
});
export var BulletRangeCollectionPlugin = {
    name: 'e-bullet-range-collection',
    install: function (Vue) {
        Vue.component(BulletRangeCollectionPlugin.name, BulletRangeCollectionDirective);
    }
};
export var BulletRangeDirective = vueDefineComponent({
    render: function () {
        return;
    },
    methods: {
        getTag: function () {
            return 'e-bullet-range';
        }
    }
});
export var BulletRangePlugin = {
    name: 'e-bullet-range',
    install: function (Vue) {
        Vue.component(BulletRangePlugin.name, BulletRangeDirective);
    }
};
