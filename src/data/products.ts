import type { Product } from '../types'

/**
 * Image assets are hosted on a stable CDN (re-hosted from public web sources).
 * They are referenced by URL rather than committed as binaries to keep the
 * repository lightweight.
 */
export const heroImage =
  'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/934bbb52d87c.jpg'

export const featuredImage =
  'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/7a618a1037ba.jpg'

export const products: Product[] = [
  // ── Drills & Drivers ───────────────────────────────────────────────
  {
    id: 'abzar-x1-drill',
    name: 'Abzar X1 20V Brushless Drill Driver',
    brand: 'Abzar Pro',
    category: 'drills',
    price: 149,
    compareAtPrice: 189,
    rating: 4.8,
    reviews: 1284,
    image: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/29828ff9ee88.png',
    badge: 'bestseller',
    blurb: '1/2" brushless drill with 750 in-lbs of torque and a 2-speed metal gearbox.',
    description:
      'The X1 is the drill we built to replace three. A brushless motor delivers up to 750 in-lbs of torque, the all-metal 2-speed transmission holds up to jobsite abuse, and the 1/2" ratcheting chuck bites carbide bits without slipping. An integrated LED clears shadows in floor joists, and the 2.0Ah battery nails 350 drives per charge.',
    specs: [
      { label: 'Motor', value: 'Brushless' },
      { label: 'Max torque', value: '750 in-lbs' },
      { label: 'Chuck', value: '1/2" metal ratcheting' },
      { label: 'Speeds', value: '2 (0-550 / 0-2100 RPM)' },
      { label: 'Battery', value: '20V MAX, 2.0Ah' },
      { label: 'Weight', value: '3.4 lbs' },
    ],
    inStock: true,
  },
  {
    id: 'abzar-t18-impact',
    name: 'Abzar T18 20V Brushless Impact Driver',
    brand: 'Abzar Pro',
    category: 'drills',
    price: 129,
    rating: 4.9,
    reviews: 982,
    image: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/5dda4f433a3b.jpg',
    badge: 'new',
    blurb: '1,800 in-lbs of breakaway torque in a 5.0" compact body.',
    description:
      'Lag bolts, ledger locks, deck screws — the T18 sinks them without cam-out. A PrecisionDrive mode eases the first few rotations to avoid stripping, then ramps to full 1,800 in-lbs. At just 5.0" head-to-tail it fits between 16" studs, and the 1/4" hex chuck drops bits one-handed.',
    specs: [
      { label: 'Motor', value: 'Brushless' },
      { label: 'Max torque', value: '1,800 in-lbs' },
      { label: 'Chuck', value: '1/4" hex, quick-load' },
      { label: 'Speeds', value: '4 (incl. PrecisionDrive)' },
      { label: 'Impacts', value: '0-3,800 BPM' },
      { label: 'Weight', value: '2.6 lbs' },
    ],
    inStock: true,
  },
  {
    id: 'abzar-rh1-rotary',
    name: 'Abzar RH1 SDS-Plus 20V Rotary Hammer',
    brand: 'Abzar Pro',
    category: 'drills',
    price: 219,
    compareAtPrice: 259,
    rating: 4.8,
    reviews: 276,
    image: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/ad3581c1ef81.jpg',
    badge: 'sale',
    blurb: '1.9 J of impact energy — drills concrete as fast as a corded rotary.',
    description:
      'When the spec calls for anchoring into slab, the RH1 earns its keep. A brushless motor drives 1.9 joules of impact energy through an SDS-Plus chuck, boring 5/8" holes in poured concrete in seconds. Three modes — rotary hammer, rotation-only, hammer-only — cover anchor setting and light chipping.',
    specs: [
      { label: 'Motor', value: 'Brushless' },
      { label: 'Impact energy', value: '1.9 J' },
      { label: 'Chuck', value: 'SDS-Plus' },
      { label: 'Modes', value: '3 (drill / hammer / chisel)' },
      { label: 'Concrete rate', value: 'up to 5/8"' },
      { label: 'Weight', value: '5.5 lbs' },
    ],
    inStock: true,
  },
  {
    id: 'abzar-iw20-wrench',
    name: 'Abzar IW20 20V Brushless Impact Wrench',
    brand: 'Abzar Pro',
    category: 'drills',
    price: 179,
    rating: 4.7,
    reviews: 412,
    image: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/4e303feadb13.jpg',
    blurb: '1,200 ft-lbs of nut-busting torque with bolt-removal mode.',
    description:
      'Lug nuts, U-bolts, frozen suspension hardware — the IW20 breaks them free and stops the instant the fastener lets go, thanks to a 4-mode bolt-removal control. A brushless motor produces 1,200 ft-lbs of breakaway torque and 900 ft-lbs of fastening, all on a 4.0Ah pack.',
    specs: [
      { label: 'Motor', value: 'Brushless' },
      { label: 'Bust torque', value: '1,200 ft-lbs' },
      { label: 'Fastening', value: '900 ft-lbs' },
      { label: 'Anvil', value: '1/2" friction ring' },
      { label: 'Modes', value: '4 (incl. bolt removal)' },
      { label: 'Weight', value: '5.1 lbs' },
    ],
    inStock: true,
  },

  // ── Saws ───────────────────────────────────────────────────────────
  {
    id: 'abzar-cs7-circular',
    name: 'Abzar CS7 7-1/4" Brushless Circular Saw',
    brand: 'Abzar Pro',
    category: 'saws',
    price: 169,
    rating: 4.7,
    reviews: 612,
    image: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/27bc2fff67df.jpg',
    badge: 'bestseller',
    blurb: 'Cuts 2x lumber at 90° in a single pass — 5,800 RPM blade.',
    description:
      'A 7-1/4" brushless circular saw that rip-cuts 2x material at 90° and bevels to 56°. The magnesium shoe stays true after a drop, the electric brake stops the blade in under two seconds, and an LED illuminates the cut line. Cuts up to 2-7/16" at 90° and 1-3/4" at 45°.',
    specs: [
      { label: 'Blade', value: '7-1/4", 24T carbide' },
      { label: 'RPM', value: '5,800' },
      { label: 'Cut depth @90°', value: '2-7/16"' },
      { label: 'Bevel', value: '0-56°' },
      { label: 'Shoe', value: 'Magnesium' },
      { label: 'Weight', value: '6.4 lbs' },
    ],
    inStock: true,
  },
  {
    id: 'abzar-rs9-recip',
    name: 'Abzar RS9 Brushless Reciprocating Saw',
    brand: 'Abzar Pro',
    category: 'saws',
    price: 159,
    rating: 4.6,
    reviews: 388,
    image: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/fcb311b6f0b6.jpg',
    blurb: '1-1/8" stroke, 3,000 SPM, with tool-free blade flip for plunge cuts.',
    description:
      'Demolition and pruning in one tool. The RS9 swings a 1-1/8" blade at up to 3,000 strokes per minute, with a variable-speed trigger and a tool-free blade chuck that rotates 180° for plunge cuts in drywall and PVC. A four-position shoe extends blade life.',
    specs: [
      { label: 'Stroke length', value: '1-1/8"' },
      { label: 'Max SPM', value: '3,000' },
      { label: 'Blade chuck', value: 'Tool-free, 4-position shoe' },
      { label: 'Motor', value: 'Brushless' },
      { label: 'Battery', value: '20V MAX, 2.0Ah' },
      { label: 'Weight', value: '5.2 lbs' },
    ],
    inStock: true,
  },
  {
    id: 'abzar-jv4-jigsaw',
    name: 'Abzar JV4 Brushless Variable-Speed Jigsaw',
    brand: 'Abzar Pro',
    category: 'saws',
    price: 139,
    rating: 4.6,
    reviews: 298,
    image: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/fa6d47a4d45a.jpg',
    blurb: '3,500 SPM with 4-stage pendulum for fast, clean curved cuts.',
    description:
      'Sink cutouts, scrollwork, and cabinet knockouts land cleaner with the JV4. A brushless motor drives up to 3,500 strokes per minute, and a four-stage pendulum action adjusts blade aggressiveness for hardwood, ply, or metal. The LED-lit shoe and dust blower keep the line visible.',
    specs: [
      { label: 'Max SPM', value: '3,500' },
      { label: 'Stroke length', value: '1"' },
      { label: 'Pendulum', value: '4-stage' },
      { label: 'Bevel', value: '0-45°, tool-free' },
      { label: 'Blade type', value: 'T-shank, tool-free' },
      { label: 'Weight', value: '4.1 lbs' },
    ],
    inStock: false,
  },
  {
    id: 'abzar-ts10-tablesaw',
    name: 'Abzar TS10 10" Portable Jobsite Table Saw',
    brand: 'Abzar Pro',
    category: 'saws',
    price: 399,
    compareAtPrice: 449,
    rating: 4.8,
    reviews: 187,
    image: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/9a0b141de94d.jpeg',
    badge: 'sale',
    blurb: 'Rip capacity 25" with rack-and-pinion fence and 4,800 RPM blade.',
    description:
      'A jobsite table saw that rips sheet goods in one go. The 15A brushless motor spins the 10" blade at 4,800 RPM, the rack-and-pinion fence stays parallel to 25" of rip capacity, and the on-board storage stows the rip fence, miter gauge, and push stick. Folds into a wheeled cart for the truck bed.',
    specs: [
      { label: 'Blade', value: '10", 24T carbide' },
      { label: 'RPM', value: '4,800' },
      { label: 'Rip capacity', value: '25" right / 12" left' },
      { label: 'Fence', value: 'Rack-and-pinion' },
      { label: 'Dado capacity', value: '13/16"' },
      { label: 'Weight', value: '52 lbs' },
    ],
    inStock: true,
  },
  {
    id: 'abzar-ms10-miter',
    name: 'Abzar MS10 10" Sliding Compound Miter Saw',
    brand: 'Abzar Pro',
    category: 'saws',
    price: 349,
    rating: 4.7,
    reviews: 231,
    image: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/29fc94c76011.png',
    blurb: 'Cuts 4x4 in one pass — sliding compound, 0-52° miter both ways.',
    description:
      'Crown, baseboard, and 4x4 cuts land square with the MS10. The 10" blade rides a dual-rail slide for crosscuts up to 12" wide, the miter detents lock at 0-52° left and right, and the bevel tilts 0-48° with positive stops. An LED cut-line light and dust port keep the work clean.',
    specs: [
      { label: 'Blade', value: '10", 40T carbide' },
      { label: 'Crosscut', value: 'up to 12" wide' },
      { label: 'Miter', value: '0-52° L / 0-60° R' },
      { label: 'Bevel', value: '0-48°, dual' },
      { label: 'Cut capacity', value: '2x12 at 90°' },
      { label: 'Weight', value: '41 lbs' },
    ],
    inStock: true,
  },

  // ── Grinders ───────────────────────────────────────────────────────
  {
    id: 'abzar-ag4-grinder',
    name: 'Abzar AG4 4-1/2" Brushless Angle Grinder',
    brand: 'Abzar Pro',
    category: 'grinders',
    price: 89,
    compareAtPrice: 109,
    rating: 4.6,
    reviews: 455,
    image: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/a2252ad72775.jpg',
    badge: 'sale',
    blurb: '8,500 RPM with slim grip, tool-free guard, and anti-restart.',
    description:
      'A compact grinder that disappears into the hand. The brushless motor holds 8,500 RPM under load, the tool-free adjustable guard repositions without a wrench, and anti-restart protection prevents accidental spin-up after a power blip. Compatible with 4-1/2" and 5" wheels.',
    specs: [
      { label: 'Wheel', value: '4-1/2" / 5"' },
      { label: 'No-load RPM', value: '8,500' },
      { label: 'Guard', value: 'Tool-free' },
      { label: 'Motor', value: 'Brushless' },
      { label: 'Spindle', value: '5/8"-11' },
      { label: 'Weight', value: '4.0 lbs' },
    ],
    inStock: true,
  },

  // ── Sanders ────────────────────────────────────────────────────────
  {
    id: 'abzar-os5-sander',
    name: 'Abzar OS5 5" Random Orbital Sander',
    brand: 'Abzar Pro',
    category: 'sanders',
    price: 99,
    rating: 4.5,
    reviews: 342,
    image: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/d8f4180b9f56.png',
    badge: 'new',
    blurb: '5" pad, 12,000 OPM, hook-and-loop — swirl-free finish.',
    description:
      'Sanding between coats without swirl marks. The OS5 orbits at 12,000 OPM with a 5" hook-and-loop pad and a variable-speed dial for fine work or stock removal. A rubber over-mold dampens vibration, and the dust port accepts 1" shop-vac hose for a cleaner shop.',
    specs: [
      { label: 'Pad', value: '5" hook-and-loop' },
      { label: 'OPM', value: '7,000-12,000' },
      { label: 'Orbits', value: 'Random, 3/32"' },
      { label: 'Speed', value: 'Variable dial' },
      { label: 'Dust port', value: '1" shop-vac' },
      { label: 'Weight', value: '2.5 lbs' },
    ],
    inStock: true,
  },

  // ── Multi-Tools ────────────────────────────────────────────────────
  {
    id: 'abzar-mt3-multitool',
    name: 'Abzar MT3 20V Brushless Oscillating Multi-Tool',
    brand: 'Abzar Pro',
    category: 'multi-tools',
    price: 119,
    rating: 4.6,
    reviews: 264,
    image: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/83e0f9a315d7.jpg',
    blurb: '20,000 OPM with tool-free accessory swap — cut, sand, scrape.',
    description:
      'The tool that lives on the renovation cart. The MT3 oscillates at up to 20,000 OPM with a quick-change accessory chuck that swaps blades and pads without a hex key. Plunge-cut drywall, undercut door jambs, scrape adhesive, and detail-sand — all on one 2.0Ah pack.',
    specs: [
      { label: 'Motor', value: 'Brushless' },
      { label: 'Max OPM', value: '20,000' },
      { label: 'Oscillation angle', value: '3.2°' },
      { label: 'Accessory chuck', value: 'Tool-free' },
      { label: 'Battery', value: '20V MAX, 2.0Ah' },
      { label: 'Weight', value: '2.8 lbs' },
    ],
    inStock: true,
  },

  // ── Combo Kits ─────────────────────────────────────────────────────
  {
    id: 'abzar-combo-6',
    name: 'Abzar 20V Brushless 6-Tool Combo Kit',
    brand: 'Abzar Pro',
    category: 'combo',
    price: 599,
    compareAtPrice: 799,
    rating: 4.9,
    reviews: 156,
    image: 'https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/7a618a1037ba.jpg',
    badge: 'sale',
    blurb: 'Drill, impact, circular saw, recip saw, multi-tool, light + 2 batteries.',
    description:
      'Everything a trim crew needs on one 20V MAX platform, in a single rolling case. The kit pairs the X1 drill and T18 impact driver with a 7-1/4" circular saw, reciprocating saw, oscillating multi-tool, and an LED area light, plus two 4.0Ah batteries, a rapid charger, and two bags. Buying the kit saves 25% versus buying each tool separately.',
    specs: [
      { label: 'Tools included', value: '6' },
      { label: 'Batteries', value: '2 × 4.0Ah' },
      { label: 'Charger', value: 'Rapid, 60-min' },
      { label: 'Platform', value: '20V MAX' },
      { label: 'Kit savings', value: '25% vs individual' },
      { label: 'Warranty', value: '3-year' },
    ],
    inStock: true,
  },
]

export const formatPrice = (cents: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(cents)
