import { StyleSheet, Text, View } from "react-native";
import TextComponent from "../components/ui/TextComponent";
import LinkComponent from "../components/ui/LinkComponent";
import InputComponent from "../components/ui/InputComponent";
import logo from "../assets/images/cashflow-logo-text.png";
import LogoComponent from "../components/ui/LogoComponent";

const SignUpScreen = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <LogoComponent logo={logo} />
        <TextComponent title='Registro' fontSize={20} />
        <View>
          <TextComponent title='Nombre' textAlign='left' fontSize={15} />
          <InputComponent />
        </View>
        <View>
          <TextComponent title='Apellido' textAlign='left' fontSize={15} />
          <InputComponent />
        </View>
        <View>
          <TextComponent title='Correo' textAlign='left' fontSize={15} />
          <InputComponent />
        </View>

        <View>
          <TextComponent title='Contraseña' textAlign='left' fontSize={15} />
          <InputComponent />
        </View>

        <View>
          <TextComponent title='Confirmar contraseña' textAlign='left' fontSize={15} />
          <InputComponent />
        </View>

        <View>
          <TextComponent title='Dominio' textAlign='left' fontSize={15} />

          <View style={styles.domainInputContainer}>
            <InputComponent width={"70%"} />
            <TextComponent title='@cashflow.do' marginHorizontal={20} />
          </View>
        </View>
      </View>
    </View>
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
    height: "80%",
    width: "75%",
    alignItems: "center",
  },

  domainInputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
