<template>
    <div id="top_nav">
        <b-navbar toggleable="sm" type="light" variant="dark">

        <b-navbar-toggle target="nav_collapse" />

        <b-collapse is-nav id="nav_collapse" class="justify-content-between">
          <b-navbar-nav>

            <b-nav-item ><router-link to="/">Home</router-link></b-nav-item>
              <b-nav-item ><router-link to="/settings/update">Settings <font-awesome-icon icon="cog"/></router-link></b-nav-item>
          </b-navbar-nav>
            <b-navbar-nav>
                <b-nav-item  class="" @click="Logout"><router-link to="/">logout <font-awesome-icon icon="sign-out-alt"/></router-link></b-nav-item>
            </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
</template>

<script>
    export default {
        name: "Header",
        methods:{
            Logout(){
                this.$store.dispatch('Logout').then(this.$router.go('/'))
            }
        },
    }
</script>

<style scoped>
    #top_nav{
        grid-area: topnav;
    }
a{
    color: whitesmoke;
    text-decoration: none;
    font-size:1.5rem;
}
    a:hover{
        color: black;
        text-decoration: none;
    }
</style>


