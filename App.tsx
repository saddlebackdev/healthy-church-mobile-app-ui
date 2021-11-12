// Modules
import * as React from 'react';
import {SafeAreaView} from 'react-native';
import Styled from 'styled-components/native';

import {
  Avatar,
  Button,
  ButtonGroup,
  DatePicker,
  SelectPicker,
  Checkbox,
  Divider,
  Text,
  Heading,
  Radio,
  ThemeProvider,
  PillToggle,
  TextInput,
} from './source';

// Interfaces
interface IProps {}

const Wrapper = Styled.ScrollView``;

const Section = {
  Wrapper: Styled.View`
    padding: 30px;
  `,
  Title: Styled.View``,
  Description: Styled.View`
    margin-top: 6px;
  `,
  Content: Styled.View`
    margin-top: 10px;
  `,
};
const Row = Styled.View`
  margin-top: 10px;
  margin-bottom: 10px;
`;

// Component
export const App: React.FC<IProps> = (): React.ReactElement => {
  const [isChecked, setIsChecked] = React.useState<boolean>(true);
  const [selectedRadio, setSelectedRadio] = React.useState<number>(2);
  const [selectedHorizontalRadio, setSelectedHorizontalRadio] =
    React.useState<number>(2);
  const [selectedDate, setSelectedDate] = React.useState<any>(new Date());
  const [activePill, setActivePill] = React.useState<number>(2);
  const [pickerValue, setPickerValue] = React.useState<number>(1);

  const pickerOptions = [
    {label: 'Option 1', value: 1},
    {label: 'Option 2', value: 2},
    {label: 'Option 3', value: 3},
    {label: 'Option 4', value: 4},
  ];

  const pillToggleOptions = [
    {label: 'Selected', value: 1, onPress: setActivePill},
    {label: 'Unselected', value: 2, onPress: setActivePill},
  ];

  const options = [
    {label: 'Option 1', value: 1},
    {label: 'Option 2 - Disabled', value: 2, disabled: true},
    {label: 'Option 3 - Disabled', value: 3, disabled: true},
    {label: 'Option 4', value: 4},
  ];

  const horizontalOptions = [
    {label: 'Option 1', value: 1},
    {label: 'Option 2', value: 2},
  ];

  const avatarUri =
    'https://images.unsplash.com/photo-1591907235917-3da27ce1421d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=850&q=80';

  return (
    <ThemeProvider>
      <SafeAreaView>
        <Wrapper>
          {/* Avatar */}
          <Section.Wrapper>
            <Section.Title>
              <Heading variant="h6">Healthy Church</Heading>
            </Section.Title>
            <Section.Title>
              <Heading variant="h1">Mobile App UI</Heading>
            </Section.Title>
            <Section.Description>
              <Text isMuted>
                Style Guide and Component Documentation for the Healthy Church
                Mobile Apps.
              </Text>
            </Section.Description>
          </Section.Wrapper>
          <Divider />

          {/* Avatar */}
          <Section.Wrapper>
            <Section.Title>
              <Heading variant="h2">Avatar</Heading>
            </Section.Title>
            <Section.Description>
              <Text isCaption>Used to show profile photo</Text>
            </Section.Description>
            <Section.Content>
              <Row>
                <Avatar uri={avatarUri} />
              </Row>
            </Section.Content>
          </Section.Wrapper>
          <Divider />

          {/* Buttons - Filled */}
          <Section.Wrapper>
            <Section.Title>
              <Heading variant="h2">Buttons - Filled</Heading>
            </Section.Title>
            <Section.Description>
              <Text isCaption>
                Solid buttons are high-emphasis. They contain actions that are
                primary to your app.
              </Text>
            </Section.Description>
            <Section.Content>
              <Row>
                <Button appearance="filled" color="primary">
                  Primary Button
                </Button>
              </Row>
              <Row>
                <Button appearance="filled" color="secondary">
                  Secondary Button
                </Button>
              </Row>
              <Row>
                <Button appearance="filled" color="info">
                  Informative Button
                </Button>
              </Row>
              <Row>
                <Button appearance="filled" color="success">
                  Success Button
                </Button>
              </Row>
              <Row>
                <Button appearance="filled" color="warning">
                  Warning Button
                </Button>
              </Row>
              <Row>
                <Button appearance="filled" color="danger">
                  Danger Button
                </Button>
              </Row>
              <Row>
                <Button appearance="filled" disabled>
                  Disabled Button
                </Button>
              </Row>
            </Section.Content>
          </Section.Wrapper>
          <Divider />

          {/* Buttons - Outlined */}
          <Section.Wrapper>
            <Section.Title>
              <Heading variant="h2">Buttons - Outlined</Heading>
            </Section.Title>
            <Section.Description>
              <Text isCaption>
                Outlined buttons are medium-emphasis buttons. They contain
                actions that are not the primary action.
              </Text>
            </Section.Description>
            <Section.Content>
              <Row>
                <Button appearance="outline" color="primary">
                  Primary Button
                </Button>
              </Row>
              <Row>
                <Button appearance="outline" color="secondary">
                  Secondary Button
                </Button>
              </Row>
              <Row>
                <Button appearance="outline" color="info">
                  Informative Button
                </Button>
              </Row>
              <Row>
                <Button appearance="outline" color="success">
                  Success Button
                </Button>
              </Row>
              <Row>
                <Button appearance="outline" color="warning">
                  Warning Button
                </Button>
              </Row>
              <Row>
                <Button appearance="outline" color="danger">
                  Danger Button
                </Button>
              </Row>
              <Row>
                <Button appearance="outline" disabled>
                  Disabled Button
                </Button>
              </Row>
            </Section.Content>
          </Section.Wrapper>
          <Divider />

          {/* Buttons - Variants */}
          <Section.Wrapper>
            <Section.Title>
              <Heading variant="h2">Buttons - Variants</Heading>
            </Section.Title>
            <Section.Description>
              <Text isCaption>There a multiple variants for buttons.</Text>
            </Section.Description>
            <Section.Content>
              <Row>
                <Button hasShadow>Button with Shadow</Button>
              </Row>
              <Row>
                <Button small>Small Button</Button>
              </Row>
            </Section.Content>
          </Section.Wrapper>
          <Divider />

          {/* Button Group */}
          <Section.Wrapper>
            <Section.Title>
              <Heading variant="h2">Button Groups</Heading>
            </Section.Title>
            <Section.Description>
              <Text isCaption>
                When buttons are grouped two-up, the primary cta is solid on the
                right, and the secondary cta is outlined on the left.
              </Text>
            </Section.Description>
            <Section.Content>
              <Row>
                <ButtonGroup>
                  <Button appearance="outline" color="secondary" hasShadow>
                    Secondary
                  </Button>
                  <Button appearance="filled" color="primary" hasShadow>
                    Primary
                  </Button>
                </ButtonGroup>
              </Row>
              <Row>
                <ButtonGroup>
                  <Button appearance="outline" color="secondary" hasShadow>
                    Cancel
                  </Button>
                  <Button appearance="filled" color="success" hasShadow>
                    Submit
                  </Button>
                </ButtonGroup>
              </Row>
              <Row>
                <ButtonGroup>
                  <Button appearance="outline" color="secondary" hasShadow>
                    Cancel
                  </Button>
                  <Button appearance="filled" color="danger" hasShadow>
                    Delete
                  </Button>
                </ButtonGroup>
              </Row>
            </Section.Content>
          </Section.Wrapper>
          <Divider />

          {/* Checkbox */}
          <Section.Wrapper>
            <Section.Title>
              <Heading variant="h2">Checkbox</Heading>
            </Section.Title>
            <Section.Description>
              <Text isCaption>General Use and Alternative Anatomy</Text>
            </Section.Description>
            <Section.Content>
              <Row>
                <Checkbox
                  isChecked={isChecked}
                  onPress={() => setIsChecked(!isChecked)}
                  label="General Use"
                />
              </Row>
              <Row>
                <Checkbox
                  isChecked={!isChecked}
                  onPress={() => setIsChecked(!isChecked)}
                  label="General Use"
                />
              </Row>
              <Row>
                <Checkbox
                  isChecked={isChecked}
                  onPress={() => setIsChecked(!isChecked)}
                  label="Alternate Anatomy"
                  hint="With Hint"
                />
              </Row>
              <Row>
                <Checkbox
                  isChecked={!isChecked}
                  onPress={() => setIsChecked(!isChecked)}
                  label="Alternate Anatomy"
                  hint="With Hint"
                />
              </Row>
              <Row>
                <Checkbox
                  disabled
                  isChecked={isChecked}
                  onPress={() => setIsChecked(!isChecked)}
                  label="Checked Disabled State"
                />
              </Row>
              <Row>
                <Checkbox
                  disabled
                  isChecked={!isChecked}
                  onPress={() => setIsChecked(!isChecked)}
                  label="Unchecked Disabled State"
                />
              </Row>
            </Section.Content>
          </Section.Wrapper>
          <Divider />

          {/* Date Picker */}
          <Section.Wrapper>
            <Section.Title>
              <Heading variant="h2">Date Picker</Heading>
            </Section.Title>
            <Section.Description>
              <Text isCaption>General Use</Text>
            </Section.Description>
            <Section.Content>
              <Row>
                <DatePicker
                  selectedDate={selectedDate}
                  onDateChange={setSelectedDate}
                />
              </Row>
            </Section.Content>
          </Section.Wrapper>
          <Divider />

          {/* Headings */}
          <Section.Wrapper>
            <Section.Title>
              <Heading variant="h2">Headings</Heading>
            </Section.Title>
            <Section.Description>
              <Text isCaption>
                Headings have variants ranging from h1 to h6
              </Text>
            </Section.Description>
            <Section.Content>
              <Row>
                <Heading variant="h1">Heading 1</Heading>
              </Row>
              <Row>
                <Heading variant="h2">Heading 2</Heading>
              </Row>
              <Row>
                <Heading variant="h3">Heading 3</Heading>
              </Row>
              <Row>
                <Heading variant="h4">Heading 4</Heading>
              </Row>
              <Row>
                <Heading variant="h5">Heading 5</Heading>
              </Row>
              <Row>
                <Heading variant="h6">Heading 6</Heading>
              </Row>
            </Section.Content>
          </Section.Wrapper>
          <Divider />

          {/* Text */}
          <Section.Wrapper>
            <Section.Title>
              <Heading variant="h2">Text</Heading>
            </Section.Title>
            <Section.Description>
              <Text isCaption>
                Apart from the default variant, text also has variants like
                isCaption, isMuted and isSubtitle
              </Text>
            </Section.Description>
            <Section.Content>
              <Row>
                <Text>
                  PARAGRAPH &mdash; Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                  sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </Text>
              </Row>
              <Row>
                <Text isMuted>
                  MUTED &mdash; Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                  sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </Text>
              </Row>
              <Row>
                <Text isCaption>
                  CAPTION and SUBTITLE &mdash; Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit anim id est laborum.
                </Text>
              </Row>
            </Section.Content>
          </Section.Wrapper>
          <Divider />

          {/* Radio */}
          <Section.Wrapper>
            <Section.Title>
              <Heading variant="h2">Radio</Heading>
            </Section.Title>
            <Section.Description>
              <Text isCaption>Vertical Variant</Text>
            </Section.Description>
            <Section.Content>
              <Row>
                <Radio
                  direction="vertical"
                  selected={selectedRadio}
                  onChange={setSelectedRadio}
                  options={options}
                />
              </Row>
            </Section.Content>
            <Section.Description>
              <Text isCaption>Horizontal Variant</Text>
            </Section.Description>
            <Section.Content>
              <Row>
                <Radio
                  direction="horizontal"
                  selected={selectedHorizontalRadio}
                  onChange={setSelectedHorizontalRadio}
                  options={horizontalOptions}
                />
              </Row>
            </Section.Content>
          </Section.Wrapper>
          <Divider />

          {/* Select Picker */}
          <Section.Wrapper>
            <Section.Title>
              <Heading variant="h2">Select Picker</Heading>
            </Section.Title>
            <Section.Description>
              <Text isCaption>Vertical Variant</Text>
            </Section.Description>
            <Section.Content>
              <Row>
                <SelectPicker
                  value={pickerValue}
                  onValueChange={setPickerValue}
                  items={pickerOptions}
                  label="Label"
                />
              </Row>
            </Section.Content>
          </Section.Wrapper>
          <Divider />

          {/* Pill Toggle */}
          <Section.Wrapper>
            <Section.Title>
              <Heading variant="h2">Pill Toggle</Heading>
            </Section.Title>
            <Section.Description>
              <Text isCaption>
                Group Radio buttons together in a pill container
              </Text>
            </Section.Description>
            <Section.Content>
              <Row>
                <PillToggle
                  selected={activePill}
                  options={pillToggleOptions}
                  disabled={false}
                />
              </Row>
            </Section.Content>

            <Section.Content>
              <Row>
                <PillToggle selected={1} options={pillToggleOptions} disabled />
              </Row>
            </Section.Content>
          </Section.Wrapper>
          <Divider />

          {/* Text Input */}
          <Section.Wrapper>
            <Section.Title>
              <Heading variant="h2">Text Input</Heading>
            </Section.Title>
            <Section.Description>
              <Text isCaption>Simple text input control.</Text>
            </Section.Description>
            <Section.Content>
              <Row>
                <TextInput
                  label="Email Address"
                  placeholder="jane.doe@ag.com"
                  onChange={() => null}
                />
              </Row>
              <Row>
                <TextInput
                  label="Email Address"
                  placeholder="jane.doe@ag.com"
                  onChange={() => null}
                  disabled
                />
              </Row>
              <Row>
                <TextInput
                  label="Email Address"
                  placeholder="jane.doe@ag.com"
                  onChange={() => null}
                  numberOfLines={12}
                  isUnderlined
                  required
                />
              </Row>
            </Section.Content>
          </Section.Wrapper>
          <Divider />

          {/* Text Area */}
          <Section.Wrapper>
            <Section.Title>
              <Heading variant="h2">Text Area</Heading>
            </Section.Title>
            <Section.Description>
              <Text isCaption>Simple text area control.</Text>
            </Section.Description>
            <Section.Content>
              <Row>
                <TextInput
                  label="Email Address"
                  placeholder="jane.doe@ag.com"
                  onChange={() => null}
                  numberOfLines={12}
                  multiline
                  required
                />
              </Row>
              <Row>
                <TextInput
                  label="Email Address"
                  placeholder="jane.doe@ag.com"
                  onChange={() => null}
                  numberOfLines={12}
                  multiline
                  required
                  disabled
                />
              </Row>
            </Section.Content>
          </Section.Wrapper>
        </Wrapper>
      </SafeAreaView>
    </ThemeProvider>
  );
};

// Exports
export default App;
