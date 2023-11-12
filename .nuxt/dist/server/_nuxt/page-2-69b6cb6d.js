import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
const _sfc_main = {
  __name: "page-2",
  __ssrInlineRender: true,
  setup(__props) {
    const images = [
      {
        id: 1,
        src: "https://source.unsplash.com/9J9Wdl3Va0o",
        alt: "Orci phasellus egestas tellus rutrum tellus"
      },
      {
        id: 2,
        src: "https://source.unsplash.com/E1HK_gXoEuc",
        alt: ""
      },
      {
        id: 3,
        src: "https://source.unsplash.com/EvqpkkdIcYM",
        alt: "Odio facilisis mauris sit amet"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 class="text-4xl mt-4 text-center">Page 1</h1><div class="bg-white"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-0 lg:gap-x-8"><!--[-->`);
      ssrRenderList(images, (image) => {
        _push(`<div class="group relative"><div class="h-96 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2 group-hover:opacity-75 sm:h-auto"><img${ssrRenderAttr("src", image.src)}${ssrRenderAttr("alt", image.alt)} class="h-full w-full object-cover object-center"></div></div>`);
      });
      _push(`<!--]--></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/page-2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=page-2-69b6cb6d.js.map
