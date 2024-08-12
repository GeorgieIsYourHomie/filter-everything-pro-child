import { useEffect } from "react";
import $ from "jquery";

const StopFilterLoadAnimation = () => {
  useEffect(() => {
    // Customizing the existing jQuery event listener
    $(document).on(
      "click",
      '.wpc-filter-content input[type="radio"],.wpc-filter-content input[type="checkbox"]',
      function (e) {
        let wpcLink = $(this).data("wpc-link");
        let $el = $(this).parents(".wpc-filters-main-wrap");
        let setId = $el.data("set");
        let applyButtonMode = false;

        if (
          setId > 0 &&
          window.wpcFilterFront.wpcApplyButtonSets.includes(setId)
        ) {
          applyButtonMode = true;
        }

        if (window.wpcFilterFront.wpcAjaxEnabled || applyButtonMode) {
          e.preventDefault();
          // Stop the loading spinner if the apply button is enabled
          if (!applyButtonMode) {
            $el.find(".wpc-spinner").hide();
          }
          // Call the original function to process the request
          window.wpcSendFilterRequest(wpcLink, $el, applyButtonMode);
        } else {
          window.location.href = wpcLink;
        }
      }
    );
  }, []);

  return <div>{/* Your custom React components or UI can go here */}</div>;
};

export default StopFilterLoadAnimation;
