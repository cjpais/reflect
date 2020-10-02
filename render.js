const CodeMirror = require('codemirror')
const CodeMirrorSpellChecker = require('codemirror-spell-checker')
const dayjs = require('dayjs')
require('codemirror/mode/gfm/gfm')
require('codemirror/mode/markdown/markdown')
require('codemirror/mode/python/python')
require('codemirror/mode/javascript/javascript')
require('codemirror/mode/go/go')
require('codemirror/keymap/vim')
require('codemirror/addon/fold/markdown-fold')
require('codemirror/addon/fold/foldgutter')

day = "# " + dayjs().format("dddd MMMM D, YYYY")
console.log("day" + day)

CodeMirrorSpellChecker({
  codeMirrorInstance: CodeMirror
})

var cm = CodeMirror.fromTextArea(document.getElementById("code"), {
  mode: 'gfm',
  viewportMargin: Infinity,
  scrollbarStyle: null,
  styleActiveLine: true,
  matchBrackets: true,
  keyMap: "vim",
  theme: "gruvbox-dark",
  spellcheck: true,
  autofocus: true,
  lineWrapping: true,
  extraKeys: {"Ctrl-Q": function(cm){ cm.foldCode(cm.getCursor()); }},
  foldGutter: true,
  gutters: ["CodeMirror-foldgutter"],
  //lineNumbers: true
}).setValue(day);

//cm.setValue(day)


/*
const Editor = require('@toast-ui/editor');
const mergedCell = require('@toast-ui/editor-plugin-table-merged-cell')
const colorText = require('@toast-ui/editor-plugin-color-syntax')
const syntaxHighlight = require('@toast-ui/editor-plugin-code-syntax-highlight');
const { autoUpdater } = require('electron');

const editor = new Editor({
  el: document.querySelector('#editor'),
  initialEditType: 'markdown',
  previewStyle: 'tab',
  usageStatistics: false,
  height: 'auto',
  plugins: [mergedCell, colorText, syntaxHighlight]
});
*/