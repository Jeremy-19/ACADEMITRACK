export function StudentForm() {
    return `
    <style>
      #add-student-form {
        max-width: 150px;
        font-family: Arial, sans-serif;
        }
        
        #add-student-form label {
            display: block;
            margin-bottom: 10px;
        }
            
        #add-student-form input {
        max-width: 150px;
        width: 100%;
        padding: 0.5rem 0.8rem;
        margin-top: 4px;
        border: 1px solid rgba(128, 128, 128, 0.2);
        border-radius: 5px;
        outline: none;
        transition: border 0.2s;
      }

      #add-student-form button {
        width: 100%;
        padding: 8px;
        border: none;
        border-radius: 4px;
        background-color: grey;
        color: white;
        cursor: pointer;
      }
    </style>

    <form id="add-student-form">
      <label>
        Name:
        <input type="text" id="studentName" required>
      </label>

      <label>
        Grade:
        <input type="number" id="studentGrade" min="0" max="100" required>
      </label>

      <label>
        Attendance:
        <input type="text" id="studentAttendance" placeholder="95%" required>
      </label>

      <button type="submit">Add Student</button>
    </form>
  `;
}
