import { ChildProperty } from '@syncfusion/ej2-base';
import { BorderModel, FontModel, PeriodsModel } from './base-model';
import { EmptyPointMode, FadeOutMode, TooltipPosition } from '../../chart/utils/enum';
import { AccEmptyPointMode, ConnectorType } from '../../accumulation-chart/model/enum';
import { Alignment, TextOverflow } from '../utils/enum';
import { RangeIntervalType, PeriodSelectorPosition } from '../utils/enum';
/**
 * Defines the appearance of the connectors
 */
export declare class Connector extends ChildProperty<Connector> {
    /**
     * specifies the type of the connector line. They are
     * * Smooth
     * * Line
     *
     * @default 'Line'
     */
    type: ConnectorType;
    /**
     * Color of the connector line.
     *
     * @default null
     */
    color: string;
    /**
     * Width of the connector line in pixels.
     *
     * @default 1
     */
    width: number;
    /**
     * Length of the connector line in pixels.
     *
     * @default null
     */
    length: string;
    /**
     * dashArray of the connector line.
     *
     * @default ''
     */
    dashArray: string;
}
/**
 * Configures the fonts in charts.
 */
export declare class Font extends ChildProperty<Font> {
    /**
     * FontStyle for the text.
     *
     * @default 'Normal'
     */
    fontStyle: string;
    /**
     * Font size for the text.
     *
     * @default '16px'
     */
    size: string;
    /**
     * FontWeight for the text.
     *
     * @default 'Normal'
     */
    fontWeight: string;
    /**
     * Color for the text.
     *
     * @default ''
     */
    color: string;
    /**
     * text alignment.
     *
     * @default 'Center'
     */
    textAlignment: Alignment;
    /**
     * FontFamily for the text.
     */
    fontFamily: string;
    /**
     * Opacity for the text.
     *
     * @default 1
     */
    opacity: number;
    /**
     * Specifies the chart title text overflow.
     *
     * @default 'Wrap'
     */
    textOverflow: TextOverflow;
}
/**
 * Configures the borders in the chart.
 */
export declare class Border extends ChildProperty<Border> {
    /**
     * The color of the border that accepts value in hex and rgba as a valid CSS color string.
     *
     * @default ''
     */
    color: string;
    /**
     * The width of the border in pixels.
     *
     * @default 1
     */
    width: number;
}
/**
 * Configures the marker position in the chart.
 */
export declare class Offset extends ChildProperty<Offset> {
    /**
     * x value of the marker position.
     *
     * @default 0
     */
    x: number;
    /**
     * y value of the marker position.
     *
     * @default 0
     */
    y: number;
}
/**
 * Configures the chart area.
 */
export declare class ChartArea extends ChildProperty<ChartArea> {
    /**
     * Options to customize the border of the chart area.
     */
    border: BorderModel;
    /**
     * The background of the chart area that accepts value in hex and rgba as a valid CSS color string..
     *
     * @default 'transparent'
     */
    background: string;
    /**
     * The opacity for background.
     *
     * @default 1
     */
    opacity: number;
    /**
     * The background image of the chart area that accepts value in string as url link or location of an image.
     *
     * @default null
     */
    backgroundImage: string;
    /**
     * Defines the width for the chart area element. Takes value in percentage and in pixel.
     *
     * @default null
     */
    width: string;
}
/**
 * Configures the chart margins.
 */
export declare class Margin extends ChildProperty<Margin> {
    /**
     * Left margin in pixels.
     *
     * @default 10
     */
    left: number;
    /**
     * Right margin in pixels.
     *
     * @default 10
     */
    right: number;
    /**
     * Top margin in pixels.
     *
     * @default 10
     */
    top: number;
    /**
     * Bottom margin in pixels.
     *
     * @default 10
     */
    bottom: number;
}
/**
 * Configures the chart Legend Container Padding.
 */
export declare class ContainerPadding extends ChildProperty<ContainerPadding> {
    /**
     * Left padding in pixels.
     *
     * @default 0
     */
    left: number;
    /**
     * Right padding in pixels.
     *
     * @default 0
     */
    right: number;
    /**
     * Top padding in pixels.
     *
     * @default 0
     */
    top: number;
    /**
     * Bottom padding in pixels.
     *
     * @default 0
     */
    bottom: number;
}
/**
 * Configures the animation behavior for chart series.
 */
