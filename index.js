
const todoApp = Vue.createApp({
    data() {
        return {
            title: "Todo List",
            tasks: [
                { name: 'Today : Internal Meeting' },
                { name: 'Tomorrow : Read a book' },
                { name: 'Daily : Event Joins' },
            ]

        }
    },
    methods: {
        newItem: function () {
            if (!this.tasks.name) {
                return
            }
            this.tasks.push({
                name: this.tasks.name,
                del: ''
            });
            this.tasks.name = "";
        },
        delItem: function (task) {
            this.tasks.splice(this.tasks.indexOf(task), 1)
        }
    }

})
todoApp.mount("#todoApp");