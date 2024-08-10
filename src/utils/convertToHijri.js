// src/utils/dateConversion.js

export function convertToHijri(dateString) {
  // Extract year, month, and day from the dateString
  const dateParts = dateString.match(/\d+/g);
  const [year, month, day] = dateParts.map(Number);

  // Create a Date object using the extracted values
  const gregorianDate = new Date(year, month, day);

  // Simple approximation formula for Hijri date conversion
  const julianDay = Math.floor(gregorianDate.getTime() / 86400000) + 2440588;
  const hijriDay = julianDay - 1948439;
  const hijriYear = Math.floor(hijriDay / 354.367);
  const hijriMonth = Math.floor((hijriDay - (hijriYear * 354.367)) / 29.5);
  const hijriDate = Math.floor(hijriDay - (hijriYear * 354.367) - (hijriMonth * 29.5));

  const hijriMonths = [
    "Muharram", "Safar", "Rabiulawal", "Rabiulakhir", "Jamadilawal",
    "Jamadilakhir", "Rejab", "Syaaban", "Ramadhan", "Syawal",
    "Zulkaedah", "Zulhijjah"
  ];

  return `${hijriDate + 1} ${hijriMonths[hijriMonth]} ${hijriYear + 1}`;
}
