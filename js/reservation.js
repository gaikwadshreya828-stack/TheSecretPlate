// ============================================
// THE SECRET PLATE — Reservation Page
// ============================================

(function () {
  'use strict';
  if (!window.TSP) return;

  const { generateReservationId, showToast, RESTAURANT_INFO } = window.TSP;

  const TIME_SLOTS = ['6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM'];
  const SEATING_OPTIONS = [
    { id: 'indoor', label: 'Indoor', icon: '<path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>' },
    { id: 'outdoor', label: 'Outdoor', icon: '<path d="M12 2v6m0 0c-3 0-7 2-7 6 0 4 4 8 7 8s7-4 7-8c0-4-4-6-7-6z"/>' },
    { id: 'window', label: 'Window', icon: '<rect x="3" y="3" width="18" height="18" rx="2"/><line x1="12" y1="3" x2="12" y2="21"/><line x1="3" y1="12" x2="21" y2="12"/>' },
    { id: 'family', label: 'Family', icon: '<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>' },
  ];

  // Render time slots
  const timeSlotsContainer = document.querySelector('.time-slots');
  if (timeSlotsContainer) {
    let selectedTime = null;
    TIME_SLOTS.forEach((time, i) => {
      const slot = document.createElement('button');
      slot.type = 'button';
      slot.className = 'time-slot' + (i === 2 ? ' disabled' : '');
      slot.textContent = time;
      if (i !== 2) {
        slot.addEventListener('click', () => {
          timeSlotsContainer.querySelectorAll('.time-slot').forEach(s => s.classList.remove('selected'));
          slot.classList.add('selected');
          selectedTime = time;
        });
      }
      timeSlotsContainer.appendChild(slot);
    });
  }

  // Render seating options
  const seatingContainer = document.querySelector('.seating-options');
  if (seatingContainer) {
    SEATING_OPTIONS.forEach(opt => {
      const el = document.createElement('button');
      el.type = 'button';
      el.className = 'seating-option';
      el.dataset.seating = opt.id;
      el.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">${opt.icon}</svg>
        <span class="seating-option-label">${opt.label}</span>
      `;
      el.addEventListener('click', () => {
        seatingContainer.querySelectorAll('.seating-option').forEach(s => s.classList.remove('selected'));
        el.classList.add('selected');
      });
      seatingContainer.appendChild(el);
    });
  }

  // Guest counter
  const guestCounter = document.querySelector('.guest-counter');
  let guestCount = 2;
  if (guestCounter) {
    const valueEl = guestCounter.querySelector('.guest-counter-value');
    const decBtn = guestCounter.querySelector('[data-guest="decrease"]');
    const incBtn = guestCounter.querySelector('[data-guest="increase"]');

    function updateGuest() {
      valueEl.textContent = guestCount;
    }
    decBtn.addEventListener('click', () => { if (guestCount > 1) { guestCount--; updateGuest(); } });
    incBtn.addEventListener('click', () => { if (guestCount < 20) { guestCount++; updateGuest(); } });
  }

  // Date picker min date = today
  const dateInput = document.querySelector('#reservation-date');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
  }

  // Form submission
  const form = document.querySelector('#reservation-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const selectedTimeEl = document.querySelector('.time-slot.selected');
      const selectedSeatingEl = document.querySelector('.seating-option.selected');

      if (!selectedTimeEl) {
        showToast('Please select a time slot');
        return;
      }
      if (!selectedSeatingEl) {
        showToast('Please select a seating preference');
        return;
      }

      const reservationId = generateReservationId();
      const reservation = {
        reservationId,
        name: formData.get('name'),
        phone: formData.get('phone'),
        date: formData.get('date'),
        time: selectedTimeEl.textContent,
        guests: guestCount,
        seating: selectedSeatingEl.dataset.seating,
        requests: formData.get('requests') || 'None',
      };

      localStorage.setItem('tsp_last_reservation', JSON.stringify(reservation));
      showReservationConfirmation(reservation);
    });
  }

  function showReservationConfirmation(r) {
    const mainContent = document.querySelector('.reservation-page-content');
    if (!mainContent) return;

    const seatingLabel = SEATING_OPTIONS.find(s => s.id === r.seating)?.label || r.seating;
    const formatDate = new Date(r.date).toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

    // Generate calendar event (Google Calendar link)
    const dateObj = new Date(r.date);
    const [hours, mins] = r.time.match(/(\d+):(\d+)/).slice(1).map(Number);
    const isPM = r.time.includes('PM');
    dateObj.setHours(isPM && hours !== 12 ? hours + 12 : hours, parseInt(mins), 0, 0);
    const startStr = dateObj.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    dateObj.setHours(dateObj.getHours() + 2);
    const endStr = dateObj.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    const calText = encodeURIComponent(`The Secret Plate — Table Reservation for ${r.name}`);
    const calDetails = encodeURIComponent(`Reservation ID: ${r.reservationId}\nGuests: ${r.guests}\nSeating: ${seatingLabel}\nPhone: ${r.phone}`);
    const calUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${calText}&dates=${startStr}/${endStr}&details=${calDetails}&location=${encodeURIComponent(RESTAURANT_INFO.address)}`;

    mainContent.innerHTML = `
      <div class="confirmation">
        <div class="confirmation-icon">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 13l4 4L19 7"/></svg>
        </div>
        <h2>Table Reserved</h2>
        <p>"Your table is waiting."</p>
        <div class="confirmation-id">Reservation ID: ${r.reservationId}</div>
        <div style="text-align:left;max-width:420px;margin:0 auto 2rem;background:var(--charcoal);padding:1.8rem;border-radius:4px;border:1px solid rgba(201,165,92,0.1);">
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem 1.5rem;">
            <div><p style="font-size:0.65rem;letter-spacing:0.15em;text-transform:uppercase;color:var(--text-muted);margin-bottom:0.2rem;">Name</p><p style="font-family:var(--font-serif);font-size:1.05rem;color:var(--ivory);">${r.name}</p></div>
            <div><p style="font-size:0.65rem;letter-spacing:0.15em;text-transform:uppercase;color:var(--text-muted);margin-bottom:0.2rem;">Guests</p><p style="font-family:var(--font-serif);font-size:1.05rem;color:var(--ivory);">${r.guests}</p></div>
            <div><p style="font-size:0.65rem;letter-spacing:0.15em;text-transform:uppercase;color:var(--text-muted);margin-bottom:0.2rem;">Date</p><p style="font-family:var(--font-serif);font-size:1.05rem;color:var(--ivory);">${formatDate}</p></div>
            <div><p style="font-size:0.65rem;letter-spacing:0.15em;text-transform:uppercase;color:var(--text-muted);margin-bottom:0.2rem;">Time</p><p style="font-family:var(--font-serif);font-size:1.05rem;color:var(--gold);">${r.time}</p></div>
            <div><p style="font-size:0.65rem;letter-spacing:0.15em;text-transform:uppercase;color:var(--text-muted);margin-bottom:0.2rem;">Seating</p><p style="font-family:var(--font-serif);font-size:1.05rem;color:var(--ivory);">${seatingLabel}</p></div>
            <div><p style="font-size:0.65rem;letter-spacing:0.15em;text-transform:uppercase;color:var(--text-muted);margin-bottom:0.2rem;">Phone</p><p style="font-family:var(--font-serif);font-size:1.05rem;color:var(--ivory);">${r.phone}</p></div>
          </div>
        </div>
        <div class="confirmation-actions">
          <a href="${calUrl}" target="_blank" class="btn btn-outline">Add to Calendar</a>
          <a href="${RESTAURANT_INFO.mapsUrl}" target="_blank" class="btn btn-primary">Get Directions</a>
        </div>
        <div style="margin-top:2rem;">
          <a href="index.html" class="btn btn-ghost">Back to Home</a>
        </div>
      </div>
    `;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    showToast(`Reservation ${r.reservationId} confirmed!`);
  }
})();