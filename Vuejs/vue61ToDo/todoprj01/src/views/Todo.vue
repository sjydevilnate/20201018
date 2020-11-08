<style scoped>
body {
    text-align: center;
    background-color: #f6f6f8;
}
input {
    border-style: groove;
    width: 200px;
}
button {
    border-style: groove;
}
.shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>

<template>
    <div id="app">
        <TodoHeader></TodoHeader>
        <TodoInput v-on:addTodo="addTodo"></TodoInput>
        <TodoList 
            v-bind:propsdata="todoItems" 
            v-on:removeTodo="removeTodo">
        </TodoList>
        <TodoFooter v-on:removeAll="clearAll"></TodoFooter>
    </div>
</template>

<script>
// componet import
import TodoHeader from "@/components/todo/TodoHeader.vue"
// import TodoInput from "@/components/todo/TodoInput.vue"
// import TodoList from "@/components/todo/TodoList.vue"
import TodoFooter from "@/components/todo/TodoFooter.vue"

export default {
  
    data: function(){  
        return {
            todoItems : [
                { id: 1, todo: "영화보기", done: false },
                { id: 2, todo: "주말 산책", done: true },
                { id: 3, todo: "ES6 학습", done: false },
                { id: 4, todo: "잠실 야구장", done: false }
            ]
        }
    },
    methods: {
        addTodo: function(){ 
        },
        removeTodo: function(){ 
        }, 
        clearAll: function(){
        }, 
    },
    components: {
        "TodoHeader": TodoHeader,
        /*"TodoInput": TodoInput,
        "TodoList": TodoList,*/
        "TodoFooter": TodoFooter
     }, 
}

</script>
