<template>
  <div id="home" class="container">

    <!--<div class="text-center my-3">-->
      <!--<b-button v-b-popover.hover="'I am popover content!'" title="Popover Title">Hover Me</b-button>-->
    <!--</div>-->

    <h2 class="btn btn-block">{{msg}}</h2>
    <p>
      <b-button v-b-modal.addModal>添加人员</b-button>
    </p>
    <table class="table table-hover">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
      <tr v-for="(item, index) in detail" :key="index">
        <td>{{item.name}}</td>
        <td>{{item.age}}</td>
        <td>
          <b-button v-b-modal.upModal @click="update(index)">更新</b-button>
          <button class="btn btn-danger" @click="delete1(index)">删除</button>
        </td>
      </tr>
      </tbody>
    </table>
    <b-modal id="addModal" title="添加人员管理界面" ref="modal1" @show="resetModal" @hidden="resetModal" @ok="handleOk">
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group :state="nameState" label="Name" label-for="name-input" invalid-feedback="Name is required" label-cols-sm="3">
          <b-form-input id="name-input" v-model="addName" :state="nameState" required></b-form-input>
        </b-form-group>
        <b-form-group :state="ageState" label="Age" label-for="age-input" invalid-feedback="Age is required" label-cols-sm="3">
          <b-form-input id="age-input" v-model="addAge" :state="ageState" required></b-form-input>
        </b-form-group>
      </form>
    </b-modal>
    <b-modal id="upModal" title="更新人员管理界面" ref="modal2" @show="resetModal2" @hidden="resetModal2" @ok="handleOk2">
      <form ref="form2" @submit.stop.prevent="handleSubmit2">
        <b-form-group :state="nameState2" label="Name" label-for="name-input" invalid-feedback="Name is required" label-cols-sm="3">
          <b-form-input id="name-input" v-model="upName" :state="nameState2" required></b-form-input>
        </b-form-group>
        <b-form-group :state="ageState2" label="Age" label-for="age-input" invalid-feedback="Age is required" label-cols-sm="3">
          <b-form-input id="age-input" v-model="upAge" :state="ageState2" required></b-form-input>
        </b-form-group>
      </form>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: '人员管理界面',
      detail: [{name: 'hello', age: 14}, {name: 'world', age: 26}, {name: 'vue', age: 30}],
      addName: '',
      addAge: '',
      nameState: null,
      ageState: null,
      upName: '',
      upAge: '',
      nameState2: false,
      ageState2: false,
      updateIndex: ''
    }
  },
  methods: {
    checkFormValidity () {
      const valid = this.$refs.form.checkValidity()
      this.nameState = valid ? 'valid' : 'invalid'
      this.ageState = valid ? 'valid' : 'invalid'
      return valid
    },
    resetModal () {
      this.addName = ''
      this.addAge = ''
      this.nameState = null
      this.ageState = null
    },
    handleOk (bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault()
      // Trigger submit handler
      this.handleSubmit()
    },
    handleSubmit () {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return
      }
      let obj = {
        name: this.addName,
        age: this.addAge
      }
      this.detail.splice(this.detail.length, 0, obj)
      // Hide the modal manually
      this.$nextTick(() => {
        this.$refs['modal1'].hide()
      })
    },
    update: function (index) {
      this.resetModal2()
      this.$refs['modal2'].show()
      this.updateIndex = index
      this.upName = this.detail[index].name
      this.upAge = this.detail[index].age
    },
    checkFormValidity2 () {
      const valid = this.$refs.form2.checkValidity()
      this.nameState2 = valid ? 'valid' : 'invalid'
      this.ageState2 = valid ? 'valid' : 'invalid'
      return valid
    },
    resetModal2 () {
      this.upName = ''
      this.upAge = ''
      this.nameState2 = null
      this.ageState2 = null
    },
    handleOk2 (bvModalEvt, index) {
      // Prevent modal from closing
      bvModalEvt.preventDefault()
      // Trigger submit handler
      this.handleSubmit2()
    },
    handleSubmit2 () {
      // Exit when the form isn't valid
      if (!this.checkFormValidity2()) {
        return
      }
      this.detail[this.updateIndex].name = this.upName
      this.detail[this.updateIndex].age = this.upAge
      // Hide the modal manually
      this.$nextTick(() => {
        this.$refs['modal2'].hide()
      })
    },
    delete1: function (index) {
      // 代表删除一个元素
      this.detail.splice(index, 1)
    }
  }
}
</script>

<style scoped>

</style>
