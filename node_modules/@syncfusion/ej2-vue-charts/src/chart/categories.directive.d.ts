import { DefineVueDirective } from '@syncfusion/ej2-vue-base';
import { MultiLevelCategoriesModel } from '@syncfusion/ej2-charts';
export declare let CategoriesDirective: any;
export declare const CategoriesPlugin: {
    name: string;
    install(Vue: any): void;
};
export declare let CategoryDirective: DefineVueDirective<MultiLevelCategoriesModel>;
export declare const CategoryPlugin: {
    name: string;
    install(Vue: any): void;
};
