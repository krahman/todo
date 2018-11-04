<template>
  <el-container>
    <el-main>
      <p>Developed with love :"></p>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>Front End Stack</span>
        </div>
        <div v-for="o in fronts" :key="o" class="text item">
          {{o}}
        </div>
      </el-card>

      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>Back End Stack</span>
        </div>
        <div v-for="o in backs" :key="o" class="text item">
          {{o}}
        </div>
      </el-card>

      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>Node Environment</span>
        </div>
        <div v-for="o in nodejs" :key="o" class="text item">
          {{o}}
        </div>
      </el-card>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'About',
  computed: {
    fronts() {
      return [
        'Vue', 'Vuex', 'Axios', 'Element UI', 'Jest', 'Webpack',
      ];
    },
    backs() {
      return [
        'Express RESTFul APIs', 'Mongodb', 'Mongoose', 'Mocha', 'Chai',
      ];
    },
    nodejs() {
      return [
        'Node.js (10.13.0)',
        'NPM (6.4.1)',
      ];
    },
  },
};
</script>

<style scoped>
  @import "../../assets/styles/about.css";
</style>
