const $ = (id) => document.getElementById(id);
let umbrellaWithMe = true;
let rainy = false;

function updateReminder() {
  $('weatherResult').textContent = rainy
    ? (umbrellaWithMe ? '即将下雨，但伞已随身携带，无需重复提醒。' : '即将下雨，雨伞没有随身携带：出门前记得拿伞。')
    : '当前天气：晴朗。暂无带伞提醒。';
}

$('toggleUmbrella').addEventListener('click', () => {
  umbrellaWithMe = !umbrellaWithMe;
  $('statusBadge').textContent = umbrellaWithMe ? '随身携带' : '已分离';
  $('statusBadge').classList.toggle('lost', !umbrellaWithMe);
  $('statusText').textContent = umbrellaWithMe ? '雨伞与手机在一起。' : '模拟蓝牙分离：请确认是否落下了雨伞。';
  $('toggleUmbrella').textContent = umbrellaWithMe ? '模拟：把伞落下' : '模拟：找回雨伞';
  $('locationResult').textContent = umbrellaWithMe ? '雨伞已找回。上次分离位置：教学楼门口（模拟）。' : '最后出现位置：教学楼门口；记录时间：刚刚（模拟）。这不是实时定位。';
  updateReminder();
});
$('rainButton').addEventListener('click', () => { rainy = true; updateReminder(); });
$('clearButton').addEventListener('click', () => { rainy = false; updateReminder(); });
$('findUmbrella').addEventListener('click', () => { $('findResult').textContent = '演示：蜂鸣器响起、LED 闪烁 20 秒。当前页面没有控制真实硬件。'; });
document.querySelectorAll('[data-help]').forEach((button) => button.addEventListener('click', () => { $('helpResult').textContent = button.dataset.help; }));
$('lostButton').addEventListener('click', () => { $('lostPanel').hidden = false; });
$('moreButton').addEventListener('click', () => { $('morePanel').hidden = false; });
$('resetButton').addEventListener('click', () => location.reload());
