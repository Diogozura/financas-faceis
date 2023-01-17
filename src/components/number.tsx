import  { InputAttributes } from 'react-number-format';
import { default as NumberFormat } from 'react-number-format';
import React from 'react'

interface CustomProps {
    onChange: (event: { target: { name: string; value: string } }) => void;
    name: string;
  }
  

export const NumberFormatCustom = React.forwardRef<
  NumberFormat<InputAttributes>,
  CustomProps
>(function NumberFormatCustom(props, ref) {
  const { onChange, ...other } = props;

    return (
      
    <NumberFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values: { value: any; }) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      isNumericString
      thousandSeparator={'.'}
      decimalSeparator={','}
      prefix="R$"

    />
  );
});