import type { ComponentType, ReactNode } from "react";

//================================================================
// Global & Utility Types
//================================================================

export type Settings = Record<string, any>;

export interface LocalStorageProps {
  get<T>(key: string, defaultValue: T): T;
  set<T>(key: string, value: T): boolean;
  addEventListener<T>(
    keys: string[],
    callback: (event: CustomEvent<{ key: string; newValue: T }> | StorageEvent) => void,
  ): EventListener;
  removeEventListener(listener: EventListener): void;
}

//================================================================
// Option Types for Settings Menus
//================================================================

interface BaseOption {
  name: string;
  desc: string;
  tippy?: string;
  run?: (value: any) => void;
  popupModal?: ComponentType<any>;
  incompatible?: string[];
}

export interface ToggleOption extends BaseOption {
  type: "toggle";
  defaultVal: boolean;
  reveal?: Option[];
}

export interface InputOption extends BaseOption {
  type: "input";
  defaultVal: string | number;
  placeholder?: string;
}

export interface DropdownOptionDef {
  value: string | number;
  label: string;
}

export interface DropdownOption extends BaseOption {
  type: "dropdown";
  options: DropdownOptionDef[];
  defaultVal: string | number;
}

export interface RadioButtonOptionDef {
  value: string;
  label: string;
}

export interface RadioButtonOption extends BaseOption {
  type: "radiobutton";
  options: RadioButtonOptionDef[];
  defaultVal: string;
}

export interface SliderOption extends BaseOption {
  type: "slider";
  min?: number;
  max?: number;
  step?: number;
  defaultVal: number;
}

export type Option = ToggleOption | InputOption | DropdownOption | RadioButtonOption | SliderOption;
export type OptionsCategories = Record<string, Option[]>;

//================================================================
// Component Prop Types
//================================================================

export interface IconProps {
  size?: number;
  fill?: string;
}

export interface ConfirmDialogProps {
  titleText: string;
  descriptionText: string;
  cancelText?: string;
  confirmText?: string;
  onConfirm?: () => void;
  onClose?: () => void;
  onOpen?: () => void;
  onOutside?: () => void;
  allowHTML?: boolean;
}

export interface PopupModalProps {
  title: string;
  content: ReactNode | ComponentType<any>;
  isLarge?: boolean;
  buttons?: ReactNode;
  icon?: ReactNode;
}

export interface NotificationProps {
  message?: string | React.JSX.Element;
  keyPrefix?: string;
  autoHideDuration?: number;
  backgroundColour?: string;
  colour?: string;
  isWarning?: boolean;
}

export interface TippyButtonProps {
  tippy: string;
}

export interface ButtonContainerProps {
  resetSettings: () => void;
  saveSettings: () => void;
}

export interface CategoryCarouselProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export interface DropdownProps {
  value: string | number;
  options: DropdownOptionDef[];
  onChange?: (value: string | number) => void;
  disabled?: boolean;
}

export interface InputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

export interface OptionRowProps {
  name: string;
  desc: string;
  tippy?: string;
  popupModal?: ComponentType;
  option?: Option;
  value: string | number | boolean;
  onChange?: (value: string | number | boolean) => void;
  disabled?: boolean;
}

export interface OptionTypeProps {
  option: Option;
  value: string | boolean | number;
  onChange: (value: string | boolean | number) => void;
  disabled?: boolean;
}

export interface PopupButtonProps {
  name: string;
  popupModal: ComponentType;
}

export interface RadioButtonProps {
  options: RadioButtonOptionDef[];
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

export interface RenderCategoryProps {
  category: string;
  categoryOptions: Option[];
  settings: Settings;
  onChange: (name: string, value: any) => void;
}

export interface RenderOptionProps {
  option: Option;
  settings: Settings;
  onChange: (name: string, value: any) => void;
  disabled?: boolean;
}

export interface SliderProps {
  value: number;
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
  onChange: (value: number) => void;
  onRelease?: () => void;
  disabled?: boolean;
}

export interface ToggleProps {
  value: boolean;
  onChange: (newValue: boolean) => void;
  disabled?: boolean;
}

export interface UseSettingsReturn {
  settings: Settings;
  handleSettingChange: (key: string, value: any) => void;
  resetSettings: () => void;
  saveSettings: () => void;
}
