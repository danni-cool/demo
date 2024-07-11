/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from './vuetify'
import LocalDialog from '@/components/LocalDialog/index.js'

export function registerPlugins (app) {
  app.use(vuetify)
  app.use(LocalDialog)
}
