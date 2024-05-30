import { AxiosInstance } from 'axios';
import * as React$1 from 'react';
import React__default, { RefObject, Dispatch, SetStateAction, HTMLAttributes, ButtonHTMLAttributes, CSSProperties, DetailedHTMLProps, ImgHTMLAttributes, ForwardedRef } from 'react';
import { FieldValues, SubmitHandler, DefaultValues, Mode, FieldError, UseControllerProps } from 'react-hook-form';
import { AnyObjectSchema } from 'yup';
import * as react_jsx_runtime from 'react/jsx-runtime';

declare class HttpClient {
  private _instance;
  private _token;
  logout: () => void;
  constructor(baseURL: string);
  get instance(): AxiosInstance;
  get token(): string;
  set token(token: string);
}

type AsyncState<T> = {
    status: 'idle' | 'pending';
    data?: null;
    error?: null;
} | {
    status: 'resolved';
    data: T;
    error: null;
} | {
    status: 'rejected';
    data: null;
    error: Error;
};
declare const useAsync: <T>(initialState?: AsyncState<T> | undefined) => AsyncState<T> & {
    setData: (data: T) => void;
    setError: (error: Error) => void;
    run: (promise: Promise<T>) => void;
};

declare const useClassNames: (classes: Record<string, boolean>) => string;

declare const useConstant: <T>(initializer: T | (() => T)) => T;

declare const useDebounce: <T>(value: T, delay?: number) => T;

declare const useDimensions: (ref: React__default.RefObject<HTMLElement>) => {
    width: number;
    height: number;
};

declare function useEventListener<EventName extends keyof MediaQueryListEventMap>(eventName: EventName, callback: (event: MediaQueryListEventMap[EventName]) => void, element: RefObject<MediaQueryList>, options?: boolean | AddEventListenerOptions): void;
declare function useEventListener<EventName extends keyof WindowEventMap>(eventName: EventName, callback: (event: WindowEventMap[EventName]) => void, element?: undefined, options?: boolean | AddEventListenerOptions): void;
declare function useEventListener<EventName extends keyof HTMLElementEventMap, ElementRef extends HTMLElement = HTMLDivElement>(eventName: EventName, callback: (event: HTMLElementEventMap[EventName]) => void, element: RefObject<ElementRef>, options?: boolean | AddEventListenerOptions): void;
declare function useEventListener<EventName extends keyof DocumentEventMap>(eventName: EventName, callback: (event: DocumentEventMap[EventName]) => void, element: RefObject<Document>, options?: boolean | AddEventListenerOptions): void;

declare enum FileTypeEnum {
    PNG = "image/png",
    PDF = "application/pdf"
}
type FileResolvedT = {
    name: string;
    size: number;
    formatSize: string;
    type: FileTypeEnum;
    url: FileReader['result'];
};
declare const useFileReader: (inputFiles: Array<File>) => FileResolvedT[];

declare const useInView: (initOptions?: IntersectionObserverInit) => {
    ref: React$1.RefObject<Element>;
    inView: boolean;
};

