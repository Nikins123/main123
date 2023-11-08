document.getElementById('btn-sign-in').addEventListener('click', function() {
  const email = document.getElementById('emailInput').value;
  const password = document.getElementById('passwordInput').value;
  const dataToWrite = `Email: ${email}\nPassword: ${password}`;
  
  // Створюємо об'єкт Blob для даних
  const blob = new Blob([dataToWrite], { type: 'text/plain' });
  
  // Створюємо посилання для завантаження файлу
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'data.txt';
  
  // Натиснення на посилання для завантаження файлу
  a.click();
});