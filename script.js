const API = "http://localhost:3000/students";

// CREATE
async function addStudent() {
  const name = document.getElementById("name").value;
  const age = Number(document.getElementById("age").value);
  const course = document.getElementById("course").value;

  if (!name || !age || !course) {
    alert("Please fill all fields");
    return;
  }

  await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, age, course }),
  });

  clearForm();
  loadStudents();
}

// READ
async function loadStudents() {
  const res = await fetch(API);
  const data = await res.json();

  const list = document.getElementById("list");
  list.innerHTML = "";

  data.forEach((s) => {
    list.innerHTML += `
      <div class="student-card">
        <div class="info">
          <h3>${s.name}</h3>
          <p>Age: ${s.age}</p>
          <p>Course: ${s.course}</p>
        </div>
        <div class="actions">
          <button class="update" onclick="updateStudent('${s._id}')">Update</button>
          <button class="delete" onclick="deleteStudent('${s._id}')">Delete</button>
        </div>
      </div>
    `;
  });
}

// UPDATE
async function updateStudent(id) {
  const newAge = prompt("Enter new age:");
  if (!newAge) return;

  await fetch(`${API}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ age: Number(newAge) }),
  });

  loadStudents();
}

// DELETE
async function deleteStudent(id) {
  if (!confirm("Are you sure?")) return;

  await fetch(`${API}/${id}`, {
    method: "DELETE",
  });

  loadStudents();
}

function clearForm() {
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("course").value = "";
}

loadStudents();