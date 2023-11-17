const ans = document.querySelector('.answerForm');
// console.log(ans);

if (ans) {
  ans.addEventListener('submit', async (event) => {
    event.preventDefault();
    const { answer } = event.target;
    const res = await fetch('/questions/category', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: event.target.dataset.id,
        answer: answer.value,
      }),
    });
    const data = await res.json();
    document.querySelector('.otvet').innerHTML = data.message;
  });
}
