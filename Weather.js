import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
  Haze: {
    iconName: "weather-fog",
    gradient: ["#606c88", "#3f4c6b"],
    title: "Haze",
    subtitle: "turn on the light",
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#141E30", "#243B55"],
    title: "Rainy",
    subtitle: "Take umbrella!",
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#616161", "#9bc5c3"],
    title: "Cloudy",
    subtitle: "I used some magic to make a cloud laugh. It was mist tickle.",
  },
  Thunderstorm: {
    iconName: "weather-lightning-rainy",
    gradient: ["#360033", "#0b8793"],
    title: "Thunderstorm",
    subtitle: "Are you sure you want to go outside?",
  },
  Dust: {
    iconName: "weather-sunset",
    gradient: ["#ffe259", "#ffa751"],
    title: "Dust",
    subtitle: "Wear a mask!",
  },
  Drizzle: {
    iconName: "weather-rainy",
    gradient: ["#bdc3c7", "#2c3e50"],
    title: "Drizzle",
    subtitle: "Time to put on your rain boots? ",
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#E55D87", "#5FC3E4"],
    title: "Snow",
    subtitle: "Time to make a snowman!",
  },
  Atmosphere: {
    iconName: "weather-sunset",
    gradient: ["#ff6e7f", "#bfe9ff"],
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#83a4d4", "#b6fbff"],
    title: "Clear",
    subtitle: "Time to play soccer?",
  },
  Mist: {
    iconName: "weather-rainy",
    gradient: ["#DAE2F8", "#D6A4A4"],
    title: "Mist",
    subtitle: "You are gonna be fine without umbrella",
  },
  Tornado: {
    iconName: "weather-hurricane",
    gradient: ["#232526", "#414345"],
    title: "Tornado",
    subtitle: "Don't go outside!",
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          size={86}
          name={weatherOptions[condition].iconName}
          color="white"
        />
        <Text style={styles.temp}>{temp}º</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Dust",
    "Tornado",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 30,
    color: "white",
  },

  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 40,
    fontWeight: "300",
    marginBottom: 10,
  },
  subtitle: {
    fontWeight: "600",
    color: "white",
    fontSize: 24,
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start",
  },
});
