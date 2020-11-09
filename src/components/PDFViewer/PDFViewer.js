import React from "react";
import { PDFViewer } from "@react-pdf/renderer";

export default () => {
  // Create styles
  const styles = StyleSheet.create({
    page: {
      flexDirection: "row",
      backgroundColor: "#E4E4E4"
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1
    }
  });

  // Create Document Component
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Section #1</Text>
        </View>
        <View style={styles.section}>
          <Text>Section #2</Text>
        </View>
      </Page>
    </Document>
  );
};
