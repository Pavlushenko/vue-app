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
            if (this.inputValue !== '') {
                this.notes.push(this.inputValue)
                this.inputValue = ''
            }
        },
        toUpperCase(item) {
            return item.toUpperCase(item)
        },
        removeNote(i, e) {
            this.notes.splice(i, 1)
        }
    }
}

const app = Vue.createApp(App)

app.mount('#app')