export declare class Animation extends ChildProperty<Animation> {
    /**
     * If set to true, series gets animated on initial loading.
     *
     * @default true
     */
    enable: boolean;
    /**
     * The duration of animation in milliseconds.
     *
     * @default 1000
     */
    duration: number;
    /**
     * The option to delay animation of the series.
     *
     * @default 0
     */
    delay: number;
}
/**
 * Series and point index
 *
 * @public
 */
export declare class Indexes extends ChildProperty<Indexes> {
    /**
     * Specifies the series index.
     *
     * @default 0
     * @aspType int
     */
    series: number;
    /**
     * Specifies the point index.
     *
     * @default 0
     * @aspType int
     */
    point: number;
}
/**
 * Column series rounded corner options
 */
export declare class CornerRadius extends ChildProperty<CornerRadius> {
    /**
     * Specifies the top left corner radius value.
     *
     * @default 0
     */
    topLeft: number;
    /**
     * Specifies the top right corner radius value.
     *
     * @default 0
     */
    topRight: number;
    /**
     * Specifies the bottom left corner radius value.
     *
     * @default 0
     */
    bottomLeft: number;
    /**
     * Specifies the bottom right corner radius value.
     *
     * @default 0
     */
    bottomRight: number;
}
/**
 * @private
 */
export declare class Index {
    series: number;
    point: number;
    constructor(seriesIndex: number, pointIndex?: number);
}
/**
 * Configures the Empty Points of series
 */
export declare class EmptyPointSettings extends ChildProperty<EmptyPointSettings> {
    /**
     * To customize the fill color of empty points.
     *
     * @default null
     */
    fill: string;
    /**
     * Options to customize the border of empty points.
     *
     * @default "{color: 'transparent', width: 0}"
     */
    border: BorderModel;
    /**
     * To customize the mode of empty points.
     *
     * @default Gap
     */
    mode: EmptyPointMode | AccEmptyPointMode;
}
/**
 * Configures the drag settings of series
 */
export declare class DragSettings extends ChildProperty<DragSettings> {
    /**
     * To enable the drag the points.
     *
     * @default false
     */
    enable: boolean;
    /**
     * To set the minimum y of the point.
     *
     * @default null
     */
    minY: number;
    /**
     * To set the maximum y of the point.
     *
     * @default null
     */
    maxY: number;
    /**
     * To set the color of the edited point.
     *
     * @default null
     */
    fill: string;
}
/**
 * Options to customize the center label of the pie and doughnut chart.
 *
 * @default {}
 */
export declare class CenterLabel extends ChildProperty<CenterLabel> {
    /**
     * Define the label to be placed to the center of the pie and doughnut chart.
     *
     * @default null
     */
    text: string;
    /**
     * Defines the font style of the center label.
     */
    textStyle: FontModel;
    /**
     * Define the format for the center label when mouse hovered on the pie data.
     *
     * @default null
     */
    hoverTextFormat: string;
}
/**
 * Configures the ToolTips in the chart.
 *
 * @public
 */
