// C18 - Block Statement

{
  const message = 'inside block';
  console.log(message);
}

const status = true;
if (status) {
  const blockScoped = 'aktif';
  console.log('status:', blockScoped);
}

for (let i = 0; i < 2; i++) {
  const scopedLoop = i * 10;
  console.log('scopedLoop:', scopedLoop);
}
