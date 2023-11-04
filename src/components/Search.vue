<template>
    <div>
      <b-form @submit.prevent="search">
        <b-input v-model="searchQuery" placeholder="Search..." />
        <b-button type="submit" variant="primary">Search</b-button>
      </b-form>
  
      <div v-if="results.length > 0">
        <h2>Search Results:</h2>
        <ul>
          <li v-for="result in results" :key="result.id">{{ result.name }}</li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        searchQuery: '',
        data: [
          { id: 1, name: 'Item 1' },
          { id: 2, name: 'Item 2' },
          { id: 3, name: 'Item 3' },
          { id: 4, name: 'Another Item' },
        ],
        results: [],
      };
    },
    methods: {
      search() {
        this.results = this.data.filter(item =>
          item.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      },
    },
  };
  </script>
  