export function convertDateToMalay(dateStr) {
    // Extract the year, month, and day from the date string
    const datePattern = /Date\((\d+),(\d+),(\d+)\)/;
    const match = dateStr.match(datePattern);
  
    if (!match) {
      throw new Error("Invalid date format");
    }
  
    const [_, year, month, day] = match.map(Number);
  
    // Create a new Date object
    const date = new Date(year, month, day);
  
    // Define Malay day and month names
    const days = ["Ahad", "Isnin", "Selasa", "Rabu", "Khamis", "Jumaat", "Sabtu"];
    const months = [
      "Januari", "Februari", "Mac", "April", "Mei", "Jun",
      "Julai", "Ogos", "September", "Oktober", "November", "Disember"
    ];
  
    // Format the date
    const dayName = days[date.getDay()];
    const dayNumber = date.getDate();
    const monthName = months[date.getMonth()];
    const yearNumber = date.getFullYear();
  
    return `${dayName}, ${dayNumber} ${monthName} ${yearNumber}`;
  }
  