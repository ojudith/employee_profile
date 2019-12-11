<template>
   <div id="employee-table">
    <p v-if="employees.length < 1" class="empty-table">
        No employees
    </p>
    <div style="overflow-x:auto">
            <table class="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="employee in employees" :key="employee.id">
                        <td v-if="editing === employee.id">
                            <input type="text" v-model="employee.name" class="form-control"/>
                        </td>
                        <td v-else>{{employee.name}}</td>

                        <td v-if="editing === employee.id">
                            <input type="text" v-model="employee.email" class="form-control"/>
                        </td>

                        <td v-else>{{employee.email}}</td>

                        <td v-if="editing === employee.id">
                            <button @click="editEmpoloyee(employee)" class="btn btn-success mx-2">Save</button>
                            <button @click="editing=null" class="btn btn-warning text-light">Cancel</button>
                        </td>
                            <td style="display:flex;" v-else ><button type="button" @click="editMode(employee.id)" class="btn btn-primary mx-3"> Edit </button>
                            <button type="button" @click="$emit('delete:employee', employee.id)" class="btn btn-danger"> Delete </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
   </div>
</template>
<script>
    export default {
        name : 'employee-table',
        props : {
            employees : Array,
        },

        data(){
            return {
                editing: null,
            }
        },

        methods: {
            editMode(id) {
                this.editing = id
            },

            editEmpoloyee(employee) {
                if (employee.name === '' || employee.email === '')
                return this.$emit('edit:employee', employee.id, employee)
                this.editing = null
            },

           
        }
    }
</script>

<style scoped>
</style>