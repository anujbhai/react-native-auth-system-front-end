import React from "react";
import {
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  Platform,
  Alert
} from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

import * as authAction from "../store/actions/authAction";

const formSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required().min(6)
});

const LoginScreen = (navData) => {
  const dispatch = useDispatch();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{flex: 1}}
    >
      {/* <ScrollView> */}
        <Formik
          initialValues={{
            email: "",
            password: ""
          }}
          validationSchema={formSchema}
          onSubmit={values => {
            dispatch(authAction.loginUser(values))
              .then(async result => {
                if (result.success) {
                  try {
                    await AsyncStorage.setItem("token", result.token);
                    navData.navigation.navigate("Home");
                  } catch (err) {
                    console.log(err);
                  }
                } else {
                  Alert.alert(result.message)
                }
              })
              .catch(err => console.log(err));
          }}
        >
          {props => (
            <View style={styles.container}>
              <View style={styles.logo}>
                <Image source={require("../assets/images/logo.png")} style={styles.image} />
              </View>

              <View>
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  placeholderTextColor="#FFF"
                  keyboardType="email-address"
                  onChangeText={props.handleChange("email")}
                  value={props.values.email}
                  onBlur={props.handleBlur("email")}
                />
                <Text style={styles.error}>{props.touched.email && props.errors.email}</Text>

                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  placeholderTextColor="#FFF"
                  secureTextEntry={true}
                  onChangeText={props.handleChange("password")}
                  value={props.values.password}
                  onBlur={props.handleBlur("password")}
                />
                <Text style={styles.error}>{props.touched.password && props.errors.password}</Text>

                <TouchableOpacity
                  onPress={props.handleSubmit}
                  style={styles.button}
                >
                  <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                
                <View style={styles.registerContainer}>
                  <Text style={styles.registerText}>Don't have an account? {" "}
                    <TouchableOpacity
                      onPress={() => navData.navigation.navigate("Register")}
                    >
                      <Text style={styles.registerButton}>Register</Text>
                    </TouchableOpacity>
                  </Text>
                </View>
              </View>
            </View>
          )} 
        </Formik>
      {/* </ScrollView> */}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  logo: {
    alignItems: "center",
    marginBottom: 40,
  },
  image: {
    width: 140,
    height: 140,
  },
  input: {
    width: 300,
    backgroundColor: "#B6BFC4",
    borderRadius: 25,
    padding: 16,
    fontSize: 16,
    marginVertical: 10,
  },
  button: {
    width: 300,
    backgroundColor: "#738289",
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#ffffff",
    textAlign: "center",
  },
  registerContainer: {
    alignItems: "flex-end",
    justifyContent: "center",
    paddingVertical: 16,
    flexDirection: "row",
  },
  registerText: {
    color: "#738289",
    fontSize: 16,
  },
  registerButton: {
    color: "#738289",
    fontSize: 16,
    fontWeight: "bold",
  },
  error: {
      color: 'red'
  }
});

export default LoginScreen;
