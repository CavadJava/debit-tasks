

export default async function fetchTodos() {
  const response = await fetch('https://dummyjson.com/todos');
  const data = await response.json();
  return data;
}