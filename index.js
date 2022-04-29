const todoApp = Vue.createApp({
    data() {
        return {
            title: "Todo List",
            tasks: [
                { name: 'Today : Internal Meeting' },
                { name: 'Tomorrow : Read a book' },
                { name: 'Daily : Event Joixns' },
            ],
            pinTask: [],

        }
    },
    // computed : {
    //     allPinnedTasks(){
    //         return this.pinTask

    //     }
    // },
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
        },
        pinToTop: function (task) {
            this.pinTask.push(task)
            console.log(this.pinTask);
        },
        delPinned: function (task) {
            this.pinTask.splice(this.pinTask.indexOf(task), 1)
        }
    }

})
todoApp.mount("#todoApp");