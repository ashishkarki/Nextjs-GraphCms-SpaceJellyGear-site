import dynamic from "next/dynamic";

const AppMapDynamic = dynamic(() => import("./AppMap"), { ssr: false });

export default AppMapDynamic;

// export { default } from "./AppMap";
