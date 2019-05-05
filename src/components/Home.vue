<template>
  <div id="home" class="container">
    <h2 class="btn btn-block">{{msg}}</h2>
    <p><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">添加人员</button>
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
        <td><button class="btn btn-success">更新</button> <button class="btn btn-danger">删除</button></td>
      </tr>
      </tbody>
    </table>

    <!-- 模态框 -->
    <div class="modal fade" id="myModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <!-- 模态框头部 -->
          <div class="modal-header">
            <h4 class="modal-title">添加人员管理界面</h4>
            <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>
          <!-- 模态框主体 -->
          <div class="modal-body">
            <form class="form-horizontal form-group">
              <div class="form-group">
                <div class="row">
                  <div class="col-sm-3">
                    <label for="email">Name:</label>
                  </div>
                  <div class="col-sm-8">
                    <input type="email" class="form-control">
                  </div>
                </div>
              </div>
              <div class="form-group">
                <div class="row">
                  <div class="col-sm-3">
                    <label for="email">Age:</label>
                  </div>
                  <div class="col-sm-8">
                    <input type="email" class="form-control">
                  </div>
                </div>
              </div>
            </form>
          </div>
          <!-- 模态框底部 -->
          <div class="modal-footer">
            <button type="submit" class="btn btn-primary">提交</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">关闭</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: '人员管理界面',
      detail: [{name: 'hello', age: 14}, {name: 'world', age: 26}, {name: 'vue', age: 30}]
    }
  }
}
</script>

<style scoped>

</style>
