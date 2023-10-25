import NavBar from "./nav-bar/index.vue";
import PrecisionField from "./precision-field/index.vue";
import CountDownCell from "./count-down-cell/index.vue";

const components = [NavBar, CountDownCell, PrecisionField];

export function registerGlobComp(app) {
  components.forEach((component) => {
    app.component(component.name, component);
  });
}
