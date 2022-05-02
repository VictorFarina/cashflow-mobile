import { StyleSheet, Text, View , ActivityIndicator} from "react-native";
import TextComponent from "../ui/TextComponent";
import LogoComponent from "../ui/LogoComponent";

const InvoiceComponent = (props) => {
  

  return (
    <View style={styles.invoiceCard}>

      <View style={styles.invoiceHeader}>
        <TextComponent title={props.address} />
        <TextComponent title={props.city} />
      </View>

      <View style={styles.invoiceContent}>
        <TextComponent title='Invoice:' />
        <TextComponent title={props.invoiceId} />
      </View>
      <View style={styles.invoiceContent}>
        <TextComponent title={"Bill To:"} />
        <TextComponent title={props.companyName} />
      </View>

      <View style={styles.invoiceContent}>
        <TextComponent title='Amount:' />
        <TextComponent title={props.total} />
      </View>

      <View style={styles.invoiceContent}>
        <TextComponent title='NCF EXPIRE DATE:' />
        <TextComponent title={props.ncfExpirationDate} />
      </View>

      <TextComponent textALign='left' title='Items' fontWeight='bold' />

      <View style={styles.invoiceContent}>
       
      
      </View>

    </View>
  );
};

export default InvoiceComponent;

const styles = StyleSheet.create({
  invoiceCard: {
    padding: 30,
    marginTop: 30,
    width: "100%",
    backgroundColor: "#fff",
    height: "100%",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },

  invoiceContent: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },

  invoiceHeader: {},
});
