// 获取按钮和文本元素
const greetBtn = document.getElementById('greetBtn');
const greetText = document.getElementById('greetText');

// 给按钮添加点击事件
greetBtn.addEventListener('click', function() {
  // 获取当前时间，根据时间显示不同问候语
  const hour = new Date().getHours();
  let greeting = '';

  if (hour < 12) {
    greeting = '早上好！很高兴认识你 🌞';
  } else if (hour < 18) {
    greeting = '下午好！一起加油学习吧 🌟';
  } else {
    greeting = '晚上好！注意休息哦 🌙';
  }

  // 显示问候语
  greetText.textContent = greeting;
});