import Vue from 'vue'
import App from './components/App.vue'

import ApolloClient from "apollo-boost"
import VueApollo from "vue-apollo"

Vue.config.productionTip = false

const apolloClient = new ApolloClient({
  uri: "https://graphql-pokemon.now.sh/"
})

Vue.use(VueApollo)

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  apolloProvider,
}).$mount('#app')

// import { ApolloClient } from 'apollo-client';
// import { InMemoryCache } from 'apollo-cache-inmemory';
// import { HttpLink } from 'apollo-link-http';
// import { ApolloProvider } from '@apollo/react-hooks';

// const cache = new InMemoryCache();
// const link = new HttpLink({
//   uri: 'https://graphql-pokemon.now.sh/'
// })

// const client = new ApolloClient({
//   cache,
//   link
// })

// new Vue({
//   el: '#app',
//   render: h => h(App)
// })
