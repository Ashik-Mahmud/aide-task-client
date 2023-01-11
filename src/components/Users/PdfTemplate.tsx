import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#E4E4E4",
    width: "100%",
    paddingTop: 20,
    fontSize: 12,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 3,
  },
  section: {
    marginVertical: 10,
    padding: 10,
    width: "100%",
  },
  row: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #ccc",
    padding: 5,
  },
  thead: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #ccc",
    fontWeight: "bold",
    backgroundColor: "#ccc",
    padding: 8,
    textTransform: "uppercase",
  },
});
type Props = {
  data: any;
};

const PdfTemplate = ({ data }: Props) => {
  return (
    <>
      <Document>
        <Page size="A4" style={styles.page}>
          <Text style={styles.title}>All Users</Text>
          <View style={styles.section}>
            <View style={styles.thead}>
              <View>
                <Text>USER</Text>
              </View>
              <View>
                <Text>EMAIL</Text>
              </View>
              <View>
                <Text>Role</Text>
              </View>
              <View>
                <Text>Plan</Text>
              </View>

              <View>
                <Text>Status</Text>
              </View>
            </View>
            {data?.map((item: any) => (
              <View key={item?._id + item?.username} style={styles.row}>
                <View>
                  <Text>{item?.name}</Text>
                  <Text style={{ color: "#666" }}>@{item?.username}</Text>
                </View>
                <View>
                  <Text>{item?.email}</Text>
                </View>
                <View>
                  <Text>{item?.role}</Text>
                </View>
                <View>
                  <Text>{item?.plan}</Text>
                </View>
                <View>
                  <Text>{item?.status}</Text>
                </View>
              </View>
            ))}
          </View>
        </Page>
      </Document>
    </>
  );
};

export default PdfTemplate;
