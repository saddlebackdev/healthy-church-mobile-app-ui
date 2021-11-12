// Modules
import * as React from 'react';
import Styled from 'styled-components/native';

// Types
import {
  IProps,
  IStyledWrapper,
  IStyledGroup,
  IStyledRadioInner,
} from './radio.types';

// Shared
import Text from '../text/text';
import {majorScale} from '../scales';

// Styles
const StyledWrapper = Styled.View<IStyledWrapper>`
  flex-direction: ${({$direction}) => {
    return $direction === 'vertical' ? 'column' : 'row';
  }};
`;
const StyledGroup = Styled.TouchableOpacity<IStyledGroup>`
  flex-direction: row;

  margin-right: ${({$direction, $isLastChild}) => {
    if ($direction === 'vertical') {
      return 0;
    }

    if ($isLastChild) {
      return 0;
    }

    return majorScale(2, 'px');
  }};

  margin-bottom: ${({$direction, $isLastChild}) => {
    if ($direction === 'horizontal') {
      return 0;
    }

    if ($isLastChild) {
      return 0;
    }

    return majorScale(2, 'px');
  }};
`;
const StyledRadioOuter = Styled.View`
  width: 22px; height: 22px;
  background-color: ${({theme}) => theme.colors.white};

  align-items: center;
  justify-content: center;

  border-radius: 22px;
  border: 1px solid ${({theme}) => {
    return theme.colors.grayThree;
  }}
`;
const StyledRadioInner = Styled.View<IStyledRadioInner>`
  align-items: center;
  justify-content: center;
  width: 14px; height: 14px;
  border-radius: 22px;

  background-color: ${({$isDisabled, theme}) => {
    return $isDisabled ? theme.colors.grayFour : theme.colors.primaryLight;
  }};
`;
const StyledRadioLabelWrapper = Styled(Text)`
  padding-left: ${majorScale(1, 'px')};
  padding-top: 2px;
`;

// Component
export const Radio: React.FC<IProps> = React.memo(
  ({
    onChange,
    selected,
    disabled: isRadioDisabled,
    direction,
    options,
  }): React.ReactElement => {
    const touchableHitslop = {
      top: 12,
      right: 12,
      bottom: 12,
      left: 12,
    };

    return (
      <StyledWrapper $direction={direction} testID="radio">
        {options.map((option, ndx) => {
          const _onPressOption = () => {
            if (isRadioDisabled || option.disabled) {
              return;
            }

            onChange(option.value);
          };

          const isSelected = option.value === selected;

          const isFirstElement = ndx === 0;
          const isLastElement = options.length - 1 === ndx;

          return (
            <StyledGroup
              key={option.label}
              testID="radio-button"
              hitSlop={touchableHitslop}
              onPress={_onPressOption}
              activeOpacity={option.disabled ? 1 : 0.75}
              $direction={direction}
              $isFirstChild={isFirstElement}
              $isLastChild={isLastElement}
              disabled={isRadioDisabled || option.disabled}>
              <StyledRadioOuter>
                {isSelected && (
                  <StyledRadioInner
                    $isDisabled={isRadioDisabled || option.disabled}
                  />
                )}
              </StyledRadioOuter>
              <StyledRadioLabelWrapper
                testID="radio-label"
                isMuted={isRadioDisabled || option.disabled}>
                {option.label}
              </StyledRadioLabelWrapper>
            </StyledGroup>
          );
        })}
      </StyledWrapper>
    );
  },
);

// Properties
Radio.displayName = 'Radio';

// Exports
export default Radio;
