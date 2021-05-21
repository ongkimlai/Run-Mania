import * as React from "react";
import { TouchableOpacity } from "react-native";
import { Input } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const InputBox = props => {
  return (
    <Input
      onChangeText={props.onChangeText}
      secureTextEntry={props.secureTextEntry}
      autoCapitalize="none"
      containerStyle={{}}
      disabledInputStyle={{ background: "#ddd" }}
      inputContainerStyle={{}}
      errorMessage={props.errorMessage}
      errorStyle={{color: "#FF4747"}}
      errorProps={{}}
      inputStyle={{ color: "white" }}
      label={props.label} 
      labelStyle={{ color: "white" }}
      labelProps={{}}
      leftIcon={<Icon name={props.leftIcon} size={20} color={"#D3D7D8"} />}
      leftIconContainerStyle={{}}
      rightIcon={
        <TouchableOpacity onPress={props.onPress}>
          <Icon name={props.rightIcon} size={20} color={props.rightIconColor} />
        </TouchableOpacity>
      }
      rightIconContainerStyle={{}}
      placeholder={props.placeholder}
    />
  )
}

export default InputBox