
import { getData } from "./Components/getData";
import { renderGeneralList } from "./Components/generalList";
import { renderDetailList } from "./Components/detailList";

document.addEventListener("DOMContentLoaded", async () => {
  const breeds = await getData();
  renderGeneralList(breeds, "general-list");
  renderDetailList(breeds, "detail-list");
});
