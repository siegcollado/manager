const fontStyle = { fontSize: 18 };

const textContentStyle = {
  ...fontStyle,
  lineHeight: 23
};

export default {
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  labelStyle: {
    ...fontStyle,
    paddingLeft: 20,
    flex: 1
  },
  touchableInputStyle: {
    flex: 2,
    paddingRight: 5,
    paddingLeft: 5,
  },
  selectedInputStyle: {
    color: '#000',
    ...textContentStyle
  },
  placeholderStyle: {
    color: '#d3d3d3',
    ...textContentStyle
  },
  modalContainerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'flex-end'
  },
  modalContentStyle: {
    backgroundColor: '#fff'
  },
  modalControlStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  modalButton: {
    buttonStyle: {
      backgroundColor: '#fff',
      marginLeft: 5,
      marginRight: 5
    },
    textStyle: {
      ...fontStyle,
      color: '#007aff',
      padding: 10,
      fontWeight: '600'
    }
  }
};
