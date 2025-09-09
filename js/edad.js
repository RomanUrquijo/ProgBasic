// script.js
// Calculadora de edad: parseo seguro de fecha (evita shifts por zona horaria)
// y cálculo años/meses/días con opción especial para 29/02.

function formatDateForInput(date){
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2,'0');
  const d = String(date.getDate()).padStart(2,'0');
  return `${y}-${m}-${d}`;
}

// parseDateFromInput: recibe "YYYY-MM-DD" o Date y devuelve Date normalizada (00:00 local)
function parseDateFromInput(value){
  if (!value) return null;
  if (value instanceof Date) {
    return new Date(value.getFullYear(), value.getMonth(), value.getDate());
  }
  if (typeof value === 'string') {
    const parts = value.split('-').map(Number);
    if (parts.length === 3 && parts.every(n => !isNaN(n))) {
      return new Date(parts[0], parts[1] - 1, parts[2]);
    }
    // fallback
    const d = new Date(value);
    if (isNaN(d)) return null;
    return new Date(d.getFullYear(), d.getMonth(), d.getDate());
  }
  return null;
}

function isLeapYear(year){
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Devuelve {years, months, days} o null si inválida/futura.
// option: { treatFeb29As28: boolean }
function calculateAgeDetailed(dateInput, option = { treatFeb29As28: true }){
  const birth = parseDateFromInput(dateInput);
  if (!birth) return null;

  const todayRaw = new Date();
  const today = new Date(todayRaw.getFullYear(), todayRaw.getMonth(), todayRaw.getDate());

  if (birth > today) return null; // fecha futura

  let years = today.getFullYear() - birth.getFullYear();

  // Si activamos la regla special para 29/02:
  let birthMonth = birth.getMonth();
  let birthDay = birth.getDate();
  if (option.treatFeb29As28 && birthMonth === 1 && birthDay === 29 && !isLeapYear(today.getFullYear())) {
    // considerar 29/02 como 28/02 en años no bisiestos
    birthDay = 28;
  }

  let months = today.getMonth() - birthMonth;
  let days = today.getDate() - birthDay;

  if (days < 0) {
    // días del mes anterior (del mes actual)
    const lastDayPrevMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    days += lastDayPrevMonth;
    months--;
  }

  if (months < 0) {
    months += 12;
    years--;
  }

  return { years, months, days };
}

// Simple: solo años completos
function calculateAgeYears(dateInput){
  const res = calculateAgeDetailed(dateInput, { treatFeb29As28: true });
  return res ? res.years : null;
}

/* === DOM wiring === */
document.addEventListener('DOMContentLoaded', () => {
  const birthInput = document.getElementById('birth');
  const btnCalc = document.getElementById('calc');
  const btnReset = document.getElementById('reset');
  const resultEl = document.getElementById('result');
  const debugEl = document.getElementById('debug');
  const feb29Checkbox = document.getElementById('feb29');

  const today = new Date();
  birthInput.max = formatDateForInput(today);

  btnCalc.addEventListener('click', () => {
    resultEl.textContent = 'Calculando...';
    const val = birthInput.value;
    if (!val) {
      resultEl.textContent = 'Por favor selecciona una fecha.';
      return;
    }
    const opt = { treatFeb29As28: feb29Checkbox.checked };
    const detailed = calculateAgeDetailed(val, opt);
    if (!detailed) {
      resultEl.textContent = 'Fecha inválida o en el futuro.';
      return;
    }
    const { years, months, days } = detailed;
    resultEl.textContent = `${years} años, ${months} meses y ${days} días.`;
    // debug (no visible por defecto)
    debugEl.textContent = `Input: ${val} — opción29Feb: ${opt.treatFeb29As28} — hoy: ${formatDateForInput(today)}`;
  });

  btnReset.addEventListener('click', () => {
    birthInput.value = '';
    resultEl.textContent = '';
    debugEl.textContent = '';
    feb29Checkbox.checked = true;
  });
});
