/* eslint-disable @typescript-eslint/ban-types */
import type {
    ComponentOptionsMixin,
    ComponentPropsOptions,
    ComponentPublicInstance,
    ComputedOptions,
    ComputedRef,
    DefineComponent,
    MethodOptions,
} from 'vue';
import type { Locale } from 'date-fns';

export type EmitEvents =
    | 'update:model-value'
    | 'update:model-timezone-value'
    | 'text-submit'
    | 'closed'
    | 'cleared'
    | 'open'
    | 'focus'
    | 'blur'
    | 'internal-model-change'
    | 'recalculate-position'
    | 'flow-step'
    | 'update-month-year'
    | 'invalid-select'
    | 'tooltip-open'
    | 'tooltip-close'
    | 'invalid-fixed-range'
    | 'time-picker-open'
    | 'time-picker-close'
    | 'am-pm-change'
    | 'range-start'
    | 'range-end'
    | 'date-update'
    | 'invalid-date';
export type WeekNumberType = 'iso' | 'local' | ((date: Date) => string | number);
export type TimeObj = { hours: number; minutes: number; seconds: number };
export type PartialTimeObj = { hours?: number | string; minutes?: number | string; seconds?: number | string };
export type TimeModel = {
    hours: number | string;
    minutes: number | string;
    seconds?: number | string;
};
export type MenuView = 'month' | 'year' | 'calendar' | 'time';
export type ModelValue =
    | Date
    | Date[]
    | Array<Date[]>
    | Array<string[]>
    | string
    | string[]
    | number
    | number[]
    | TimeModel
    | TimeModel[]
    | { month: number | string; year: number | string }
    | { month: number | string; year: number | string }[]
    | null;

export interface DatePickerMarker {
    date: Date | string;
    type?: 'dot' | 'line';
    tooltip?: { text?: string; html?: string; color?: string }[];
    color?: string;
}

export interface DisabledTime {
    hours: number | string;
    minutes: number | string;
    seconds?: number | string;
}

export interface CalendarWeek {
    days: CalendarDay[];
}
export interface CalendarDay {
    text: number | string;
    value: Date;
    current: boolean;
    classData: Record<string, boolean>;
    marker?: DatePickerMarker;
}

export interface Highlight {
    dates: Date[];
    years: number[];
    months: { month: number; year: number }[];
    quarters: { quarter: number; year: number }[];
    weekdays: number[];
    options: { highlightDisabled: boolean };
}

export type DpOptionEnabled = boolean | number | string;

export interface RangeConfig {
    noDisabledRange?: boolean;
    showLastInRange?: boolean;
    minMaxRawRange?: boolean;
    partialRange?: boolean;
    disableTimeRangeValidation?: boolean;
    fixedStart?: boolean;
    fixedEnd?: boolean;
    maxRange?: string | number;
    minRange?: string | number;
    autoRange?: string | number;
}

