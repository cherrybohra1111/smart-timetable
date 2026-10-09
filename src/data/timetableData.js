export const BATCHES = [
  { id: 'btech-5-cyber', name: 'B.Tech Cyber Security (CCS)', shortName: 'V-CCS', semester: 'Sem 5' },
  { id: 'btech-5-cse', name: 'B.Tech CSE', shortName: 'V-CSE', semester: 'Sem 5' },
  { id: 'btech-3-cse', name: 'B.Tech CSE', shortName: 'III-CSE', semester: 'Sem 3' },
  { id: 'btech-3-ccs', name: 'B.Tech Cyber Security', shortName: 'III-CCS', semester: 'Sem 3' },
  { id: 'btech-3-mnc', name: 'B.Tech Math & Computing', shortName: 'III-MNC', semester: 'Sem 3' },
  { id: 'btech-1-cse', name: 'B.Tech CSE', shortName: 'I-CSE', semester: 'Sem 1' },
  { id: 'btech-7-cse', name: 'B.Tech CSE', shortName: 'VII-CSE', semester: 'Sem 7' },
  { id: 'btech-7-ccs', name: 'B.Tech Cyber Security', shortName: 'VII-CCS', semester: 'Sem 7' },
  { id: 'mtech-1-cse', name: 'M.Tech CSE', shortName: 'I-M.Tech', semester: 'Sem 1' },
  { id: 'mtech-3-cse', name: 'M.Tech CSE', shortName: 'III-M.Tech', semester: 'Sem 3' }
];

export const DAYS_OF_WEEK = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

// Time slots based on your official class schedule layout
export const TIME_SLOTS = [
  '09:30 - 10:15',
  '10:15 - 11:00',
  '11:00 - 11:45',
  '11:45 - 12:30',
  '14:00 - 14:45',
  '14:45 - 15:30',
  '15:30 - 16:15',
  '16:15 - 17:00',
  '17:00 - 17:45'
];

export const INITIAL_TIMETABLE_DATA = {
    'btech-5-cse': {
        'Monday': {
            '09:30 - 10:15': { subject: 'IoT', code: 'BECSE3C017', type: 'Lecture', faculty: 'BA', room: 'Class 5', building: 'Fabricated Building' },
            '10:15 - 11:00': { subject: 'Cloud Computing', code: 'BECSE3C018', type: 'Lecture', faculty: 'PKS', room: 'Class 5', building: 'Fabricated Building' },
            '11:00 - 11:45': { subject: 'Introduction to Information Network Security', code: 'BECSE3C015', type: 'Lecture', faculty: 'PSM', room: 'Class 5', building: 'Fabricated Building' },
            '11:45 - 12:30': { subject: 'Computer Vision', code: 'BECSE00001', type: 'Lecture', faculty: 'Dr. Arvind Selwal', room: 'Class 5', building: 'Fabricated Building' },
            '14:00 - 14:45': { subject: 'Computer Vision', code: 'BECSE00001', type: 'Lecture', faculty: 'Dr. Arvind Selwal', room: 'Class 5', building: 'Fabricated Building' }
        },
        'Tuesday': {
            '09:30 - 10:15': { subject: 'IoT', code: 'BECSE3C017', type: 'Lecture', faculty: 'BA', room: 'Class 5', building: 'Fabricated Building' },
            '10:15 - 11:00': { subject: 'Cloud Computing', code: 'BECSE3C018', type: 'Lecture', faculty: 'PKS', room: 'Class 5', building: 'Fabricated Building' },
            '11:00 - 11:45': { subject: 'Computer Vision', code: 'BECSE00001', type: 'Lecture', faculty: 'Dr. Arvind Selwal', room: 'Class 5', building: 'Fabricated Building' },
            '14:00 - 14:45': { subject: 'TOC', code: 'BECSE3C016', type: 'Lecture', faculty: 'UPS', room: 'Class 5', building: 'Fabricated Building' }
        },
        'Wednesday': {
            '09:30 - 10:15': { subject: 'IoT', code: 'BECSE3C017', type: 'Lecture', faculty: 'BA', room: 'Class 5', building: 'Fabricated Building' },
            '10:15 - 11:00': { subject: 'Introduction to Information Network Security', code: 'BECSE3C015', type: 'Lecture', faculty: 'PSM', room: 'Class 5', building: 'Fabricated Building' },
            '11:00 - 11:45': { subject: 'Cloud Computing', code: 'BECSE3C018', type: 'Lecture', faculty: 'PKS', room: 'Class 5', building: 'Fabricated Building' },
            '14:00 - 14:45': { subject: 'TOC', code: 'BECSE3C016', type: 'Lecture', faculty: 'UPS', room: 'Class 5', building: 'Fabricated Building' }
        },
        'Thursday': {
            '09:30 - 10:15': { subject: 'Computer Vision', code: 'BECSE00001', type: 'Lecture', faculty: 'Dr. Arvind Selwal', room: 'Class 5', building: 'Fabricated Building' },
            '10:15 - 11:00': { subject: 'TOC', code: 'BECSE3C016', type: 'Lecture', faculty: 'UPS', room: 'Class 5', building: 'Fabricated Building' },
            '11:00 - 11:45': { subject: 'TOC', code: 'BECSE3C016', type: 'Lecture', faculty: 'UPS', room: 'Class 5', building: 'Fabricated Building' },
            '14:00 - 14:45': { subject: 'IoT Lab', code: 'BECSE3C017', type: 'Lab', faculty: 'BA', room: 'Lab 2', building: 'Fabricated Building' },
            '14:45 - 15:30': { subject: 'IoT Lab', code: 'BECSE3C017', type: 'Lab', faculty: 'BA', room: 'Lab 2', building: 'Fabricated Building' }
        },
        'Friday': {
            '09:30 - 10:15': { subject: 'Computer Vision', code: 'BECSE00001', type: 'Lecture', faculty: 'Dr. Arvind Selwal', room: 'Class 5', building: 'Fabricated Building' },
            '10:15 - 11:00': { subject: 'TOC', code: 'BECSE3C016', type: 'Lecture', faculty: 'UPS', room: 'Class 5', building: 'Fabricated Building' },
            '14:00 - 14:45': { subject: 'TOC', code: 'BECSE3C016', type: 'Lecture', faculty: 'UPS', room: 'Class 5', building: 'Fabricated Building' }
        }
    }
};