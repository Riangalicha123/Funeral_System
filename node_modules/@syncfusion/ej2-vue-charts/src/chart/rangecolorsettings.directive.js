import { gh, isExecute, vueDefineComponent } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
export var RangeColorSettingsDirective = vueDefineComponent({
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
            return 'e-rangecolorsettings';
        }
    }
});
export var RangeColorSettingsPlugin = {
    name: 'e-rangecolorsettings',
    install: function (Vue) {
        Vue.component(RangeColorSettingsPlugin.name, RangeColorSettingsDirective);
    }
};
export var RangeColorSettingDirective = vueDefineComponent({
    render: function () {
        return;
    },
    methods: {
        getTag: function () {
            return 'e-rangecolorsetting';
        }
    }
});
export var RangeColorSettingPlugin = {
    name: 'e-rangecolorsetting',
    install: function (Vue) {
        Vue.component(RangeColorSettingPlugin.name, RangeColorSettingDirective);
    }
};
