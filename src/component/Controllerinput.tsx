import { Control, Controller } from "react-hook-form";
import { View } from "react-native";
import { HelperText, TextInput, useTheme } from "react-native-paper";
type ControllerInputProps = {
  control: Control;
  name: string;
} & React.ComponentProps<typeof TextInput>;
export default function ControllerInput({
  control,
  name,
  ...textInputProps
}: ControllerInputProps) {
  const theme = useTheme();
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { value, onBlur, onChange },
        fieldState: { error, invalid },
      }) => (
        <View>
          <TextInput
            {...textInputProps}
            style={{ backgroundColor: theme.colors.background }}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            error={invalid}
          />
          <HelperText type="error" visible={invalid}>
            {error?.message}
          </HelperText>
        </View>
      )}
    />
  );
}
