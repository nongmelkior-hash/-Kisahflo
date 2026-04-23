import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SubscriptionHubScreen from './screens/SubscriptionHubScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>✨ Kisahflo SuperApp ✨</Text>
      {/* Contoh: tampilkan salah satu hub */}
      <SubscriptionHubScreen />
      {/* Ganti dengan hub lain sesuai kebutuhan */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, backgroundColor:'#FFF', padding:16 },
  header: { fontSize:22, fontWeight:'bold', color:'#4A90E2', marginBottom:12 },
});
