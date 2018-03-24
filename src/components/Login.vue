<template>
 <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
          <h3 class="title has-text-grey">Login</h3>
          <p class="subtitle has-text-grey">Please login to proceed.</p>
          <div class="box">
            <form>
              <div class="field">
                <div class="control">
                  <input class="input is-medium" type="email" placeholder="Your Email" autofocus="">
                </div>
              </div>

              <div class="field">
                <div class="control">
                  <input class="input is-medium" type="password" placeholder="Your Password">
                </div>
              </div>
              <!-- <div class="field">
                <label class="checkbox">
                  <input type="checkbox">
                  Remember me
                </label>
              </div> -->
              <button class="button is-block is-info is-large is-fullwidth">Login</button>
            </form>
          </div>
          <p class="has-text-grey">
            <a href="../Register">Register</a> &nbsp;·&nbsp;
            <a href="../">Forgot Password</a> &nbsp;·&nbsp;
            <a href="../">Need Help?</a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Login-Item',
  data () {
    return {
      msg: 'Outreach Operations'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

</style>
