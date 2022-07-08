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
    },
    computed: {
        doubleCount() {
            return this.notes.length * 2
        }
    },
    watch: {
        inputValue(value) {
            if (value.length > 10) {
                this.inputValue = this.inputValue.substr(0, 10)
            }
        }
    }
}

const app = Vue.createApp(App)

app.mount('#app')