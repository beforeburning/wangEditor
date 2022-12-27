/**
 * @description prismjs
 * @author wangfupeng
 */

import { Text } from 'slate'

import Prism from 'prismjs'
// import 'prismjs/components/prism-jsx'
// import 'prismjs/components/prism-typescript'
// import 'prismjs/components/prism-markup'
// import 'prismjs/components/prism-go'
// import 'prismjs/components/prism-php'
// import 'prismjs/components/prism-c'
// import 'prismjs/components/prism-python'
// import 'prismjs/components/prism-java'
// import 'prismjs/components/prism-cpp'
// import 'prismjs/components/prism-csharp'
// import 'prismjs/components/prism-visual-basic'
// import 'prismjs/components/prism-sql'
// import 'prismjs/components/prism-ruby'
// import 'prismjs/components/prism-swift'
// import 'prismjs/components/prism-bash'
// import 'prismjs/components/prism-markdown'
// import 'prismjs/components/prism-lua'
// import 'prismjs/components/prism-groovy'
// 二次添加
import 'prismjs/components/prism-markup-templating'
import 'prismjs/components/prism-abap'
import 'prismjs/components/prism-abnf'
import 'prismjs/components/prism-actionscript'
import 'prismjs/components/prism-ada'
import 'prismjs/components/prism-agda'
import 'prismjs/components/prism-al'
import 'prismjs/components/prism-antlr4'
import 'prismjs/components/prism-apacheconf'
import 'prismjs/components/prism-apex'
import 'prismjs/components/prism-apl'
import 'prismjs/components/prism-arduino'
import 'prismjs/components/prism-arff'
import 'prismjs/components/prism-asciidoc'
import 'prismjs/components/prism-asm6502'
import 'prismjs/components/prism-aspnet'
import 'prismjs/components/prism-autohotkey'
import 'prismjs/components/prism-autoit'
import 'prismjs/components/prism-avisynth'
import 'prismjs/components/prism-avro-idl'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-basic'
import 'prismjs/components/prism-batch'
import 'prismjs/components/prism-bbcode'
import 'prismjs/components/prism-bicep'
import 'prismjs/components/prism-birb'
import 'prismjs/components/prism-bison'
import 'prismjs/components/prism-bnf'
import 'prismjs/components/prism-brainfuck'
import 'prismjs/components/prism-brightscript'
import 'prismjs/components/prism-bro'
import 'prismjs/components/prism-bsl'
import 'prismjs/components/prism-c'
import 'prismjs/components/prism-cfscript'
import 'prismjs/components/prism-chaiscript'
import 'prismjs/components/prism-cil'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-clojure'
import 'prismjs/components/prism-cmake'
import 'prismjs/components/prism-cobol'
import 'prismjs/components/prism-coffeescript'
import 'prismjs/components/prism-concurnas'
import 'prismjs/components/prism-coq'
import 'prismjs/components/prism-core'
import 'prismjs/components/prism-cpp'
import 'prismjs/components/prism-crystal'
import 'prismjs/components/prism-csharp'
import 'prismjs/components/prism-cshtml'
import 'prismjs/components/prism-csp'
import 'prismjs/components/prism-css-extras'
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-csv'
import 'prismjs/components/prism-cypher'
import 'prismjs/components/prism-d'
import 'prismjs/components/prism-dart'
import 'prismjs/components/prism-dataweave'
import 'prismjs/components/prism-dax'
import 'prismjs/components/prism-dhall'
import 'prismjs/components/prism-diff'
import 'prismjs/components/prism-django'
import 'prismjs/components/prism-dns-zone-file'
import 'prismjs/components/prism-docker'
import 'prismjs/components/prism-dot'
import 'prismjs/components/prism-ebnf'
import 'prismjs/components/prism-editorconfig'
import 'prismjs/components/prism-eiffel'
import 'prismjs/components/prism-ejs'
import 'prismjs/components/prism-elixir'
import 'prismjs/components/prism-elm'
import 'prismjs/components/prism-erb'
import 'prismjs/components/prism-erlang'
import 'prismjs/components/prism-etlua'
import 'prismjs/components/prism-excel-formula'
import 'prismjs/components/prism-factor'
import 'prismjs/components/prism-false'
import 'prismjs/components/prism-firestore-security-rules'
import 'prismjs/components/prism-flow'
import 'prismjs/components/prism-fortran'
import 'prismjs/components/prism-fsharp'
import 'prismjs/components/prism-ftl'
import 'prismjs/components/prism-gap'
import 'prismjs/components/prism-gcode'
import 'prismjs/components/prism-gdscript'
import 'prismjs/components/prism-gedcom'
import 'prismjs/components/prism-gherkin'
import 'prismjs/components/prism-git'
import 'prismjs/components/prism-glsl'
import 'prismjs/components/prism-gml'
import 'prismjs/components/prism-gn'
import 'prismjs/components/prism-go'
import 'prismjs/components/prism-graphql'
import 'prismjs/components/prism-groovy'
import 'prismjs/components/prism-haml'
import 'prismjs/components/prism-handlebars'
import 'prismjs/components/prism-haskell'
import 'prismjs/components/prism-haxe'
import 'prismjs/components/prism-hcl'
import 'prismjs/components/prism-hlsl'
import 'prismjs/components/prism-hoon'
import 'prismjs/components/prism-hpkp'
import 'prismjs/components/prism-hsts'
import 'prismjs/components/prism-http'
import 'prismjs/components/prism-ichigojam'
import 'prismjs/components/prism-icon'
import 'prismjs/components/prism-icu-message-format'
import 'prismjs/components/prism-idris'
import 'prismjs/components/prism-iecst'
import 'prismjs/components/prism-ignore'
import 'prismjs/components/prism-inform7'
import 'prismjs/components/prism-ini'
import 'prismjs/components/prism-io'
import 'prismjs/components/prism-j'
import 'prismjs/components/prism-java'
import 'prismjs/components/prism-javadoc'
import 'prismjs/components/prism-javadoclike'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-javastacktrace'
import 'prismjs/components/prism-jexl'
import 'prismjs/components/prism-jolie'
import 'prismjs/components/prism-jq'
import 'prismjs/components/prism-js-extras'
import 'prismjs/components/prism-js-templates'
import 'prismjs/components/prism-jsdoc'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-json5'
import 'prismjs/components/prism-jsonp'
import 'prismjs/components/prism-jsstacktrace'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-julia'
import 'prismjs/components/prism-keyman'
import 'prismjs/components/prism-kotlin'
import 'prismjs/components/prism-kumir'
import 'prismjs/components/prism-kusto'
import 'prismjs/components/prism-latex'
import 'prismjs/components/prism-latte'
import 'prismjs/components/prism-less'
import 'prismjs/components/prism-lilypond'
import 'prismjs/components/prism-liquid'
import 'prismjs/components/prism-lisp'
import 'prismjs/components/prism-livescript'
import 'prismjs/components/prism-llvm'
import 'prismjs/components/prism-log'
import 'prismjs/components/prism-lolcode'
import 'prismjs/components/prism-lua'
import 'prismjs/components/prism-magma'
import 'prismjs/components/prism-makefile'
import 'prismjs/components/prism-markdown'
import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-matlab'
import 'prismjs/components/prism-maxscript'
import 'prismjs/components/prism-mel'
import 'prismjs/components/prism-mermaid'
import 'prismjs/components/prism-mizar'
import 'prismjs/components/prism-mongodb'
import 'prismjs/components/prism-monkey'
import 'prismjs/components/prism-moonscript'
import 'prismjs/components/prism-n1ql'
import 'prismjs/components/prism-n4js'
import 'prismjs/components/prism-nand2tetris-hdl'
import 'prismjs/components/prism-naniscript'
import 'prismjs/components/prism-nasm'
import 'prismjs/components/prism-neon'
import 'prismjs/components/prism-nevod'
import 'prismjs/components/prism-nginx'
import 'prismjs/components/prism-nim'
import 'prismjs/components/prism-nix'
import 'prismjs/components/prism-nsis'
import 'prismjs/components/prism-objectivec'
import 'prismjs/components/prism-ocaml'
import 'prismjs/components/prism-opencl'
import 'prismjs/components/prism-openqasm'
import 'prismjs/components/prism-oz'
import 'prismjs/components/prism-parigp'
import 'prismjs/components/prism-parser'
import 'prismjs/components/prism-pascal'
import 'prismjs/components/prism-pascaligo'
import 'prismjs/components/prism-pcaxis'
import 'prismjs/components/prism-peoplecode'
import 'prismjs/components/prism-perl'
import 'prismjs/components/prism-plsql'
import 'prismjs/components/prism-powerquery'
import 'prismjs/components/prism-powershell'
import 'prismjs/components/prism-processing'
import 'prismjs/components/prism-prolog'
import 'prismjs/components/prism-promql'
import 'prismjs/components/prism-properties'
import 'prismjs/components/prism-protobuf'
import 'prismjs/components/prism-psl'
import 'prismjs/components/prism-pug'
import 'prismjs/components/prism-puppet'
import 'prismjs/components/prism-pure'
import 'prismjs/components/prism-purebasic'
import 'prismjs/components/prism-purescript'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-q'
import 'prismjs/components/prism-qml'
import 'prismjs/components/prism-qore'
import 'prismjs/components/prism-qsharp'
import 'prismjs/components/prism-r'
import 'prismjs/components/prism-racket'
import 'prismjs/components/prism-reason'
import 'prismjs/components/prism-regex'
import 'prismjs/components/prism-rego'
import 'prismjs/components/prism-renpy'
import 'prismjs/components/prism-rest'
import 'prismjs/components/prism-rip'
import 'prismjs/components/prism-roboconf'
import 'prismjs/components/prism-robotframework'
import 'prismjs/components/prism-ruby'
import 'prismjs/components/prism-rust'
import 'prismjs/components/prism-sas'
import 'prismjs/components/prism-sass'
import 'prismjs/components/prism-scala'
import 'prismjs/components/prism-scheme'
import 'prismjs/components/prism-scss'
import 'prismjs/components/prism-shell-session'
import 'prismjs/components/prism-smali'
import 'prismjs/components/prism-smalltalk'
import 'prismjs/components/prism-smarty'
import 'prismjs/components/prism-sml'
import 'prismjs/components/prism-solidity'
import 'prismjs/components/prism-solution-file'
import 'prismjs/components/prism-soy'
import 'prismjs/components/prism-sparql'
import 'prismjs/components/prism-splunk-spl'
import 'prismjs/components/prism-sqf'
import 'prismjs/components/prism-sql'
import 'prismjs/components/prism-squirrel'
import 'prismjs/components/prism-stan'
import 'prismjs/components/prism-stylus'
import 'prismjs/components/prism-swift'
import 'prismjs/components/prism-systemd'
import 'prismjs/components/prism-t4-cs'
import 'prismjs/components/prism-t4-templating'
import 'prismjs/components/prism-t4-vb'
import 'prismjs/components/prism-tap'
import 'prismjs/components/prism-tcl'
import 'prismjs/components/prism-textile'
import 'prismjs/components/prism-toml'
import 'prismjs/components/prism-tsx'
import 'prismjs/components/prism-tt2'
import 'prismjs/components/prism-turtle'
import 'prismjs/components/prism-twig'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-unrealscript'
import 'prismjs/components/prism-uri'
import 'prismjs/components/prism-v'
import 'prismjs/components/prism-vala'
import 'prismjs/components/prism-vbnet'
import 'prismjs/components/prism-velocity'
import 'prismjs/components/prism-verilog'
import 'prismjs/components/prism-vhdl'
import 'prismjs/components/prism-vim'
import 'prismjs/components/prism-visual-basic'
import 'prismjs/components/prism-warpscript'
import 'prismjs/components/prism-wasm'
import 'prismjs/components/prism-wiki'
import 'prismjs/components/prism-wolfram'
import 'prismjs/components/prism-wren'
import 'prismjs/components/prism-xeora'
import 'prismjs/components/prism-xml-doc'
import 'prismjs/components/prism-xojo'
import 'prismjs/components/prism-xquery'
import 'prismjs/components/prism-yaml'
import 'prismjs/components/prism-yang'
import 'prismjs/components/prism-zig'
import 'prismjs/components/prism-php-extras'
import 'prismjs/components/prism-phpdoc'
import 'prismjs/components/prism-php'
// 语言模块，参考 https://github.com/PrismJS/prism/tree/master/components

// prismjs 的 token 类型汇总
export const prismTokenTypes = [
  'comment',
  'prolog',
  'doctype',
  'cdata',
  'punctuation',
  'namespace',
  'property',
  'tag',
  'boolean',
  'number',
  'constant',
  'symbol',
  'deleted',
  'selector',
  'attr-name',
  'string',
  'builtin',
  'inserted',
  'operator',
  'entity',
  'url',
  'string',
  'atrule',
  'attr-value',
  'keyword',
  'function',
  'class-name',
  'regex',
  'important',
  'variable',
  'bold',
  'italic',
  'char',
]

/**
 * 获取 prism token 的字符串长度
 * @param token prism token
 */
export function getPrismTokenLength(token: any) {
  if (typeof token === 'string') {
    return token.length
  } else if (typeof token.content === 'string') {
    return token.content.length
  } else {
    // 累加 length
    return token.content.reduce(
      // @ts-ignore
      (l, t) => l + getPrismTokenLength(t),
      0
    )
  }
}

/**
 * 获取 prism 解析的 token 列表
 * @param textNode text node
 * @param language 代码语言
 */
export function getPrismTokens(textNode: Text, language: string) {
  if (!language) return []

  const langGrammar = Prism.languages[language]
  if (!langGrammar) return []

  return Prism.tokenize(textNode.text, langGrammar)

  // tokens 即 Prism 对整个字符串的拆分，有普通文字也有高亮的关键字
  // 例如 `const a = 100;` 的 tokens 是一个数组 [ token, ' a ', token, ' ', token ] ，有对象有字符串，对象就表示关键字
  // 如数组第一个 token 是 { type: "keyword", content: "const" } 。关键字类型不同 type 也不同
}
