import { createStore } from "vuex";

function loadFromLocalStorage() {
  const data = localStorage.getItem('vuex')
  if (data !== null) {
    const parsedData = JSON.parse(data || "");
    if (localStorage.getItem('remenberme') == "true" && localStorage.getItem("email") !== null && data != null) {
      return {
        hideConfigButton: false,
        isPinned: false,
        showConfig: false,
        isTransparent: "",
        isRTL: false,
        mcolor: "",
        isNavFixed: false,
        isAbsolute: false,
        showNavs: true,
        showSidenav: true,
        showNavbar: true,
        showFooter: true,
        showMain: true,
        name: parsedData.name,
        id: parsedData.id,
        email: localStorage.getItem("email"),
        theme: localStorage.getItem("theme"),
        password: "",
        salt: "",
        islogin: true,
        remenberme: true,
        todo: parsedData.todo,
        fontFamily: parsedData.fontFamily,
        avatar: parsedData.avatar,
        loading: false as boolean,
        closeButtom: true,
        searchResult: [] as { img: string; link: string; dec: string; auth: string; time: string; title: string }[]
      }
    }
  }
  // 如果LocalStorage中没有数据，则返回默认的state对象
  return {
    hideConfigButton: false,
    isPinned: false,
    showConfig: false,
    isTransparent: "",
    isRTL: false,
    mcolor: "",
    isNavFixed: false,
    isAbsolute: false,
    showNavs: true,
    showSidenav: true,
    showNavbar: true,
    showFooter: true,
    showMain: true,
    name: "",
    email: "",
    theme: "light",
    password: "",
    salt: "",
    islogin: false,
    remenberme: false,
    todo: [],
    fontFamily: "尔雅正黑",
    avatar: "https://1.15.222.76:9090/img/avatar.png",
    loading: false as boolean,
    closeButtom: true,
    searchResult: [] as string[]
  }
}

const store = createStore({
  state: loadFromLocalStorage(),
  mutations: {
    setSearchResult(state, newValue) {
      state.searchResult = newValue as { img: string; link: string; dec: string; auth: string; time: string; title: string }[]

    },
    setCloseButtom(state, newValue) {
      state.closeButtom = newValue
    },
    setLoading(state, newValue) {
      state.loading = newValue
    },
    setAvatar(state, newValue) {
      state.avatar = newValue
    },
    setTheme(state, newValue) {
      state.theme = newValue
    },
    setFontFamily(state, newValue) {
      state.fontFamily = newValue;
    },
    addTodo(state, newValue) {
      state.todo.push(newValue);
    },
    deleteTodo(state, index) {
      state.todo.splice(index, 1);
    },
    setShowFooter(state, newValue) {
      state.showFooter = newValue;
    },
    setRemenberme(state, newValue) {
      state.remenberme = newValue;
    },
    setIslogin(state, newValue) {
      state.islogin = newValue;
    },
    setSalt(state, newSalt) {
      state.salt = newSalt;
    },
    setPassword(state, newPassword) {
      state.password = newPassword;
    },
    setEmail(state, newEmail) {
      state.email = newEmail;
    },
    setName(state, newName) {
      state.name = newName;
    },
    setId(state, newValue) {
      state.id = newValue;
    },
    setShowNavs(state, newShowNave) {
      state.showNavbar = newShowNave;
    },
    setIsPinned(state, newIsPinned) {
      state.isPinned = newIsPinned;
    },
    toggleConfigurator(state) {
      state.showConfig = !state.showConfig;
    },
    navbarMinimize(state) {
      const sidenav_show = document.querySelector(".g-sidenav-show");
      const sidenav = document.getElementById("sidenav-main");
      if (sidenav_show != null && sidenav != null) {
        if (sidenav_show.classList.contains("g-sidenav-pinned")) {
          sidenav_show.classList.remove("g-sidenav-pinned");
          setTimeout(function () {
            sidenav.classList.remove("bg-white");
          }, 100);
          sidenav.classList.remove("bg-transparent");
          state.isPinned = true;
        } else {
          sidenav_show.classList.add("g-sidenav-pinned");
          sidenav.classList.add("bg-white");
          sidenav.classList.remove("bg-transparent");
          state.isPinned = false;
        }
      }
      else {
        console.error("sidenav_show和sidenav为null")
      }
    },
    sidebarType(state, payload) {
      state.isTransparent = payload;
    },
    navbarFixed(state) {
      state.isNavFixed = !state.isNavFixed;
    },
  },
  actions: {
    toggleSidebarColor({ commit }, payload) {
      commit("sidebarType", payload);
    },
  },
  getters: {
    getEmail(state) {
      return state.email;
    },
    getIslogin(state) {
      return state.islogin;
    },
    getTheme(state) {
      return state.theme;
    }
  },
});

store.subscribe((mutation, state) => {
  localStorage.setItem('vuex', JSON.stringify(state))
});

export default store;