export interface VueDatePickerProps {
    uid?: string;
    name?: string;
    is24?: boolean;
    enableTimePicker?: boolean;
    range?: boolean | RangeConfig;
    multiCalendars?: DpOptionEnabled | Partial<{ static: boolean; solo: boolean; count: number | string }>;
    modelValue?: ModelValue;
    locale?: string;
    position?: 'left' | 'center' | 'right';
    dark?: boolean;
    placeholder?: string;
    weekNumbers?: WeekNumberType | { type: WeekNumberType; hideOnOffsetDates?: boolean };
    hoursIncrement?: number | string;
    hoursGridIncrement?: number | string;
    secondsGridIncrement?: number | string;
    minutesGridIncrement?: number | string;
    minutesIncrement?: number | string;
    secondsIncrement?: number | string;
    minDate?: Date | string;
    maxDate?: Date | string;
    minTime?: PartialTimeObj;
    maxTime?: PartialTimeObj;
    weekStart?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | 0 | 1 | 2 | 3 | 4 | 5 | 6;
    disabled?: boolean;
    readonly?: boolean;
    required?: boolean;
    format?: string | ((date: Date) => string) | ((dates: Date[]) => string);
    previewFormat?: string | ((date: Date) => string) | ((dates: Date[]) => string);
    inputClassName?: string;
    menuClassName?: string;
    calendarClassName?: string;
    calendarCellClassName?: string;
    hideInputIcon?: boolean;
    state?: boolean;
    clearable?: boolean;
    autoApply?: boolean;
    filters?: {
        months?: number[];
        years?: number[];
        times?: { hours?: number[]; minutes?: number[]; seconds?: number[] };
    };
    disableMonthYearSelect?: boolean;
    yearRange?: number[];
    disabledDates?: Date[] | string[] | ((date: Date) => boolean);
    inline?: boolean | { input?: boolean };
    selectText?: string;
    cancelText?: string;
    weekNumName?: string;
    autoPosition?: boolean;
    monthPicker?: boolean;
    timePicker?: boolean;
    textInput?:
        | boolean
        | {
              enterSubmit?: boolean;
              tabSubmit?: boolean;
              openMenu?: boolean;
              rangeSeparator?: string;
              selectOnFocus?: boolean;
              format?: string | string[] | ((value: string) => Date | null);
          };
    monthNameFormat?: 'long' | 'short';
    startDate?: string | Date;
    startTime?: PartialTimeObj | PartialTimeObj[];
    hideOffsetDates?: boolean;
    /**
     * @deprecated
     */
    autoRange?: number | string;
    noToday?: boolean;
    noHoursOverlay?: boolean;
    noMinutesOverlay?: boolean;
    noSecondsOverlay?: boolean;
    altPosition?: (el: HTMLElement | undefined) => { top: number | string; left: number | string; transform?: string };
    disabledWeekDays?: number[] | string[];
    allowedDates?: string[] | Date[];
    nowButtonLabel?: string;
    /**
     * @deprecated
     */
    partialRange?: boolean;
    monthChangeOnScroll?: boolean | 'inverse';
    markers?: DatePickerMarker[];
    transitions?:
        | boolean
        | {
              menuAppearTop?: string;
              menuAppearBottom?: string;
              open?: string;
              close?: string;
              next?: string;
              previous?: string;
              vNext?: string;
              vPrevious?: string;
          };
    enableSeconds?: boolean;
    escClose?: boolean;
    spaceConfirm?: boolean;
    monthChangeOnArrows?: boolean;
    formatLocale?: Locale;
    autocomplete?: string;
    multiDates?: boolean | { limit?: number | string; dragSelect?: boolean };
    presetDates?: {
        label: string;
        value: Date[] | string[] | string | Date;
        style?: Record<string, string>;
        slot?: string;
        noTz?: boolean;
        testId?: string;
    }[];
    flow?: ('month' | 'year' | 'calendar' | 'time' | 'minutes' | 'hours' | 'seconds')[];
    partialFlow?: boolean;
    preventMinMaxNavigation?: boolean;
    /**
     * @deprecated
     */
    minRange?: number | string;
    /**
     * @deprecated
     */
    maxRange?: number | string;
    /**
     * @deprecated
     */
    fixedStart?: boolean;
    /**
     * @deprecated
     */
    fixedEnd?: boolean;
    utc?: boolean | 'preserve';
    /**
     * @deprecated
     */
    multiDatesLimit?: number | string;
    reverseYears?: boolean;
    weekPicker?: boolean;
    vertical?: boolean;
    ariaLabels?: {
        toggleOverlay?: string;
        menu?: string;
        input?: string;
        calendarWrap?: string;
        calendarDays?: string;
        openTimePicker?: string;
        closeTimePicker?: string;
        incrementValue?: (type: 'hours' | 'minutes' | 'seconds') => string;
        decrementValue?: (type: 'hours' | 'minutes' | 'seconds') => string;
        openTpOverlay?: (type: 'hours' | 'minutes' | 'seconds') => string;
        amPmButton?: string;
        openYearsOverlay?: string;
        openMonthsOverlay?: string;
        nextMonth?: string;
        prevMonth?: string;
        nextYear?: string;
        prevYear?: string;
        day?: ({ value }: { value: Date }) => string;
        weekDay?: (day: number) => string;
    };
    arrowNavigation?: boolean;
    yearPicker?: boolean;
    /**
     * @deprecated
     */
    disableTimeRangeValidation?: boolean;
    dayNames?: ((lang: string, weekStart: number) => string[]) | string[];
    modelType?: 'timestamp' | 'iso' | 'format' | string;
    modelAuto?: boolean;
    highlight?:
        | ((date: Date[], disabled?: boolean) => boolean)
        | ((month: { month: number; year: number }) => boolean)
        | ((year: number) => boolean)
        | ((quarter: { quarter: number; year: number }) => boolean)
        | Partial<Highlight>;
    offset?: string | number;
    teleportCenter?: boolean;
    teleport?: boolean | string | HTMLElement;
    ignoreTimeValidation?: boolean;
    dayClass?: (date: Date) => string;
    hideNavigation?: ('month' | 'year' | 'calendar' | 'time' | 'minutes' | 'hours' | 'seconds')[];
    /**
     * @deprecated
     */
    noDisabledRange?: boolean;
    sixWeeks?: boolean | 'append' | 'prepend' | 'center' | 'fair';
    timezone?:
        | string
        | { timezone?: string; exactMatch?: boolean; dateInTz?: string; emitTimezone?: string; convertModel?: boolean };
    /**
     * @deprecated
     */
    emitTimezone?: string;
    disableYearSelect?: boolean;
    focusStartDate?: boolean;
    disabledTimes?:
        | ((time: TimeObj | TimeObj[] | (TimeObj | undefined)[]) => boolean)
        | DisabledTime[]
        | [DisabledTime[], DisabledTime[]];
    /**
     * @deprecated
     */
    showLastInRange?: boolean;
    timePickerInline?: boolean;
    calendar?: (weeks: CalendarWeek[]) => CalendarWeek[];
    config?: {
        allowStopPropagation?: boolean;
        closeOnScroll?: boolean;
        modeHeight?: number;
        allowPreventDefault?: boolean;
        closeOnClearValue?: boolean;
        closeOnAutoApply?: boolean;
        noSwipe?: boolean;
        keepActionRow?: boolean;
        onClickOutside?: (validate: () => boolean) => void;
        tabOutClosesMenu?: boolean;
        arrowLeft?: string;
        keepViewOnOffsetClick?: boolean;
    };
    quarterPicker?: boolean;
    yearFirst?: boolean;
    loading?: boolean;
    onInternalModelChange?: (...args: any[]) => void;
    enableMinutes?: boolean;
}

