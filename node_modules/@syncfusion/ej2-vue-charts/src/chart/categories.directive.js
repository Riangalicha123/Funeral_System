import { gh, isExecute, vueDefineComponent } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
export var CategoriesDirective = vueDefineComponent({
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
            return 'e-categories';
        }
    }
});
export var CategoriesPlugin = {
    name: 'e-categories',
    install: function (Vue) {
        Vue.component(CategoriesPlugin.name, CategoriesDirective);
    }
};
export var CategoryDirective = vueDefineComponent({
    render: function () {
        return;
    },
    methods: {
        getTag: function () {
            return 'e-category';
        }
    }
});
export var CategoryPlugin = {
    name: 'e-category',
    install: function (Vue) {
        Vue.component(CategoryPlugin.name, CategoryDirective);
    }
};
