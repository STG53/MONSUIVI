import { StyleSheet } from "react-native";

const dashboardStyles = StyleSheet.create({
  //  Commun

  couvImg: {
    width: 350,
    height: 350,
    //flex: 1,
    alignItems: "center",
    //justifyContent: "center",
  },
  //  SMP-gravage

  SMP_gdlogo: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
  containerSMP: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "space-between",
  },
  titre1SMP: {
    color: "#B6BFD3", // gris SMP
    fontWeight: "600",
    fontSize: 52,
    marginTop: 0,
  },
  text1SMP: {
    color: "#B6BFD3", // gris SMP
    fontWeight: "600",
    fontSize: 12,
    marginTop: 0,
  },

  //  SGGGCO

  containerSGAGCO: {
    flex: 1,
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
  },
  titre1SGAGCO: {
    color: "#006AA7",
    fontWeight: "600",
    fontSize: 52,
    marginTop: 0,
  },
});

export default dashboardStyles;
