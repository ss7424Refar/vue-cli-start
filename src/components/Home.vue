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
          <b-button v-b-modal.upModal @click="update(index)" variant="light">更新</b-button>
          <b-button variant="outline-primary" @click="deleteInfo(index)">删除</b-button>
        </td>
      </tr>
      </tbody>
    </table>
    <b-modal id="addModal" title="添加人员管理界面" ref="modal1" @show="resetModal" @hidden="resetModal" @ok="handleOk">
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group :state="nameState" label="Name" label-for="name-input" invalid-feedback="Name is required" label-cols-sm="3">
          <b-form-input id="name-input" v-model="name" :state="nameState" required></b-form-input>
        </b-form-group>
        <b-form-group :state="ageState" label="Age" label-for="age-input" invalid-feedback="Age is required" label-cols-sm="3">
          <b-form-input id="age-input" v-model="age" :state="ageState" required></b-form-input>
        </b-form-group>
      </form>
    </b-modal>
    <b-modal id="upModal" title="更新人员管理界面" ref="modal2" @show="resetModal" @hidden="resetModal" @ok="handleOk2">
      <form ref="form2" @submit.stop.prevent="handleSubmit2">
        <b-form-group :state="nameState" label="Name" label-for="name-input" invalid-feedback="Name is required" label-cols-sm="3">
          <b-form-input id="name-input" v-model="name" :state="nameState" required></b-form-input>
        </b-form-group>
        <b-form-group :state="ageState" label="Age" label-for="age-input" invalid-feedback="Age is required" label-cols-sm="3">
          <b-form-input id="age-input" v-model="age" :state="ageState" required></b-form-input>
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
      name: '',
      age: '',
      nameState: null,
      ageState: null,
      updateIndex: ''
    }
  },
  methods: {
    // computed: {
    //
    // },
    checkFormValidity () {
      if (!this.$refs.form.checkValidity()) {
        this.nameState = this.name.length !== 0
        this.ageState = this.age.length !== 0
        return
      }
      return true
    },
    resetModal () {
      this.name = ''
      this.age = ''
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
        name: this.name,
        age: this.age
      }
      this.nameState = true
      this.ageState = true
      this.detail.splice(this.detail.length, 0, obj)
      // Hide the modal manually
      this.$nextTick(() => {
        this.$refs['modal1'].hide()
      })
    },
    update: function (index) {
      this.resetModal()
      this.$refs['modal2'].show()
      this.updateIndex = index
      this.name = this.detail[index].name
      this.age = this.detail[index].age
    },
    handleOk2 (bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault()
      // Trigger submit handler
      this.handleSubmit2()
    },
    handleSubmit2 () {
      if (!this.checkFormValidity()) {
        return
      }
      this.nameState = true
      this.ageState = true
      this.detail[this.updateIndex].name = this.name
      this.detail[this.updateIndex].age = this.age
      // Hide the modal manually
      this.$nextTick(() => {
        this.$refs['modal2'].hide()
      })
    },
    deleteInfo: function (index) {
      // 代表删除一个元素
      this.detail.splice(index, 1)
    }
  }
}
</script>

<style scoped>

</style>
