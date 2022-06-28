const App = {
    data() {
        return {
            counter: 0,
            title: 'Counter',
            recordsTitle: 'Records',
            placeholderString: 'title',
            inputValue: '',
            notes: []
        }
    },
    methods: {
        inputChangeHandler(e) {
            this.inputValue = e.target.value
        },
        addNote() {
            this.notes.push(this.inputValue)
            this.inputValue = ''
        }
    }
}

const app = Vue.createApp(App)

app.mount('#app')