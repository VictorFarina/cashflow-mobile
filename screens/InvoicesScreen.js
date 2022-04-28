import { StyleSheet, Text, View, FlatList ,SafeAreaView} from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import ListCard from "../components/ui/ListCard";

const InvoicesScreen = (props) => {
  const invoices = useSelector((state) => state.userReducer.userData);

  console.log(invoices);

  return (
    <SafeAreaView style={styles.screen}>
    <View style={styles.container}>
          <FlatList 
        style={styles.list}
        data={invoices}
        renderItem={({ item }) => 
        <ListCard 
        client={item.client} 
        currency_code={item.currency_code} 
        date_delivery={item.date_delivery}
        date_issue={item.date_issue}
        doc_number={item.doc_number}
        format_amount={item.format_amount}
        invoiceId={item.invoiceId}
        status={item.status}
        />
      }

        keyExtractor={(item) => item.invoiceId}
      />
    </View>
   
 
    </SafeAreaView>
  );
};

export default InvoicesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    alignItems: "center",
    justifyContent: "center",
  },

  container: {
    height: "80%",
    width: "80%",
    alignItems: "center",
  
  },
  list:{
    width:'100%',
 
  }







});
