<template>
    <div>
        <!-- <b-navbar-nav class="ml-auto"> -->
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search Show" v-model="searchData"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit" @click.prevent="sendShowName">
          <b-icon icon="search"></b-icon>
          </b-button>
        </b-nav-form>
    </div>
</template>

<script>
    export default {
        name:"search",
    data(){
        return{
            searchData:''
        }
    },
    methods:{
        sendShowName(){
            // console.log('search data',this.searchData)
            //  this.$emit('search',this.searchData);
            this.$store.dispatch("getshowStore",this.searchData);
        }
    }
    }
</script>

<style  scoped>

</style>