export type DatePickerInstance = ComponentPublicInstance<PublicMethods> | null;

export interface PublicMethods extends MethodOptions {
    selectDate: () => void;
    closeMenu: () => void;
    openMenu: () => void;
    clearValue: () => void;
    onScroll: () => void;
    updateInternalModelValue: (value: Date | Date[] | null) => void;
    setMonthYear: (value: { month?: number | string; year?: number | string }) => void;
    parseModel: (value?: ModelValue) => void;
    switchView: (view: MenuView, instance?: number) => void;
    toggleMenu: () => void;
}

type InternalModelValue = Date | Date[] | null;
interface InternalTime {
    hours: number | number[];
    minutes: number | number[];
    seconds: number | number[];
}

interface MonthYearOverlay {
    month: number;
    year: number;
    items: { text: string; value: number }[];
    updateMonthYear: (month: number, year: number) => void;
    instance: number;
    toggle: () => void;
}

interface SidebarSlotProps {
    modelValue: InternalModelValue;
    month?: ComputedRef<(instance: number) => number>;
    year?: ComputedRef<(instance: number) => number>;
    time?: InternalTime;
    updateTime?: (value: number | number[], isHours?: boolean, isSeconds?: boolean) => void;
    updateMonthYear?: (instance: number, val: { month: number; year: number; fromNav?: boolean }) => void;
    selectDate?: (day: { value: Date }, isNext?: boolean) => {};
    presetDate?: (value: Date[] | string[] | Date | string, noTz?: boolean) => void;
    getModelMonthYear?: () => { month: number | null; year: number | null }[];
    selectMonth?: (month: number, instance: number) => void;
    selectYear?: (year: number, instance: number) => void;
    handleYear?: (instance: number, increment?: boolean) => void;
    selectQuarter?: (date: Date, instance: number, disabled: boolean) => void;
    handleYearSelect?: (year: number, instance: number) => void;
}

