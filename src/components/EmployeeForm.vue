<template>
    <div id="employee-form">
        <form @submit.prevent="handleSubmit">
            <div class="form-group">
                <label>Employee Name:</label>
                     <input 
                        ref="first" 
                        type="text"
                        :class="{'has-error': submitting && invalidName}"
                        v-model="employee.name"
                        @focus="clearStatus"
                        @keypress="clearStatus"
                        class="form-control"
                     />
            </div>

            <div class="form-group">
                <label>Employee Email:</label>
                     <input  
                        type="text"
                        :class="{'has-error': submitting && invalidEmail }"
                        v-model="employee.email"
                        @focus="clearStatus"
                        class="form-control"
                     />
                     <p 
                        v-if="error && submitting" 
                        class="error-message">
                        <i class="fa fa-exclamation" aria-hidden="true"></i> 
                          Please fill out required fields
                     </p>
                     <p 
                        v-if="success" 
                        class="success-message"> 
                        <i class="fa fa-check" aria-hidden="true"></i>
                         Employee added Sucessfully
                     </p>

            </div>
                   <input type="submit" class="btn btn-primary btn-sm mb-3" value="Enter New Employee">
        </form>
    </div>
</template>

<script>
    export default {
        name : 'employee-form',
        data() {
            return { 
                    submitting : true,
                    error: false,                    
                    success: false,
                    employee: {
                        name: '',
                        email: '',
                    }
            }
        },

        computed: {
            invalidName(){
                return this.employee.name === ''
            },

            invalidEmail(){
                return this.employee.email === ''
            },
        },

        methods: {
            handleSubmit(){
                this.submitting = true
                this.clearStatus()          

                if (this.invalidName || this.invalidEmail)
                 {
                   this.error = true
                    return
                 }


                 this.$emit('add:employee', this.employee)
                 this.$refs.first.focus()
                 this.employee = {
                   name: '',
                   email:'',              
                    }

                    this.error = false
                    this.success = true
                    this.submitting = false   
                },

                clearStatus(){
                this.success = false
                this.error = false
                 }
            },

            
        }


</script>

<style scoped>
 [class*="-message"] {
     font-weight: 500;
 }

 .error-message {
     color: #d33c40;
     
 }

  .success-message {
     color: #32a95d;
 }

 
</style>