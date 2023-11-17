const ans = document.querySelector('.answer');
// console.log(ans);

if (ans) {
  ans.addEventListener('submit', async (event) => {
    event.preventDefault();
    const { answer } = event.target;
    const res = await fetch('/:index/category/:idCategory', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        answer: answer.value,
      }),
    });
    const data = await res.json();
    console.log(data);
  });
}
