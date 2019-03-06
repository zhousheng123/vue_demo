<template>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
  </el-table>
</template>

<script>

export default {
    data() {
      return {
        tableData: [{
          date: '',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
  mounted(){
      console.log(this);
      var table=this.tableData;
    this.$http.get('http://localhost:8888/OutData/all').then(function(data){
      console.log(data.body.list);
      var b=data.body.list

      for(var i=0;i<b.length;i++){
        console.log(b[i].callServiceTime)
        table.push({

          date:b[i].callServiceTime,
        })
      }
  })

  }


  }
</script>
