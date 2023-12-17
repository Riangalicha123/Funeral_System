import { DefineVueDirective } from '@syncfusion/ej2-vue-base';
import { ChartAnnotationSettingsModel } from '@syncfusion/ej2-charts';
export declare let AnnotationsDirective: any;
export declare const AnnotationsPlugin: {
    name: string;
    install(Vue: any): void;
};
/**
 * `e-annotation` directive represent a annotation of the VueJS Chart.
 * It must be contained in a Chart component(`ejs-chart`).
 * ```vue
 * <ejs-chart>
 *   <e-annotations>
 *    <e-annotation content='ID' />
 *    <e-annotation content='ID' />
 *   </e-annotations>
 * </ejs-chart>
 * ```
 */
export declare let AnnotationDirective: DefineVueDirective<ChartAnnotationSettingsModel>;
export declare const AnnotationPlugin: {
    name: string;
    install(Vue: any): void;
};
