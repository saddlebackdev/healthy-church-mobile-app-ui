// Modules
import * as React from 'react';
import RNPickerSelect, {PickerStyle} from 'react-native-picker-select';
import Styled, {useTheme} from 'styled-components/native';

// Types
import {IStyledLabel, IProps} from './select-picker.types';
import {ITheme} from '../theming/theme-provider.types';

// Utils
import {DeviceUtils} from '../utilities';

// Components
import Text from '../text/text';
import {majorScale, minorScale} from '../scales';
import Icon from '../icon/icon';
import {View} from 'react-native';

// Styles
const StyledWrapper = Styled.View``;
const StyledLabel = Styled(Text)<IStyledLabel>`
  margin-bottom: ${({$addBottomMargin}) => {
    return $addBottomMargin ? minorScale(1, 'px') : majorScale(1, 'px');
  }};
`;
const StyledLabelAsterisk = Styled(Text)<IStyledLabel>`
  color: ${({theme}) => theme.colors.dangerLight};
`;

// Get Styles
const getStyles = (
  {colors, typography}: ITheme,
  isUnderlined: boolean,
): Partial<PickerStyle> => {
  const baseStyles = {
    placeholder: {
      color: colors.grayFour,
      fontSize: typography.sizes.regular,
    },
    viewContainer: {
      backgroundColor: isUnderlined ? 'transparent' : colors.white,
      borderColor: colors.grayThree,
      borderRadius: 3,
      borderTopWidth: isUnderlined ? 0 : 1,
      borderRightWidth: isUnderlined ? 0 : 1,
      borderLeftWidth: isUnderlined ? 0 : 1,
      borderBottomWidth: 1,
      height: 44,
    },
    input: {
      color: colors.graySix,
      fontFamily: typography.faces.primaryRegular,
      fontSize: isUnderlined ? 20 : 16,
    },
    iconContainer: {
      marginTop: DeviceUtils.isAndroid() ? 12 : 4,
      marginRight: 4,
    },
    chevronContainer: {
      paddingTop: 12,
    },
  };

  // Android
  if (DeviceUtils.isAndroid()) {
    return {
      ...baseStyles,
      inputAndroid: {
        ...baseStyles.input,
        marginLeft: isUnderlined ? -16 : 0,
        marginTop: -6,
        borderRadius: 2,
        borderColor: `${colors.grayThree}`,
        borderWidth: 1,
        borderStyle: 'solid',
        paddingLeft: 5,
        paddingRight: 5,

        // Something wrong with Typescript
        // Doesnt allow using string if moved to baseStyles
        fontWeight: '500',
      },
    };
  }

  // iOS
  if (DeviceUtils.isIos()) {
    return {
      ...baseStyles,
      viewContainer: {
        ...baseStyles.viewContainer,
        paddingHorizontal: isUnderlined ? 0 : majorScale(1),
        paddingVertical: majorScale(1),
      },
      inputIOS: {
        ...baseStyles.input,

        // Something wrong with Typescript
        // Doesnt allow using string if moved to baseStyles
        fontWeight: '500',
      },
    };
  }

  // Others
  return baseStyles;
};

// Get Icon
const getIcon = showCustomIcon => {
  if (DeviceUtils.isAndroid() && !showCustomIcon) {
    return null;
  }

  return () => {
    return <Icon size={14} type="chevronDown" />;
  };
};

// Component
const SelectPicker: React.FC<IProps> = ({
  label,
  placeholder = 'Select an option',
  shouldShowPlaceholder = true,
  showCustomIcon = false,
  isUnderlined = false,
  required = false,
  ...rest
}): React.ReactElement => {
  // Hooks
  const theme = useTheme();

  const additionalProps = {
    ...rest,
    placeholder: {},
  };

  if (shouldShowPlaceholder) {
    additionalProps.placeholder = {
      label: placeholder,
      value: null,
    };
  }

  return (
    <StyledWrapper>
      {label && (
        <StyledLabel
          weight="bold"
          small={isUnderlined}
          $addBottomMargin={isUnderlined}
          muted={isUnderlined}>
          {label}{' '}
          {required && (
            <StyledLabelAsterisk
              small={isUnderlined}
              testID="select-picker-asterisk">
              *
            </StyledLabelAsterisk>
          )}
        </StyledLabel>
      )}

      <RNPickerSelect
        Icon={getIcon(showCustomIcon)}
        style={getStyles(theme, isUnderlined)}
        fixAndroidTouchableBug
        useNativeAndroidPickerStyle={false}
        {...additionalProps}
      />
    </StyledWrapper>
  );
};

// Exports
export default SelectPicker;
