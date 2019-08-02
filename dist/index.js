/*!
 * v-simple-image-upload v0.1.0
 * (c) Sandip Shrestha
 * Released under the MIT License.
 */
'use strict';

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script = {
  name: "SimpleImageInput",
  props: {
    inputName: {
      type: String,
      required: false,
      "default": "image"
    },
    value: {
      required: false
    },
    removable: {
      required: false,
      type: Boolean,
      "default": true
    }
  },
  data: function data() {
    return {
      image: {
        url: null
      }
    };
  },
  watch: {
    value: {
      handler: function handler(value) {
        this.image.url = value;

        if (value instanceof File) {
          this.image.url = URL.createObjectURL(value);
        }
      },
      immediate: true
    }
  },
  computed: {
    isFileInputNew: function isFileInputNew() {
      return !this.image.url;
    }
  },
  methods: {
    handleUpload: function handleUpload(event) {
      var vm = this;
      var files = event.currentTarget.files;
      var reader = new FileReader();
      reader.readAsDataURL(files[0]);

      reader.onload = function (e) {
        vm.image = {
          "url": e.target.result,
          "file": files[0]
        };
        vm.$emit("change", vm.image.file);
      };
    },
    handleDelete: function handleDelete() {
      this.image = {
        url: null
      };
      this.$refs.fileInput.value = null;
      this.$emit("change", null);
    }
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function () {
      style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

var normalizeComponent_1 = normalizeComponent;

var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
  return function (id, style) {
    return addStyle(id, style);
  };
}
var HEAD;
var styles = {};

function addStyle(id, css) {
  var group = isOldIE ? css.media || 'default' : id;
  var style = styles[group] || (styles[group] = {
    ids: new Set(),
    styles: []
  });

  if (!style.ids.has(id)) {
    style.ids.add(id);
    var code = css.source;

    if (css.map) {
      // https://developer.chrome.com/devtools/docs/javascript-debugging
      // this makes source maps inside style tags work properly in Chrome
      code += '\n/*# sourceURL=' + css.map.sources[0] + ' */'; // http://stackoverflow.com/a/26603875

      code += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + ' */';
    }

    if (!style.element) {
      style.element = document.createElement('style');
      style.element.type = 'text/css';
      if (css.media) style.element.setAttribute('media', css.media);

      if (HEAD === undefined) {
        HEAD = document.head || document.getElementsByTagName('head')[0];
      }

      HEAD.appendChild(style.element);
    }

    if ('styleSheet' in style.element) {
      style.styles.push(code);
      style.element.styleSheet.cssText = style.styles.filter(Boolean).join('\n');
    } else {
      var index = style.ids.size - 1;
      var textNode = document.createTextNode(code);
      var nodes = style.element.childNodes;
      if (nodes[index]) style.element.removeChild(nodes[index]);
      if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
    }
  }
}

var browser = createInjector;

/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "simple_image_input"
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.image.url,
      expression: "image.url"
    }],
    staticClass: "simple_image_input__preview"
  }, [_c('img', {
    staticClass: "img-responsive",
    attrs: {
      "src": _vm.image.url,
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "simple_image_input__controls"
  }, [_c('div', {
    staticClass: "file__input"
  }, [_vm.isFileInputNew ? _c('button', {
    staticClass: "btn btn__upload"
  }, [_c('i', {
    staticClass: "fa fa-upload margin-right-10"
  }), _vm._v(" Upload an image\n            ")]) : _vm._e(), _vm._v(" "), !_vm.isFileInputNew ? _c('button', {
    staticClass: "btn btn__change"
  }, [_vm._v("\n                Change\n            ")]) : _vm._e(), _vm._v(" "), _c('input', {
    ref: "fileInput",
    attrs: {
      "name": _vm.inputName,
      "accept": "image/*",
      "type": "file"
    },
    on: {
      "input": _vm.handleUpload
    }
  })]), _vm._v(" "), _vm.removable && !_vm.isFileInputNew ? _c('button', {
    staticClass: "btn btn__remove",
    on: {
      "click": function click($event) {
        $event.preventDefault();
        return _vm.handleDelete($event);
      }
    }
  }, [_vm._v(" Remove")]) : _vm._e()])]);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-30379c2c_0", {
    source: ".simple_image_input{display:inline-block;margin-bottom:0}.simple_image_input .simple_image_input__preview{width:100%;height:100%;margin-bottom:10px}.simple_image_input .simple_image_input__preview img{width:300px;height:250px;object-fit:cover}.simple_image_input .simple_image_input__controls{display:flex}.simple_image_input .simple_image_input__controls>.btn{margin-right:10px}.simple_image_input .simple_image_input__controls .btn{color:#fff;border:1px solid transparent;border-radius:.25rem;padding:.375rem .75rem;font-size:1rem;line-height:1.5}.simple_image_input .simple_image_input__controls .btn.btn__upload{background:gray}.simple_image_input .simple_image_input__controls .btn.btn__change{background:#00f;margin-right:10px}.simple_image_input .simple_image_input__controls .btn.btn__remove{background:red}.simple_image_input .simple_image_input__controls .file__input{position:relative}.simple_image_input .simple_image_input__controls .file__input input{position:absolute;top:0;right:0;width:100%;height:100%;margin:0;font-size:24px;opacity:0}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__ = undefined;
/* module identifier */

var __vue_module_identifier__ = undefined;
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject SSR */

var SimpleImageUpload = normalizeComponent_1({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, browser, undefined);

var index = {
  install: function install(Vue, options) {
    // Let's register our component globally
    // https://vuejs.org/v2/guide/components-registration.html
    Vue.component("simple-image-upload", SimpleImageUpload);
  }
};

module.exports = index;
