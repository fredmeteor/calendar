<template>
  <div id="app">
    <CalendarWeek />
    <CalendarEntry />
  </div>
</template>

<script>
import CalendarWeek from './components/CalendarWeek';
import CalendarEntry from './components/CalendarEntry';


export default {
  name: 'App',
  components: {
    CalendarWeek,
    CalendarEntry,
   

  }
}
</script>

<style lang="scss">
html, body, #app {
  height: 100%;
}
</style>

<style lang="scss" scoped>
#app {
  background: #ec9706;
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-align-items: center;
  justify-content: center;
  -webkit-justify-content: center;
}
</style>
