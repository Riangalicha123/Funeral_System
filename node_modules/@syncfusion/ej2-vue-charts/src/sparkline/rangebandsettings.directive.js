import { gh, isExecute, vueDefineComponent } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
export var RangeBandSettingsDirective = vueDefineComponent({
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
            return 'e-rangeBandSettings';
        }
    }
});
export var RangeBandSettingsPlugin = {
    name: 'e-rangeBandSettings',
    install: function (Vue) {
        Vue.component(RangeBandSettingsPlugin.name, RangeBandSettingsDirective);
    }
};
export var RangeBandSettingDirective = vueDefineComponent({
    render: function () {
        return;
    },
    methods: {
        getTag: function () {
            return 'e-rangeBandSetting';
        }
    }
});
export var RangeBandSettingPlugin = {
    name: 'e-rangeBandSetting',
    install: function (Vue) {
        Vue.component(RangeBandSettingPlugin.name, RangeBandSettingDirective);
    }
};
