(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{WtIr:function(n,e){n.exports=function(n){var e={literal:"true false null"},i=[n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE],a=[n.QUOTE_STRING_MODE,n.C_NUMBER_MODE],t={end:",",endsWithParent:!0,excludeEnd:!0,contains:a,keywords:e},l={begin:/\{/,end:/\}/,contains:[{className:"attr",begin:/"/,end:/"/,contains:[n.BACKSLASH_ESCAPE],illegal:"\\n"},n.inherit(t,{begin:/:/})].concat(i),illegal:"\\S"},o={begin:"\\[",end:"\\]",contains:[n.inherit(t)],illegal:"\\S"};return a.push(l,o),i.forEach(function(n){a.push(n)}),{name:"JSON",contains:a,keywords:e,illegal:"\\S"}}}}]);