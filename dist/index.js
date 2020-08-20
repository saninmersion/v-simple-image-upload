'use strict';

var __vue_normalize__ = require('vue-runtime-helpers/dist/normalize-component.js');
var __vue_create_injector__ = require('vue-runtime-helpers/dist/inject-style/browser.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var __vue_normalize____default = /*#__PURE__*/_interopDefaultLegacy(__vue_normalize__);
var __vue_create_injector____default = /*#__PURE__*/_interopDefaultLegacy(__vue_create_injector__);

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
    label: {
      type: String,
      required: false,
      "default": "Upload an image"
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
  }), _vm._v(" " + _vm._s(_vm.label) + "\n            ")]) : _vm._e(), _vm._v(" "), !_vm.isFileInputNew ? _c('button', {
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
  inject("data-v-6d38011c_0", {
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

var SimpleImageUpload = __vue_normalize____default['default']({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, __vue_create_injector____default['default'], undefined);

var index = (function (Vue) {
  return Vue.component(SimpleImageUpload.name, SimpleImageUpload);
});

module.exports = index;
