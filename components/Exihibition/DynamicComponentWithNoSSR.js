import dynamic from "next/dynamic";


export const DynamicComponentWithNoSSR = dynamic(() => import("tw-elements"), {
  ssr: false,
});
