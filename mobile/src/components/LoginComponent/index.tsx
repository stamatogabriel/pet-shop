import React, { useRef, useCallback, useEffect } from "react";
import { Form } from "@unform/mobile";
import { Scope, FormHandles } from "@unform/core";
import {
  StyleSheet,
  Text,
  Image,
  KeyboardAvoidingView,
  View,
  StatusBar,
  TouchableOpacity,
} from "react-native";

import * as Yup from 'yup'

import Input from "../Input";

import { signInRequest } from '../../store/slices/auth/actions'
import { signFailure } from '../../store/slices/auth/slice'

import { useDispatch } from "react-redux";
import { SignInPayload } from "../../store/slices/auth/types";
import getValidationError from "../../utils/getValidationError";

const LoginComponent: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const dispatch = useDispatch()

  const handleLogin = useCallback(
    async (data: SignInPayload) => {
      try {
        formRef.current?.setErrors({})

        const schema = Yup.object().shape({
          email: Yup.string().required('Informe o seu email').email('Informe um email válido'),
          password: Yup.string().min(6, 'Senha deve conter pelo menos seis caracteres'),
        })

        await schema.validate(data, {
          abortEarly: false,
        })

        dispatch(signInRequest(data))
      } catch (err) {
        dispatch(signFailure())

        if (err instanceof Yup.ValidationError) {
          const errors = getValidationError(err)
          formRef.current?.setErrors(errors)
        }
      }
    },
    [dispatch]
  )

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View>
        <Form ref={formRef} onSubmit={handleLogin}>
          {/* <Image 
            style={styles.logo} 
            source={{ uri: "https://storage.googleapis.com/golden-wind/unform/unform.png" }}
          /> */}
          <Input
            name="email"
            label="E-mail"
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="email-address"
          />

          <Input name="password" label="Senha" secureTextEntry />

          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => formRef.current?.submitForm()}
          >
            <Text style={styles.submitButtonText}>Send</Text>
          </TouchableOpacity>
        </Form>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    padding: 20,
  },

  logo: {
    width: 120,
    height: 150,
    resizeMode: "contain",
    alignSelf: "center",
  },

  submitButton: {
    backgroundColor: "#111",
    //   border: 0,
    borderRadius: 4,
    padding: 16,
    alignItems: "center",
  },

  submitButtonText: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 15,
  },
});

export default LoginComponent;
