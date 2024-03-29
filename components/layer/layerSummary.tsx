import React from "react";
import { Layer } from "./layerProps";

const LayerSummary: React.FC<{ layer: Layer }> = ({ layer }) => {
  return (
    <div className="flex flex-wrap sm:flex-row sm:flex-nowrap justify-between w-full sm:w-full panel p-4 rounded-xl sm:mr-4 mb-0 sm:mb-0 dark:bg-secondary">
      <div className="w-1/2 sm:w-1/4 mb-2 sm:mb-0 sm:mr-4 sm:ml-0 -ml-1 mr-1 border-r border-b sm:border-b-0 border-copycolor">
        <div className="textbox flex flex-col justify-between items-baseline mx-auto">
          <h4 className="text-base font-medium my-2">Bridge</h4>
          <h3 className="text-xl font-bold my-2 h-12">{layer.btcBridge}</h3>
          <div className="text-sm font-extralight my-2 cursor-pointer relative group">
            Learn More
            <div className="absolute -left-4 sm:-left-20 top-full w-60 mt-2 hidden group-hover:flex flex-col items-center before:content-[''] before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:-translate-y-full before:border-l-8 before:border-l-transparent before:border-r-8 before:border-r-transparent before:border-b-8 before:border-b-white z-10">
              <div className="bg-secondary text-white text-xs rounded py-1 px-3 border border-white">
                <p className="text-lg font-bold">Bridge Design</p>
                <p>
                  Bridge Design is the architecture of either the consensus-enshrined BTC
                  bridge, or the safest third-party bridge (if there is no
                  enshrined bridge). For more information on the security assumptions of the
                  bridge design, see the Risk Analysis section.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 sm:w-1/4 mb-2 sm:mb-0 sm:mr-4 sm:ml-0 -ml-1 mr-1 sm:px-0 pl-4 sm:border-r border-b sm:border-b-0 border-copycolor">
        <div className="textbox flex flex-col justify-between items-baseline mx-auto">
          <h4 className="sm:text-base font-medium my-2">BTC TVL</h4>
          <h3 className="sm:text-xl font-bold my-2 h-12">{Number(layer.btcLocked).toLocaleString()} BTC</h3>
          <div className="text-sm font-extralight my-2 cursor-pointer relative group">
            Learn More
            <div className="absolute -left-20 top-full w-60 mt-2 hidden group-hover:flex flex-col items-center before:content-[''] before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:-translate-y-full before:border-l-8 before:border-l-transparent before:border-r-8 before:border-r-transparent before:border-b-8 before:border-b-white z-10">
              <div className="bg-secondary text-white text-xs rounded py-1 px-2 border border-white">
                <p className="text-lg font-bold">BTC Total Value Locked</p>
                <p>
                  BTC TVL represents the total amount of bridged BTC on this
                  layer. This includes BTC from consensus-enshrined bridges,
                  third-party bridges, and synthetic issuance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 sm:w-1/4 mb-2 sm:mb-0 sm:mr-4 sm:ml-0 -ml-1 mr-1 border-r border-copycolor">
        <div className="textbox flex flex-col justify-between items-baseline mx-auto">
          <h4 className="text-base font-medium my-2">Layer</h4>
          <h3 className="text-xl font-bold my-2 h-12">{layer.layerType}</h3>
          <div className="text-sm font-extralight my-2 cursor-pointer relative group">
            Learn More
            <div className="absolute -left-4 sm:-left-20 top-full w-60 mt-2 hidden group-hover:flex flex-col items-center before:content-[''] before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:-translate-y-full before:border-l-8 before:border-l-transparent before:border-r-8 before:border-r-transparent before:border-b-8 before:border-b-white z-10">
              <div className="bg-secondary text-white text-xs rounded py-1 px-2 border border-white">
                <p className="text-lg font-bold">Layer Type</p>
                <p>Layers include Sidechains, Rollups, State Channels, State Chains, Metaprotocols, L2s, and more. For more details on the security assumptions of the layer type, see the Risk Analysis section.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 sm:w-1/4 mb-2 sm:mb-0 sm:px-0 pl-4 ">
        <div className="textbox flex flex-col justify-between items-baseline mx-auto">
          <h4 className="text-base font-medium my-2">Fee Token</h4>
          <h3 className="text-xl font-bold my-2 h-12">{layer.feeToken}</h3>
          <div className="text-sm font-extralight my-2 cursor-pointer relative group">
            Learn More
            <div className="absolute -left-24 sm:-left-20 top-full w-60 mt-2 hidden group-hover:flex flex-col items-center before:content-[''] before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:-translate-y-full before:border-l-8 before:border-l-transparent before:border-r-8 before:border-r-transparent before:border-b-8 before:border-b-white z-10">
              <div className="bg-secondary text-white text-xs rounded py-1 px-2 border border-white">
                <p className="text-lg font-bold">Fee Token</p>
                <p>
                  Fee tokens are used to pay for gas fees on a layer. In some
                  cases, networks will enable multiple gas tokens: typically a
                  native token in addition to a consensus-enshrined cross-chain
                  BTC.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayerSummary;