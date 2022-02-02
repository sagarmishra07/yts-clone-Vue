<template>
  <div>
    <nav>
      <div class="logo">
        <router-link to="/"
          ><p>
            <img
              src="https://yts.mx/assets/images/website/logo-YTS.svg"
              alt=""
            />
          </p>
        </router-link>
      </div>
      <router-link to="/"
        ><li style="color: rgb(94, 214, 94)">
          HD movies at the smallest file size.
        </li></router-link
      >
      <input type="text" name="" id="" placeholder="Quick Search..." />
      <router-link to="/"><li>Home</li></router-link>
      <router-link to="/movies"><li>Browse Movies</li></router-link>
      <router-link to="/trending"><li>Trending</li></router-link>

      <router-link to="/4k"><li>4K</li></router-link>
      <router-link to="/login"><li>Login</li></router-link>
      <router-link to="/register"><li>Register</li></router-link>
    </nav>
  </div>
</template>
<script>
export default {
  name: "Navbar",
};
</script>
<style scoped>
nav {
  color: snow;
  display: flex;
  justify-content: space-evenly;

  align-items: center;
  width: 100%;
  height: 8vh;
  margin: 0px;
  padding: 0px;
  background: #272626;
  position: fixed;
  top: 0;
  z-index: 6;
}
li {
  display: flex;
  list-style-type: none;
  color: snow;
  font-size: 1rem;
}
li:hover {
  color: rgb(94, 214, 94);
}
p {
  color: rgb(89, 136, 136);
  font-size: 1rem;
  color: green;
}
router-link:active {
  color: teal;
}

router-link:active {
  color: teal;
  cursor: pointer;
}
input[type="text"] {
  background: #1f1e1e;
  border-radius: 15px;
  height: 4vh;
  width: 200px;
  border: 2px solid #312121;
}
input[type="text"]::placeholder {
  color: snow;
  padding: 2rem;
}
input[type="text"]:focus {
  color: snow;
}
.logo {
  padding-left: 3%;
}
</style>>
