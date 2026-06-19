import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 11,
    backgroundColor: "#ffffff",
    position: "relative",
  },

  title: {
    fontSize: 22,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 15,
  },

  section: {
    marginBottom: 12,
    padding: 10,
    border: "1px solid #e5e7eb",
    borderRadius: 6,
  },

  labelRow: {
    flexDirection: "row",
    marginBottom: 4,
  },

  label: {
    width: 90,
    fontWeight: "bold",
    color: "#374151",
  },

  value: {
    flex: 1,
    color: "#111827",
  },

  dayBox: {
    marginTop: 12,
    border: "1px solid #d1d5db",
    borderRadius: 6,
    overflow: "hidden",
  },

  dayHeader: {
    backgroundColor: "#f3f4f6",
    padding: 6,
    fontSize: 12,
    fontWeight: "bold",
  },

  activityRow: {
    padding: 6,
    borderTop: "1px solid #e5e7eb",
  },

  time: {
    fontSize: 10,
    color: "#f97316",
    marginBottom: 2,
  },

  activityTitle: {
    fontSize: 11,
    fontWeight: "bold",
  },

  description: {
    fontSize: 10,
    color: "#6b7280",
    marginTop: 2,
  },

  footer: {
    position: "absolute",
    bottom: 15,
    left: 30,
    right: 30,
    borderTop: "2px solid #f97316",
    paddingTop: 6,
    textAlign: "center",
    fontSize: 10,
    color: "#f97316",
    fontWeight: "bold",
  },
});

const ItineraryPDF = ({ trip }) => {
  return (
    <Document>
      <Page style={styles.page}>
        {/* TITLE */}
        <Text style={styles.title}>Trip Itinerary</Text>

        {/* BASIC INFO */}
        <View style={styles.section}>
          <View style={styles.labelRow}>
            <Text style={styles.label}>Destination:</Text>
            <Text style={styles.value}>{trip.itinerary?.arrivalCity}</Text>
          </View>

          <View style={styles.labelRow}>
            <Text style={styles.label}>Airline:</Text>
            <Text style={styles.value}>{trip.itinerary?.airline}</Text>
          </View>

          <View style={styles.labelRow}>
            <Text style={styles.label}>Dates:</Text>
            <Text style={styles.value}>
              {trip.itinerary?.travelDates?.join(" - ")}
            </Text>
          </View>
        </View>

        {/* DAILY ITINERARY */}
        {trip.itinerary?.dailyItinerary?.map((day, i) => (
          <View key={i} style={styles.dayBox}>
            {/* DAY HEADER */}
            <Text style={styles.dayHeader}>
              Day {day.day} - {day.title}
            </Text>

            {/* ACTIVITIES */}
            {day.activities?.map((a, j) => (
              <View key={j} style={styles.activityRow}>
                <Text style={styles.time}>{a.time}</Text>

                <Text style={styles.activityTitle}>{a.title}</Text>

                <Text style={styles.description}>{a.description}</Text>
              </View>
            ))}
          </View>
        ))}

        {/* FOOTER */}
        <Text style={styles.footer}>
          TripAI • AI Generated Travel Itinerary
        </Text>
      </Page>
    </Document>
  );
};

export default ItineraryPDF;
