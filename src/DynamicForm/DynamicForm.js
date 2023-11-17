// MyFormComponent.js
import React, {useState} from 'react';
import {View, Text, TextInput, Button, TouchableOpacity} from 'react-native';
import {useFormik} from 'formik';
import formData from './formData';
import validationSchema from './validationSchema';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const MyFormComponent = () => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  // Create the initial form values object dynamically from formData
  const initialFormValues = formData.reduce((values, field) => {
    values[field.name] = '';
    return values;
  }, {});

  // Initialize formik
  const formik = useFormik({
    initialValues: initialFormValues,
    validationSchema: validationSchema,
    onSubmit: (values, {resetForm}) => {
      // Handle form submission logic here
      console.log('Form submitted with values:', values);

      // Reset the form to empty values
      resetForm();
    },
  });

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      formik.setFieldValue(
        'birthDate',
        selectedDate.toISOString().split('T')[0],
      );
    }
  };

  return (
    <View>
      {/* Dynamically render form fields based on formData */}
      {formData.map(field => (
        <View key={field.name}>
          {field.type === 'date' ? (
            <View>
              <Text
                style={{
                  fontWeight: 'bold',
                  marginHorizontal: 12,
                  marginTop: 10,
                  marginBottom: 5,
                }}>
                {field.label}
              </Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TextInput
                  value={formik.values[field.name]}
                  editable={false}
                  style={{
                    flex: 1,
                    height: 40,
                    marginHorizontal: 12,
                    borderWidth: 1,
                    padding: 10,
                    borderRadius: 10,
                    borderColor:
                      formik.values[field.name] && formik.errors[field.name]
                        ? 'red'
                        : 'black',
                    color: 'black',
                  }}
                />
                <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                  <Icon
                    name="calendar-month"
                    size={30}
                    color="black"
                    style={{marginRight: 12}}
                  />
                </TouchableOpacity>
              </View>
              {showDatePicker && (
                <DateTimePicker
                  value={new Date()}
                  mode="date"
                  display="spinner"
                  onChange={handleDateChange}
                />
              )}
              {!formik.values[field.name]
                ? null
                : formik.errors[field.name] && (
                    <Text style={{color: 'red', marginHorizontal: 12}}>
                      {formik.errors[field.name]}
                    </Text>
                  )}
            </View>
          ) : (
            <View>
              <Text
                style={{
                  fontWeight: 'bold',
                  marginHorizontal: 12,
                  marginTop: 10,
                  marginBottom: 5,
                }}>
                {field.label}
              </Text>
              <TextInput
                onChangeText={formik.handleChange(field.name)}
                onBlur={formik.handleBlur(field.name)}
                value={formik.values[field.name]}
                maxLength={field.maxLength}
                keyboardType={field.keyboardType}
                secureTextEntry={field.type === 'password'}
                placeholder={field.placeholder}
                style={{
                  height: 40,
                  marginHorizontal: 12,
                  borderWidth: 1,
                  padding: 10,
                  borderRadius: 10,
                  borderColor:
                    formik.values[field.name] && formik.errors[field.name]
                      ? 'red'
                      : 'black',
                }}
              />
              {!formik.values[field.name]
                ? null
                : formik.errors[field.name] && (
                    <Text style={{color: 'red', marginHorizontal: 12}}>
                      {formik.errors[field.name]}
                    </Text>
                  )}
            </View>
          )}
        </View>
      ))}

      <View style={{marginTop: 20, marginHorizontal: 12, borderRadius: 10}}>
        <Button
          onPress={formik.handleSubmit}
          title="Submit"
          disabled={!formik.isValid}
        />
      </View>
    </View>
  );
};

export default MyFormComponent;
