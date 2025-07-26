function toggleDropdown(){
  const d = document.getElementById('dropdown-links');
  d.style.display = d.style.display === 'block' ? 'none' : 'block';
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('comment-form');
  const list = document.getElementById('comment-list');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const input = document.getElementById('comment-input');
    const div = document.createElement('div');
    div.innerHTML = input.value + ' <button onclick="this.parentElement.remove()">Delete</button>';
    list.appendChild(div);
    input.value = '';
  });
});
