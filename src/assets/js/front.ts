// 정렬없이 오브젝트 순서대로 출력
// sortFn = (a, b) => 0;
export function sortFn() {
  return (a, b) => 0;
}

// 배열 나누기
// this.list = this.division(this.pkg, 8);
export function division(arr, size) {
  const temparray = [];
  const chunk = size;
  for (let i = 0, j = arr.length; i < j; i += chunk) {
    temparray.push(arr.slice(i, i + chunk));
  }
  return temparray;
}
