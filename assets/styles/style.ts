import { StyleSheet } from "react-native";

const dashboardStyles = StyleSheet.create({
  //  Commun

  containerSMP: {
    flex: 1,
    backgroundColor: "#000000",
    //alignItems: "center",
    //justifyContent: "center",
  },
  darkContainer: {
    backgroundColor: "#000000",
  },
  lightContainer: {
    backgroundColor: "#fff",
  },
  switch: {
    transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }],
    //height: 10,
  },
  switchContainer: {
    flexDirection: "row-reverse",
    alignItems: "center",
    gap: 10,
    marginRight: 10,
    //height: 10,
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  darkText: {
    color: "#B6BFD3",
  },
  lightText: {
    color: "#000",
  },
});
export default dashboardStyles;
/*
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  
});

*/