export declare class TooltipSettings extends ChildProperty<TooltipSettings> {
    /**
     * Enables / Disables the visibility of the tooltip.
     *
     * @default false.
     */
    enable: boolean;
    /**
     * Enables / Disables the visibility of the marker.
     *
     * @default true.
     */
    enableMarker: boolean;
    /**
     * If set to true, a single ToolTip will be displayed for every index.
     *
     * @default false.
     */
    shared: boolean;
    /**
     * The fill color of the tooltip that accepts value in hex and rgba as a valid CSS color string.
     *
     * @default null
     */
    fill: string;
    /**
     * Header for tooltip. By default, the shared tooltip displays the point x value and the series name for each individual tooltip.
     *
     * @default null
     */
    header: string;
    /**
     * The fill color of the tooltip that accepts value in hex and rgba as a valid CSS color string.
     *
     * @default null
     */
    opacity: number;
    /**
     * Options to customize the ToolTip text.
     */
    textStyle: FontModel;
    /**
     * Format the ToolTip content.
     *
     * @default null.
     */
    format: string;
    /**
     * Custom template to format the ToolTip content. Use ${x} and ${y} as the placeholder text to display the corresponding data point.
     *
     * @default null.
     * @aspType string
     */
    template: string | Function;
    /**
     * If set to true, ToolTip will animate while moving from one point to another.
     *
     * @default true.
     */
    enableAnimation: boolean;
    /**
     * Duration for the ToolTip animation.
     *
     * @default 300
     */
    duration: number;
    /**
     * Fade Out duration for the ToolTip hide.
     *
     * @default 1000
     */
    fadeOutDuration: number;
    /**
     * Fade Out duration for the Tooltip hide.
     *
     * @default Move
     */
    fadeOutMode: FadeOutMode;
    /**
     * To wrap the tooltip long text based on available space.
     * This is only application for chart tooltip.
     *
     * @default false
     */
    enableTextWrap: boolean;
    /**
     * By default, the nearest points will be included in the shared tooltip; however, you can set it to false to exclude the nearest value from the tooltip.
     *
     * @default true
     */
    showNearestPoint: boolean;
    /**
     * Options to customize tooltip borders.
     */
    border: BorderModel;
}
export declare class StockTooltipSettings extends ChildProperty<StockTooltipSettings> {
    /**
     * Enables / Disables the visibility of the tooltip.
     *
     * @default false.
     */
    enable: boolean;
    /**
     * Enables / Disables the visibility of the marker.
     *
     * @default true.
     */
    enableMarker: boolean;
    /**
     * If set to true, a single ToolTip will be displayed for every index.
     *
     * @default false.
     */
    shared: boolean;
    /**
     * The fill color of the tooltip that accepts value in hex and rgba as a valid CSS color string.
     *
     * @default null
     */
    fill: string;
    /**
     * Header for tooltip. By default, the shared tooltip displays the point x value and the series name for each individual tooltip.
     *
     * @default null
     */
    header: string;
    /**
     * The fill color of the tooltip that accepts value in hex and rgba as a valid CSS color string.
     *
     * @default 0.75
     */
    opacity: number;
    /**
     * Options to customize the ToolTip text.
     */
    textStyle: FontModel;
    /**
     * Format the ToolTip content.
     *
     * @default null.
     */
    format: string;
    /**
     * Custom template to format the ToolTip content. Use ${x} and ${y} as the placeholder text to display the corresponding data point.
     *
     * @default null.
     * @aspType string
     */
    template: string | Function;
    /**
     * If set to true, ToolTip will animate while moving from one point to another.
     *
     * @default true.
     */
    enableAnimation: boolean;
    /**
     * Duration for the ToolTip animation.
     *
     * @default 300
     */
    duration: number;
    /**
     * Fade Out duration for the ToolTip hide.
     *
     * @default 1000
     */
    fadeOutDuration: number;
    /**
     * Fade Out duration for the Tooltip hide.
     *
     * @default Move
     */
    fadeOutMode: FadeOutMode;
    /**
     * To wrap the tooltip long text based on available space.
     * This is only application for chart tooltip.
     *
     * @default false
     */
    enableTextWrap: boolean;
    /**
     * By default, the nearest points will be included in the shared tooltip; however, you can set it to false to exclude the nearest value from the tooltip.
     *
     * @default true
     */
    showNearestPoint: boolean;
    /**
     * Options to customize tooltip borders.
     */
    border: BorderModel;
    /**
     * Specifies the tooltip position. They are,
     * * fixed - Place the tooltip in the fixed position.
     * * nearest- Tooltip moves along with the mouse.
     *
     * @default 'Fixed'
     */
    position: TooltipPosition;
}
/**
 * button settings in period selector
 */
export declare class Periods extends ChildProperty<Periods> {
    /**
     * IntervalType of button.
     *
     * @default 'Years'
     */
    intervalType: RangeIntervalType;
    /**
     * Count value for the button.
     *
     * @default 1
     */
    interval: number;
    /**
     * Text to be displayed on the button.
     *
     * @default null
     */
    text: string;
    /**
     * To select the default period.
     *
     * @default false
     */
    selected: boolean;
}
/**
 * Period Selector Settings
 */
export declare class PeriodSelectorSettings extends ChildProperty<PeriodSelectorSettings> {
    /**
     * Height for the period selector.
     *
     * @default 43
     */
    height: number;
    /**
     * vertical position of the period selector.
     *
     * @default 'Bottom'
     */
    position: PeriodSelectorPosition;
    /**
     * Buttons
     */
    periods: PeriodsModel[];
}
