// npx jest ./src/modules/pill-toggle/__tests__/pill-toggle.test.ts

import * as React from 'react';
import {fireEvent, render} from '@testing-library/react-native';

import PillToggle from '../pill-toggle';
import ThemeProvider from '../../theming/theme-provider';
import defaultTheme from '../../theming/default-theme';

describe('PillToggle', () => {
  let onPressMock: any, options: any;

  beforeEach(() => {
    onPressMock = jest.fn();

    options = [
      {
        label: 'Selected',
        testID: 'pill-toggle-1',
        accessibilityLabel: 'pill-toggle-1',
        value: 1,
        onPress: onPressMock,
      },
      {
        label: 'Unselected',
        testID: 'pill-toggle-2',
        accessibilityLabel: 'pill-toggle-2',
        value: 2,
        onPress: onPressMock,
        disabled: true,
      },
      {
        label: 'Disabled',
        testID: 'pill-toggle-3',
        accessibilityLabel: 'pill-toggle-3',
        value: 3,
        onPress: onPressMock,
      },
    ];
  });

  describe('Rendering', () => {
    it('renders itself correctly', () => {
      const wrapper = render(
        <ThemeProvider theme={defaultTheme}>
          <PillToggle selected={1} options={options} />
        </ThemeProvider>,
      );

      const pillToggle = wrapper.getByTestId('pill-toggle');

      expect(pillToggle.children).toHaveLength(options.length);

      expect(pillToggle).toBeDefined();

      expect(wrapper).toMatchSnapshot();
    });

    it('renders the children correctly', () => {
      const {getByTestId} = render(
        <ThemeProvider theme={defaultTheme}>
          <PillToggle selected={1} options={options} />
        </ThemeProvider>,
      );

      const option1 = getByTestId(options[0].testID);
      const option2 = getByTestId(options[1].testID);
      const option3 = getByTestId(options[2].testID);

      expect(option1).toBeDefined();
      expect(option2).toBeDefined();
      expect(option3).toBeDefined();
    });
  });

  describe('Interactions', () => {
    it('should call onPress function on click of pill button', () => {
      const {getByTestId} = render(
        <ThemeProvider theme={defaultTheme}>
          <PillToggle selected={1} options={options} />
        </ThemeProvider>,
      );

      const button = getByTestId('pill-toggle-1');

      fireEvent.press(button);

      expect(onPressMock).toHaveBeenCalledTimes(1);
    });

    it('should not call onPress function on click of pill button when option is disabled', () => {
      const {getByTestId} = render(
        <ThemeProvider theme={defaultTheme}>
          <PillToggle selected={1} options={options} />
        </ThemeProvider>,
      );

      const button = getByTestId('pill-toggle-2');

      fireEvent.press(button);

      expect(onPressMock).not.toHaveBeenCalled();
    });
  });
});