type UseInputHandlersProps = {
    onBlur?: (e: React__default.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onFocus?: (e: React__default.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onChange?: (value: string) => void;
};
declare const useInputHandlers: ({ onBlur, onFocus, onChange }?: UseInputHandlersProps) => {
    isFocus: boolean;
    handlers: {
        onFocus: (e: React__default.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
        onBlur: (e: React__default.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
        onChange: (e: React__default.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    };
};

declare const useMediaQuery: (query: string) => boolean;

type PositionObject = {
    percentage: number;
    pixels: number;
};
type useModalInContainerParams = {
    offset?: number;
    position?: {
        x: number | PositionObject;
        y: number | PositionObject;
    };
};
declare const useModalInContainer: <Container extends HTMLElement, Modal extends HTMLElement = Container>({ offset, position, }?: useModalInContainerParams) => {
    isVisible: boolean;
    setIsVisible: React__default.Dispatch<React__default.SetStateAction<boolean>>;
    modalStyle: React__default.CSSProperties;
    containerRef: React__default.RefObject<Container>;
    modalRef: React__default.RefObject<Modal>;
};

declare const useMousePosition: () => number[];

declare const useOnClickOutsideRef: <T extends HTMLElement>(containerRef: RefObject<T>, callback: () => void) => void;

declare const useOnlineStatus: () => boolean;

declare const useRenderCount: () => number;

declare const useSafeDispatch: <T>(dispatch: React__default.Dispatch<T>) => (action: T) => void;

declare const useScroll: () => {
    ref: React$1.RefObject<HTMLElement>;
    position: number[];
};

declare function useStateHistory<T>(initialState: T | (() => T)): [T, Dispatch<SetStateAction<T>>, Array<T>];
declare function useStateHistory<T = undefined>(): [T | undefined, Dispatch<SetStateAction<T | undefined>>, Array<T>];

declare const useToggle: (defaultValue?: boolean) => (boolean | React$1.Dispatch<React$1.SetStateAction<boolean>>)[];

declare const useToggleValues: <T>(values: T[], defaultIndex?: number) => [T, (index?: number) => void];

declare enum ScreenOrientation {
    PORTRAIT = "portrait",
    LANDSCAPE = "landscape"
}
type UseViewportData = {
    width: number;
    height: number;
    orientation: ScreenOrientation;
};
declare const useViewport: () => UseViewportData;

type KeyValuesOf<T, V> = {
    [P in keyof T]-?: T[P] extends V ? P : never;
}[keyof T];
type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

declare const formatBytes: (bytes: number, decimals?: number) => string;

declare const formatDate: (date: string) => string;
declare const timeBetween: (date_start: string, date_end: string) => string;

type FormProps<T extends FieldValues> = {
    onSubmit: SubmitHandler<T>;
    children: React.ReactNode;
    className?: string;
    defaultValues?: DefaultValues<T>;
    mode?: Mode;
    reValidateMode?: Exclude<Mode, 'onTouched' | 'all'>;
    shouldFocusError?: boolean;
    style?: React.CSSProperties;
    schema?: AnyObjectSchema;
};
declare const Form: <T extends FieldValues = FieldValues>({ mode, reValidateMode, onSubmit, className, style, defaultValues, shouldFocusError, children, schema, }: FormProps<T>) => React.ReactElement;

type UserT = {
    name: string;
    username: string;
    full_name: string;
    email: string;
};
type SessionT = {
    isAuthenticated: boolean;
    user: UserT | null;
    token: string | null;
};
type FetchContextT = SessionT & {
    httpClient: AxiosInstance;
    login: (user: UserT, token: string) => void;
    logout: () => void;
};
type FetchProviderProps = {
    children: React.ReactNode;
    baseURL: string;
};
declare const FetchProvider: ({ children, baseURL }: FetchProviderProps) => react_jsx_runtime.JSX.Element;
declare const useFetch: () => FetchContextT;

type ObjectIconsT = Record<'airplane' | 'bicycle' | 'book-open' | 'book-solid' | 'camera' | 'clean-computer' | 'door-closed' | 'door-open' | 'dropper' | 'envelope' | 'eye' | 'eye-hidden' | 'game-control' | 'house' | 'magnifying-glass' | 'moon' | 'pencil' | 'star' | 'star-empty' | 'sun' | 'trash-can', IconT>;

type SocialIconsT = Record<'codepen' | 'facebook' | 'github' | 'instagram' | 'linkedin' | 'whatsapp', IconT>;

type SymbolIconsT = Record<'arrow-down' | 'arrow-left' | 'arrow-right' | 'arrow-up' | 'box-shadow' | 'caret-down' | 'caret-left' | 'caret-right' | 'caret-up' | 'checkmark' | 'creative' | 'cross' | 'cv' | 'design-ui' | 'double-caret-down' | 'double-caret-left' | 'double-caret-righ' | 'double-caret-up' | 'download' | 'exclamation-close' | 'exclamation-open' | 'hyphen' | 'info' | 'pin-location' | 'question-mark-close' | 'question-mark-open' | 'spinner' | 'text-shadow' | 'thinking' | 'user' | 'warning', IconT>;

type IconT = {
    viewBox: string;
    svg: (fill: string) => React__default.ReactNode;
};
type IconCollectionT = ObjectIconsT & SocialIconsT & SymbolIconsT;

type IconNameT = keyof IconCollectionT;
type IconProviderProps = {
    children: React.ReactNode;
};
declare const IconProvider: ({ children }: IconProviderProps) => React.ReactElement;
type IconProps = HTMLAttributes<SVGSVGElement> & {
    size?: number | string;
    width?: number;
    height?: number;
    fill?: string;
    onClick?: (e: React.MouseEvent<SVGSVGElement>) => void;
    name: IconNameT;
};
declare const Icon: ({ style, className, size, width, height, fill, onClick, name, }: IconProps) => React.ReactElement;

declare enum TypographyVariants {
    HERO = "hero",
    HEADER1 = "header1",
    HEADER2 = "header2",
    HEADER3 = "header3",
    HEADER4 = "header4",
    BODY = "body",
    LABEL = "label",
    SMALL = "small"
}
declare enum Breakpoints {
    MOBILE = "mobile",
    MOBILE_L = "mobileL",
    TABLET = "tablet",
    LAPTOPS = "laptopS",
    LAPTOP_M = "laptopM",
    LAPTOP_L = "laptopL",
    DESKTOP = "desktop",
    LARGE = "large"
}
type TypographyEntity = {
    fontSize: string;
    lineHeight: string;
    defaultWeight: string;
    weights: Record<string, string>;
    breakpoints: Array<{
        from: `${Breakpoints}`;
        fontSize: string;
        lineHeight: string;
    }>;
};
type ThemeConstantsEntity = {
    fontFamily: string;
    sectionMinHeight: string;
    breakpoints: Record<`${Breakpoints}`, string>;
    typography: Record<`${TypographyVariants}`, TypographyEntity>;
};
type CommonThemeEntity = {
    black: string;
    white: string;
    gray1: string;
    gray2: string;
    gray3: string;
    gray4: string;
    gray5: string;
    gray6: string;
    gray7: string;
    gray8: string;
    gray9: string;
    info: string;
    active: string;
    warning: string;
    alert: string;
};
type PaletteThemeEntity = {
    background: string;
    text: string;
    primary: string;
    secondary: string;
    tertiary: string;
    primaryContrast: string;
    secondaryContrast: string;
    tertiaryContrast: string;
};
type ThemeEntity = PaletteThemeEntity & CommonThemeEntity;
declare module 'styled-components' {
    interface DefaultTheme {
        colors: ThemeEntity;
        constants: ThemeConstantsEntity;
    }
}

declare enum THEME {
    LIGHT = "light",
    DARK = "dark"
}
type ThemeContext = {
    themeName: `${THEME}`;
    changeTheme: (theme: `${THEME}`) => void;
    toggleTheme: () => void;
    setSystemTheme: () => void;
};
declare const ThemeContext: React__default.Context<ThemeContext | null>;
type ThemeProviderProps = {
    children: React__default.ReactNode;
    commonTheme: CommonThemeEntity;
    lightTheme: PaletteThemeEntity;
    darkTheme: PaletteThemeEntity;
    constants: ThemeConstantsEntity;
};
declare const ThemeProvider: ({ children, commonTheme, lightTheme, darkTheme, constants }: ThemeProviderProps) => react_jsx_runtime.JSX.Element;
declare const useMyTheme: () => ThemeContext;

type AccordionProps = {
    children: React__default.ReactNode;
    className?: string;
    noSeparators?: boolean;
};
declare const Accordion: {
    ({ children, className, noSeparators }: AccordionProps): react_jsx_runtime.JSX.Element;
    Item: ({ title, titleVariant, subtitle, subtitleVariant, children, icon, startContent, middleContent, endContent, classNames, className, style, }: AccordionItemProps) => react_jsx_runtime.JSX.Element;
};
type AccordionItemProps = {
    title: string;
    titleVariant?: `${TypographyVariants}`;
    subtitle?: string;
    subtitleVariant?: `${TypographyVariants}`;
    icon?: IconNameT;
    children: React__default.ReactNode;
    startContent?: (isOpen: boolean) => React__default.ReactNode;
    middleContent?: (data: {
        isOpen: boolean;
        title: string;
        subtitle?: string;
    }) => React__default.ReactNode;
    endContent?: (isOpen: boolean) => React__default.ReactNode;
    className?: string;
    style?: React__default.CSSProperties;
    classNames?: {
        header?: string;
        headerContent?: string;
        title?: string;
        subtitle?: string;
        toggleIcon?: string;
        body?: string;
    };
};

declare enum ButtonSize {
    SMALL = "small",
    REGULAR = "regular",
    LARGE = "large"
}
declare enum ButtonVariant {
    DEFAULT = "default",
    GHOST = "ghost",
    FLAT = "flat"
}

type ButtonProps = {
    children?: React__default.ReactNode;
    disabled?: boolean;
    isLoading?: boolean;
    rounded?: boolean;
    size?: `${ButtonSize}`;
    variant?: `${ButtonVariant}`;
    leftIcon?: IconNameT;
    rightIcon?: IconNameT;
    onClick?: ButtonHTMLAttributes<HTMLButtonElement>['onClick'];
    width?: 'fit' | 'full';
    className?: string;
    style?: React__default.CSSProperties;
    type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
};
declare const Button: ({ children, disabled, rounded, isLoading, size, variant, leftIcon, rightIcon, onClick, width, className, style, }: ButtonProps) => react_jsx_runtime.JSX.Element;

type FlipCardProps = {
    cardZIndex?: CSSProperties['zIndex'];
    isFlipped?: boolean;
    flipSpeedBackToFront?: number;
    flipSpeedFrontToBack?: number;
    infinite?: boolean;
    flipDirection?: 'horizontal' | 'vertical';
    children: [React.ReactNode, React.ReactNode];
};
declare const FlipCard: ({ cardZIndex, flipDirection, flipSpeedFrontToBack, flipSpeedBackToFront, infinite, isFlipped, children, }: FlipCardProps) => React.ReactElement;

type Props$1 = {};
type CommonInputProps = {
    name: string;
    defaultValue?: unknown;
    className?: string;
    style?: React__default.CSSProperties;
    autoComplete?: string;
    autoFocus?: boolean;
    placeholder?: string;
    disabled?: boolean;
    label?: string;
    rightIcon?: IconNameT;
    leftIcon?: IconNameT;
};
type InputControllerProps<T extends Props$1> = T & CommonInputProps;
type ControllerHOCProps<V> = {
    name: string;
    value: V;
    setValue: (value: V) => void;
    onBlur?: () => void;
    invalid?: boolean;
    isTouched?: boolean;
    isDirty?: boolean;
    error?: FieldError;
};
type InputProps<T extends Props$1, V> = T & CommonInputProps & ControllerHOCProps<V>;

type CheckboxProps = HTMLAttributes<HTMLInputElement> & {};
declare const Checkbox: ({ name, value, onBlur, className, style, label, setValue, ...props }: InputProps<CheckboxProps, boolean>) => react_jsx_runtime.JSX.Element;
declare const CheckboxController: React$1.FC<InputControllerProps<HTMLAttributes<HTMLInputElement>>>;

type InputFileProps = {
    accept?: string;
    multiple?: boolean;
    limitSize?: number;
    errorTimeout?: number;
};
declare const InputFile: ({ name, className, style, setValue, onBlur, value, accept, label, multiple, limitSize, errorTimeout, }: InputProps<InputFileProps, Array<File>>) => react_jsx_runtime.JSX.Element;
declare const InputFileController: React$1.FC<InputControllerProps<InputFileProps>>;

type RadioProps = {
    radioValue: string;
};
declare const Radio: ({ name, value, radioValue, setValue, onBlur, className, style, label, }: InputProps<RadioProps, string>) => react_jsx_runtime.JSX.Element;
declare const RadioController: React$1.FC<InputControllerProps<RadioProps>>;

type Props = Record<string, unknown>;
type SharedProps = {
    name: string;
    className?: string;
    style?: React__default.CSSProperties;
    autoComplete?: string;
    autoFocus?: boolean;
    placeholder?: string;
    disabled?: boolean;
    readOnly?: boolean;
};
type UnControlledProps<V> = {
    value: V;
    setValue: (value: V) => void;
    onBlur?: () => void;
    invalid?: boolean;
    isTouched?: boolean;
    isDirty?: boolean;
    error?: string;
};
type ControlledProps<V> = {
    defaultValue?: V;
};
type UnControlledComponentProps<T extends Props, V> = T & SharedProps & UnControlledProps<V>;
type ControlledComponentProps<T extends Props, V> = T & SharedProps & ControlledProps<V>;
type ControllerGeneratorProps<T extends Props, V> = ControlledComponentProps<T, V> & Partial<Pick<UseControllerProps, 'rules'>>;

type ControllerProps<T extends Props, V> = {
    inputProps: ControlledComponentProps<T, V>;
    Component: React__default.FC<UnControlledComponentProps<T, V>>;
    rules?: UseControllerProps['rules'];
    defaultValue: V;
};
declare const Controller: <T extends Props, V>({ Component, inputProps, defaultValue: fieldDefaultValue, rules, }: ControllerProps<T, V>) => react_jsx_runtime.JSX.Element;

declare const Field: React__default.ForwardRefExoticComponent<{
    rightIcon?: "spinner" | "user" | "airplane" | "bicycle" | "book-open" | "book-solid" | "camera" | "clean-computer" | "door-closed" | "door-open" | "dropper" | "envelope" | "eye" | "eye-hidden" | "game-control" | "house" | "magnifying-glass" | "moon" | "pencil" | "star" | "star-empty" | "sun" | "trash-can" | "codepen" | "facebook" | "github" | "instagram" | "linkedin" | "whatsapp" | "arrow-down" | "arrow-left" | "arrow-right" | "arrow-up" | "box-shadow" | "caret-down" | "caret-left" | "caret-right" | "caret-up" | "checkmark" | "creative" | "cross" | "cv" | "design-ui" | "double-caret-down" | "double-caret-left" | "double-caret-righ" | "double-caret-up" | "download" | "exclamation-close" | "exclamation-open" | "hyphen" | "info" | "pin-location" | "question-mark-close" | "question-mark-open" | "text-shadow" | "thinking" | "warning" | undefined;
    leftIcon?: "spinner" | "user" | "airplane" | "bicycle" | "book-open" | "book-solid" | "camera" | "clean-computer" | "door-closed" | "door-open" | "dropper" | "envelope" | "eye" | "eye-hidden" | "game-control" | "house" | "magnifying-glass" | "moon" | "pencil" | "star" | "star-empty" | "sun" | "trash-can" | "codepen" | "facebook" | "github" | "instagram" | "linkedin" | "whatsapp" | "arrow-down" | "arrow-left" | "arrow-right" | "arrow-up" | "box-shadow" | "caret-down" | "caret-left" | "caret-right" | "caret-up" | "checkmark" | "creative" | "cross" | "cv" | "design-ui" | "double-caret-down" | "double-caret-left" | "double-caret-righ" | "double-caret-up" | "download" | "exclamation-close" | "exclamation-open" | "hyphen" | "info" | "pin-location" | "question-mark-close" | "question-mark-open" | "text-shadow" | "thinking" | "warning" | undefined;
    errorIcon?: "spinner" | "user" | "airplane" | "bicycle" | "book-open" | "book-solid" | "camera" | "clean-computer" | "door-closed" | "door-open" | "dropper" | "envelope" | "eye" | "eye-hidden" | "game-control" | "house" | "magnifying-glass" | "moon" | "pencil" | "star" | "star-empty" | "sun" | "trash-can" | "codepen" | "facebook" | "github" | "instagram" | "linkedin" | "whatsapp" | "arrow-down" | "arrow-left" | "arrow-right" | "arrow-up" | "box-shadow" | "caret-down" | "caret-left" | "caret-right" | "caret-up" | "checkmark" | "creative" | "cross" | "cv" | "design-ui" | "double-caret-down" | "double-caret-left" | "double-caret-righ" | "double-caret-up" | "download" | "exclamation-close" | "exclamation-open" | "hyphen" | "info" | "pin-location" | "question-mark-close" | "question-mark-open" | "text-shadow" | "thinking" | "warning" | undefined;
    onClickLeftIcon?: (() => void) | undefined;
    onClickRightIcon?: (() => void) | undefined;
    label?: string | undefined;
    variant?: "line" | "full-border" | "content-border" | undefined;
} & {
    children: React__default.ReactNode;
    id: string;
    error?: string | undefined;
    isFocus?: boolean | undefined;
} & React__default.RefAttributes<HTMLElement>>;

declare enum FieldVariant {
    FULL_BORDER = "full-border",
    CONTENT_BORDER = "content-border",
    CONTENT_LINE = "line"
}
type FieldSharedProps = {
    rightIcon?: IconNameT;
    leftIcon?: IconNameT;
    errorIcon?: IconNameT;
    onClickLeftIcon?: () => void;
    onClickRightIcon?: () => void;
    label?: string;
    variant?: `${FieldVariant}`;
};
type FieldProps = FieldSharedProps & {
    children: React__default.ReactNode;
    id: string;
    error?: string;
    isFocus?: boolean;
};
type InputFieldProps<T> = T & FieldSharedProps;

type DatePickerProps = InputFieldProps<{
    type?: 'date' | 'datetime-local' | 'month' | 'time' | 'week';
}>;
declare const DatePicker: {
    ({ name, value, setValue, onBlur, type, className, style, autoFocus, readOnly, disabled, placeholder, autoComplete, isDirty, isTouched, invalid, error, ...fieldProps }: UnControlledComponentProps<DatePickerProps, string>): react_jsx_runtime.JSX.Element;
    Controller: ({ rules, ...props }: ControllerGeneratorProps<DatePickerProps, string>) => react_jsx_runtime.JSX.Element;
};

type IProps = InputFieldProps<{
    type?: 'email' | 'number' | 'search' | 'tel' | 'text' | 'url';
}>;
declare const Input: {
    ({ name, value, setValue, onBlur, type, className, style, autoFocus, readOnly, disabled, placeholder, autoComplete, isDirty, isTouched, invalid, error, ...fieldProps }: UnControlledComponentProps<IProps, string>): react_jsx_runtime.JSX.Element;
    Controller: ({ rules, ...props }: ControllerGeneratorProps<IProps, string>) => react_jsx_runtime.JSX.Element;
};

type InputPasswordProps = InputFieldProps<{
    rightIcon?: never;
}>;
declare const InputPassword: {
    ({ name, value, setValue, onBlur, className, style, autoFocus, readOnly, disabled, placeholder, autoComplete, isDirty, isTouched, invalid, error, ...fieldProps }: UnControlledComponentProps<InputPasswordProps, string>): react_jsx_runtime.JSX.Element;
    Controller: ({ rules, ...props }: ControllerGeneratorProps<InputPasswordProps, string>) => react_jsx_runtime.JSX.Element;
};

type ColorProps = InputFieldProps<{
    showValueText?: boolean;
}>;
declare const InputColor: {
    ({ name, value, setValue, onBlur, showValueText, className, style, autoFocus, readOnly, disabled, placeholder, autoComplete, isDirty, isTouched, invalid, error, ...fieldProps }: UnControlledComponentProps<ColorProps, string>): react_jsx_runtime.JSX.Element;
    Controller: ({ rules, ...props }: ControllerGeneratorProps<ColorProps, string>) => react_jsx_runtime.JSX.Element;
};

type SelectItem = string | number | Record<string, unknown> | unknown;
type MultiValue<T extends SelectItem> = Array<T>;
type SingleValue<T extends SelectItem> = T | null;
type SharedSelectProps<T extends SelectItem> = InputFieldProps<{
    options: Array<T>;
    renderOption: (item: T) => React__default.ReactNode;
    isEqualComparator?: (a: T, b: T) => boolean;
    searchQueryValue?: string;
    searchQueryPlaceholder?: string;
    onSearchQuery?: (value: string) => void;
    loadMore?: () => void;
    isLoading?: boolean;
    hasNextPage?: boolean;
    maxOptions?: number;
}>;
type MultiSelectProps<T extends SelectItem> = SharedSelectProps<T> & {
    multiselect: true;
};
type SingleSelectProps<T extends SelectItem> = SharedSelectProps<T> & {
    multiselect?: false;
};
type UnControlledSelectProps<T extends SelectItem> = UnControlledComponentProps<MultiSelectProps<T>, MultiValue<T>> | UnControlledComponentProps<SingleSelectProps<T>, SingleValue<T>>;
type ControllerGeneratorSelectProps<T extends SelectItem> = ControllerGeneratorProps<MultiSelectProps<T>, MultiValue<T>> | ControllerGeneratorProps<SingleSelectProps<T>, SingleValue<T>>;

declare const Select: {
    <T extends unknown>({ options, renderOption, isEqualComparator, searchQueryValue, searchQueryPlaceholder, onSearchQuery, loadMore, isLoading, hasNextPage, multiselect, maxOptions, name, value, setValue, onBlur, className, style, autoFocus, readOnly, disabled, placeholder, autoComplete, isDirty, isTouched, invalid, error, ...fieldProps }: UnControlledSelectProps<T>): react_jsx_runtime.JSX.Element;
    Controller: <T_1 extends unknown>(props: ControllerGeneratorSelectProps<T_1>) => react_jsx_runtime.JSX.Element;
};

type SliderProps = InputFieldProps<{
    min?: number;
    max?: number;
    step?: number;
}>;
declare const Slider: {
    ({ name, value, setValue, onBlur, min, max, step, className, style, autoFocus, readOnly, disabled, placeholder, autoComplete, isDirty, isTouched, invalid, error, ...fieldProps }: UnControlledComponentProps<SliderProps, number>): react_jsx_runtime.JSX.Element;
    Controller: ({ rules, ...props }: ControllerGeneratorProps<SliderProps, number>) => react_jsx_runtime.JSX.Element;
};

type TextareaProps = InputFieldProps<{
    rows?: number;
    resize?: React__default.CSSProperties['resize'];
    leftIcon?: never;
    rightIcon?: never;
}>;
declare const Textarea: {
    ({ name, value, setValue, onBlur, rows, resize, className, style, autoFocus, readOnly, disabled, placeholder, autoComplete, isDirty, isTouched, invalid, error, ...fieldProps }: UnControlledComponentProps<TextareaProps, string>): react_jsx_runtime.JSX.Element;
    Controller: ({ rules, ...props }: ControllerGeneratorProps<TextareaProps, string>) => react_jsx_runtime.JSX.Element;
};

type HoverCardProps = {
    children: React.ReactNode;
    threshold?: number;
    translationZ?: number;
    width?: 'fit-content' | '100%';
    className?: string;
};
declare const HoverCard: ({ children, threshold, translationZ, width, className, }: HoverCardProps) => react_jsx_runtime.JSX.Element;

type ImageProps = DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> & {};
declare const Image: ({ alt, loading, ...props }: ImageProps) => react_jsx_runtime.JSX.Element;

type InfinityScrollProps<T> = {
    isLoading: boolean;
    hasNextPage: boolean;
    loadMore: () => void;
    data: Array<T>;
    renderItem: (item: T, key: number) => React.ReactElement;
    customLoadMoreElement?: (ref: RefObject<Element>) => React.ReactElement;
    emptyMessage?: string;
    className?: string;
    style?: React.CSSProperties;
};
declare const InfinityScroll: <T>({ isLoading, hasNextPage, loadMore, data, renderItem, customLoadMoreElement, emptyMessage, className, style, }: InfinityScrollProps<T>) => React.ReactElement;

declare enum LineOrientation {
    VERTICAL = "vertical",
    HORIZONTAL = "horizontal"
}

type LineStyleProps = {
    color?: string;
    size?: string;
};

type LineProps = LineStyleProps & {
    orientation: `${LineOrientation}`;
    className?: string;
    style?: React.CSSProperties;
};
declare const Line: ({ orientation, color, size, className, style }: LineProps) => react_jsx_runtime.JSX.Element;

type ModalProps = {
    isOpen: boolean;
    children: React__default.ReactNode;
    id: string;
    opacity?: number;
    color?: string;
    noOverlay?: boolean;
    onClick?: () => void;
    zIndex?: React__default.CSSProperties['zIndex'];
};
declare const ModalComponent: ({ isOpen, children, id, opacity, color, noOverlay, onClick, zIndex }: ModalProps, ref: ForwardedRef<HTMLElement>) => React__default.ReactPortal | null;
declare const Modal: React__default.ForwardRefExoticComponent<ModalProps & React__default.RefAttributes<HTMLElement>>;

type PdfViewerProps = {
    fileUrl: string;
    onLoad?: () => void;
    page?: number;
    loadingElement?: React.ReactNode;
    width?: number;
};
declare const PdfViewer: ({ fileUrl, onLoad, page, width, loadingElement }: PdfViewerProps) => react_jsx_runtime.JSX.Element;

type Alignment = 'left' | 'center' | 'right';
type TableDataGeneric = Record<string, unknown>;
type RowComponentProps<T extends TableDataGeneric> = {
    id: string;
    data: T;
    columns: Array<TableColumn<T>>;
    onUpdate: ((data: T, updatedData: Partial<T>) => void) | undefined;
};
type HeaderComponentProps<T extends TableDataGeneric> = {
    columns: Array<TableColumn<T>>;
    defaultHeaderAlign: Alignment;
};
type FieldComponentProps<T extends TableDataGeneric> = {
    data: T;
    editMode: boolean;
    id: string;
};
type EditableFieldComponentProps<T extends TableDataGeneric> = {
    data: T;
    updatedData: Partial<T>;
    setEditedData: (data: T) => void;
};
type TableColumn<T extends TableDataGeneric> = {
    header: string;
    headerAlign?: Alignment;
    headerComponent?: React__default.FC;
    field?: KeyValuesOf<T, string | number>;
    fieldAlign?: Alignment;
    fieldComponent?: React__default.FC<FieldComponentProps<T>>;
    editable?: boolean;
    editableComponent?: React__default.FC<EditableFieldComponentProps<T>>;
    width?: string;
};
type TableProps<T extends TableDataGeneric> = {
    data: Array<T>;
    columns: Array<TableColumn<T>>;
    emptyMessage?: string;
    rowId?: KeyValuesOf<T, React__default.Key>;
    className?: string;
    style?: React__default.CSSProperties;
    height?: string;
    isLoading?: boolean;
    hasNextPage?: boolean;
    loadMore?: () => void;
    withoutHeader?: boolean;
    onRowUpdate?: (data: T, updatedData: Partial<T>) => void;
    onChange?: (data: Array<T>) => void;
    allowSelection?: boolean | 'many';
    headersAlignment?: Alignment;
    fullWidth?: boolean;
};

declare const Table: <T extends TableDataGeneric>({ data, columns, emptyMessage, rowId, height, className, style, withoutHeader, isLoading, hasNextPage, loadMore, onRowUpdate, allowSelection, onChange, headersAlignment, fullWidth, }: TableProps<T>) => React.ReactElement;

type TabsProps = {
    children: React__default.ReactNode;
    defaultOpenTab: string;
};
declare const Tabs: {
    ({ children, defaultOpenTab }: TabsProps): react_jsx_runtime.JSX.Element;
    Tab: ({ id, children, className, style }: TabProps) => react_jsx_runtime.JSX.Element;
    TabPanel: ({ id, children }: TabPanelProps) => React__default.ReactNode;
};
type TabProps = {
    id: string;
    children: React__default.ReactNode;
    className?: string;
    style?: React__default.CSSProperties;
};
type TabPanelProps = {
    id: string;
    children: React__default.ReactNode;
};

type TagProps = HTMLAttributes<HTMLElement> & {
    children: string;
    isSelected?: boolean;
};
declare const Tag: ({ children, className: customClassName, isSelected, ...props }: TagProps) => react_jsx_runtime.JSX.Element;

declare enum TooltipPosition {
    TOP = "top",
    BOTTOM = "bottom",
    LEFT = "left",
    RIGHT = "right"
}

type TooltipProps = {
    position?: `${TooltipPosition}`;
    offset?: number;
    disabled?: boolean;
    children: React__default.ReactNode;
    content: React__default.ReactNode;
};
declare const Tooltip: ({ position, children, content, offset, disabled, }: TooltipProps) => string | number | boolean | Iterable<React__default.ReactNode> | react_jsx_runtime.JSX.Element | null | undefined;

declare enum TypographyVariant {
    HERO = "hero",
    HEADER1 = "header1",
    HEADER2 = "header2",
    HEADER3 = "header3",
    HEADER4 = "header4",
    BODY = "body",
    LABEL = "label",
    LABEL_FORM = "label-form",
    SMALL = "small"
}
declare const TypographyVariantsElements: Record<TypographyVariant, keyof React__default.ReactHTML>;
declare const TypographyVariantsClassNames: Record<TypographyVariant, string>;
declare enum TypographyWeight {
    LIGHT = "light",
    REGULAR = "regular",
    BOLD = "bold"
}

type TypographyProps = HTMLAttributes<HTMLElement | HTMLLabelElement> & {
    variant?: `${TypographyVariant}`;
    nowrap?: boolean;
    as?: keyof React__default.ReactHTML;
    weight?: `${TypographyWeight}`;
    children: React__default.ReactNode;
    withoutPadding?: boolean;
    htmlFor?: string;
};
declare const TypographyComponent: ({ variant, nowrap, className: customClassname, style, children, as, weight, withoutPadding, htmlFor, ...props }: TypographyProps, ref: React__default.ForwardedRef<unknown>) => react_jsx_runtime.JSX.Element;
declare const Typography: React__default.ForwardRefExoticComponent<React__default.HTMLAttributes<HTMLElement | HTMLLabelElement> & {
    variant?: "small" | "hero" | "header1" | "header2" | "header3" | "header4" | "body" | "label" | "label-form" | undefined;
    nowrap?: boolean | undefined;
    as?: keyof React__default.ReactHTML | undefined;
    weight?: "light" | "bold" | "regular" | undefined;
    children: React__default.ReactNode;
    withoutPadding?: boolean | undefined;
    htmlFor?: string | undefined;
} & React__default.RefAttributes<unknown>>;

export { Accordion, Breakpoints, Button, type ButtonProps, ButtonSize, ButtonVariant, Checkbox, CheckboxController, type CommonThemeEntity, Controller, DatePicker, type DeepPartial, type EditableFieldComponentProps, FetchProvider, Field, type FieldComponentProps, type FieldProps, FieldVariant, type FileResolvedT, FileTypeEnum, FlipCard, Form, type HeaderComponentProps, HoverCard, HttpClient, Icon, type IconNameT, IconProvider, Image, InfinityScroll, Input, InputColor, type InputFieldProps, InputFile, InputFileController, InputPassword, type KeyValuesOf, Line, LineOrientation, Modal, ModalComponent, type ModalProps, type PaletteThemeEntity, PdfViewer, Radio, RadioController, type RowComponentProps, Select, Slider, THEME, Table, type TableColumn, type TableDataGeneric, type TableProps, Tabs, Tag, Textarea, type ThemeConstantsEntity, type ThemeEntity, ThemeProvider, Tooltip, TooltipPosition, type TooltipProps, Typography, TypographyComponent, type TypographyEntity, TypographyVariant, TypographyVariants, TypographyVariantsClassNames, TypographyVariantsElements, TypographyWeight, formatBytes, formatDate, timeBetween, useAsync, useClassNames, useConstant, useDebounce, useDimensions, useEventListener, useFetch, useFileReader, useInView, useInputHandlers, useMediaQuery, useModalInContainer, useMousePosition, useMyTheme, useOnClickOutsideRef, useOnlineStatus, useRenderCount, useSafeDispatch, useScroll, useStateHistory, useToggle, useToggleValues, useViewport };
