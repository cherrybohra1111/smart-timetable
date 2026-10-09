export const timeToMins = (tStr) => {
    const clean = tStr.trim();

    let [h, m] = clean.split(':').map(Number);
    return h*60 + (m||0);
}

export const parseSlotRange = (slotStr) => {
    const [startStr, endStr] = slotStr.split(' - ');
    return {
        startMins: timeToMins(startStr),
        endMins: timeToMins(endStr)
    };
}

export const minsToTimeString = (totalMins) => {
  const hours = Math.floor(totalMins / 60);
  const mins = totalMins % 60;
  const period = hours >= 12 ? 'PM' : 'AM';
  const displayHours = hours > 12 ? hours - 12 : (hours === 0 ? 12 : hours);
  const padMins = mins < 10 ? '0' + mins : mins;
  const padHours = displayHours < 10 ? '0' + displayHours : displayHours;
  return `${padHours}:${padMins} ${period}`;
};