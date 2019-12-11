<template>
  <div id="app" class="container my-3">
      <div class="row">
          <h2 class="employee_header mx-2 text-secondary">Employees Directory</h2>
        <div class=" col-sm-2 col-md-12">
           <employee-form @add:employee="addEmployee"/>
            <employee-table :employees="employees" 
            @delete:employee="deleteEmployee"
            @edit:employee="editEmployee"
             />
        </div>
    </div>
    <p class="text-center text-success font-italic">Developer: O.Judith </p>
  </div>
</template>
<script>
import EmployeeTable from './components/EmployeeTable'
import EmployeeForm from './components/EmployeeForm'

export default {
  name: 'app',
  components: {
    EmployeeTable,
    EmployeeForm,
  },

  data() {
    return {
      employees : [
        {
          id : 1,
          name : 'Richard hendricks',
          email: 'richard@piedpiper.com'
        },

        {
          id : 2,
          name : 'John Doe',
          email: 'jdoe@gmail.com'
        },

        {
          id : 3,
          name : 'James Bond',
          email: 'jamesbond@gmail.com'
        },
        
      ],
    }
  },

  methods : {
    addEmployee(employee) {
      // generate ID
      const lastId = this.employees.length > 0 ? this.employees[this.employees.length - 1].id : 0;
      const id = lastId + 1;
      const newEmployee = {
        ...employee, id
      };
      this.employees = [
        ...this.employees, newEmployee
      ];
    },

    deleteEmployee(id) {
      this.employees = this.employees.filter(employee => employee.id !== id)
    },

    editEmployee(id, updatedEmployee)
    {
      this.employees = this.employees.map(employee => employee.id === id ? updatedEmployee : employee)
    },
     editMode(employee) {
                this.cachedEmployee = Object.assign({}, employee)
                this.editing = employee.id
            },

       cancelEdit(employee) {
                Object.assign(employee, this.cachedEmployee)
                this.editing = null;
            }
  }
}
</script>

<style scoped>

</style>