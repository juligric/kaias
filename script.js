 // Función para obtener el siguiente viernes a las 5pm
 function getNextFriday5PM() {
    const now = new Date();
    const day = now.getDay(); // 0=Domingo, 5=Viernes
    const daysUntilFriday = (5 - day + 7) % 7;
    let nextFriday = new Date(now);
    nextFriday.setDate(now.getDate() + daysUntilFriday);
    nextFriday.setHours(17, 0, 0, 0); // 5 PM

    // Si hoy es viernes y ya pasó la 5 pm, avanzar al siguiente viernes
    if (day === 5 && now >= nextFriday) {
      nextFriday.setDate(nextFriday.getDate() + 7);
    }
    return nextFriday;
  }

  function updateCountdown() {
    const now = new Date();
    const target = getNextFriday5PM();
    let diff = target - now;

    if (diff <= 0) {
      document.getElementById('countdown').textContent = "¡Es viernes 5 PM!";
      return;
    }

    // Calcular horas, minutos, segundos
    const hours = Math.floor(diff / (1000 * 60 * 60));
    diff -= hours * 1000 * 60 * 60;
    const minutes = Math.floor(diff / (1000 * 60));
    diff -= minutes * 1000 * 60;
    const seconds = Math.floor(diff / 1000);

    document.getElementById('countdown').textContent =
      `${hours.toString().padStart(2,'0')} : ${minutes.toString().padStart(2,'0')} : ${seconds.toString().padStart(2,'0')}`;

    setTimeout(updateCountdown, 1000);
  }

  updateCountdown();
