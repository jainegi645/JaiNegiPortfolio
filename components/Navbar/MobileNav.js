import React from "react";

const MobileNav = () => {
  return (
    <div>
      <div class="accordion accordion-flush" id="accordionFlushExample">

        <div class="accordion-item border-l-0 border-r-0 border-b-0 rounded-none bg-white border border-gray-200">
          <h2 class="accordion-header mb-0" id="flush-headingThree">
            <button
              class="accordion-button
    collapsed
    relative
    flex
    items-center
    w-full
    py-4
    px-5
    text-base text-gray-800 text-left
    bg-white
    border-0
    rounded-none
    transition
    focus:outline-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body py-4 px-5">
            
              <ul>
                <li>
                  <a
                    onClick={() => {
                      router.push(
                        {
                          pathname: "/Literature",
                          query: { filter: "Hindi" },
                        },
                        "/Literature/Hindi"
                      );
                    }}
                  >
                    Hindi
                  </a>
                </li>
              </ul>
            </div>
            <div class="accordion-body py-4 px-5">
              <ul>
                <li>
                  <a
                    onClick={() => {
                      router.push(
                        {
                          pathname: "/Literature",
                          query: { filter: "English" },
                        },
                        "/Literature/English"
                      );
                    }}
                  >
                    English
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
