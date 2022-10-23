const App = {
    data: () => ({
        counter: 0,
        title: 'Counter',
        title2: 'First Title',
        recordsTitle: 'Records',
        placeholderString: 'title',
        inputValue: '',
        notes: [],
        myHtml: '<h2>Some html</h2>'
    }),
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