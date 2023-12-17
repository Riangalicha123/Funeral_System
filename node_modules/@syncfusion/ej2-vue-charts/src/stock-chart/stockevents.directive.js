import { gh, isExecute, vueDefineComponent } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
export var StockEventsDirective = vueDefineComponent({
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
            return 'e-stockchart-stockevents';
        }
    }
});
export var StockEventsPlugin = {
    name: 'e-stockchart-stockevents',
    install: function (Vue) {
        Vue.component(StockEventsPlugin.name, StockEventsDirective);
    }
};
export var StockEventDirective = vueDefineComponent({
    render: function () {
        return;
    },
    methods: {
        getTag: function () {
            return 'e-stockchart-stockevent';
        }
    }
});
export var StockEventPlugin = {
    name: 'e-stockchart-stockevent',
    install: function (Vue) {
        Vue.component(StockEventPlugin.name, StockEventDirective);
    }
};
