<template>
  <div class="home-wrapper">
    <h2 class="title">瞅啥呢？</h2>

    <div class="list-wrapper">
      <el-table :data="results" style="width: 100%">
        <el-table-column prop="name" label="页面" min-width="160">
        </el-table-column>
        <el-table-column prop="description" label="描述" min-width="280">
        </el-table-column>
        <el-table-column prop="creage_time" label="创建时间" width="160">
          <template slot-scope="scope">
            <span>{{  $moment(scope.row.create_time).format('YYYY-MM-DD HH:mm')  }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="updagte_time" label="最后编辑时间" width="160">
          <template slot-scope="scope">
            <span>{{  $moment(scope.row.update_time).format('YYYY-MM-DD HH:mm')  }}</span>
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="180" align="center">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="handleToPreview(scope.row)">预览</el-button>
            <el-button type="text" size="small" @click="handleToEdit(scope.row)">编辑</el-button>
            <el-button type="text" size="small" @click="handleToDelete(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="footer">
      <el-button
        class="add-btn"
        type="primary"
        @click="dialogFormVisible = true"
        >添加</el-button
      >
    </div>
    <el-dialog title="创建页面" :visible.sync="dialogFormVisible" width="480px">
      <el-form :model="form" :rules="rules" ref="ruleForm" label-width="90px">
        <el-form-item label="页面名称:" prop="name">
          <el-input v-model="form.name" placeholder="输入页面名称"></el-input>
        </el-form-item>
        <el-form-item label="页面描述:" prop="description">
          <el-input
            type="textarea"
            v-model="form.description"
            placeholder="输入页面描述"
          ></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleCreateSubmit('ruleForm')">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { getPageList, createPage, updatePage, deletePage } from '@/api/page'

export default {
  data() {
    return {
      dialogFormVisible: false,
      form: {},
      results: [],
      rules: {
        name: { required: true, message: "请输入页面名称", trigger: "blur" },
        description: { required: true, message: "请输入页面描述", trigger: "blur" },
      },
    };
  },
  created() {
    this.fetchList()
  },
  methods: {
    fetchList() {
      getPageList({isPaging: 0}).then(res => {
        this.results = res.list
      })
    },
    handleToPreview(row) {
      window.open(`http://render.koudaikaoyan.com/${row.id}`, '_blank')
    },
    handleToEdit(row) {
      this.$router.push(`/editor/${row.id}`)
    },
    handleToDelete(row) {
      // 二次确认撤销
      this.$confirm("确定要删除吗？", "提示", {
        type: "warning",
      }).then(() => {
        deletePage({id: row.id}).then(res => {
        this.$message.success("删除成功")
        this.fetchList()
      })
      }).catch(() => {});
    },
    handleCreateSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const params = {
            name: this.form.name,
            description: this.form.description
          }
          createPage(params).then(res => {
            this.dialogFormVisible = false
            this.$message.success("创建成功")
            this.fetchList()
          })
        } else {
          console.log('error submit!!');
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.home-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 800px;
  margin: 0 auto;

  .title {
    margin-top: 50px;
  }
  .list-wrapper {
    width: 100%;
    margin-top: 20px;
  }
  .footer {
    width: 100%;
    margin-top: 20px;
  }
  .add-btn {
    width: 100%;
  }
}
</style>
