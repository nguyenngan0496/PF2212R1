let btnAction1 = document.getElementById("btn-action-1");

btnAction1.addEventListener("click", () => {
  let n = parseInt(document.getElementById("n").value);
  let total = 0;
  for (i = 1; i <= n; i++) {
    total += i;
  }
  alert(`Tổng các số từ 1 đến ${n} là ${total}`);
});
