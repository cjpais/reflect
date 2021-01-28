import { Component, ComponentOpts } from "../loader_interface";
import { v4 as uuidv4 } from 'uuid';
import * as CodeMirror from 'codemirror'
//const CodeMirror = require('codemirror');

require('codemirror/mode/gfm/gfm')
require('codemirror/mode/markdown/markdown')
require('codemirror/mode/python/python')
require('codemirror/mode/javascript/javascript')
require('codemirror/mode/go/go')
require('codemirror/keymap/vim')
require('codemirror/addon/fold/markdown-fold')
require('codemirror/addon/fold/foldgutter')

let codeOpts = {
  mode: 'gfm',
  viewportMargin: Infinity,
  styleActiveLine: true,
  matchBrackets: true,
  keyMap: "vim",
  theme: "gruvbox-dark",
  spellcheck: true,
  autofocus: true,
  lineWrapping: true,
  foldGutter: true,
  gutters: ["CodeMirror-foldgutter"],
}

export class TextComponent extends Component {
  uuid: string;
  cm: any;

  constructor(opts: ComponentOpts) {
    super(opts);
    this.uuid = uuidv4();
    //this.cm = this._getCodeMirror();
    this.html = `
    <div class="container">
      <textarea id="${this.uuid}" name="code"></textarea>
    </div>
    `;
  }

  _getCodeMirror() {
    return CodeMirror.fromTextArea(document.getElementById(this.uuid) as HTMLTextAreaElement, codeOpts as CodeMirror.EditorConfiguration);
  }

  render() {
    this.cm = this._getCodeMirror()
  }

}
