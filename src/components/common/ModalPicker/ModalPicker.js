import React, { Component } from 'react';
import {
  TouchableWithoutFeedback, TouchableOpacity,
  Picker, Text, Modal, View
} from 'react-native';

import styles from './styles';

class ModalPicker extends Component {
  static defaultProps = {
    defaultOption: null,
    value: null,
    options: []
  }

  state = {
    value: null,
    pickerValue: null,
    pickerVisible: false
  }

  componentWillMount() {
    const { value } = this.props;

    if (value) {
      this.setState({ value, pickerValue: value });
    }
  }

  togglePicker = () => {
    const { pickerVisible } = this.state;
    this.setState({ pickerVisible: !pickerVisible });
  }

  handleSelectValue = () => {
    const { onValueChange } = this.props;
    const { pickerValue } = this.state;

    this.setState({ value: pickerValue });

    if (onValueChange) {
      onValueChange(pickerValue);
    }

    this.togglePicker();
  }

  handleClosePicker = () => {
    const { value } = this.state;

    this.setState({ pickerValue: value });
    this.togglePicker();
  }

  findValueFromOptions(value) {
    const { options } = this.props;
    return options.find(option => option.value === value).value;
  }

  renderControlButton(label, onClick) {
    const { buttonStyle, textStyle } = styles.modalButton;

    return (
      <TouchableOpacity
        style={buttonStyle}
        onPress={onClick}
      >
        <Text style={textStyle}>{label}</Text>
      </TouchableOpacity>
    );
  }

  renderPicker() {
    const { options } = this.props;
    const { pickerValue, pickerVisible } = this.state;

    return (
      <Modal
        visible={pickerVisible}
        transparent
        animationType="slide"
        onRequestClose={() => {}}
      >
        <View style={styles.modalContainerStyle}>
          <View style={styles.modalContentStyle}>
            <View style={styles.modalControlStyle}>
              {this.renderControlButton('Back', this.handleClosePicker)}
              {this.renderControlButton('Confirm', this.handleSelectValue)}
            </View>
            <View>
              <Picker
                selectedValue={pickerValue}
                onValueChange={(value) => this.setState({ pickerValue: value })}
              >
                {options.map(option => (
                  <Picker.Item
                    key={option.value}
                    label={option.label}
                    value={option.value}
                  />
                ))}
              </Picker>
            </View>
          </View>
        </View>
      </Modal>
    );
  }


  renderTextContent() {
    const { placeholder } = this.props;
    const { value } = this.state;

    if (value) {
      return (
        <Text style={styles.selectedInputStyle}>
          {this.findValueFromOptions(value)}
        </Text>
      );
    }

    return <Text style={styles.placeholderStyle}>{placeholder}</Text>;
  }

  render() {
    const { label } = this.props;

    return (
      <View style={styles.containerStyle}>
        <Text style={styles.labelStyle}>{label}</Text>
        <View style={styles.touchableInputStyle}>
          <TouchableWithoutFeedback
            onPress={this.togglePicker}
          >
            <View>
              {this.renderTextContent()}
            </View>
          </TouchableWithoutFeedback>
        </View>
        {this.renderPicker()}
      </View>
    );
  }
}


export { ModalPicker };
