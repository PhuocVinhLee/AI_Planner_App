import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useContext, useEffect } from "react";
import { Colors } from "@/constants/Colors";
import { useNavigation, useRouter } from "expo-router";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Marker } from "react-native-maps";

import MapView, { UrlTile } from "react-native-maps";
import { useState } from "react";
import { CreateTripContext } from "../../context/CreateTripContext";

const SearchPlace = () => {
  const navigation = useNavigation();
  const router = useRouter();
  const { tripData, setTripData } = useContext(CreateTripContext);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "Search",
    });
  }, []);

  const [location, setLocation] = useState({
    latitude: 14.0583, // Tọa độ trung tâm Việt Nam
    longitude: 108.2772,
    latitudeDelta: 5.0, // Mức zoom rộng để hiển thị cả Việt Nam
    longitudeDelta: 5.0,
  });
  const [query, setQuery] = useState("");

  const [showLocation, setShowLocation] = useState(false);

  const searchLocation = async () => {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?q=${query}&format=json&limit=1`
    );
    const data = await response.json();
    console.log("data", data);

    if (data.length > 0) {
      const { lat, lon, display_name } = data[0];
      const locationDetails = {
        name: display_name,
        coordinates: {
          lat: parseFloat(lat),
          lng: parseFloat(lon),
        },
        photo: "", // Bạn có thể thêm hình ảnh nếu có.
        url: "", // Thêm URL hoặc liên kết nếu cần.
      };
      setLocation({
        latitude: parseFloat(lat),
        longitude: parseFloat(lon),
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      });

      setTripData({locationInfor: {
        name: display_name,
        coordinatest: {
          lat: parseFloat(lat),
          lng: parseFloat(lon),
        },
        photo: "",
        url: "",
      }});
      setShowLocation(true);
    }
  };
  const handleInputChange = (text) => {
    setQuery(text);
    setShowLocation(false);
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={location} region={location}>
        <Marker coordinate={location} />
      </MapView>

      {/* Thanh tìm kiếm cố định */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Tìm kiếm địa điểm"
          value={query}
          onChangeText={handleInputChange}
        />
        <Button title="Tìm kiếm" onPress={searchLocation} />
      </View>

      {tripData?.locationInfor?.name && showLocation && (
        
          <TouchableOpacity  onPress={() => {
            console.log("Pressed");
            router.push("/create-trip/select-traveler");
          }} style={styles.infoContainer}>
            <Text style={styles.infoText}>
              Location name:{" "}
              <Text
                style={{
                  fontFamily: "outfit",
                }}
              >
                {tripData?.locationInfor?.name}
              </Text>
            </Text>
            {/* <Text style={styles.infoText}>
            Tọa độ: {tripData?.coordinates?.lat}, {tripData?.coordinates?.lng}
          </Text> */}
          </TouchableOpacity>
       
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject, // Map sẽ chiếm toàn bộ màn hình
  },
  searchContainer: {
    position: "absolute",
    top: 70, // Đặt vị trí trên đầu màn hình
    left: 10,
    right: 10,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5, // Tạo hiệu ứng đổ bóng trên Android
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  infoContainer: {
    position: "absolute",
    top: 140, // Đặt vị trí trên đầu màn hình
    left: 10,
    right: 10,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    zIndex: 100,
  },
  infoText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
});
export default SearchPlace;
