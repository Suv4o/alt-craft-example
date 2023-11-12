import { _ as __nuxt_component_0$1 } from './nuxt-link-691e5b50.mjs';
import { useSSRContext, mergeProps, withCtx, createTextVNode, toDisplayString } from 'file:///Users/Suv4o/Development/Experiments/nuxt-test-1/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderList, ssrInterpolate } from 'file:///Users/Suv4o/Development/Experiments/nuxt-test-1/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from '../server.mjs';
import 'file:///Users/Suv4o/Development/Experiments/nuxt-test-1/node_modules/ufo/dist/index.mjs';
import 'file:///Users/Suv4o/Development/Experiments/nuxt-test-1/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/Suv4o/Development/Experiments/nuxt-test-1/node_modules/hookable/dist/index.mjs';
import 'file:///Users/Suv4o/Development/Experiments/nuxt-test-1/node_modules/unctx/dist/index.mjs';
import 'file:///Users/Suv4o/Development/Experiments/nuxt-test-1/node_modules/unhead/dist/index.mjs';
import 'file:///Users/Suv4o/Development/Experiments/nuxt-test-1/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/Suv4o/Development/Experiments/nuxt-test-1/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/Suv4o/Development/Experiments/nuxt-test-1/node_modules/h3/dist/index.mjs';
import 'file:///Users/Suv4o/Development/Experiments/nuxt-test-1/node_modules/defu/dist/defu.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///Users/Suv4o/Development/Experiments/nuxt-test-1/node_modules/destr/dist/index.mjs';
import 'file:///Users/Suv4o/Development/Experiments/nuxt-test-1/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/Suv4o/Development/Experiments/nuxt-test-1/node_modules/scule/dist/index.mjs';
import 'file:///Users/Suv4o/Development/Experiments/nuxt-test-1/node_modules/klona/dist/index.mjs';
import 'file:///Users/Suv4o/Development/Experiments/nuxt-test-1/node_modules/ohash/dist/index.mjs';
import 'file:///Users/Suv4o/Development/Experiments/nuxt-test-1/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/Suv4o/Development/Experiments/nuxt-test-1/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/Suv4o/Development/Experiments/nuxt-test-1/node_modules/unstorage/drivers/memory.mjs';
import 'file:///Users/Suv4o/Development/Experiments/nuxt-test-1/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/Suv4o/Development/Experiments/nuxt-test-1/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/Suv4o/Development/Experiments/nuxt-test-1/node_modules/radix3/dist/index.mjs';
import 'fs';
import 'path';
import 'crypto';
import 'file:///Users/Suv4o/Development/Experiments/nuxt-test-1/node_modules/jsdom/lib/api.js';
import 'file:///Users/Suv4o/Development/Experiments/nuxt-test-1/node_modules/@huggingface/inference/dist/index.mjs';
import 'file:///Users/Suv4o/Development/Experiments/nuxt-test-1/node_modules/openai/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/Suv4o/Development/Experiments/nuxt-test-1/node_modules/pathe/dist/index.mjs';

const _sfc_main$1 = {
  __name: "menu",
  __ssrInlineRender: true,
  setup(__props) {
    const navigation = [
      { name: "Page 1", to: "/" },
      { name: "Page 2", to: "/page-2" },
      { name: "Page 3", to: "/page-3" },
      { name: "Page 4", to: "/page-4" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "bg-white" }, _attrs))}><nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global"><div class="flex lg:flex-1"></div><div class="flex gap-4 lg:gap-x-12"><!--[-->`);
      ssrRenderList(navigation, (item) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: item.name,
          to: item.to,
          class: "text-xl font-semibold leading-6 text-gray-900"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div><div class="flex lg:flex-1 lg:justify-end"></div></nav></header>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/menu.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$1;
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Menu = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Menu, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-e0868d80.mjs.map
