import { Environment } from "./loader_interface"
import * as _modules from './modules'

interface Module {
  name: string
  src: string
  css: string
}

/* Create a working environment */
const env = new Environment()
Object.freeze(env);
export default env;

let modules = _modules.default.modules as Module[]

console.log("interpreted modules", modules, typeof modules)

function add_module(module: Module) {
  let head = document.head
  let body = document.body

  var js = document.createElement('script')
  js.type = "text/javascript"
  js.text = `require("${module.src}")`
  console.log(js.text)
  body.append(js)

  var css = document.createElement('link')
  css.rel = "stylesheet"
  css.href = module.css
  head.append(css)
}

modules.forEach((module, _) => {
  add_module(module)
})