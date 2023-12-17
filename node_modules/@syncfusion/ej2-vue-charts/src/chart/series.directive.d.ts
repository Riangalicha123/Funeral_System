import { DefineVueDirective } from '@syncfusion/ej2-vue-base';
import { SeriesModel } from '@syncfusion/ej2-charts';
export declare let SeriesCollectionDirective: any;
export declare const SeriesCollectionPlugin: {
    name: string;
    install(Vue: any): void;
};
export declare let SeriesDirective: DefineVueDirective<SeriesModel>;
export declare const SeriesPlugin: {
    name: string;
    install(Vue: any): void;
};
