import { DefineVueDirective } from '@syncfusion/ej2-vue-base';
import { StockSeriesModel } from '@syncfusion/ej2-charts';
export declare let StockChartSeriesCollectionDirective: any;
export declare const StockChartSeriesCollectionPlugin: {
    name: string;
    install(Vue: any): void;
};
export declare let StockChartSeriesDirective: DefineVueDirective<StockSeriesModel>;
export declare const StockChartSeriesPlugin: {
    name: string;
    install(Vue: any): void;
};
