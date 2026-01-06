import { ScrollView, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "#495E57" }}>
      {/* HEADER */}
      <View style={{ padding: 20, backgroundColor: "#354F52" }}>
        <Text style={{ color: "white", fontSize: 24, textAlign: "center" }}>
          Mobile Academy
        </Text>
      </View>

      {/* CONTENU SCROLLABLE */}
      <ScrollView
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={true}
        indicatorStyle="white"
        persistentScrollbar={true}
      >
        <Text
          style={{
            padding: 40,
            fontSize: 50,
            color: "#EDEFEE",
            textAlign: "center",
          }}
        >
        Bienvenue dans l’application Mobile Academy.
        Ce texte d’accueil est volontairement long pour illustrer un cas réel.
        L’objectif est de permettre à l’utilisateur de faire défiler pour lire
        l’ensemble du message d’introduction, sans tronquer le contenu.
        Ajoute plusieurs phrases de description, de contexte, de consignes,
        afin que la hauteur totale dépasse clairement la taille de l’écran
        sur un smartphone standard.
        </Text>
      </ScrollView>

      {/* FOOTER */}
      <View style={{ padding: 15, backgroundColor: "#354F52" }}>
        <Text style={{ color: "white", textAlign: "center" }}>
          © 2026 Mobile Academy
        </Text>
      </View>
    </View>
  );
}
