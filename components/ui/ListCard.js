import { StyleSheet, Text, View } from "react-native";
import TextComponent from "../ui/TextComponent";
import StatusComponent from "../ui/StatusComponent";
import React from "react";

const ListCard = (props) => {
  return (
    <View style={styles.listCard}>
      <View style={styles.cardHeader}>
        <TextComponent title={props.doc_number} />
        <TextComponent title={props.date_issue} />
      </View>

      <View style={styles.cardBody}>
        <View style={styles.bodyImage}></View>

        <View style={styles.bodyText}>
          <TextComponent textAlign={"left"} title={props.client} />
          <TextComponent textAlign={"left"} title={props.date_issue} />
          <TextComponent
            textAlign={"left"}
            title='Monto'
            fontWeight={"bold"}
            marginTop={20}
          />
          <TextComponent textAlign={"left"} title={props.format_amount} />
        </View>
      </View>
      <View style={styles.cardFooter}>
      <StatusComponent status={props.status}/>
      </View>
      
    </View>
  );
};

export default ListCard;

const styles = StyleSheet.create({
  listCard: {
    width: "100%",
    height: 200,
    padding: 30,
    borderRadius: 15,
    backgroundColor: "#fff",
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  cardHeader: {
    width: "100%",
    marginTop:30,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  cardBody: {
    marginTop: 20,
    flexDirection: "row",
    height: "100%",
    width: "100%",
    justifyContent: "flex-start",
  },

  bodyImage: {
    width: "40%",
    height: "70%",
    backgroundColor: "#898989",
    borderRadius: 15,
  },
  bodyText: {
    height: "100%",
    width: "100%",

    marginLeft: 20,
    textAlign: "left",
  },

  cardFooter: {
    width:'100%', 
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom:30,
  },



});
