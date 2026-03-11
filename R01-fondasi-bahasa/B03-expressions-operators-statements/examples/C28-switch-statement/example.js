// C28 - switch Statement

const role = 'editor';

switch (role) {
  case 'admin':
    console.log('akses penuh');
    break;
  case 'editor':
    console.log('akses edit');
    break;
  case 'viewer':
    console.log('akses baca');
    break;
  default:
    console.log('role tidak dikenal');
}
