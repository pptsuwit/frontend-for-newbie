import React from "react";

export default function Detail() {
  return (
    <div className="w-full p-6 py-12 ">
      <div className="py-4">
        <h1 className="font-bold sm:text-2xl md:text-3xl py-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
          pariatur. Reiciendis at assumenda adipisci.
        </h1>
      </div>
      <div className="grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8 py-4">
        <div>
          <div className="text-xl font-bold pb-4">Sed ut perspiciatis</div>
          <div className="pb-4">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est.
          </div>
          <div>
            <button
              type="button"
              class="text-blue-400 bg-white hover:text-blue-500 border  border-blue-400   font-medium rounded-md text-sm px-4 py-1 "
            >
              Learn more
            </button>
          </div>
        </div>
        <div>
          <div className="text-xl font-bold pb-4">Lorem ipsum dolor</div>
          <div className="pb-4">
            Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi.
          </div>
          <div>
            <button
              type="button"
              class="text-blue-400 bg-white hover:text-blue-500 border  border-blue-400   font-medium rounded-md text-sm px-4 py-1 "
            >
              Learn more
            </button>
          </div>
        </div>
        <div>
          <div className="text-xl font-bold pb-4">Nemo enim ipsam</div>
          <div className="pb-4">
            Consequuntur magni dolores eos qui ratione voluptatem sequi
            nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
            amet, consectetur, adipisci velit, sed quia non numquam.
          </div>
          <div>
            <button
              type="button"
              class="text-blue-400 bg-white hover:text-blue-500 border  border-blue-400   font-medium rounded-md text-sm px-4 py-1 "
            >
              Learn more
            </button>
          </div>
        </div>
        <div>
          <div className="text-xl font-bold pb-4">Tempor incididunt</div>
          <div className="pb-4">
            Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora.
          </div>
          <div>
            <button
              type="button"
              class="text-blue-400 bg-white hover:text-blue-500 border  border-blue-400   font-medium rounded-md text-sm px-4 py-1 "
            >
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
