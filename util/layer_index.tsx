import type { Layer } from '@/components/layer/layerProps';

//
//layers
import coreJson from "../content/layers/core.json" assert { type: 'json' };
// @ts-ignore
const core: Layer = coreJson as Layer;
import internetcomputerJson from "../content/layers/internetcomputer.json" assert { type: 'json' };
const internetcomputer: Layer = internetcomputerJson as Layer;
import lightningJson from "../content/layers/lightning.json" assert { type: 'json' };
const lightning: Layer = lightningJson as Layer;
import liquidJson from "../content/layers/liquid.json" assert { type: 'json' };
const liquid: Layer = liquidJson as Layer;
import mercurylayerJson from "../content/layers/mercurylayer.json" assert { type: 'json' };
const mercurylayer: Layer = mercurylayerJson as Layer;
import rootstockJson from "../content/layers/rootstock.json" assert { type: 'json' };
const rootstock: Layer = rootstockJson as Layer;
import stacksJson from "../content/layers/stacks.json" assert { type: 'json' };
const stacks: Layer = stacksJson as Layer;
import alpenJson from "../content/layers/alpen.json" assert { type: 'json' };
const alpen: Layer = alpenJson as Layer;
import barknetJson from "../content/layers/barknet.json" assert { type: 'json' };
const barknet: Layer = barknetJson as Layer;
import bisonJson from "../content/layers/bison.json" assert { type: 'json' };
const bison: Layer = bisonJson as Layer;
import bnzkJson from "../content/layers/bnzk.json" assert { type: 'json' };
const bnzk: Layer = bnzkJson as Layer;
// @ts-ignore
import bobJson from "../content/layers/bob.json" assert { type: 'json' };
// @ts-ignore
const bob: Layer = bobJson as Layer;
import botanixJson from "../content/layers/botanix.json" assert { type: 'json' };
const botanix: Layer = botanixJson as Layer;
import bsquaredJson from "../content/layers/bsquared.json" assert { type: 'json' };
const bsquared: Layer = bsquaredJson as Layer;
import citreaJson from "../content/layers/citrea.json" assert { type: 'json' };
const citrea: Layer = citreaJson as Layer;
import flashJson from "../content/layers/flash.json" assert { type: 'json' };
const flash: Layer = flashJson as Layer;
import rgbJson from "../content/layers/rgb.json" assert { type: 'json' };
const rgb: Layer = rgbJson as Layer;
import heliosphereJson from "../content/layers/heliosphere.json" assert { type: 'json' };
const heliosphere: Layer = heliosphereJson as Layer;
import libreJson from "../content/layers/libre.json" assert { type: 'json' };
const libre: Layer = libreJson as Layer;
import lumibitJson from "../content/layers/lumibit.json" assert { type: 'json' };
const lumibit: Layer = lumibitJson as Layer;
import merlinJson from "../content/layers/merlin.json" assert { type: 'json' };
const merlin: Layer = merlinJson as Layer;
import rifJson from "../content/layers/rif.json" assert { type: 'json' };
const rif: Layer = rifJson as Layer;
import rolluxJson from "../content/layers/rollux.json" assert { type: 'json' };
const rollux: Layer = rolluxJson as Layer;
import zkcoinsJson from "../content/layers/zkcoins.json" assert { type: 'json' };
const zkcoins: Layer = zkcoinsJson as Layer;
import zklayerJson from "../content/layers/zklayer.json" assert { type: 'json' };
const zklayer: Layer = zklayerJson as Layer;
import coordinateJson from "../content/layers/coordinate.json" assert { type: 'json' };
const coordinate: Layer = coordinateJson as Layer;
import alysJson from "../content/layers/alys.json" assert { type: 'json' };
const alys: Layer = alysJson as Layer;
import zkbitcoinJson from "../content/layers/zkbitcoin.json" assert { type: 'json' };
const zkbitcoin: Layer = zkbitcoinJson as Layer;
import bitlayerJson from "../content/layers/bitlayer.json" assert { type: 'json' };
const bitlayer: Layer = bitlayerJson as Layer;
import moleculeJson from "../content/layers/molecule.json" assert { type: 'json' };
const molecule: Layer = moleculeJson as Layer;
import sideJson from "../content/layers/side.json" assert { type: 'json' };
const side: Layer = sideJson as Layer;
import mezoJson from "../content/layers/mezo.json" assert { type: 'json' };
const mezo: Layer = mezoJson as Layer;




export const allLayers: Layer[] = [core, internetcomputer, lightning, liquid, mercurylayer, rootstock, stacks, citrea, alpen, barknet, bison, bnzk, bob, botanix, bsquared, rgb, heliosphere, libre, lumibit, merlin, rif, rollux, zkcoins, zklayer, coordinate, alys, zkbitcoin, bitlayer, molecule, side, mezo, rgb];