interface Slots {
    'clock-icon'(): any;
    'arrow-left'(): any;
    'arrow-right'(): any;
    'arrow-up'(): any;
    'arrow-down'(): any;
    'calendar-icon'(): any;
    day(props: { date: Date; day: number }): any;
    'month-overlay-value'(props: { text: string; value: number }): any;
    'year-overlay-value'(props: { text: string; value: number }): any;
    'year-overlay'(props: MonthYearOverlay): any;
    'month-overlay'(props: MonthYearOverlay): any;
    'month-overlay-header'(props: { toggle: () => void }): any;
    'year-overlay-header'(props: { toggle: () => void }): any;
    'hours-overlay-value'(props: { text: string; value: number }): any;
    'minutes-overlay-value'(props: { text: string; value: number }): any;
    'seconds-overlay-value'(props: { text: string; value: number }): any;
    hours(props: { text: string; value: number }): any;
    minutes(props: { text: string; value: number }): any;
    month(props: { text: string; value: number }): any;
    year(props: { year: number }): any;
    'action-buttons'(props: { value: InternalModelValue }): any;
    'action-preview'(props: { value: InternalModelValue }): any;
    'calendar-header'(props: { day: string; index: number }): any;
    'marker-tooltip'(props: { day: Date; tooltip: { text?: string; html?: string; color?: string }[] }): any;
    'action-extra'(props: { selectCurrentDate: () => void }): any;
    'time-picker-overlay'(props: {
        hours: number | number[];
        minutes: number | number[];
        seconds: number | number[];
        setHours: (hours: number | number[]) => void;
        setMinutes: (minutes: number | number[]) => void;
        setSeconds: (seconds: number | number[]) => void;
    }): any;
    'am-pm-button'(props: { toggle: () => void; value: string }): any;
    'left-sidebar'(props: SidebarSlotProps): any;
    'right-sidebar'(props: SidebarSlotProps): any;
    'month-year'(props: {
        year: number;
        month?: number;
        months?: { value: number; text: string; className?: Record<string, boolean> }[];
        years?: { value: number; text: string; className?: Record<string, boolean> }[];
        updateMonthYear?: (month: number, year: number, fromNav: boolean) => void;
        handleMonthYearChange?: (isNext: boolean, fromNav?: boolean) => void;
        instance?: number;
        selectMonth?: (month: number, instance: number) => void;
        selectYear?: (year: number, instance: number) => void;
    }): any;
    'time-picker'(props: {
        time: InternalTime;
        updateTime: (value: number | number[], isHours?: boolean, isSeconds?: boolean) => void;
    }): any;
    'action-row'(props: {
        internalModelValue: InternalModelValue;
        disabled: boolean;
        selectDate: () => void;
        closePicker: () => void;
    }): any;
    marker(props: { marker: DatePickerMarker; day: number; date: Date }): any;
    quarter(props: { value: Date; text: string }): any;
    'top-extra'(props: { value: InternalModelValue }): any;
    trigger(): any;
    'input-icon'(): any;
    'clear-icon'(props: { clear: (ev?: Event) => void }): any;
    'dp-input'(props: {
        value: string;
        isMenuOpen: boolean;
        onInput: (ev: string | Event) => void;
        onEnter: (ev: KeyboardEvent) => void;
        onTab: (ev: KeyboardEvent) => void;
        onClear: (ev?: Event | undefined) => void;
        onBlur: () => void;
        onKeypress: (ev: KeyboardEvent) => void;
        onPaste: () => void;
        openMenu: () => void;
        closeMenu: () => void;
        toggleMenu: () => void;
    }): any;
}

type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare const _default: __VLS_WithTemplateSlots<
    DefineComponent<
        ComponentPropsOptions<VueDatePickerProps>,
        {},
        {},
        ComputedOptions,
        PublicMethods,
        ComponentOptionsMixin,
        ComponentOptionsMixin,
        EmitEvents[],
        EmitEvents,
        VueDatePickerProps
    >,
    Readonly<Slots> & Slots
>;

export default _default;
