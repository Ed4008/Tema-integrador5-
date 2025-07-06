import React, { useEffect, useState } from 'react';
import { View, Dimensions, ScrollView } from 'react-native';
import { WebView } from 'react-native-webview';

export default function DashboardScreen() {
  return (
    <ScrollView>
      <WebView
        source={{ uri: 'https://docs.google.com/forms/YOUR_FORM_ID/viewform?embedded=true' }}
        style={{ height: 400 }}
      />
      <WebView
        source={{ uri: 'https://SEU_BACKEND_URL/graficos' }}
        style={{ height: 400 }}
      />
    </ScrollView>
  );
}
