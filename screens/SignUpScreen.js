import { StyleSheet, Text, View, SafeAreaView, Pressable } from "react-native";
import TextComponent from "../components/ui/TextComponent";
import InputComponent from "../components/ui/InputComponent";
import logo from "../assets/images/cashflow-logo-text.png";
import LogoComponent from "../components/ui/LogoComponent";
import ButtonComponent from "../components/ui/ButtonComponent";
import CheckboxComponent from "../components/ui/CheckboxComponent";
import LinkComponent from "../components/ui/LinkComponent";

const SignUpScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <LogoComponent width={236} height={40} logo={logo} marginBottom={30} />
        <TextComponent title='Registro' fontSize={20} marginBottom={30} />
        <InputComponent headerTitle='Nombre' height={20} />
        <InputComponent headerTitle='Apellido' height={20} />
        <InputComponent headerTitle='Correo' height={20} />
        <InputComponent headerTitle='Conntraseña' height={20} />
        <View style={styles.domainInputContainer}>
          <InputComponent headerTitle='Dominio' height={20} width={"68%"} />
          <TextComponent title='@cashflow.do' textAlign='right' />
        </View>
        <View style={styles.termsContainer}>
          <CheckboxComponent />
          <View style={styles.termsTextContainer}>
            <Text>
              Acepto los{" "}
              <LinkComponent
                title={"Términos de Uso & Política de Privacidad"}
              />
            </Text>
          </View>
        </View>

        <ButtonComponent title='Crear Cuenta' padding={10} />
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  container: {
    height: "90%",
    width: "80%",
    alignItems: "center",
  },

  domainInputContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  termsContainer: {
    width: "100%",
    flexDirection: "row",
  },

  termsTextContainer: {
    marginLeft: 20,
    width: "60%",
    flexDirection: "row",
  },
});
