<template>
    <div>
        <div>
  <b-navbar toggleable="lg" type="dark" variant="dark" >
    <b-navbar-brand href="/">MovieBoxOffice</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <Search />
        </b-nav-form>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
    </div>
</template>
<script>
import Search from "../components/Search.vue"
export default {
    name:"header",
    // methods:{
    //   searchdata(data){
    //     console.log("in header",data)
    //     this.$emit('searchdata',data);
    //   }
    // },
    components:{
      Search
    }
}
</script>