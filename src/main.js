import { createApp } from 'vue'
import './styles/style.less'
import App from './App.vue'
import '@material/web/all.js'
import { styles as typescaleStyles } from '@material/web/typography/md-typescale-styles.js'
document.adoptedStyleSheets.push(typescaleStyles.styleSheet);

createApp(App).mount('#app')
