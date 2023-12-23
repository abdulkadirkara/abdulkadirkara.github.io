//TODO *****************************************************************
//TODO *****************************************************************
//TODO *****************************************************************
// Verilen string'i bir koordinat objesine dönüştüren fonksiyon
export function stringToGoogleCoordinates(str) {
  // Verilen stringi virgülle böleriz
  const parts = str.split(":");

  // Düzgün sayı değerlerine dönüştürürüz ve parseFloat kullanırız
  const lat = parseFloat(parts[0]);
  const lng = parseFloat(parts[1]);

  // Yeni bir koordinat objesi oluştururuz ve döneriz
  return { lat, lng };
}

//TODO *****************************************************************
//TODO *****************************************************************
//TODO *****************************************************************
export function googleCoordinatesToString(coordinates) {
  const { lat, lng } = coordinates;
  return `${lat}:${lng}`;
}

