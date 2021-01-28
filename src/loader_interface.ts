import env from "./loader"


export class Environment {
  workspaces: Workspace[] = []

  constructor() {
    this.workspaces.push(new Workspace())
  }

  getWorkspace():Workspace {
    return this.workspaces[0]
  }
}

export class Workspace {
  components: Component[] = []

  constructor() {

  }

  addComponent(component: Component) {
    this.components.push(component)

    var componentHTML = `
    <div id="component-${this.components.length}" class="component">
      <div class="component-title">
        ${component.name}
      </div>
      <div class="component-body">
        ${component.html}
      </div>
    </div>
    `
    var template = document.createElement('template')
    componentHTML = componentHTML.trim()
    template.innerHTML = componentHTML
    document.body.append(template.content)

    component.render()
  }

}

export class ComponentSize {
  width: number
  height: number

  constructor() {
    this.width = 300
    this.height = 200
  }

}

export interface ComponentOpts {
  name: string
  size?: ComponentSize
  meta?: any
  html?: string
}

// TODO this should be an interface not a class
export class Component {
  name: string
  size?: ComponentSize
  meta?: any
  html?: string

  constructor(opts: ComponentOpts) {
    this.name = opts.name
    this.size = new ComponentSize()
    this.meta = opts.meta
    this.html = opts.html
  }

  render() {
    console.log("YOU NEED TO IMPLEMENT THE RENDER FUNCTION")
  }

}

export function get_env(): Environment {
  return env
}
